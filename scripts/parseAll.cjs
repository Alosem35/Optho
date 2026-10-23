const fs = require("fs");
const path = require("path");

// Ensure src/data exists
const outDir = path.join(__dirname, "../src/data");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// -------------------------------------------------------------
// 1. PARSE QUESTIONS FROM test_8e89b0ec.html, test2_0a6e78c8.html, test3_8a2d39aa.html
// -------------------------------------------------------------

function stripTags(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function parseQuestionsFromFile(filePath, defaultModuleCode) {
  const content = fs.readFileSync(filePath, "utf8");
  const questions = [];

  // Split by topic-section
  const topicRegex = /<div id="([^"]+)" class="topic-section">([\s\S]*?)(?=<div id="[^"]+" class="topic-section">|<div id="mega-map"|<\/body>|$)/g;
  let topicMatch;

  while ((topicMatch = topicRegex.exec(content)) !== null) {
    const topicId = topicMatch[1];
    const sectionHtml = topicMatch[2];

    // Find topic header
    const headerMatch = sectionHtml.match(/<div class="topic-header[^"]*">\s*<span>([^<]+)<\/span>/);
    const topicTitle = headerMatch ? headerMatch[1].trim() : topicId;

    // Determine module
    let moduleName = "Module 1: Dr. Mohammed Al-Ansi";
    let moduleId = "m1";
    if (topicId.startsWith("m1")) {
      moduleName = "Module 1: Dr. Mohammed Al-Ansi";
      moduleId = "m1";
    } else if (topicId.startsWith("m2")) {
      moduleName = "Module 2: Dr. Ibrahim Al-Soufi";
      moduleId = "m2";
    } else if (topicId.startsWith("m3")) {
      moduleName = "Module 3: Dr. Fouad Al-Khayyat";
      moduleId = "m3";
    } else if (topicId.startsWith("m4")) {
      moduleName = "Module 4: Dr. Nabil Sabr";
      moduleId = "m4";
    } else if (topicId.startsWith("m5")) {
      moduleName = "Module 5: Glaucoma, Retina & Emergencies";
      moduleId = "m5";
    }

    // Extract study review if present
    const reviewMatch = sectionHtml.match(/<div class="study-review[^"]*">([\s\S]*?)<\/div>/);
    const studyReview = reviewMatch ? reviewMatch[1].trim() : "";

    // Extract questions
    const qCardRegex = /<div class="q-card"\s+data-answer="([^"]+)">([\s\S]*?)<div class="rationale[^"]*">([\s\S]*?)<\/div>\s*<\/div>/g;
    let qMatch;

    while ((qMatch = qCardRegex.exec(sectionHtml)) !== null) {
      const answer = qMatch[1].trim();
      const body = qMatch[2];
      const rationaleHtml = qMatch[3].trim();

      // Extract tags
      const tags = [];
      const tagRegex = /<span class="tag[^"]*">([^<]+)<\/span>/g;
      let t;
      while ((t = tagRegex.exec(body)) !== null) {
        tags.push(t[1].trim());
      }

      // Check repeat
      const isRepeat = body.includes("class=\"tag repeat\"");

      // Extract stem
      const stemMatch = body.match(/<div class="q-stem">([\s\S]*?)<\/div>/);
      const stemRaw = stemMatch ? stemMatch[1].trim() : "";
      // Remove leading number if present like "1. The part..."
      const stemClean = stemRaw.replace(/^\d+\.\s*/, "");

      // Extract options
      const options = [];
      const optRegex = /<button class="opt-btn"[^>]*>([A-E])\.\s*([\s\S]*?)<\/button>/g;
      let o;
      while ((o = optRegex.exec(body)) !== null) {
        options.push({
          letter: o[1].trim(),
          text: o[2].trim()
        });
      }

      questions.push({
        id: `${moduleId}-q${questions.length + 1}-${Date.now().toString(36).slice(-3)}`,
        moduleId,
        moduleName,
        topicId,
        topicTitle,
        studyReview,
        tags,
        isRepeat,
        stem: stemClean,
        options,
        answer,
        rationale: rationaleHtml
      });
    }
  }

  return questions;
}

const q1 = parseQuestionsFromFile("public/assets/aistudio/test_8e89b0ec.html", "m1");
const q2 = parseQuestionsFromFile("public/assets/aistudio/test2_0a6e78c8.html", "m3");
const q3 = parseQuestionsFromFile("public/assets/aistudio/test3_8a2d39aa.html", "m5");

// Deduplicate IDs and renumber clean sequential IDs
const allQuestions = [...q1, ...q2, ...q3].map((q, idx) => ({
  ...q,
  id: `q-${idx + 1}`,
  index: idx + 1
}));

console.log("Total parsed questions:", allQuestions.length);
console.log("Questions per module:", {
  m1: allQuestions.filter(q => q.moduleId === "m1").length,
  m2: allQuestions.filter(q => q.moduleId === "m2").length,
  m3: allQuestions.filter(q => q.moduleId === "m3").length,
  m4: allQuestions.filter(q => q.moduleId === "m4").length,
  m5: allQuestions.filter(q => q.moduleId === "m5").length,
});

fs.writeFileSync(
  path.join(outDir, "questionsData.ts"),
  `export interface QuestionOption {
  letter: string;
  text: string;
}

export interface Question {
  id: string;
  index: number;
  moduleId: "m1" | "m2" | "m3" | "m4" | "m5";
  moduleName: string;
  topicId: string;
  topicTitle: string;
  studyReview: string;
  tags: string[];
  isRepeat: boolean;
  stem: string;
  options: QuestionOption[];
  answer: string;
  rationale: string;
}

export const questionsData: Question[] = ${JSON.stringify(allQuestions, null, 2)};
`
);

// -------------------------------------------------------------
// 2. PARSE ULTRA-CONDENSED MODULES (M1, M2, M3, M4)
// -------------------------------------------------------------

function parseCondensedModule(filePath, moduleId, defaultDoctor) {
  const content = fs.readFileSync(filePath, "utf8");

  // Extract top-bar title and subtitle
  const h1Match = content.match(/<div class="top-bar">[\s\S]*?<h1>([^<]+)<\/h1>[\s\S]*?<p>([^<]+)<\/p>/);
  const title = h1Match ? h1Match[1].trim() : "Ophthalmology Module";
  const subtitle = h1Match ? h1Match[2].trim() : defaultDoctor;

  // Extract terminology cards
  const termsHtmlMatch = content.match(/<div id="terms" class="sec">([\s\S]*?)<\/div>\s*<\/div>/);
  const termsCards = [];
  if (termsHtmlMatch) {
    const cardMiniRegex = /<div class="card-mini"><b>([^<]+)<\/b>([\s\S]*?)<\/div>/g;
    let cm;
    while ((cm = cardMiniRegex.exec(termsHtmlMatch[1])) !== null) {
      termsCards.push({
        term: cm[1].trim(),
        content: cm[2].trim()
      });
    }
  }

  // Extract mind map cards
  const mmHtmlMatch = content.match(/<div id="mm" class="sec">([\s\S]*?)<\/div>\s*<\/div>/);
  const mindMapCards = [];
  if (mmHtmlMatch) {
    const mmCardRegex = /<div class="card-mini">[\s\S]*?<b>([^<]+)<\/b>([\s\S]*?)<\/div>/g;
    let mmc;
    while ((mmc = mmCardRegex.exec(mmHtmlMatch[1])) !== null) {
      mindMapCards.push({
        title: mmc[1].trim(),
        content: mmc[2].trim()
      });
    }
  }

  // Extract chapters
  const chapterRegex = /<div id="(ch\d+)" class="sec">([\s\S]*?)(?=<div id="ch\d+" class="sec">|<\/body>|$)/g;
  const chapters = [];
  let chMatch;

  while ((chMatch = chapterRegex.exec(content)) !== null) {
    const chId = chMatch[1];
    const chContent = chMatch[2];

    const secHdrMatch = chContent.match(/<div class="sec-hdr"><span>([^<]+)<\/span>/);
    const chTitle = secHdrMatch ? secHdrMatch[1].trim() : chId;

    chapters.push({
      id: chId,
      title: chTitle,
      htmlContent: chContent
    });
  }

  return {
    moduleId,
    title,
    subtitle,
    terms: termsCards,
    mindMap: mindMapCards,
    chapters
  };
}

const mod1 = parseCondensedModule("public/assets/aistudio/Ophtho_M1_Condensed_b2e33963.html", "m1", "Dr. Mohammed Al-Ansi");
const mod2 = parseCondensedModule("public/assets/aistudio/Ophtho_M2_Condensed_2ecda214.html", "m2", "Dr. Ibrahim Al-Soufi");
const mod3 = parseCondensedModule("public/assets/aistudio/Ophtho_M3_Condensed_7f22ceea.html", "m3", "Dr. Fouad Al-Khayyat");
const mod4 = parseCondensedModule("public/assets/aistudio/Ophtho_M4_Condensed_3d9c4a0b.html", "m4", "Dr. Nabil Sabr");

const condensedModules = [mod1, mod2, mod3, mod4];

fs.writeFileSync(
  path.join(outDir, "modulesCondensedData.ts"),
  `export interface TermCard {
  term: string;
  content: string;
}

export interface MindMapCard {
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  htmlContent: string;
}

export interface CondensedModule {
  moduleId: "m1" | "m2" | "m3" | "m4";
  title: string;
  subtitle: string;
  terms: TermCard[];
  mindMap: MindMapCard[];
  chapters: Chapter[];
}

export const condensedModulesData: CondensedModule[] = ${JSON.stringify(condensedModules, null, 2)};
`
);

// -------------------------------------------------------------
// 3. EXTRACT MASTER SUMMARY & MEGA MIND MAP FROM test3_8a2d39aa.html
// -------------------------------------------------------------

const test3Content = fs.readFileSync("public/assets/aistudio/test3_8a2d39aa.html", "utf8");

// Extract Mega Mind Map HTML
const megaMapMatch = test3Content.match(/<div id="mega-map"[\s\S]*?<div class="mega-mm">([\s\S]*?)<\/div>\s*<\/div>/);
const megaMapHtml = megaMapMatch ? megaMapMatch[1] : "";

// Extract Master Tables
const table1Match = test3Content.match(/<span>Table 1: Master "Drug of Choice" vs\. "Strictly Contraindicated"[\s\S]*?<table>([\s\S]*?)<\/table>/);
const table1Html = table1Match ? table1Match[1] : "";

const table2Match = test3Content.match(/<span>Table 2: Master Diagnostic Tests &amp; Pathognomonic Clinical Signs[\s\S]*?<div class="sum-grid">([\s\S]*?)<\/div>/);
const table2Html = table2Match ? table2Match[1] : "";

fs.writeFileSync(
  path.join(outDir, "masterSummaryData.ts"),
  `export const megaMapHtml = ${JSON.stringify(megaMapHtml)};
export const table1Html = ${JSON.stringify(table1Html)};
export const table2Html = ${JSON.stringify(table2Html)};
`
);

// -------------------------------------------------------------
// 4. GENERATE FLASHCARDS FROM TERMS, BUZZWORDS & EXAM PEARLS
// -------------------------------------------------------------

const flashcards = [];

// From Module terms
condensedModules.forEach(mod => {
  mod.terms.forEach(t => {
    flashcards.push({
      id: `fc-term-${flashcards.length + 1}`,
      category: `${mod.title} — Terminology`,
      front: t.term,
      back: t.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
      moduleId: mod.moduleId
    });
  });
});

// Add high-yield buzzword flashcards from Table 2 & Key Qs
const extraBuzzwords = [
  { front: "RAPD (Marcus Gunn Pupil)", back: "Relative Afferent Pupillary Defect detected by swinging flashlight test. Hallmarks Optic Neuritis! NEVER in cataract or hysteria.", cat: "Neuro-Ophthalmology" },
  { front: "Argyll Robertson Pupil", back: "Small pupil that reacts to near/accommodation reflex, but does NOT react to light reflex (Neurosyphilis).", cat: "Pupil" },
  { front: "Horner Syndrome Tetrad", back: "Mild ptosis (Müller) + Miosis (anisocoria worse in dark) + Facial anhidrosis + Enophthalmos.", cat: "Neuro-Ophthalmology" },
  { front: "Cobblestone Papillae + Horner-Trantas Dots", back: "Vernal Keratoconjunctivitis (Spring Catarrh / VKC) in young boys in hot weather with intense itching and ropy discharge.", cat: "Conjunctiva" },
  { front: "Scissoring Reflex + Fleischer Iron Ring + Munson Sign", back: "Keratoconus (conical corneal thinning). Investigated by Corneal Topography. Avoid LASIK!", cat: "Cornea" },
  { front: "Rosette-Shaped Cataract + Vossius Ring", back: "Blunt Concussion Ocular Trauma.", cat: "Lens" },
  { front: "Sunflower Cataract + Kayser-Fleischer Ring", back: "Wilson's Disease (copper deposition / chalcosis).", cat: "Lens" },
  { front: "Unilateral Aphakia Spectacles Rule", back: "Spectacles (glasses) are STRICTLY CONTRAINDICATED in unilateral aphakia due to 25-30% magnification aniseikonia and intractable diplopia!", cat: "Refraction" },
  { front: "Cherry-Red Spot at Macula", back: "Central Retinal Artery Occlusion (CRAO). Sudden painless complete loss of vision in cardiac/hypertensive patient.", cat: "Retina" },
  { front: "Roth Spots", back: "White-centered retinal hemorrhages seen in Subacute Bacterial Endocarditis, Leukemia, Anemia, HTN, and DM.", cat: "Retina" },
  { front: "Acute Angle-Closure Glaucoma Pupil", back: "Vertically oval, mid-dilated, non-reactive fixed pupil. IOP stony-hard (>50 mmHg). Treat with Acetazolamide + Mannitol + Pilocarpine + YAG Iridotomy.", cat: "Glaucoma" },
  { front: "Phacomorphic vs Phacolytic Glaucoma", back: "Phacomorphic = Intumescent swollen lens (shallow AC, angle closure). Phacolytic = Hypermature lens leaking protein clogging open meshwork. Both definitive Rx: Cataract Extraction!", cat: "Glaucoma" },
  { front: "Blow-Out Orbital Floor Fracture", back: "Entraps Inferior Rectus & Oblique. Causes Binocular Diplopia + Enophthalmos + Infraorbital anesthesia.", cat: "Orbit" },
  { front: "Thyroid Eye Disease (Graves')", back: "#1 cause of unilateral AND bilateral proptosis. Lid retraction = #1 sign. Enlarges extraocular muscles IR > MR (sparing tendons).", cat: "Orbit" },
  { front: "Dendritic Ulcer Treatment & Contraindication", back: "Rx: Topical Acyclovir 3% ointment. Topical STEROIDS are STRICTLY CONTRAINDICATED (causes geographic ulcer and perforation)!", cat: "Cornea" },
  { front: "PCO (After-Cataract) Treatment", back: "Nd:YAG Laser Posterior Capsulotomy.", cat: "Lens" },
  { front: "Primary Intorter of the Eye", back: "Superior Oblique (CN IV - Trochlear nerve).", cat: "Motility" },
  { front: "Pupil-Involved vs Pupil-Spared CN III Palsy", back: "Pupil involved (mydriasis) = Compressive PCom Aneurysm (Emergency!). Pupil spared = Microvascular Diabetes Mellitus.", cat: "Neuro-Ophthalmology" }
];

extraBuzzwords.forEach((eb, idx) => {
  flashcards.push({
    id: `fc-buzz-${idx + 1}`,
    category: eb.cat,
    front: eb.front,
    back: eb.back,
    moduleId: "m1"
  });
});

fs.writeFileSync(
  path.join(outDir, "flashcardsData.ts"),
  `export interface Flashcard {
  id: string;
  category: string;
  front: string;
  back: string;
  moduleId?: string;
}

export const flashcardsData: Flashcard[] = ${JSON.stringify(flashcards, null, 2)};
`
);

console.log("Flashcards generated:", flashcards.length);
console.log("All data files created successfully!");
