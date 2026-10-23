export interface QuestionOption {
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

export const questionsData: Question[] = [
  {
    "id": "q-1",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t1",
    "topicTitle": "1.1 Introduction, Basic Anatomy &amp; Ocular Physiology",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Introduction)</span>\n    <ul>\n      <li><b>Light Control vs. Light Reception:</b> The <span class=\"buzz\">Iris</span> acts as the adjustable diaphragm controlling the amount of light entering the eye (via sphincter and dilator pupillae muscles), whereas <span class=\"buzz\">Photoreceptor cells (Rods &amp; Cones)</span> are located in the outer neural <span class=\"buzz\">Retina</span>. Photoreceptors are completely <b>absent at the Optic Disc (Blind spot)</b>, and <b>Cones are maximally concentrated at the avascular Fovea Centralis</b>.</li>\n      <li><b>Ocular Chambers &amp; Aqueous Pathway:</b> The eye is divided into the <b>Anterior Segment</b> (Anterior Chamber = in front of iris; <span class=\"buzz\">Posterior Chamber = behind the iris and in front of the lens/zonules</span>) and the <b>Posterior Segment</b> (behind the lens, containing the vitreous). Aqueous humor is secreted by the <b>Ciliary processes (pars plicata)</b> into the Posterior Chamber → flows through the pupil into the Anterior Chamber → drains mainly (~85–90%) via the conventional pathway through the <b>Trabecular Meshwork into <span class=\"buzz\">Schlemm's Canal</span></b> (and 10–15% via the uveoscleral outflow).</li>\n      <li><b>Routine Diagnostic Mydriatic:</b> Short-acting antimuscarinic <span class=\"buzz\">Tropicamide (0.5%–1%)</span> is the drug of choice for routine fundus examination because of its rapid onset (20–30 min) and short duration (4–6 hours), unlike Atropine which lasts 7–14 days.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q11"
    ],
    "isRepeat": false,
    "stem": "The part of the eye that controls the amount of light entering:",
    "options": [
      {
        "letter": "A",
        "text": "Iris"
      },
      {
        "letter": "B",
        "text": "Lens"
      },
      {
        "letter": "C",
        "text": "Cornea"
      },
      {
        "letter": "D",
        "text": "Retina"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Iris).</b><br><b>Rationale:</b> The iris regulates pupillary aperture size via the parasympathetic sphincter pupillae (miosis in bright light) and sympathetic dilator pupillae (mydriasis in dim light), thereby controlling the amount of light reaching the retina.",
    "index": 1
  },
  {
    "id": "q-2",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t1",
    "topicTitle": "1.1 Introduction, Basic Anatomy &amp; Ocular Physiology",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Introduction)</span>\n    <ul>\n      <li><b>Light Control vs. Light Reception:</b> The <span class=\"buzz\">Iris</span> acts as the adjustable diaphragm controlling the amount of light entering the eye (via sphincter and dilator pupillae muscles), whereas <span class=\"buzz\">Photoreceptor cells (Rods &amp; Cones)</span> are located in the outer neural <span class=\"buzz\">Retina</span>. Photoreceptors are completely <b>absent at the Optic Disc (Blind spot)</b>, and <b>Cones are maximally concentrated at the avascular Fovea Centralis</b>.</li>\n      <li><b>Ocular Chambers &amp; Aqueous Pathway:</b> The eye is divided into the <b>Anterior Segment</b> (Anterior Chamber = in front of iris; <span class=\"buzz\">Posterior Chamber = behind the iris and in front of the lens/zonules</span>) and the <b>Posterior Segment</b> (behind the lens, containing the vitreous). Aqueous humor is secreted by the <b>Ciliary processes (pars plicata)</b> into the Posterior Chamber → flows through the pupil into the Anterior Chamber → drains mainly (~85–90%) via the conventional pathway through the <b>Trabecular Meshwork into <span class=\"buzz\">Schlemm's Canal</span></b> (and 10–15% via the uveoscleral outflow).</li>\n      <li><b>Routine Diagnostic Mydriatic:</b> Short-acting antimuscarinic <span class=\"buzz\">Tropicamide (0.5%–1%)</span> is the drug of choice for routine fundus examination because of its rapid onset (20–30 min) and short duration (4–6 hours), unlike Atropine which lasts 7–14 days.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q12"
    ],
    "isRepeat": false,
    "stem": "The part of the eye where photoreceptor cells are found:",
    "options": [
      {
        "letter": "A",
        "text": "Retina"
      },
      {
        "letter": "B",
        "text": "Lens"
      },
      {
        "letter": "C",
        "text": "Iris"
      },
      {
        "letter": "D",
        "text": "Choroid"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Retina).</b><br><b>Rationale:</b> Rods and cones are the outer neurosensory photoreceptor cells of the retina that convert light energy into electrical neural impulses (phototransduction).",
    "index": 2
  },
  {
    "id": "q-3",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t1",
    "topicTitle": "1.1 Introduction, Basic Anatomy &amp; Ocular Physiology",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Introduction)</span>\n    <ul>\n      <li><b>Light Control vs. Light Reception:</b> The <span class=\"buzz\">Iris</span> acts as the adjustable diaphragm controlling the amount of light entering the eye (via sphincter and dilator pupillae muscles), whereas <span class=\"buzz\">Photoreceptor cells (Rods &amp; Cones)</span> are located in the outer neural <span class=\"buzz\">Retina</span>. Photoreceptors are completely <b>absent at the Optic Disc (Blind spot)</b>, and <b>Cones are maximally concentrated at the avascular Fovea Centralis</b>.</li>\n      <li><b>Ocular Chambers &amp; Aqueous Pathway:</b> The eye is divided into the <b>Anterior Segment</b> (Anterior Chamber = in front of iris; <span class=\"buzz\">Posterior Chamber = behind the iris and in front of the lens/zonules</span>) and the <b>Posterior Segment</b> (behind the lens, containing the vitreous). Aqueous humor is secreted by the <b>Ciliary processes (pars plicata)</b> into the Posterior Chamber → flows through the pupil into the Anterior Chamber → drains mainly (~85–90%) via the conventional pathway through the <b>Trabecular Meshwork into <span class=\"buzz\">Schlemm's Canal</span></b> (and 10–15% via the uveoscleral outflow).</li>\n      <li><b>Routine Diagnostic Mydriatic:</b> Short-acting antimuscarinic <span class=\"buzz\">Tropicamide (0.5%–1%)</span> is the drug of choice for routine fundus examination because of its rapid onset (20–30 min) and short duration (4–6 hours), unlike Atropine which lasts 7–14 days.</li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q12"
    ],
    "isRepeat": false,
    "stem": "The posterior chamber is present in:",
    "options": [
      {
        "letter": "A",
        "text": "Before iris"
      },
      {
        "letter": "B",
        "text": "After iris"
      },
      {
        "letter": "C",
        "text": "Before retina"
      },
      {
        "letter": "D",
        "text": "After lens"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (After iris).</b><br><b>Rationale:</b> The posterior chamber is the narrow aqueous-filled space located immediately <b>behind (after) the iris</b> and in front of the crystalline lens and zonular fibers. (Behind the lens is the vitreous cavity/posterior segment).",
    "index": 3
  },
  {
    "id": "q-4",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t1",
    "topicTitle": "1.1 Introduction, Basic Anatomy &amp; Ocular Physiology",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Introduction)</span>\n    <ul>\n      <li><b>Light Control vs. Light Reception:</b> The <span class=\"buzz\">Iris</span> acts as the adjustable diaphragm controlling the amount of light entering the eye (via sphincter and dilator pupillae muscles), whereas <span class=\"buzz\">Photoreceptor cells (Rods &amp; Cones)</span> are located in the outer neural <span class=\"buzz\">Retina</span>. Photoreceptors are completely <b>absent at the Optic Disc (Blind spot)</b>, and <b>Cones are maximally concentrated at the avascular Fovea Centralis</b>.</li>\n      <li><b>Ocular Chambers &amp; Aqueous Pathway:</b> The eye is divided into the <b>Anterior Segment</b> (Anterior Chamber = in front of iris; <span class=\"buzz\">Posterior Chamber = behind the iris and in front of the lens/zonules</span>) and the <b>Posterior Segment</b> (behind the lens, containing the vitreous). Aqueous humor is secreted by the <b>Ciliary processes (pars plicata)</b> into the Posterior Chamber → flows through the pupil into the Anterior Chamber → drains mainly (~85–90%) via the conventional pathway through the <b>Trabecular Meshwork into <span class=\"buzz\">Schlemm's Canal</span></b> (and 10–15% via the uveoscleral outflow).</li>\n      <li><b>Routine Diagnostic Mydriatic:</b> Short-acting antimuscarinic <span class=\"buzz\">Tropicamide (0.5%–1%)</span> is the drug of choice for routine fundus examination because of its rapid onset (20–30 min) and short duration (4–6 hours), unlike Atropine which lasts 7–14 days.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q16"
    ],
    "isRepeat": false,
    "stem": "Aqueous humor drains mainly through:",
    "options": [
      {
        "letter": "A",
        "text": "Uveal tract"
      },
      {
        "letter": "B",
        "text": "Schlemm's canal"
      },
      {
        "letter": "C",
        "text": "Zonular fibers"
      },
      {
        "letter": "D",
        "text": "Retinal vessels"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Schlemm's canal).</b><br><b>Rationale:</b> About 85–90% of aqueous humor drains through the conventional trabecular pathway (Trabecular meshwork → Schlemm's canal → Aqueous veins → Episcleral veins).",
    "index": 4
  },
  {
    "id": "q-5",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t1",
    "topicTitle": "1.1 Introduction, Basic Anatomy &amp; Ocular Physiology",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Introduction)</span>\n    <ul>\n      <li><b>Light Control vs. Light Reception:</b> The <span class=\"buzz\">Iris</span> acts as the adjustable diaphragm controlling the amount of light entering the eye (via sphincter and dilator pupillae muscles), whereas <span class=\"buzz\">Photoreceptor cells (Rods &amp; Cones)</span> are located in the outer neural <span class=\"buzz\">Retina</span>. Photoreceptors are completely <b>absent at the Optic Disc (Blind spot)</b>, and <b>Cones are maximally concentrated at the avascular Fovea Centralis</b>.</li>\n      <li><b>Ocular Chambers &amp; Aqueous Pathway:</b> The eye is divided into the <b>Anterior Segment</b> (Anterior Chamber = in front of iris; <span class=\"buzz\">Posterior Chamber = behind the iris and in front of the lens/zonules</span>) and the <b>Posterior Segment</b> (behind the lens, containing the vitreous). Aqueous humor is secreted by the <b>Ciliary processes (pars plicata)</b> into the Posterior Chamber → flows through the pupil into the Anterior Chamber → drains mainly (~85–90%) via the conventional pathway through the <b>Trabecular Meshwork into <span class=\"buzz\">Schlemm's Canal</span></b> (and 10–15% via the uveoscleral outflow).</li>\n      <li><b>Routine Diagnostic Mydriatic:</b> Short-acting antimuscarinic <span class=\"buzz\">Tropicamide (0.5%–1%)</span> is the drug of choice for routine fundus examination because of its rapid onset (20–30 min) and short duration (4–6 hours), unlike Atropine which lasts 7–14 days.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q5"
    ],
    "isRepeat": false,
    "stem": "The most commonly used mydriatic drug before eye examination is:",
    "options": [
      {
        "letter": "A",
        "text": "Timolol"
      },
      {
        "letter": "B",
        "text": "Tropicamide"
      },
      {
        "letter": "C",
        "text": "Atropine"
      },
      {
        "letter": "D",
        "text": "Pilocarpine"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Tropicamide).</b><br><b>Rationale:</b> Tropicamide (0.5–1%) is the standard diagnostic mydriatic for ophthalmoscopy due to its fast onset (20 min) and short duration (~4–6 hrs), avoiding prolonged cycloplegia.",
    "index": 5
  },
  {
    "id": "q-6",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q9"
    ],
    "isRepeat": false,
    "stem": "A young child with fever and sore throat developed lacrimation. Examination shows follicles in lower palpebral conjunctiva and tender preauricular lymph nodes. The most probable diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Trachoma"
      },
      {
        "letter": "B",
        "text": "Staphylococcal conjunctivitis"
      },
      {
        "letter": "C",
        "text": "Adenoviral conjunctivitis"
      },
      {
        "letter": "D",
        "text": "Phlyctenular conjunctivitis"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Adenoviral conjunctivitis).</b><br><b>Rationale:</b> Fever + pharyngitis (sore throat) + watery tearing + inferior tarsal follicles + tender preauricular lymphadenopathy is the classic presentation of Adenoviral Pharyngoconjunctival Fever.",
    "index": 6
  },
  {
    "id": "q-7",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q2"
    ],
    "isRepeat": false,
    "stem": "The most common cause of viral conjunctivitis is:",
    "options": [
      {
        "letter": "A",
        "text": "Herpes simplex virus"
      },
      {
        "letter": "B",
        "text": "Adenovirus"
      },
      {
        "letter": "C",
        "text": "Varicella-zoster virus"
      },
      {
        "letter": "D",
        "text": "Cytomegalovirus"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Adenovirus).</b><br><b>Rationale:</b> Adenovirus accounts for 65–90% of all cases of viral conjunctivitis worldwide.",
    "index": 7
  },
  {
    "id": "q-8",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q15"
    ],
    "isRepeat": false,
    "stem": "In viral epidemic keratoconjunctivitis, the characteristic discharge is:",
    "options": [
      {
        "letter": "A",
        "text": "Copious purulent discharge"
      },
      {
        "letter": "B",
        "text": "Copious mucopurulent discharge"
      },
      {
        "letter": "C",
        "text": "Excessive watery lacrimation"
      },
      {
        "letter": "D",
        "text": "Mucoid ropy white discharge"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Excessive watery lacrimation).</b><br><b>Rationale:</b> Viral conjunctivitis produces a serous/watery discharge, whereas purulent = gonococcal, mucopurulent = bacterial, and ropy white mucoid = vernal (allergic) conjunctivitis.",
    "index": 8
  },
  {
    "id": "q-9",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q17"
    ],
    "isRepeat": false,
    "stem": "In ophthalmia neonatorum, the most dangerous common causative organism is:",
    "options": [
      {
        "letter": "A",
        "text": "E. coli"
      },
      {
        "letter": "B",
        "text": "Gonococci"
      },
      {
        "letter": "C",
        "text": "Xerosis bacillus"
      },
      {
        "letter": "D",
        "text": "Herpes simplex virus"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Gonococci).</b><br><b>Rationale:</b> <i>Neisseria gonorrhoeae</i> causes hyperacute purulent ophthalmia neonatorum within 2–4 days of birth and can penetrate intact corneal epithelium, leading to rapid corneal ulceration and perforation.",
    "index": 9
  },
  {
    "id": "q-10",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q16"
    ],
    "isRepeat": false,
    "stem": "In membranous conjunctivitis:",
    "options": [
      {
        "letter": "A",
        "text": "Purulent secretion occurs due to diphtheria"
      },
      {
        "letter": "B",
        "text": "Can be complicated by squint"
      },
      {
        "letter": "C",
        "text": "Involves membrane formation"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Diphtheritic membranous conjunctivitis forms a true fibrinous membrane over the tarsal conjunctiva, followed by purulent sloughing, symblepharon, and post-diphtheritic cranial nerve/extraocular muscle palsy or cicatrization resulting in squint.",
    "index": 10
  },
  {
    "id": "q-11",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q1"
    ],
    "isRepeat": false,
    "stem": "Bandage of the eyes is used in the following except:",
    "options": [
      {
        "letter": "A",
        "text": "Corneal abrasion"
      },
      {
        "letter": "B",
        "text": "Corneal ulcer"
      },
      {
        "letter": "C",
        "text": "Purulent conjunctivitis"
      },
      {
        "letter": "D",
        "text": "After glaucoma surgery"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Purulent conjunctivitis).</b><br><b>Rationale:</b> Bandaging is strictly contraindicated in purulent or mucopurulent conjunctivitis because it traps bacterial toxins and pus against the cornea and elevates temperature, promoting corneal ulceration.",
    "index": 11
  },
  {
    "id": "q-12",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q2"
    ],
    "isRepeat": false,
    "stem": "WHO classification of trachoma includes all of the following except:",
    "options": [
      {
        "letter": "A",
        "text": "TF - Follicular inflammation"
      },
      {
        "letter": "B",
        "text": "TI - Intense inflammation"
      },
      {
        "letter": "C",
        "text": "TT - Trichiasis"
      },
      {
        "letter": "D",
        "text": "TS - Scarring"
      },
      {
        "letter": "E",
        "text": "Pannus"
      }
    ],
    "answer": "E",
    "rationale": "<b>Correct Answer: E (Pannus).</b><br><b>Rationale:</b> The simplified WHO grading system for Trachoma (FISTO) consists of 5 signs: TF, TI, TS, TT, and CO (Corneal Opacity). Pannus is not a separate grading category in FISTO.",
    "index": 12
  },
  {
    "id": "q-13",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q12"
    ],
    "isRepeat": false,
    "stem": "All about trachoma are false except:",
    "options": [
      {
        "letter": "A",
        "text": "Presence of Tranta's spots"
      },
      {
        "letter": "B",
        "text": "All need surgical treatment"
      },
      {
        "letter": "C",
        "text": "Medical treatment is effective"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Medical treatment is effective).</b><br><b>Rationale:</b> Active trachoma responds effectively to medical antibiotic therapy (oral Azithromycin or topical Tetracycline). Trantas spots belong to Vernal Keratoconjunctivitis, not Trachoma.",
    "index": 13
  },
  {
    "id": "q-14",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q18",
      "Batch 22 Midterm - Q1"
    ],
    "isRepeat": true,
    "stem": "A recurrent bilateral conjunctivitis occurring with the onset of hot weather in young boys with symptoms of burning, itching, and lacrimation with large flat-topped cobblestone papillae raised areas in the palpebral conjunctiva is:",
    "options": [
      {
        "letter": "A",
        "text": "Trachoma"
      },
      {
        "letter": "B",
        "text": "Vernal keratoconjunctivitis (Spring catarrh)"
      },
      {
        "letter": "C",
        "text": "Phlyctenular conjunctivitis"
      },
      {
        "letter": "D",
        "text": "Mucopurulent / Bacterial conjunctivitis"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Vernal keratoconjunctivitis).</b> <i>(Note: Option B in Batch 24 Midterm; Option D in Batch 22 Midterm).</i><br><b>Rationale:</b> Young boy + hot weather (spring/summer) + intense itching + flat-topped giant cobblestone papillae on the upper tarsal conjunctiva is the classic presentation of Palpebral VKC.",
    "index": 14
  },
  {
    "id": "q-15",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q2"
    ],
    "isRepeat": false,
    "stem": "Tranta's spots are noticed in cases of:",
    "options": [
      {
        "letter": "A",
        "text": "Active trachoma"
      },
      {
        "letter": "B",
        "text": "Bulbar spring catarrh"
      },
      {
        "letter": "C",
        "text": "Conical phlycten"
      },
      {
        "letter": "D",
        "text": "Vitamin A deficiency"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Bulbar spring catarrh).</b><br><b>Rationale:</b> Horner-Trantas spots are chalky-white dots of degenerated eosinophils and epithelial cells seen at the limbus in bulbar/limbal Vernal Keratoconjunctivitis (Spring catarrh).",
    "index": 15
  },
  {
    "id": "q-16",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q3"
    ],
    "isRepeat": false,
    "stem": "Which of the following is NOT a feature of vernal keratoconjunctivitis:",
    "options": [
      {
        "letter": "A",
        "text": "Papillae on the tarsal conjunctiva"
      },
      {
        "letter": "B",
        "text": "Shield ulcers"
      },
      {
        "letter": "C",
        "text": "Horner-Trantas dots"
      },
      {
        "letter": "D",
        "text": "Pseudomembrane formation"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Pseudomembrane formation).</b><br><b>Rationale:</b> Tarsal giant papillae, corneal shield ulcers, and limbal Horner-Trantas dots are the classic triad of VKC. Pseudomembranes are characteristic of severe Adenoviral or bacterial infections, not VKC.",
    "index": 16
  },
  {
    "id": "q-17",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q27"
    ],
    "isRepeat": false,
    "stem": "All are true about vernal keratoconjunctivitis EXCEPT:",
    "options": [
      {
        "letter": "A",
        "text": "Seasonal occurrence"
      },
      {
        "letter": "B",
        "text": "Intense itching"
      },
      {
        "letter": "C",
        "text": "Mucopurulent discharge"
      },
      {
        "letter": "D",
        "text": "Giant papillae on tarsal conjunctiva"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Mucopurulent discharge).</b><br><b>Rationale:</b> VKC is an allergic disorder characterized by thick, stringy, white ropy mucoid discharge rich in eosinophils, NOT mucopurulent discharge (which indicates bacterial infection).",
    "index": 17
  },
  {
    "id": "q-18",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q17",
      "Batch 20 Final - Q2"
    ],
    "isRepeat": true,
    "stem": "Phlyctenular conjunctivitis is due to:",
    "options": [
      {
        "letter": "A",
        "text": "Bacterial / Mixed infection"
      },
      {
        "letter": "B",
        "text": "Hypersensitivity to exogenous antigen"
      },
      {
        "letter": "C",
        "text": "Hypersensitivity to endogenous antigen"
      },
      {
        "letter": "D",
        "text": "Mechanical injury / Extended wear contact lenses"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Hypersensitivity to endogenous antigen).</b> <i>(Option C in Batch 24 Midterm; Option D in Batch 20 Final).</i><br><b>Rationale:</b> Phlyctenular keratoconjunctivitis is a delayed Type IV cell-mediated hypersensitivity reaction to endogenous bacterial antigens (primarily Staphylococcal proteins or Tuberculoprotein).",
    "index": 18
  },
  {
    "id": "q-19",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q12",
      "Batch 20 Midterm - Q16"
    ],
    "isRepeat": true,
    "stem": "Pterygium is most commonly associated with (caused by):",
    "options": [
      {
        "letter": "A",
        "text": "Exposure to Ultraviolet (UV) rays"
      },
      {
        "letter": "B",
        "text": "Exposure to infrared rays / Allergies"
      },
      {
        "letter": "C",
        "text": "Exposure to ionizing radiation / Bacterial infection"
      },
      {
        "letter": "D",
        "text": "Trauma"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Exposure to Ultraviolet rays).</b> <i>(Option A in Batch 23 Midterm; Option C in Batch 20 Midterm).</i><br><b>Rationale:</b> Chronic exposure to solar Ultraviolet (UV) radiation in hot, dry, sunny climates induces elastotic degeneration of the bulbar conjunctiva, leading to Pterygium.",
    "index": 19
  },
  {
    "id": "q-20",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q11"
    ],
    "isRepeat": false,
    "stem": "Pterygium:",
    "options": [
      {
        "letter": "A",
        "text": "Benign tumor of the conjunctiva"
      },
      {
        "letter": "B",
        "text": "Common in immunocompromised"
      },
      {
        "letter": "C",
        "text": "Both"
      },
      {
        "letter": "D",
        "text": "None"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (None).</b><br><b>Rationale:</b> Pterygium is a non-neoplastic elastotic degenerative encroachment of the conjunctiva onto the cornea (NOT a tumor, and NOT associated with immunocompromise; squamous cell carcinoma/OSSN is associated with HIV/immunocompromise).",
    "index": 20
  },
  {
    "id": "q-21",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q3"
    ],
    "isRepeat": false,
    "stem": "Bitot's spots may be caused by:",
    "options": [
      {
        "letter": "A",
        "text": "Vitamin A deficiency"
      },
      {
        "letter": "B",
        "text": "Vitamin B deficiency"
      },
      {
        "letter": "C",
        "text": "Vitamin C deficiency"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Vitamin A deficiency).</b><br><b>Rationale:</b> Bitot's spots (stage X1B of WHO xerophthalmia) are triangular foamy keratinized plaques on the temporal bulbar conjunctiva pathognomonic of Vitamin A deficiency.",
    "index": 21
  },
  {
    "id": "q-22",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Final - Q29",
      "Batch 22 Final - Q16"
    ],
    "isRepeat": true,
    "stem": "A woman with dry eyes, dry mouth, and keratoconjunctivitis sicca (xerophthalmia) most likely has:",
    "options": [
      {
        "letter": "A",
        "text": "Systemic lupus erythematosus / Photophobia"
      },
      {
        "letter": "B",
        "text": "Sjögren's syndrome (Xerophthalmia)"
      },
      {
        "letter": "C",
        "text": "Vitamin A deficiency / Scleritis"
      },
      {
        "letter": "D",
        "text": "Angular conjunctivitis / Retinopathy"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Sjögren's syndrome / Xerophthalmia).</b><br><b>Rationale:</b> Autoimmune lymphocytic destruction of lacrimal and salivary glands in Sjögren's syndrome produces the classic sicca complex: Xerophthalmia (Keratoconjunctivitis sicca) and Xerostomia (dry mouth).",
    "index": 22
  },
  {
    "id": "q-23",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q29"
    ],
    "isRepeat": false,
    "stem": "The test used to diagnose dry eye is:",
    "options": [
      {
        "letter": "A",
        "text": "Schirmer test"
      },
      {
        "letter": "B",
        "text": "Fluorescein stain"
      },
      {
        "letter": "C",
        "text": "Amsler grid"
      },
      {
        "letter": "D",
        "text": "Tonometry"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Schirmer test).</b><br><b>Rationale:</b> Schirmer test quantitatively measures aqueous tear production using a filter paper strip in the lower fornix for 5 minutes.",
    "index": 23
  },
  {
    "id": "q-24",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t2",
    "topicTitle": "1.2 Conjunctiva &amp; Dry Eye Syndrome (Xerosis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Conjunctiva &amp; Dry Eye)</span>\n    <ul>\n      <li><b>Viral Conjunctivitis:</b> Most commonly caused by <span class=\"buzz\">Adenovirus</span>. Look for: child/adult with recent <b>fever &amp; sore throat</b> + <b>excessive watery lacrimation</b> + <b>follicles in lower palpebral conjunctiva</b> + <span class=\"buzz\">tender preauricular lymphadenopathy</span>.</li>\n      <li><b>Bacterial &amp; Neonatal Conjunctivitis:</b>\n        <ul>\n          <li><b>Ophthalmia Neonatorum:</b> Most dangerous causative organism is <span class=\"buzz\">Neisseria gonorrhoeae (Gonococci)</span> because it penetrates intact corneal epithelium causing rapid perforation.</li>\n          <li><b>Membranous Conjunctivitis:</b> Caused by <span class=\"buzz\">Corynebacterium diphtheriae</span>; true membrane formation + purulent secretion + cicatrization/paralysis leading to <b>squint</b>.</li>\n          <li><b>Eye Bandage Contraindication:</b> Patching the eye is <b>strictly contraindicated in <span class=\"buzz\">Purulent / Mucopurulent Conjunctivitis</span></b> (retains pus and raises temperature, causing corneal melting).</li>\n        </ul>\n      </li>\n      <li><b>Trachoma (<i>Chlamydia trachomatis</i> A–C):</b>\n        <ul>\n          <li><b>WHO Classification (FISTO):</b> <b>TF</b> (Follicular), <b>TI</b> (Intense), <b>TS</b> (Scarring / Arlt's line), <b>TT</b> (Trichiasis), <b>CO</b> (Corneal Opacity). <span class=\"buzz\">Pannus</span> and <span class=\"buzz\">Trantas spots</span> are <b>NOT</b> in the WHO FISTO classification!</li>\n          <li><b>Treatment Fact:</b> <span class=\"buzz\">Medical treatment (Oral Azithromycin / Topical Tetracycline) is effective</span> in active stages; surgery is only needed for cicatricial TT/CO.</li>\n        </ul>\n      </li>\n      <li><b>Vernal Keratoconjunctivitis (Spring Catarrh / VKC):</b> Bilateral recurrent allergic inflammation in young boys during <b>hot weather</b> with <b>intense itching</b> and <span class=\"buzz\">thick white ropy (mucoid) discharge</span> (<b>NOT mucopurulent</b> and <b>NOT pseudomembranous</b>!).\n        <ul>\n          <li><i>Palpebral sign:</i> <span class=\"buzz\">Large flat-topped Cobblestone (giant) papillae</span> on upper tarsus.</li>\n          <li><i>Bulbar/Limbal sign:</i> Gelatinous nodules with chalky white <span class=\"buzz\">Horner-Trantas dots</span> (degenerated eosinophils).</li>\n          <li><i>Corneal complication:</i> <span class=\"buzz\">Shield ulcer</span> &amp; Keratoconus.</li>\n        </ul>\n      </li>\n      <li><b>Phlyctenular Conjunctivitis:</b> Delayed Type IV cell-mediated <span class=\"buzz\">hypersensitivity to endogenous antigens</span> (Tuberculoprotein or Staphylococcal antigens).</li>\n      <li><b>Pterygium:</b> Non-neoplastic degenerative fibrovascular wing caused by chronic <span class=\"buzz\">Ultraviolet (UV) rays exposure</span> (<b>NOT a benign tumor</b> and <b>NOT linked to immunocompromise</b>!).</li>\n      <li><b>Dry Eye &amp; Xerosis:</b>\n        <ul>\n          <li><b>Sjögren's Syndrome:</b> Autoimmune triad of Dry Eyes (<span class=\"buzz\">Xerophthalmia / Keratoconjunctivitis sicca</span>) + Dry Mouth (Xerostomia) + Rheumatoid Arthritis.</li>\n          <li><b>Bitot's Spots:</b> Foamy triangular keratinized plaques on bulbar conjunctiva caused by <span class=\"buzz\">Vitamin A deficiency</span>.</li>\n          <li><b>Diagnosis &amp; Treatment:</b> Diagnosed by <span class=\"buzz\">Schirmer Test</span> (&lt;5 mm in 5 min); mild dry eye is treated first-line with <span class=\"buzz\">Topical lubricants (artificial tears)</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q17"
    ],
    "isRepeat": false,
    "stem": "Treatment of mild dry eye:",
    "options": [
      {
        "letter": "A",
        "text": "Topical lubricants"
      },
      {
        "letter": "B",
        "text": "Oral steroids"
      },
      {
        "letter": "C",
        "text": "Artificial tears with steroids"
      },
      {
        "letter": "D",
        "text": "Immunosuppressants"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Topical lubricants).</b><br><b>Rationale:</b> First-line therapy for mild keratoconjunctivitis sicca (dry eye) is tear film replacement using preservative-free topical lubricants (artificial tears).",
    "index": 24
  },
  {
    "id": "q-25",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q4"
    ],
    "isRepeat": false,
    "stem": "Not a source of nutrition to the cornea:",
    "options": [
      {
        "letter": "A",
        "text": "Air"
      },
      {
        "letter": "B",
        "text": "Aqueous humour"
      },
      {
        "letter": "C",
        "text": "Perilimbal capillaries"
      },
      {
        "letter": "D",
        "text": "Vitreous"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Vitreous).</b><br><b>Rationale:</b> The avascular cornea receives oxygen from atmospheric air via the tear film, glucose from the aqueous humor, and peripheral nutrients from perilimbal capillaries. The vitreous lies behind the lens and has no contact with the cornea.",
    "index": 25
  },
  {
    "id": "q-26",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q15",
      "Batch 20 Midterm - Q1"
    ],
    "isRepeat": true,
    "stem": "Which of the following organisms can penetrate intact corneal epithelium?",
    "options": [
      {
        "letter": "A",
        "text": "Staphylococcus aureus"
      },
      {
        "letter": "B",
        "text": "Corynebacterium diphtheriae"
      },
      {
        "letter": "C",
        "text": "Pseudomonas aeruginosa (pyocyanea)"
      },
      {
        "letter": "D",
        "text": "Streptococcus pneumoniae / pyogenes"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Corynebacterium diphtheriae).</b> <i>(Option B in Batch 24 Midterm; Option D in Batch 20 Midterm).</i><br><b>Rationale:</b> Only <i>Corynebacterium diphtheriae, Neisseria gonorrhoeae, Neisseria meningitidis,</i> and <i>Haemophilus/Listeria</i> can invade an intact healthy corneal epithelium.",
    "index": 26
  },
  {
    "id": "q-27",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q3"
    ],
    "isRepeat": false,
    "stem": "The commonest cause of hypopyon corneal ulcer is:",
    "options": [
      {
        "letter": "A",
        "text": "Moraxella"
      },
      {
        "letter": "B",
        "text": "Gonococcus"
      },
      {
        "letter": "C",
        "text": "Pneumococcus"
      },
      {
        "letter": "D",
        "text": "Staphylococcus"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Pneumococcus).</b><br><b>Rationale:</b> <i>Streptococcus pneumoniae (Pneumococcus)</i> is the classic causative organism of typical hypopyon corneal ulcer (ulcus serpens), often secondary to chronic dacryocystitis.",
    "index": 27
  },
  {
    "id": "q-28",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q34"
    ],
    "isRepeat": false,
    "stem": "The most common bacterium causing contact lens-associated corneal ulcer is:",
    "options": [
      {
        "letter": "A",
        "text": "Staphylococcus aureus"
      },
      {
        "letter": "B",
        "text": "Pseudomonas aeruginosa"
      },
      {
        "letter": "C",
        "text": "Streptococcus pneumoniae"
      },
      {
        "letter": "D",
        "text": "Moraxella"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Pseudomonas aeruginosa).</b><br><b>Rationale:</b> <i>Pseudomonas aeruginosa</i> adheres to contact lenses and biofilm, causing fulminant liquefactive stromal necrosis in contact lens wearers.",
    "index": 28
  },
  {
    "id": "q-29",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q25"
    ],
    "isRepeat": false,
    "stem": "Acanthamoeba keratitis classically may show:",
    "options": [
      {
        "letter": "A",
        "text": "Ring-shaped corneal infiltrate"
      },
      {
        "letter": "B",
        "text": "Dendritic ulcer"
      },
      {
        "letter": "C",
        "text": "Hypopyon only"
      },
      {
        "letter": "D",
        "text": "Punctate epithelial erosions"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Ring-shaped corneal infiltrate).</b><br><b>Rationale:</b> Acanthamoeba keratitis occurs in contact lens users exposed to tap water/swimming and classically presents with severe pain out of proportion to signs and a central paracentral ring-shaped stromal infiltrate.",
    "index": 29
  },
  {
    "id": "q-30",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q1",
      "Batch 22 Final - Q18"
    ],
    "isRepeat": true,
    "stem": "What is the characteristic clinical finding in Herpes Simplex epithelial keratitis (branching corneal opacity):",
    "options": [
      {
        "letter": "A",
        "text": "Subepithelial infiltrates"
      },
      {
        "letter": "B",
        "text": "Dendritic ulcer with terminal bulbs (HSV infection)"
      },
      {
        "letter": "C",
        "text": "Geographic ulcer without branching"
      },
      {
        "letter": "D",
        "text": "Bull's-eye maculopathy"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Dendritic ulcer with terminal bulbs).</b><br><b>Rationale:</b> Epithelial replication of HSV-1 creates a dichotomous linear branching ulcer with swollen terminal end-bulbs that stains green with fluorescein and red at the margins with Rose Bengal.",
    "index": 30
  },
  {
    "id": "q-31",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q8"
    ],
    "isRepeat": false,
    "stem": "All are features of recurrent herpes simplex keratitis except:",
    "options": [
      {
        "letter": "A",
        "text": "Dendritic ulcer"
      },
      {
        "letter": "B",
        "text": "Disciform keratitis"
      },
      {
        "letter": "C",
        "text": "Superficial punctate keratitis"
      },
      {
        "letter": "D",
        "text": "Geographic ulcer"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Superficial punctate keratitis).</b><br><b>Rationale:</b> Recurrent HSK manifests as dendritic ulcer, geographic (amoeboid) ulcer, or stromal disciform keratitis. Transient superficial punctate keratitis is seen in primary ocular herpes or adenoviral/dry eye conditions, not as a hallmark of recurrent HSK.",
    "index": 31
  },
  {
    "id": "q-32",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q30"
    ],
    "isRepeat": false,
    "stem": "Loss of corneal sensation is commonly seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Bacterial corneal ulcer"
      },
      {
        "letter": "B",
        "text": "Viral herpetic ulcer"
      },
      {
        "letter": "C",
        "text": "Fungal ulcer"
      },
      {
        "letter": "D",
        "text": "Acanthamoeba ulcer"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Viral herpetic ulcer).</b><br><b>Rationale:</b> HSV and VZV replicate within trigeminal nerve fibers (CN V1), destroying the sub-basal corneal nerve plexus and producing diagnostic corneal hypoesthesia/anesthesia.",
    "index": 32
  },
  {
    "id": "q-33",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q23",
      "Batch 20 Midterm - Q14"
    ],
    "isRepeat": true,
    "stem": "Effective treatment of dendritic ulcer of the cornea is:",
    "options": [
      {
        "letter": "A",
        "text": "Steroid drops / Surface anesthesia"
      },
      {
        "letter": "B",
        "text": "Acyclovir ointment"
      },
      {
        "letter": "C",
        "text": "Antibiotic drops / Systemic corticosteroids"
      },
      {
        "letter": "D",
        "text": "Artificial tears"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Acyclovir ointment).</b> <i>(Option B in Batch 24 Midterm; Option D in Batch 20 Midterm).</i><br><b>Rationale:</b> Topical Acyclovir 3% eye ointment applied 5 times daily is the first-line antiviral therapy for HSV dendritic keratitis.",
    "index": 33
  },
  {
    "id": "q-34",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q17"
    ],
    "isRepeat": false,
    "stem": "Steroid is contraindicated in:",
    "options": [
      {
        "letter": "A",
        "text": "Adenoviral keratoconjunctivitis"
      },
      {
        "letter": "B",
        "text": "Dendritic ulcer"
      },
      {
        "letter": "C",
        "text": "Chemical burn of cornea"
      },
      {
        "letter": "D",
        "text": "Post cataract extraction"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Dendritic ulcer).</b><br><b>Rationale:</b> Topical corticosteroids suppress local immunity in active epithelial HSV (dendritic ulcer), promotingunchecked viral replication, conversion into a large geographic ulcer, stromal melting, and perforation.",
    "index": 34
  },
  {
    "id": "q-35",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q13"
    ],
    "isRepeat": false,
    "stem": "A dense corneal scar with cicatrization and iris involvement is called:",
    "options": [
      {
        "letter": "A",
        "text": "Nebula"
      },
      {
        "letter": "B",
        "text": "Macula"
      },
      {
        "letter": "C",
        "text": "Leucoma adherent"
      },
      {
        "letter": "D",
        "text": "Corneal opacity"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Leucoma adherent).</b><br><b>Rationale:</b> Following a perforated corneal ulcer, the iris plugs the perforation site and heals into the dense white stromal scar, forming a Leucoma Adherent.",
    "index": 35
  },
  {
    "id": "q-36",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q20",
      "Batch 23 Final - Q24"
    ],
    "isRepeat": true,
    "stem": "A positive Seidel test is indicative of (used to detect):",
    "options": [
      {
        "letter": "A",
        "text": "Anterior chamber leakage due to corneal perforation"
      },
      {
        "letter": "B",
        "text": "Increased intraocular pressure / Tear film breakup"
      },
      {
        "letter": "C",
        "text": "Lens dislocation / Corneal topography"
      },
      {
        "letter": "D",
        "text": "Retinal detachment / Aqueous production"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Anterior chamber leakage due to corneal perforation).</b> <i>(Option A in Batch 23 Midterm; Option B in Batch 23 Final).</i><br><b>Rationale:</b> In the Seidel test, concentrated fluorescein applied to the cornea is diluted by a stream of leaking aqueous humor (turning bright green under blue light), confirming a full-thickness corneal perforation or wound leak.",
    "index": 36
  },
  {
    "id": "q-37",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q14",
      "Batch 22 Final - Q10"
    ],
    "isRepeat": true,
    "stem": "Band keratopathy is commonly a deposition of (calcium deposition is seen in):",
    "options": [
      {
        "letter": "A",
        "text": "Uric acid / Pinguecula"
      },
      {
        "letter": "B",
        "text": "Calcium salts (Band keratopathy)"
      },
      {
        "letter": "C",
        "text": "Cholesterol / Pterygium"
      },
      {
        "letter": "D",
        "text": "Iron"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Calcium salts / Band keratopathy).</b><br><b>Rationale:</b> Band-shaped keratopathy is a calcific degeneration characterized by hydroxyapatite (calcium phosphate/carbonate) salt deposition in Bowman's layer and superficial stroma.",
    "index": 37
  },
  {
    "id": "q-38",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q10"
    ],
    "isRepeat": false,
    "stem": "Salmon patches occur in:",
    "options": [
      {
        "letter": "A",
        "text": "Interstitial keratitis"
      },
      {
        "letter": "B",
        "text": "Retinoblastoma"
      },
      {
        "letter": "C",
        "text": "Epithelial keratitis"
      },
      {
        "letter": "D",
        "text": "Deep keratitis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Interstitial keratitis).</b><br><b>Rationale:</b> In congenital syphilitic interstitial keratitis, dense brush-like deep stromal vascularization gives the cornea a dull reddish-pink appearance known as a \"Salmon patch\" of Hutchinson.",
    "index": 38
  },
  {
    "id": "q-39",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q8",
      "Batch 22 Final - Q24"
    ],
    "isRepeat": true,
    "stem": "Keratoconus is characterized by (Thinning and bulging of the cornea is seen in):",
    "options": [
      {
        "letter": "A",
        "text": "Thinning and bulging of the cornea (Keratoconus)"
      },
      {
        "letter": "B",
        "text": "Thickening of the cornea / Band keratopathy"
      },
      {
        "letter": "C",
        "text": "Deposits in the cornea / Arcus senilis"
      },
      {
        "letter": "D",
        "text": "Inflammation of the cornea / Scleritis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Thinning and bulging of the cornea — Keratoconus).</b><br><b>Rationale:</b> Keratoconus is a progressive, non-inflammatory bilateral ectasia characterized by central stromal thinning and conical apical protrusion.",
    "index": 39
  },
  {
    "id": "q-40",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q1",
      "Batch 20 Midterm - Q6"
    ],
    "isRepeat": true,
    "stem": "A 20–22-year-old adult patient presents with gradual decreased visual acuity (6/60). On examination/retinoscopy there is high astigmatism and a scissoring red reflex. The probable diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Keratitis / Keratoglobus"
      },
      {
        "letter": "B",
        "text": "Keratoconus"
      },
      {
        "letter": "C",
        "text": "Open angle glaucoma / Optic neuritis"
      },
      {
        "letter": "D",
        "text": "High myopia"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Keratoconus).</b><br><b>Rationale:</b> Young adult + gradual visual loss + irregular astigmatism + scissoring reflex on retinoscopy is the classic clinical vignette of Keratoconus.",
    "index": 40
  },
  {
    "id": "q-41",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Final - Q31",
      "Batch 20 Midterm - Q18"
    ],
    "isRepeat": true,
    "stem": "Which sign is characteristic of keratoconus (Fleischer ring is found in)?",
    "options": [
      {
        "letter": "A",
        "text": "Kayser-Fleischer ring / Chalcosis"
      },
      {
        "letter": "B",
        "text": "Fleischer ring (Keratoconus)"
      },
      {
        "letter": "C",
        "text": "Brushfield spots / Argyrosis"
      },
      {
        "letter": "D",
        "text": "Keratic precipitates / Buphthalmos"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Fleischer ring — Keratoconus).</b> <i>(Option B in Batch 23 Final; Option A in Batch 20 Midterm).</i><br><b>Rationale:</b> Fleischer ring is an epithelial iron deposit ring from tear pooling around the base of the cone in Keratoconus.",
    "index": 41
  },
  {
    "id": "q-42",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q5"
    ],
    "isRepeat": false,
    "stem": "Munson's sign is seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Corneal fistula"
      },
      {
        "letter": "B",
        "text": "Corneal dystrophy"
      },
      {
        "letter": "C",
        "text": "Keratoconus"
      },
      {
        "letter": "D",
        "text": "Corneal facet"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Keratoconus).</b><br><b>Rationale:</b> Munson's sign is a V-shaped indentation of the lower eyelid produced by the conical cornea when the patient looks downward.",
    "index": 42
  },
  {
    "id": "q-43",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q6"
    ],
    "isRepeat": false,
    "stem": "Rupture of Descemet's membrane with acute hydrops occurs in:",
    "options": [
      {
        "letter": "A",
        "text": "Keratoconus"
      },
      {
        "letter": "B",
        "text": "Uveitis"
      },
      {
        "letter": "C",
        "text": "Arcus senilis"
      },
      {
        "letter": "D",
        "text": "Keratitis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Keratoconus).</b><br><b>Rationale:</b> Acute corneal hydrops is a complication of advanced Keratoconus caused by a spontaneous tear in Descemet's membrane, allowing aqueous humor to flood the corneal stroma.",
    "index": 43
  },
  {
    "id": "q-44",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t3",
    "topicTitle": "1.3 The Cornea (Keratitis, Ulcers, Keratoconus &amp; Opacities)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Cornea)</span>\n    <ul>\n      <li><b>Corneal Nutrition:</b> Supplied by <b>Air</b> (oxygen), <b>Aqueous humor</b> (glucose), and <b>Perilimbal capillaries</b>. <span class=\"buzz\">Vitreous humor</span> is <b>NOT</b> a source of nutrition to the cornea!</li>\n      <li><b>Intact Epithelium Invaders:</b> Only 4 bacteria can penetrate an intact corneal epithelium: <span class=\"buzz\">Corynebacterium diphtheriae</span>, <span class=\"buzz\">Neisseria gonorrhoeae</span>, <i>N. meningitidis</i>, and <i>Haemophilus</i>.</li>\n      <li><b>Specific Bacterial &amp; Protozoan Ulcers:</b>\n        <ul>\n          <li><b>Commonest cause of Typical Hypopyon Corneal Ulcer (Ulcus serpens):</b> <span class=\"buzz\">Streptococcus pneumoniae (Pneumococcus)</span> (linked to chronic dacryocystitis).</li>\n          <li><b>Commonest bacterium in Contact Lens Wearers:</b> <span class=\"buzz\">Pseudomonas aeruginosa</span>.</li>\n          <li><b>Acanthamoeba Keratitis (Contact lens + tap water):</b> Severe pain out of proportion + <span class=\"buzz\">Ring-shaped corneal stromal infiltrate</span>.</li>\n        </ul>\n      </li>\n      <li><b>Herpes Simplex Keratitis (HSK):</b>\n        <ul>\n          <li><b>Recurrent features:</b> <span class=\"buzz\">Branching Dendritic ulcer with terminal bulbs</span>, <span class=\"buzz\">Geographic ulcer</span> (if steroids were misused), and <span class=\"buzz\">Disciform stromal keratitis</span>. (<span class=\"buzz\">Superficial punctate keratitis</span> is <b>NOT</b> a feature of recurrent HSK!).</li>\n          <li><b>Key Diagnostic Sign:</b> <span class=\"buzz\">Loss of corneal sensation (Corneal hypoesthesia)</span> due to CN V1 damage.</li>\n          <li><b>Treatment &amp; Contraindication:</b> Treated with <span class=\"buzz\">Topical Acyclovir 3% ointment</span>. <b>Topical <span class=\"buzz\">Steroids are STRICTLY CONTRAINDICATED</span> in dendritic ulcer!</b></li>\n        </ul>\n      </li>\n      <li><b>Corneal Scars, Depositions &amp; Perforation:</b>\n        <ul>\n          <li><span class=\"buzz\">Leucoma Adherent:</span> Dense white corneal scar with cicatrization and <b>iris incarceration</b> following a perforated ulcer.</li>\n          <li><span class=\"buzz\">Seidel Test:</span> Positive test indicates <b>anterior chamber aqueous leakage due to corneal perforation/fistula</b>.</li>\n          <li><span class=\"buzz\">Band Keratopathy:</span> Subepithelial deposition of <b>Calcium salts</b>.</li>\n          <li><span class=\"buzz\">Salmon Patches:</span> Deep stromal vascularization seen in syphilitic <b>Interstitial Keratitis</b>.</li>\n        </ul>\n      </li>\n      <li><b>Keratoconus (Top Tested Topic — 9 Questions in Batches 20–24!):</b>\n        <ul>\n          <li><b>Pathology:</b> Non-inflammatory <span class=\"buzz\">central thinning and conical bulging</span> of the cornea presenting in young adults (~20–22 yrs) with gradual visual loss and high irregular myopic astigmatism.</li>\n          <li><b>Signs:</b> <span class=\"buzz\">Scissoring red reflex</span> on retinoscopy, <span class=\"buzz\">Fleischer ring</span> (epithelial iron deposition at cone base), <span class=\"buzz\">Munson's sign</span> (V-shaped lower lid indentation on down-gaze), and <span class=\"buzz\">Acute Hydrops</span> (sudden corneal edema due to <b>rupture of Descemet's membrane</b>).</li>\n          <li><b>Gold Standard Investigation:</b> <span class=\"buzz\">Corneal Topography</span>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q3"
    ],
    "isRepeat": false,
    "stem": "The gold standard investigation for keratoconus is:",
    "options": [
      {
        "letter": "A",
        "text": "Slit lamp exam"
      },
      {
        "letter": "B",
        "text": "Pachymetry"
      },
      {
        "letter": "C",
        "text": "Corneal topography"
      },
      {
        "letter": "D",
        "text": "Keratometry"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Corneal topography).</b><br><b>Rationale:</b> Corneal topography (and tomography/Pentacam) maps anterior and posterior corneal curvature, making it the gold standard for detecting early/subclinical keratoconus and monitoring progression.",
    "index": 44
  },
  {
    "id": "q-45",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q2"
    ],
    "isRepeat": false,
    "stem": "The primary cause of refractive errors (myopia, hypermetropia, astigmatism) is:",
    "options": [
      {
        "letter": "A",
        "text": "Change in corneal curvature"
      },
      {
        "letter": "B",
        "text": "Change in axial length"
      },
      {
        "letter": "C",
        "text": "Lens dislocation"
      },
      {
        "letter": "D",
        "text": "Retinal detachment"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Change in axial length).</b><br><b>Rationale:</b> Axial length variation (normal ~24 mm; 1 mm change = ~3 D) is the most common anatomical determinant of refractive errors.",
    "index": 45
  },
  {
    "id": "q-46",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q10"
    ],
    "isRepeat": false,
    "stem": "Myopia is best corrected by:",
    "options": [
      {
        "letter": "A",
        "text": "Convex lenses"
      },
      {
        "letter": "B",
        "text": "Concave lenses"
      },
      {
        "letter": "C",
        "text": "Cylindrical lenses"
      },
      {
        "letter": "D",
        "text": "Multifocal lenses"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Concave lenses).</b><br><b>Rationale:</b> Concave (minus) lenses diverge incoming parallel light rays so the focal point moves backward onto the myopic retina.",
    "index": 46
  },
  {
    "id": "q-47",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Final - Q10",
      "Batch 20 Final - Q19"
    ],
    "isRepeat": true,
    "stem": "High myopia predisposes to:",
    "options": [
      {
        "letter": "A",
        "text": "Glaucoma"
      },
      {
        "letter": "B",
        "text": "Retinal detachment"
      },
      {
        "letter": "C",
        "text": "Optic neuritis"
      },
      {
        "letter": "D",
        "text": "Macular hole"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Retinal detachment).</b><br><b>Rationale:</b> Axial elongation in high myopia causes peripheral retinal thinning, lattice degeneration, and premature posterior vitreous detachment, predisposing to retinal tears and rhegmatogenous retinal detachment. (In Batch 20 Final Q19, RD is caused by malignant melanoma, diabetic retinopathy, AND high myopia = All of the above).",
    "index": 47
  },
  {
    "id": "q-48",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Final - Q19",
      "Batch 22 Final - Q23"
    ],
    "isRepeat": true,
    "stem": "Hyperopia / Hypermetropia (farsightedness) is corrected with which lens?",
    "options": [
      {
        "letter": "A",
        "text": "Concave lens"
      },
      {
        "letter": "B",
        "text": "Convex lens"
      },
      {
        "letter": "C",
        "text": "Cylindrical lens"
      },
      {
        "letter": "D",
        "text": "Bifocal lens"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Convex lens).</b><br><b>Rationale:</b> Convex (plus) spherical lenses converge light rays to bring the focal point forward from behind the eye onto the retina.",
    "index": 48
  },
  {
    "id": "q-49",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q4"
    ],
    "isRepeat": false,
    "stem": "The primary optical treatment for presbyopia is:",
    "options": [
      {
        "letter": "A",
        "text": "Contact lenses"
      },
      {
        "letter": "B",
        "text": "Bifocal glasses"
      },
      {
        "letter": "C",
        "text": "Concave glasses"
      },
      {
        "letter": "D",
        "text": "Cylindrical glasses"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Bifocal glasses).</b><br><b>Rationale:</b> Presbyopia is the age-related decline in near accommodation; bifocal (or reading convex) spectacles provide the additional plus power needed for near tasks.",
    "index": 49
  },
  {
    "id": "q-50",
    "moduleId": "m1",
    "moduleName": "Module 1: Dr. Mohammed Al-Ansi",
    "topicId": "m1-t4",
    "topicTitle": "1.4 Optics &amp; Errors of Refraction",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Errors of Refraction)</span>\n    <ul>\n      <li><b>Primary Cause of Refractive Errors:</b> Change in the anteroposterior <span class=\"buzz\">Axial Length</span> of the globe (Long globe = Axial Myopia; Short globe = Axial Hypermetropia).</li>\n      <li><b>Optical Lens Corrections (Memorize!):</b>\n        <ul>\n          <li><b>Myopia (Nearsightedness):</b> Parallel rays focus <i>in front of</i> the retina → corrected with <span class=\"buzz\">Concave (Minus / Diverging) lenses</span>. High/pathological myopia predisposes to <span class=\"buzz\">Rhegmatogenous Retinal Detachment</span> and <span class=\"buzz\">Posterior Staphyloma</span>.</li>\n          <li><b>Hypermetropia / Hyperopia (Farsightedness):</b> Parallel rays focus <i>behind</i> the retina → corrected with <span class=\"buzz\">Convex (Plus / Converging) lenses</span>. Predisposes to <span class=\"buzz\">Acute Angle-Closure Glaucoma</span> and <span class=\"buzz\">Accommodative Esotropia</span> in children.</li>\n          <li><b>Astigmatism:</b> Corrected with <span class=\"buzz\">Cylindrical lenses</span> (or rigid contact lenses if irregular).</li>\n          <li><b>Presbyopia:</b> Age-related loss of accommodation after age 40 → primary optical treatment is <span class=\"buzz\">Bifocal (or Plus reading) glasses</span>.</li>\n        </ul>\n      </li>\n      <li><b>Unilateral Aphakia (Top Repeated Exam Question!):</b> Can be corrected by <b>PCIOL, ACIOL, Contact lenses, or Refractive surgery</b>, <span class=\"buzz\">EXCEPT Glasses (Spectacles)</span>! Why? Because +10 D aphakic glasses magnify the retinal image by <b>25–30% (Aniseikonia)</b>, causing intolerable <b>binocular diplopia</b> when the fellow eye is phakic.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q16",
      "Batch 22 Midterm - Q4"
    ],
    "isRepeat": true,
    "stem": "Unilateral aphakia can be corrected by all the following except:",
    "options": [
      {
        "letter": "A",
        "text": "Contact lenses / Anterior chamber IOL"
      },
      {
        "letter": "B",
        "text": "Posterior chamber Intraocular lens (IOL)"
      },
      {
        "letter": "C",
        "text": "Glasses (Spectacles)"
      },
      {
        "letter": "D",
        "text": "Refractive surgery"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Glasses).</b> <i>(Option C in Batch 24 Midterm; Option D in Batch 22 Midterm).</i><br><b>Rationale:</b> High-plus aphakic spectacles magnify the retinal image by ~25–30%. In unilateral aphakia, this creates severe aniseikonia and intractable binocular diplopia.",
    "index": 50
  },
  {
    "id": "q-51",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t1",
    "topicTitle": "2.1 Lacrimal System &amp; The Orbit",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lacrimal &amp; Orbit)</span>\n    <ul>\n      <li><b>Most Common Cause of Proptosis Worldwide:</b> <span class=\"buzz\">Thyroid Eye Disease (Graves' Orbitopathy)</span> is the #1 cause of both unilateral and bilateral proptosis in adults.</li>\n      <li><b>Orbital Cellulitis vs. Preseptal Cellulitis vs. Cavernous Sinus Thrombosis:</b>\n        <ul>\n          <li><b>Orbital Cellulitis:</b> Infection <i>posterior</i> to the orbital septum (usually secondary to ethmoiditis). Presents with <span class=\"buzz\">painful red eye, eyelid edema, proptosis, and ophthalmoplegia (restricted eye movements)</span> + rapid vision loss if optic nerve is compressed.</li>\n          <li><b>Complete loss of vision with rapid onset:</b> Occurs in <span class=\"buzz\">Panophthalmitis, severe Orbital Cellulitis, and Cavernous Sinus Thrombosis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Orbital Pseudotumor:</b> Best described as an <span class=\"buzz\">idiopathic non-neoplastic inflammatory condition of the orbit</span> presenting with painful proptosis; responds dramatically to systemic steroids.</li>\n      <li><b>Orbital Floor \"Blow-Out\" Fracture:</b> Blunt trauma by a round object fractures the inferior orbital wall, entrapping the inferior rectus/oblique muscles and typically causing <span class=\"buzz\">Diplopia (double vision)</span>, enophthalmos, and infraorbital numbness (<b>NOT proptosis or ptosis</b>!).</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q22"
    ],
    "isRepeat": false,
    "stem": "The most common cause of proptosis worldwide is:",
    "options": [
      {
        "letter": "A",
        "text": "Orbital cellulitis"
      },
      {
        "letter": "B",
        "text": "Cavernous sinus thrombosis"
      },
      {
        "letter": "C",
        "text": "Thyroid eye disease"
      },
      {
        "letter": "D",
        "text": "Orbital tumor"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Thyroid eye disease).</b><br><b>Rationale:</b> Thyroid-associated orbitopathy (Graves' disease) is the most common cause of both unilateral and bilateral proptosis in adults.",
    "index": 51
  },
  {
    "id": "q-52",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t1",
    "topicTitle": "2.1 Lacrimal System &amp; The Orbit",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lacrimal &amp; Orbit)</span>\n    <ul>\n      <li><b>Most Common Cause of Proptosis Worldwide:</b> <span class=\"buzz\">Thyroid Eye Disease (Graves' Orbitopathy)</span> is the #1 cause of both unilateral and bilateral proptosis in adults.</li>\n      <li><b>Orbital Cellulitis vs. Preseptal Cellulitis vs. Cavernous Sinus Thrombosis:</b>\n        <ul>\n          <li><b>Orbital Cellulitis:</b> Infection <i>posterior</i> to the orbital septum (usually secondary to ethmoiditis). Presents with <span class=\"buzz\">painful red eye, eyelid edema, proptosis, and ophthalmoplegia (restricted eye movements)</span> + rapid vision loss if optic nerve is compressed.</li>\n          <li><b>Complete loss of vision with rapid onset:</b> Occurs in <span class=\"buzz\">Panophthalmitis, severe Orbital Cellulitis, and Cavernous Sinus Thrombosis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Orbital Pseudotumor:</b> Best described as an <span class=\"buzz\">idiopathic non-neoplastic inflammatory condition of the orbit</span> presenting with painful proptosis; responds dramatically to systemic steroids.</li>\n      <li><b>Orbital Floor \"Blow-Out\" Fracture:</b> Blunt trauma by a round object fractures the inferior orbital wall, entrapping the inferior rectus/oblique muscles and typically causing <span class=\"buzz\">Diplopia (double vision)</span>, enophthalmos, and infraorbital numbness (<b>NOT proptosis or ptosis</b>!).</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q23"
    ],
    "isRepeat": false,
    "stem": "Painful red eye with eyelid edema, proptosis, and ophthalmoplegia most likely indicates:",
    "options": [
      {
        "letter": "A",
        "text": "Orbital cellulitis"
      },
      {
        "letter": "B",
        "text": "Preseptal cellulitis"
      },
      {
        "letter": "C",
        "text": "Cavernous sinus thrombosis"
      },
      {
        "letter": "D",
        "text": "Endophthalmitis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Orbital cellulitis).</b><br><b>Rationale:</b> Proptosis and painful ophthalmoplegia (restricted ocular motility) distinguish post-septal Orbital Cellulitis from Preseptal Cellulitis (which lacks proptosis and has normal motility).",
    "index": 52
  },
  {
    "id": "q-53",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t1",
    "topicTitle": "2.1 Lacrimal System &amp; The Orbit",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lacrimal &amp; Orbit)</span>\n    <ul>\n      <li><b>Most Common Cause of Proptosis Worldwide:</b> <span class=\"buzz\">Thyroid Eye Disease (Graves' Orbitopathy)</span> is the #1 cause of both unilateral and bilateral proptosis in adults.</li>\n      <li><b>Orbital Cellulitis vs. Preseptal Cellulitis vs. Cavernous Sinus Thrombosis:</b>\n        <ul>\n          <li><b>Orbital Cellulitis:</b> Infection <i>posterior</i> to the orbital septum (usually secondary to ethmoiditis). Presents with <span class=\"buzz\">painful red eye, eyelid edema, proptosis, and ophthalmoplegia (restricted eye movements)</span> + rapid vision loss if optic nerve is compressed.</li>\n          <li><b>Complete loss of vision with rapid onset:</b> Occurs in <span class=\"buzz\">Panophthalmitis, severe Orbital Cellulitis, and Cavernous Sinus Thrombosis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Orbital Pseudotumor:</b> Best described as an <span class=\"buzz\">idiopathic non-neoplastic inflammatory condition of the orbit</span> presenting with painful proptosis; responds dramatically to systemic steroids.</li>\n      <li><b>Orbital Floor \"Blow-Out\" Fracture:</b> Blunt trauma by a round object fractures the inferior orbital wall, entrapping the inferior rectus/oblique muscles and typically causing <span class=\"buzz\">Diplopia (double vision)</span>, enophthalmos, and infraorbital numbness (<b>NOT proptosis or ptosis</b>!).</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q8"
    ],
    "isRepeat": false,
    "stem": "Complete loss of vision with rapid onset occurs in:",
    "options": [
      {
        "letter": "A",
        "text": "Panophthalmitis"
      },
      {
        "letter": "B",
        "text": "Orbital cellulitis"
      },
      {
        "letter": "C",
        "text": "Cavernous sinus thrombosis"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Panophthalmitis, compressive/ischemic optic neuropathy from severe Orbital Cellulitis, and Cavernous Sinus Thrombosis can all cause rapid, complete blindness.",
    "index": 53
  },
  {
    "id": "q-54",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t1",
    "topicTitle": "2.1 Lacrimal System &amp; The Orbit",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lacrimal &amp; Orbit)</span>\n    <ul>\n      <li><b>Most Common Cause of Proptosis Worldwide:</b> <span class=\"buzz\">Thyroid Eye Disease (Graves' Orbitopathy)</span> is the #1 cause of both unilateral and bilateral proptosis in adults.</li>\n      <li><b>Orbital Cellulitis vs. Preseptal Cellulitis vs. Cavernous Sinus Thrombosis:</b>\n        <ul>\n          <li><b>Orbital Cellulitis:</b> Infection <i>posterior</i> to the orbital septum (usually secondary to ethmoiditis). Presents with <span class=\"buzz\">painful red eye, eyelid edema, proptosis, and ophthalmoplegia (restricted eye movements)</span> + rapid vision loss if optic nerve is compressed.</li>\n          <li><b>Complete loss of vision with rapid onset:</b> Occurs in <span class=\"buzz\">Panophthalmitis, severe Orbital Cellulitis, and Cavernous Sinus Thrombosis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Orbital Pseudotumor:</b> Best described as an <span class=\"buzz\">idiopathic non-neoplastic inflammatory condition of the orbit</span> presenting with painful proptosis; responds dramatically to systemic steroids.</li>\n      <li><b>Orbital Floor \"Blow-Out\" Fracture:</b> Blunt trauma by a round object fractures the inferior orbital wall, entrapping the inferior rectus/oblique muscles and typically causing <span class=\"buzz\">Diplopia (double vision)</span>, enophthalmos, and infraorbital numbness (<b>NOT proptosis or ptosis</b>!).</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q9"
    ],
    "isRepeat": false,
    "stem": "Orbital pseudotumor is best described as:",
    "options": [
      {
        "letter": "A",
        "text": "A malignant tumor in the orbit"
      },
      {
        "letter": "B",
        "text": "An idiopathic inflammatory condition of the orbit"
      },
      {
        "letter": "C",
        "text": "A bacterial infection of the orbit"
      },
      {
        "letter": "D",
        "text": "A congenital anomaly"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (An idiopathic inflammatory condition of the orbit).</b><br><b>Rationale:</b> Idiopathic Orbital Inflammatory Disease (Orbital pseudotumor) is a non-neoplastic, non-infectious inflammatory lesion of the orbit.",
    "index": 54
  },
  {
    "id": "q-55",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t1",
    "topicTitle": "2.1 Lacrimal System &amp; The Orbit",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lacrimal &amp; Orbit)</span>\n    <ul>\n      <li><b>Most Common Cause of Proptosis Worldwide:</b> <span class=\"buzz\">Thyroid Eye Disease (Graves' Orbitopathy)</span> is the #1 cause of both unilateral and bilateral proptosis in adults.</li>\n      <li><b>Orbital Cellulitis vs. Preseptal Cellulitis vs. Cavernous Sinus Thrombosis:</b>\n        <ul>\n          <li><b>Orbital Cellulitis:</b> Infection <i>posterior</i> to the orbital septum (usually secondary to ethmoiditis). Presents with <span class=\"buzz\">painful red eye, eyelid edema, proptosis, and ophthalmoplegia (restricted eye movements)</span> + rapid vision loss if optic nerve is compressed.</li>\n          <li><b>Complete loss of vision with rapid onset:</b> Occurs in <span class=\"buzz\">Panophthalmitis, severe Orbital Cellulitis, and Cavernous Sinus Thrombosis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Orbital Pseudotumor:</b> Best described as an <span class=\"buzz\">idiopathic non-neoplastic inflammatory condition of the orbit</span> presenting with painful proptosis; responds dramatically to systemic steroids.</li>\n      <li><b>Orbital Floor \"Blow-Out\" Fracture:</b> Blunt trauma by a round object fractures the inferior orbital wall, entrapping the inferior rectus/oblique muscles and typically causing <span class=\"buzz\">Diplopia (double vision)</span>, enophthalmos, and infraorbital numbness (<b>NOT proptosis or ptosis</b>!).</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q16"
    ],
    "isRepeat": false,
    "stem": "A \"blow out\" fracture typically causes which of the following symptoms:",
    "options": [
      {
        "letter": "A",
        "text": "Proptosis"
      },
      {
        "letter": "B",
        "text": "Diplopia (double vision)"
      },
      {
        "letter": "C",
        "text": "Ptosis"
      },
      {
        "letter": "D",
        "text": "Loss of vision"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Diplopia — double vision).</b><br><b>Rationale:</b> Blow-out fracture of the orbital floor traps the inferior rectus and inferior oblique muscles in the maxillary sinus, causing vertical binocular diplopia and enophthalmos.",
    "index": 55
  },
  {
    "id": "q-56",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q9"
    ],
    "isRepeat": false,
    "stem": "The primary cause of uveitis is:",
    "options": [
      {
        "letter": "A",
        "text": "Infection"
      },
      {
        "letter": "B",
        "text": "Autoimmune"
      },
      {
        "letter": "C",
        "text": "Trauma"
      },
      {
        "letter": "D",
        "text": "Idiopathic"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Idiopathic).</b><br><b>Rationale:</b> Roughly 50% of all anterior uveitis cases have no identifiable systemic or infectious cause and are classified as idiopathic.",
    "index": 56
  },
  {
    "id": "q-57",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q14"
    ],
    "isRepeat": false,
    "stem": "Uveitis is most commonly associated with which of the following systemic diseases:",
    "options": [
      {
        "letter": "A",
        "text": "Hypertension"
      },
      {
        "letter": "B",
        "text": "Rheumatoid arthritis"
      },
      {
        "letter": "C",
        "text": "Ankylosing spondylitis"
      },
      {
        "letter": "D",
        "text": "Diabetes mellitus"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Ankylosing spondylitis).</b><br><b>Rationale:</b> HLA-B27-positive Ankylosing Spondylitis is the most common systemic disease associated with acute anterior uveitis. (Rheumatoid arthritis is classically associated with Scleritis and Sjögren's dry eye, not primary iritis).",
    "index": 57
  },
  {
    "id": "q-58",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q9"
    ],
    "isRepeat": false,
    "stem": "The constant symptom in acute iridocyclitis is:",
    "options": [
      {
        "letter": "A",
        "text": "Night blindness"
      },
      {
        "letter": "B",
        "text": "Diminution of vision"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Diminution of vision).</b><br><b>Rationale:</b> Blurred/diminished vision is a constant symptom in acute iridocyclitis due to plasmoid aqueous flare, inflammatory cells, KPs, and spasm of accommodation.",
    "index": 58
  },
  {
    "id": "q-59",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q9"
    ],
    "isRepeat": false,
    "stem": "Koeppe's nodules are found in:",
    "options": [
      {
        "letter": "A",
        "text": "Granulomatous uveitis"
      },
      {
        "letter": "B",
        "text": "Exudative uveitis"
      },
      {
        "letter": "C",
        "text": "Posterior uveitis"
      },
      {
        "letter": "D",
        "text": "None of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Granulomatous uveitis).</b><br><b>Rationale:</b> Koeppe's nodules (at the pupillary border) and Busacca's nodules (on the iris surface) are cellular aggregates characteristic of granulomatous anterior uveitis (e.g., Sarcoidosis, TB).",
    "index": 59
  },
  {
    "id": "q-60",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q11"
    ],
    "isRepeat": false,
    "stem": "Behcet's disease is characterized by:",
    "options": [
      {
        "letter": "A",
        "text": "Bilateral recurrent iridocyclitis"
      },
      {
        "letter": "B",
        "text": "Recurrent oral, conjunctival, and genital ulcerations"
      },
      {
        "letter": "C",
        "text": "Recurrent hypopyon"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Behçet's disease is an HLA-B51 obliterative vasculitis presenting with the classic triad of recurrent oral aphthous ulcers, genital ulcers, and bilateral relapsing iridocyclitis with mobile hypopyon.",
    "index": 60
  },
  {
    "id": "q-61",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q21"
    ],
    "isRepeat": false,
    "stem": "The most commonly used drug in uveitis is:",
    "options": [
      {
        "letter": "A",
        "text": "Corticosteroids"
      },
      {
        "letter": "B",
        "text": "Antibiotics"
      },
      {
        "letter": "C",
        "text": "Antivirals"
      },
      {
        "letter": "D",
        "text": "Antifungals"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Corticosteroids).</b><br><b>Rationale:</b> Topical, periocular, or systemic corticosteroids are the mainstay anti-inflammatory therapy for uveitis.",
    "index": 61
  },
  {
    "id": "q-62",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q8"
    ],
    "isRepeat": false,
    "stem": "Atropine in the treatment of acute iridocyclitis:",
    "options": [
      {
        "letter": "A",
        "text": "Prevents anterior synechia"
      },
      {
        "letter": "B",
        "text": "Relieves pain and prevents posterior synechia"
      },
      {
        "letter": "C",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Relieves pain and prevents posterior synechia).</b><br><b>Rationale:</b> Atropine paralyzes the inflamed ciliary muscle (relieving aching pain) and dilates the pupil to prevent/break adhesions between the iris and anterior lens capsule (posterior synechiae).",
    "index": 62
  },
  {
    "id": "q-63",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q7"
    ],
    "isRepeat": false,
    "stem": "Rubeosis iridis is caused by:",
    "options": [
      {
        "letter": "A",
        "text": "Diabetes"
      },
      {
        "letter": "B",
        "text": "Central retinal vein occlusion"
      },
      {
        "letter": "C",
        "text": "Both"
      },
      {
        "letter": "D",
        "text": "None of the above"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Both).</b><br><b>Rationale:</b> Retinal hypoxia in Proliferative Diabetic Retinopathy and Ischemic CRVO triggers VEGF release, which diffuses anteriorly to cause neovascularization of the iris (Rubeosis iridis) and Neovascular Glaucoma.",
    "index": 63
  },
  {
    "id": "q-64",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t2",
    "topicTitle": "2.2 The Uveal Tract (Uveitis, Behçet, Rubeosis &amp; Endophthalmitis)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Uveal Tract)</span>\n    <ul>\n      <li><b>Etiology of Uveitis:</b>\n        <ul>\n          <li><b>Primary / Most Common Overall Cause of Uveitis:</b> <span class=\"buzz\">Idiopathic (~50%)</span>.</li>\n          <li><b>Most Common Systemic Disease Associated with Acute Anterior Uveitis:</b> HLA-B27 seronegative spondyloarthropathies, specifically <span class=\"buzz\">Ankylosing Spondylitis</span>.</li>\n        </ul>\n      </li>\n      <li><b>Clinical Features of Acute Iridocyclitis (Anterior Uveitis):</b>\n        <ul>\n          <li><b>Constant Symptom:</b> <span class=\"buzz\">Diminution of vision</span> (due to aqueous flare, KPs, and ciliary spasm — <b>NOT night blindness</b>!).</li>\n          <li><b>Granulomatous Uveitis Sign:</b> <span class=\"buzz\">Koeppe's nodules</span> (small nodules at the pupillary border of the iris) and Busacca's nodules (on iris stroma).</li>\n          <li><b>Behçet's Disease:</b> Characterized by <span class=\"buzz\">bilateral recurrent iridocyclitis + recurrent mobile hypopyon + recurrent oral, conjunctival, and genital ulcerations</span>.</li>\n        </ul>\n      </li>\n      <li><b>Treatment of Acute Iridocyclitis:</b>\n        <ul>\n          <li><b>Most Commonly Used Anti-inflammatory Drug:</b> <span class=\"buzz\">Corticosteroids</span>.</li>\n          <li><b>Role of Atropine (Cycloplegic/Mydriatic):</b> <span class=\"buzz\">Relieves pain (paralyzes ciliary muscle spasm) AND prevents/breaks posterior synechiae</span> (adhesions between iris and anterior lens capsule).</li>\n        </ul>\n      </li>\n      <li><b>Rubeosis Iridis (Iris Neovascularization):</b> Caused by severe retinal ischemia, most commonly <span class=\"buzz\">Proliferative Diabetic Retinopathy AND Central Retinal Vein Occlusion (CRVO)</span> → leads to Neovascular Glaucoma.</li>\n      <li><b>Endophthalmitis Definition:</b> Purulent <span class=\"buzz\">inflammation of the internal structures/cavities of the eye</span> (aqueous, vitreous, retina, uvea) sparing the sclera.</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q12"
    ],
    "isRepeat": false,
    "stem": "Endophthalmitis means:",
    "options": [
      {
        "letter": "A",
        "text": "Inflammation of internal structures of the eye"
      },
      {
        "letter": "B",
        "text": "Inflammation of external parts of the eye"
      },
      {
        "letter": "C",
        "text": "Inflammation of all eye structures"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Inflammation of internal structures of the eye).</b><br><b>Rationale:</b> Endophthalmitis is purulent inflammation of the intraocular cavities (aqueous and vitreous) and inner coats (uvea/retina) without scleral or extraocular involvement (inflammation of all eye coats + orbit is Panophthalmitis).",
    "index": 64
  },
  {
    "id": "q-65",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t3",
    "topicTitle": "2.3 The Sclera",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Sclera)</span>\n    <ul>\n      <li><b>Blue Sclera:</b> Caused by congenital thinning/abnormal collagen of the sclera allowing dark uveal/choroidal pigment to show through. Classic systemic associations: <span class=\"buzz\">Osteogenesis Imperfecta</span> and <span class=\"buzz\">Ehlers-Danlos Syndrome</span> (also Marfan syndrome and Buphthalmos).</li>\n      <li><b>Scleritis vs. Episcleritis:</b> Scleritis causes severe boring pain that wakes the patient at night and is strongly associated with <span class=\"buzz\">Rheumatoid Arthritis</span>; Episcleritis is benign, superficial, and blanches with phenylephrine.</li>\n      <li><b>Ocular Staphylomas:</b> Ectasia of outer fibrous coat lined by uvea. <span class=\"buzz\">Posterior Staphyloma</span> occurs in Pathological High Myopia and is the <b>only staphyloma with normal IOP</b>.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q38"
    ],
    "isRepeat": false,
    "stem": "Blue sclera is a feature of:",
    "options": [
      {
        "letter": "A",
        "text": "Retinoblastoma"
      },
      {
        "letter": "B",
        "text": "Wilson's disease"
      },
      {
        "letter": "C",
        "text": "Ehlers-Danlos / Osteogenesis imperfecta"
      },
      {
        "letter": "D",
        "text": "Keratoconus"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Ehlers-Danlos / Osteogenesis imperfecta).</b><br><b>Rationale:</b> Defective Type I/III collagen synthesis in Osteogenesis Imperfecta and Ehlers-Danlos syndrome leads to an abnormally thin, translucent sclera through which the underlying dark choroid is visible as a blue hue.",
    "index": 65
  },
  {
    "id": "q-66",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t4",
    "topicTitle": "2.4 The Vitreous Humor",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Vitreous)</span>\n    <ul>\n      <li><b>Vitreous Hemorrhage:</b>\n        <ul>\n          <li><b>Most Common Cause Overall:</b> <span class=\"buzz\">Proliferative Diabetic Retinopathy (PDR)</span> (rupture of fragile neovascular vessels into the vitreous cavity). (In young adults, <b>Trauma</b> and Eales' disease are most common).</li>\n          <li><b>Clinical Presentation:</b> Causes <span class=\"buzz\">sudden, painless loss of vision</span> (alongside CRAO and Retinal Detachment), floaters, and an <b>absent/dim red reflex</b> with obscured fundus view. Investigated by <b>B-scan ultrasonography</b>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q35"
    ],
    "isRepeat": false,
    "stem": "The most common cause of vitreous hemorrhage is:",
    "options": [
      {
        "letter": "A",
        "text": "Retinal detachment"
      },
      {
        "letter": "B",
        "text": "Trauma"
      },
      {
        "letter": "C",
        "text": "Proliferative diabetic retinopathy"
      },
      {
        "letter": "D",
        "text": "Hypertensive retinopathy"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Proliferative diabetic retinopathy).</b><br><b>Rationale:</b> Fragile retinal neovascularization (NVD/NVE) in Proliferative Diabetic Retinopathy is the leading overall cause of spontaneous vitreous hemorrhage.",
    "index": 66
  },
  {
    "id": "q-67",
    "moduleId": "m2",
    "moduleName": "Module 2: Dr. Ibrahim Al-Soufi",
    "topicId": "m2-t4",
    "topicTitle": "2.4 The Vitreous Humor",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (The Vitreous)</span>\n    <ul>\n      <li><b>Vitreous Hemorrhage:</b>\n        <ul>\n          <li><b>Most Common Cause Overall:</b> <span class=\"buzz\">Proliferative Diabetic Retinopathy (PDR)</span> (rupture of fragile neovascular vessels into the vitreous cavity). (In young adults, <b>Trauma</b> and Eales' disease are most common).</li>\n          <li><b>Clinical Presentation:</b> Causes <span class=\"buzz\">sudden, painless loss of vision</span> (alongside CRAO and Retinal Detachment), floaters, and an <b>absent/dim red reflex</b> with obscured fundus view. Investigated by <b>B-scan ultrasonography</b>.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q2"
    ],
    "isRepeat": false,
    "stem": "Causes of sudden loss of vision include:",
    "options": [
      {
        "letter": "A",
        "text": "Central retinal artery occlusion (CRAO)"
      },
      {
        "letter": "B",
        "text": "Severe vitreous hemorrhage"
      },
      {
        "letter": "C",
        "text": "Both A and B"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Both A and B).</b><br><b>Rationale:</b> Both Central Retinal Artery Occlusion (CRAO) and dense Vitreous Hemorrhage are classic causes of sudden, painless monocular loss of vision.",
    "index": 67
  },
  {
    "id": "q-68",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 22 Midterm - Q6",
      "Batch 20 Final - Q13"
    ],
    "isRepeat": true,
    "stem": "Diminished vision in daylight is seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Central cataract"
      },
      {
        "letter": "B",
        "text": "Peripheral cataract"
      },
      {
        "letter": "C",
        "text": "Peripheral corneal opacity"
      },
      {
        "letter": "D",
        "text": "Peripheral retinal degenerations"
      },
      {
        "letter": "E",
        "text": "Retinitis pigmentosa"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Central cataract).</b><br><b>Rationale:</b> In bright daylight, the pupil constricts (miosis) around the central opacity, blocking light entry and worsening vision (hemeralopia/day blindness). In dim light, the pupil dilates around the central cataract, improving vision.",
    "index": 68
  },
  {
    "id": "q-69",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q20"
    ],
    "isRepeat": false,
    "stem": "Which of the following most affects vision?",
    "options": [
      {
        "letter": "A",
        "text": "Posterior polar cataract"
      },
      {
        "letter": "B",
        "text": "Anterior subcapsular cataract"
      },
      {
        "letter": "C",
        "text": "Nuclear cataract"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Posterior polar cataract).</b><br><b>Rationale:</b> Posterior polar cataract is situated directly at the Nodal Point (optical center) of the eye where all principal rays cross; hence even a small opacity causes severe visual loss.",
    "index": 69
  },
  {
    "id": "q-70",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q11"
    ],
    "isRepeat": false,
    "stem": "The main visual complaint in patients with posterior subcapsular cataract is:",
    "options": [
      {
        "letter": "A",
        "text": "Loss of peripheral vision"
      },
      {
        "letter": "B",
        "text": "Glare and difficulty in reading"
      },
      {
        "letter": "C",
        "text": "Distorted vision"
      },
      {
        "letter": "D",
        "text": "Double vision"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Glare and difficulty in reading).</b><br><b>Rationale:</b> Posterior subcapsular cataract (PSC) lies along the visual axis near the nodal point. Near reading triggers accommodation-induced miosis, and bright lights scatter off the plaque, causing disabling glare and near vision loss.",
    "index": 70
  },
  {
    "id": "q-71",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q18"
    ],
    "isRepeat": false,
    "stem": "Second sight:",
    "options": [
      {
        "letter": "A",
        "text": "Presbyopic patients read better due to index hypermetropia"
      },
      {
        "letter": "B",
        "text": "Presbyopic patients read better due to index myopia"
      },
      {
        "letter": "C",
        "text": "Defective distant vision improves due to cataract changes"
      },
      {
        "letter": "D",
        "text": "None"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Presbyopic patients read better due to index myopia).</b><br><b>Rationale:</b> Nuclear sclerosis increases the refractive index of the lens nucleus, producing \"index myopia\" (myopic shift) that compensates for presbyopia and allows elderly patients to read without glasses.",
    "index": 71
  },
  {
    "id": "q-72",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q9"
    ],
    "isRepeat": false,
    "stem": "Gradual change in glasses indicates:",
    "options": [
      {
        "letter": "A",
        "text": "Keratoconus"
      },
      {
        "letter": "B",
        "text": "Cataract"
      },
      {
        "letter": "C",
        "text": "Glaucoma"
      },
      {
        "letter": "D",
        "text": "Squint"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Cataract).</b><br><b>Rationale:</b> Progressive lens sclerosis in senile cataract causes a gradual refractive shift (index myopia or hypermetropia), leading to frequent gradual changes in spectacle prescription.",
    "index": 72
  },
  {
    "id": "q-73",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q10"
    ],
    "isRepeat": false,
    "stem": "The most common type of cataract occurring due to topical steroid use is:",
    "options": [
      {
        "letter": "A",
        "text": "Posterior polar"
      },
      {
        "letter": "B",
        "text": "Posterior subcapsular"
      },
      {
        "letter": "C",
        "text": "Central"
      },
      {
        "letter": "D",
        "text": "Cortical"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Posterior subcapsular).</b><br><b>Rationale:</b> Prolonged topical or systemic corticosteroid therapy classically induces a Posterior Subcapsular Cataract (PSC).",
    "index": 73
  },
  {
    "id": "q-74",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q24"
    ],
    "isRepeat": false,
    "stem": "Rosette-shaped cataract is characteristic of:",
    "options": [
      {
        "letter": "A",
        "text": "Congenital cataract"
      },
      {
        "letter": "B",
        "text": "Diabetic cataract"
      },
      {
        "letter": "C",
        "text": "Traumatic cataract"
      },
      {
        "letter": "D",
        "text": "Senile cataract"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Traumatic cataract).</b><br><b>Rationale:</b> Blunt concussion trauma forces fluid between the lens suture lines, producing a feathery petal-like \"Rosette-shaped\" cataract in the posterior cortex.",
    "index": 74
  },
  {
    "id": "q-75",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q26"
    ],
    "isRepeat": false,
    "stem": "Sunflower cataract is classically associated with:",
    "options": [
      {
        "letter": "A",
        "text": "Wilson's disease"
      },
      {
        "letter": "B",
        "text": "Myotonic dystrophy"
      },
      {
        "letter": "C",
        "text": "Diabetes mellitus"
      },
      {
        "letter": "D",
        "text": "Age-related cataract"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Wilson's disease).</b><br><b>Rationale:</b> Copper deposition in the anterior lens capsule in Wilson's disease (or intraocular copper foreign body / chalcosis) forms a golden-brown petal-like Sunflower cataract.",
    "index": 75
  },
  {
    "id": "q-76",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q12"
    ],
    "isRepeat": false,
    "stem": "All of the following are causes of secondary cataract except:",
    "options": [
      {
        "letter": "A",
        "text": "Uveitis"
      },
      {
        "letter": "B",
        "text": "Trauma"
      },
      {
        "letter": "C",
        "text": "Blepharitis"
      },
      {
        "letter": "D",
        "text": "Corticosteroids"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Blepharitis).</b><br><b>Rationale:</b> Uveitis, trauma, and corticosteroids all cause secondary/complicated cataracts. Blepharitis is a superficial eyelid margin inflammation that does not affect the crystalline lens.",
    "index": 76
  },
  {
    "id": "q-77",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q3"
    ],
    "isRepeat": false,
    "stem": "Which of the following can cause cataract?",
    "options": [
      {
        "letter": "A",
        "text": "Retinoblastoma"
      },
      {
        "letter": "B",
        "text": "Diabetic retinopathy"
      },
      {
        "letter": "C",
        "text": "Both A and B"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Both A and B).</b><br><b>Rationale:</b> Both intraocular tumors (Retinoblastoma) and diabetes/diabetic retinopathy cause secondary complicated cataract due to disturbed intraocular metabolism.",
    "index": 77
  },
  {
    "id": "q-78",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q19"
    ],
    "isRepeat": false,
    "stem": "In children, white reflex (leukocoria) most commonly occurs in:",
    "options": [
      {
        "letter": "A",
        "text": "Retinoblastoma"
      },
      {
        "letter": "B",
        "text": "Congenital cataract"
      },
      {
        "letter": "C",
        "text": "Corneal opacity"
      },
      {
        "letter": "D",
        "text": "Persistent hyperplastic primary vitreous"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Congenital cataract).</b><br><b>Rationale:</b> Congenital cataract is the single most common overall cause of leukocoria in children, whereas Retinoblastoma is the most serious life-threatening cause that must be ruled out.",
    "index": 78
  },
  {
    "id": "q-79",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q7"
    ],
    "isRepeat": false,
    "stem": "Leukocoria (white pupillary reflex) is found in all EXCEPT:",
    "options": [
      {
        "letter": "A",
        "text": "Retinoblastoma"
      },
      {
        "letter": "B",
        "text": "Retinal detachment"
      },
      {
        "letter": "C",
        "text": "Congenital cataract"
      },
      {
        "letter": "D",
        "text": "Congenital glaucoma"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Congenital glaucoma).</b><br><b>Rationale:</b> Congenital glaucoma (Buphthalmos) presents with photophobia, epiphora, and a large hazy cornea (>13 mm), NOT leukocoria.",
    "index": 79
  },
  {
    "id": "q-80",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q14"
    ],
    "isRepeat": false,
    "stem": "White pupillary reflex is seen in all of the following except:",
    "options": [
      {
        "letter": "A",
        "text": "Optic atrophy"
      },
      {
        "letter": "B",
        "text": "Retinoblastoma"
      },
      {
        "letter": "C",
        "text": "Total retinal detachment"
      },
      {
        "letter": "D",
        "text": "Endophthalmitis"
      },
      {
        "letter": "E",
        "text": "After cataract"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Optic atrophy).</b><br><b>Rationale:</b> In optic atrophy, the ocular media (cornea, lens, vitreous) remain completely clear, so the pupil appears black and the red reflex remains red (though the optic disc itself looks pale on fundoscopy).",
    "index": 80
  },
  {
    "id": "q-81",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t1",
    "topicTitle": "3.1 Cataract Etiology, Morphology &amp; Clinical Presentations",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Types &amp; Signs)</span>\n    <ul>\n      <li><b>Visual Symptoms by Anatomical Location of Cataract (High-Yield!):</b>\n        <ul>\n          <li><span class=\"buzz\">Central / Posterior Polar / Posterior Subcapsular Cataract (PSC):</span> Causes **markedly diminished vision in bright daylight (sunlight)**, **glare**, and **difficulty in near reading**! Why? Because both bright light and near accommodation cause **pupillary constriction (miosis)**, forcing all light rays to pass strictly through the opaque central/axial zone. Furthermore, <span class=\"buzz\">Posterior Polar Cataract</span> affects vision the most because it sits right at the **Nodal Point** (optical center) of the eye.</li>\n          <li><span class=\"buzz\">Nuclear Sclerotic Cataract (\"Second Sight\"):</span> Increases the refractive index of the lens nucleus → causes **Index Myopia** (gradual shift in glasses prescription), allowing presbyopic elderly patients to read near print without reading glasses!</li>\n        </ul>\n      </li>\n      <li><b>Secondary / Complicated &amp; Specific Cataract Associations (Memorize!):</b>\n        <ul>\n          <li><b>Topical / Systemic Corticosteroids:</b> Classically cause <span class=\"buzz\">Posterior Subcapsular Cataract (PSC)</span>.</li>\n          <li><b>Blunt Ocular Trauma (Concussion):</b> Classically causes a flower/star-like <span class=\"buzz\">Rosette-shaped (stellate) cataract</span> (and Vossius pigment ring on anterior capsule).</li>\n          <li><b>Wilson's Disease (Hepatolenticular degeneration / Chalcosis):</b> Copper deposition causes <span class=\"buzz\">Sunflower Cataract</span> (+ Kayser-Fleischer corneal ring).</li>\n          <li><b>Causes of Secondary/Complicated Cataract:</b> Chronic <b>Uveitis (Iridocyclitis)</b> (#1 local cause), <b>Retinitis Pigmentosa</b>, High Myopia, <b>Retinal Detachment</b>, <b>Retinoblastoma</b>, <b>Diabetic Retinopathy / DM</b>, Trauma, and Steroids. (<span class=\"buzz\">Blepharitis</span> NEVER causes cataract!).</li>\n        </ul>\n      </li>\n      <li><b>Leukocoria (White Pupillary Reflex) &amp; Absent Red Reflex:</b>\n        <ul>\n          <li><b>Most Common Cause of Leukocoria in Children:</b> <span class=\"buzz\">Congenital Cataract</span>.</li>\n          <li><b>Leukocoria Differential Diagnosis:</b> Congenital Cataract, <b>Retinoblastoma</b> (also abolishes red reflex!), Total Retinal Detachment, Endophthalmitis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), Coats' disease, Toxocariasis, and After-cataract.</li>\n          <li><b>What does NOT cause Leukocoria?</b> <span class=\"buzz\">Congenital Glaucoma (Buphthalmos)</span> (causes large hazy cornea, not white pupil) and <span class=\"buzz\">Optic Atrophy</span> (pupil remains jet-black!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q8"
    ],
    "isRepeat": false,
    "stem": "Absence of a red reflex suggests:",
    "options": [
      {
        "letter": "A",
        "text": "Retinoblastoma"
      },
      {
        "letter": "B",
        "text": "Glaucoma"
      },
      {
        "letter": "C",
        "text": "Refractive error"
      },
      {
        "letter": "D",
        "text": "Optic neuritis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Retinoblastoma).</b><br><b>Rationale:</b> An intraocular tumor mass (Retinoblastoma) or dense media opacity (mature cataract, vitreous hemorrhage) blocks the normal orange-red fundal reflex.",
    "index": 81
  },
  {
    "id": "q-82",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t2",
    "topicTitle": "3.2 Lens-Induced Glaucoma, AC Depth &amp; Lens Dislocation",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lens-Induced Glaucoma &amp; Ectopia Lentis)</span>\n    <ul>\n      <li><b>Stages of Cortical Senile Cataract &amp; Anterior Chamber (AC) Depth:</b>\n        <ul>\n          <li><b>Immature / <span class=\"buzz\">Intumescent (Swollen) Cataract</span>:</b> The cortex absorbs water and swells → pushes the iris forward → causes a <span class=\"buzz\">Shallow Anterior Chamber</span> and precipitates <span class=\"buzz\">Phacomorphic Glaucoma</span> (secondary acute angle-closure / pupillary block glaucoma)!</li>\n          <li><b>Mature Cataract:</b> Entire cortex is opaque white; lens volume returns to normal → <b>Normal AC depth</b>.</li>\n          <li><b>Hypermature (Morgagnian) Cataract:</b> Liquefied cortical lens proteins leak through an intact capsule → engulfed by macrophages that clog the open trabecular meshwork → causes <span class=\"buzz\">Phacolytic Glaucoma</span> (secondary open-angle glaucoma with a <b>Deep AC</b>).</li>\n        </ul>\n      </li>\n      <li><b>Which Cataract Does NOT Cause Glaucoma?</b> <span class=\"buzz\">Posterior Polar Cataract</span> (and Posterior Subcapsular Cataract) are thin localized opacities that neither swell nor leak protein, so they do <b>NOT</b> cause lens-induced glaucoma! (Whereas <b>Traumatic</b> and <b>Intumescent</b> cataracts do).</li>\n      <li><b>Definitive Treatment of Phacolytic / Phacomorphic Glaucoma:</b> Lower IOP medically first, followed by urgent <span class=\"buzz\">Cataract Extraction</span> (removes the offending lens!).</li>\n      <li><b>Syndromes Associated with Displaced Lens (Ectopia Lentis — Subluxation/Dislocation):</b>\n        <ul>\n          <li><b>Marfan Syndrome</b> (upward &amp; temporal subluxation), <b>Homocystinuria</b> (downward &amp; nasal), <b>Weill-Marchesani Syndrome</b> (microspherophakia with anterior dislocation), Ehlers-Danlos, and Trauma.</li>\n          <li><b>Exam Trap:</b> <span class=\"buzz\">Laurence-Moon-Biedl Syndrome</span> is associated with Retinitis Pigmentosa (polydactyly, obesity, hypogonadism), <b>NOT</b> lens dislocation!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q3"
    ],
    "isRepeat": false,
    "stem": "Most common cause of phacomorphic glaucoma:",
    "options": [
      {
        "letter": "A",
        "text": "Mature cataract"
      },
      {
        "letter": "B",
        "text": "Intumescent cataract"
      },
      {
        "letter": "C",
        "text": "Hypermature cataract"
      },
      {
        "letter": "D",
        "text": "Posterior subcapsular cataract"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Intumescent cataract).</b><br><b>Rationale:</b> An intumescent (swollen, hydrated) cataract increases anteroposterior lens thickness, causing pupillary block and secondary angle closure (Phacomorphic glaucoma). (Hypermature cataract causes Phacolytic glaucoma).",
    "index": 82
  },
  {
    "id": "q-83",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t2",
    "topicTitle": "3.2 Lens-Induced Glaucoma, AC Depth &amp; Lens Dislocation",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lens-Induced Glaucoma &amp; Ectopia Lentis)</span>\n    <ul>\n      <li><b>Stages of Cortical Senile Cataract &amp; Anterior Chamber (AC) Depth:</b>\n        <ul>\n          <li><b>Immature / <span class=\"buzz\">Intumescent (Swollen) Cataract</span>:</b> The cortex absorbs water and swells → pushes the iris forward → causes a <span class=\"buzz\">Shallow Anterior Chamber</span> and precipitates <span class=\"buzz\">Phacomorphic Glaucoma</span> (secondary acute angle-closure / pupillary block glaucoma)!</li>\n          <li><b>Mature Cataract:</b> Entire cortex is opaque white; lens volume returns to normal → <b>Normal AC depth</b>.</li>\n          <li><b>Hypermature (Morgagnian) Cataract:</b> Liquefied cortical lens proteins leak through an intact capsule → engulfed by macrophages that clog the open trabecular meshwork → causes <span class=\"buzz\">Phacolytic Glaucoma</span> (secondary open-angle glaucoma with a <b>Deep AC</b>).</li>\n        </ul>\n      </li>\n      <li><b>Which Cataract Does NOT Cause Glaucoma?</b> <span class=\"buzz\">Posterior Polar Cataract</span> (and Posterior Subcapsular Cataract) are thin localized opacities that neither swell nor leak protein, so they do <b>NOT</b> cause lens-induced glaucoma! (Whereas <b>Traumatic</b> and <b>Intumescent</b> cataracts do).</li>\n      <li><b>Definitive Treatment of Phacolytic / Phacomorphic Glaucoma:</b> Lower IOP medically first, followed by urgent <span class=\"buzz\">Cataract Extraction</span> (removes the offending lens!).</li>\n      <li><b>Syndromes Associated with Displaced Lens (Ectopia Lentis — Subluxation/Dislocation):</b>\n        <ul>\n          <li><b>Marfan Syndrome</b> (upward &amp; temporal subluxation), <b>Homocystinuria</b> (downward &amp; nasal), <b>Weill-Marchesani Syndrome</b> (microspherophakia with anterior dislocation), Ehlers-Danlos, and Trauma.</li>\n          <li><b>Exam Trap:</b> <span class=\"buzz\">Laurence-Moon-Biedl Syndrome</span> is associated with Retinitis Pigmentosa (polydactyly, obesity, hypogonadism), <b>NOT</b> lens dislocation!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q14"
    ],
    "isRepeat": false,
    "stem": "Shallow anterior chamber (A/C) can occur in:",
    "options": [
      {
        "letter": "A",
        "text": "Mature cataract"
      },
      {
        "letter": "B",
        "text": "Immature cataract"
      },
      {
        "letter": "C",
        "text": "Hypermature cataract"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Immature cataract).</b><br><b>Rationale:</b> During the immature (intumescent) stage, the lens absorbs water and swells, pushing the iris anteriorly and shallowing the anterior chamber. (Mature cataract has normal AC depth; hypermature shrunken cataract has a deep AC).",
    "index": 83
  },
  {
    "id": "q-84",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t2",
    "topicTitle": "3.2 Lens-Induced Glaucoma, AC Depth &amp; Lens Dislocation",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lens-Induced Glaucoma &amp; Ectopia Lentis)</span>\n    <ul>\n      <li><b>Stages of Cortical Senile Cataract &amp; Anterior Chamber (AC) Depth:</b>\n        <ul>\n          <li><b>Immature / <span class=\"buzz\">Intumescent (Swollen) Cataract</span>:</b> The cortex absorbs water and swells → pushes the iris forward → causes a <span class=\"buzz\">Shallow Anterior Chamber</span> and precipitates <span class=\"buzz\">Phacomorphic Glaucoma</span> (secondary acute angle-closure / pupillary block glaucoma)!</li>\n          <li><b>Mature Cataract:</b> Entire cortex is opaque white; lens volume returns to normal → <b>Normal AC depth</b>.</li>\n          <li><b>Hypermature (Morgagnian) Cataract:</b> Liquefied cortical lens proteins leak through an intact capsule → engulfed by macrophages that clog the open trabecular meshwork → causes <span class=\"buzz\">Phacolytic Glaucoma</span> (secondary open-angle glaucoma with a <b>Deep AC</b>).</li>\n        </ul>\n      </li>\n      <li><b>Which Cataract Does NOT Cause Glaucoma?</b> <span class=\"buzz\">Posterior Polar Cataract</span> (and Posterior Subcapsular Cataract) are thin localized opacities that neither swell nor leak protein, so they do <b>NOT</b> cause lens-induced glaucoma! (Whereas <b>Traumatic</b> and <b>Intumescent</b> cataracts do).</li>\n      <li><b>Definitive Treatment of Phacolytic / Phacomorphic Glaucoma:</b> Lower IOP medically first, followed by urgent <span class=\"buzz\">Cataract Extraction</span> (removes the offending lens!).</li>\n      <li><b>Syndromes Associated with Displaced Lens (Ectopia Lentis — Subluxation/Dislocation):</b>\n        <ul>\n          <li><b>Marfan Syndrome</b> (upward &amp; temporal subluxation), <b>Homocystinuria</b> (downward &amp; nasal), <b>Weill-Marchesani Syndrome</b> (microspherophakia with anterior dislocation), Ehlers-Danlos, and Trauma.</li>\n          <li><b>Exam Trap:</b> <span class=\"buzz\">Laurence-Moon-Biedl Syndrome</span> is associated with Retinitis Pigmentosa (polydactyly, obesity, hypogonadism), <b>NOT</b> lens dislocation!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q6"
    ],
    "isRepeat": false,
    "stem": "All the following cataracts can cause glaucoma except:",
    "options": [
      {
        "letter": "A",
        "text": "Traumatic cataract"
      },
      {
        "letter": "B",
        "text": "Posterior polar cataract"
      },
      {
        "letter": "C",
        "text": "Intumescent cataract"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Posterior polar cataract).</b><br><b>Rationale:</b> Traumatic cataract (lens particle/phacoanaphylactic) and intumescent cataract (phacomorphic) cause secondary glaucoma, whereas a localized posterior polar cataract does not alter lens volume or leak protein.",
    "index": 84
  },
  {
    "id": "q-85",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t2",
    "topicTitle": "3.2 Lens-Induced Glaucoma, AC Depth &amp; Lens Dislocation",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lens-Induced Glaucoma &amp; Ectopia Lentis)</span>\n    <ul>\n      <li><b>Stages of Cortical Senile Cataract &amp; Anterior Chamber (AC) Depth:</b>\n        <ul>\n          <li><b>Immature / <span class=\"buzz\">Intumescent (Swollen) Cataract</span>:</b> The cortex absorbs water and swells → pushes the iris forward → causes a <span class=\"buzz\">Shallow Anterior Chamber</span> and precipitates <span class=\"buzz\">Phacomorphic Glaucoma</span> (secondary acute angle-closure / pupillary block glaucoma)!</li>\n          <li><b>Mature Cataract:</b> Entire cortex is opaque white; lens volume returns to normal → <b>Normal AC depth</b>.</li>\n          <li><b>Hypermature (Morgagnian) Cataract:</b> Liquefied cortical lens proteins leak through an intact capsule → engulfed by macrophages that clog the open trabecular meshwork → causes <span class=\"buzz\">Phacolytic Glaucoma</span> (secondary open-angle glaucoma with a <b>Deep AC</b>).</li>\n        </ul>\n      </li>\n      <li><b>Which Cataract Does NOT Cause Glaucoma?</b> <span class=\"buzz\">Posterior Polar Cataract</span> (and Posterior Subcapsular Cataract) are thin localized opacities that neither swell nor leak protein, so they do <b>NOT</b> cause lens-induced glaucoma! (Whereas <b>Traumatic</b> and <b>Intumescent</b> cataracts do).</li>\n      <li><b>Definitive Treatment of Phacolytic / Phacomorphic Glaucoma:</b> Lower IOP medically first, followed by urgent <span class=\"buzz\">Cataract Extraction</span> (removes the offending lens!).</li>\n      <li><b>Syndromes Associated with Displaced Lens (Ectopia Lentis — Subluxation/Dislocation):</b>\n        <ul>\n          <li><b>Marfan Syndrome</b> (upward &amp; temporal subluxation), <b>Homocystinuria</b> (downward &amp; nasal), <b>Weill-Marchesani Syndrome</b> (microspherophakia with anterior dislocation), Ehlers-Danlos, and Trauma.</li>\n          <li><b>Exam Trap:</b> <span class=\"buzz\">Laurence-Moon-Biedl Syndrome</span> is associated with Retinitis Pigmentosa (polydactyly, obesity, hypogonadism), <b>NOT</b> lens dislocation!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q4"
    ],
    "isRepeat": false,
    "stem": "Phakolytic glaucoma is best treated by:",
    "options": [
      {
        "letter": "A",
        "text": "Cataract extraction"
      },
      {
        "letter": "B",
        "text": "Fistulizing operation"
      },
      {
        "letter": "C",
        "text": "Cyclo-destructive procedure"
      },
      {
        "letter": "D",
        "text": "Miotics and beta blockers"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Cataract extraction).</b><br><b>Rationale:</b> Phacolytic glaucoma is caused by trabecular obstruction from leaking hypermature lens proteins; definitive cure requires removing the hypermature lens (cataract extraction) after initial medical IOP reduction.",
    "index": 85
  },
  {
    "id": "q-86",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t2",
    "topicTitle": "3.2 Lens-Induced Glaucoma, AC Depth &amp; Lens Dislocation",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Lens-Induced Glaucoma &amp; Ectopia Lentis)</span>\n    <ul>\n      <li><b>Stages of Cortical Senile Cataract &amp; Anterior Chamber (AC) Depth:</b>\n        <ul>\n          <li><b>Immature / <span class=\"buzz\">Intumescent (Swollen) Cataract</span>:</b> The cortex absorbs water and swells → pushes the iris forward → causes a <span class=\"buzz\">Shallow Anterior Chamber</span> and precipitates <span class=\"buzz\">Phacomorphic Glaucoma</span> (secondary acute angle-closure / pupillary block glaucoma)!</li>\n          <li><b>Mature Cataract:</b> Entire cortex is opaque white; lens volume returns to normal → <b>Normal AC depth</b>.</li>\n          <li><b>Hypermature (Morgagnian) Cataract:</b> Liquefied cortical lens proteins leak through an intact capsule → engulfed by macrophages that clog the open trabecular meshwork → causes <span class=\"buzz\">Phacolytic Glaucoma</span> (secondary open-angle glaucoma with a <b>Deep AC</b>).</li>\n        </ul>\n      </li>\n      <li><b>Which Cataract Does NOT Cause Glaucoma?</b> <span class=\"buzz\">Posterior Polar Cataract</span> (and Posterior Subcapsular Cataract) are thin localized opacities that neither swell nor leak protein, so they do <b>NOT</b> cause lens-induced glaucoma! (Whereas <b>Traumatic</b> and <b>Intumescent</b> cataracts do).</li>\n      <li><b>Definitive Treatment of Phacolytic / Phacomorphic Glaucoma:</b> Lower IOP medically first, followed by urgent <span class=\"buzz\">Cataract Extraction</span> (removes the offending lens!).</li>\n      <li><b>Syndromes Associated with Displaced Lens (Ectopia Lentis — Subluxation/Dislocation):</b>\n        <ul>\n          <li><b>Marfan Syndrome</b> (upward &amp; temporal subluxation), <b>Homocystinuria</b> (downward &amp; nasal), <b>Weill-Marchesani Syndrome</b> (microspherophakia with anterior dislocation), Ehlers-Danlos, and Trauma.</li>\n          <li><b>Exam Trap:</b> <span class=\"buzz\">Laurence-Moon-Biedl Syndrome</span> is associated with Retinitis Pigmentosa (polydactyly, obesity, hypogonadism), <b>NOT</b> lens dislocation!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 22 Midterm - Q8",
      "Batch 20 Final - Q15"
    ],
    "isRepeat": true,
    "stem": "Displaced lens occurs in the following EXCEPT:",
    "options": [
      {
        "letter": "A",
        "text": "Marfan syndrome"
      },
      {
        "letter": "B",
        "text": "Laurence-Moon-Biedl syndrome"
      },
      {
        "letter": "C",
        "text": "Weill-Marchesani syndrome"
      },
      {
        "letter": "D",
        "text": "Homocystinuria"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Laurence-Moon-Biedl syndrome).</b><br><b>Rationale:</b> Marfan, Weill-Marchesani, and Homocystinuria are the classic systemic causes of congenital ectopia lentis (lens subluxation/dislocation). Laurence-Moon-Biedl syndrome causes pigmentary retinopathy, not lens displacement.",
    "index": 86
  },
  {
    "id": "q-87",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t3",
    "topicTitle": "3.3 Cataract Surgery, IOL Placement &amp; Post-Op YAG Laser",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Surgery &amp; PCO)</span>\n    <ul>\n      <li><b>Primary Indication for Cataract Extraction Today:</b> We do <b>NOT</b> wait for a cataract to mature! Surgery is indicated whenever an <span class=\"buzz\">early/immature cataract compromises the patient's daily visual activities</span> (or for medical/fundus view indications).</li>\n      <li><b>Ideal Intraocular Lens (IOL) Position:</b> After Phacoemulsification or ECCE, the ideal anatomical site for Posterior Chamber IOL (PCIOL) implantation is inside the <span class=\"buzz\">Capsular Bag (\"In-the-bag\" placement)</span>.</li>\n      <li><b>Posterior Capsule Opacification (PCO / \"After-Cataract\"):</b>\n        <ul>\n          <li><b>Pathology:</b> The most common late complication after ECCE/Phacoemulsification (due to proliferation of equatorial lens epithelial cells onto the posterior capsule forming <b>Elschnig's pearls</b> or fibrosis).</li>\n          <li><b>Treatment of Choice (Top Repeated Question — 4 Exams!):</b> Non-invasive laser opening of the posterior capsule (Posterior Capsulotomy) using the photodisruptive <span class=\"buzz\">Nd:YAG Laser</span>!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q18"
    ],
    "isRepeat": false,
    "stem": "Indication of cataract extraction is:",
    "options": [
      {
        "letter": "A",
        "text": "Patient should wait until cataract matures"
      },
      {
        "letter": "B",
        "text": "Early cataract but it compromises patient daily activities"
      },
      {
        "letter": "C",
        "text": "Anterior polar cataract"
      },
      {
        "letter": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Early cataract but it compromises patient daily activities).</b><br><b>Rationale:</b> With modern phacoemulsification, cataract extraction is indicated as soon as visual impairment interferes with the patient's occupation, driving, reading, or daily lifestyle.",
    "index": 87
  },
  {
    "id": "q-88",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t3",
    "topicTitle": "3.3 Cataract Surgery, IOL Placement &amp; Post-Op YAG Laser",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Surgery &amp; PCO)</span>\n    <ul>\n      <li><b>Primary Indication for Cataract Extraction Today:</b> We do <b>NOT</b> wait for a cataract to mature! Surgery is indicated whenever an <span class=\"buzz\">early/immature cataract compromises the patient's daily visual activities</span> (or for medical/fundus view indications).</li>\n      <li><b>Ideal Intraocular Lens (IOL) Position:</b> After Phacoemulsification or ECCE, the ideal anatomical site for Posterior Chamber IOL (PCIOL) implantation is inside the <span class=\"buzz\">Capsular Bag (\"In-the-bag\" placement)</span>.</li>\n      <li><b>Posterior Capsule Opacification (PCO / \"After-Cataract\"):</b>\n        <ul>\n          <li><b>Pathology:</b> The most common late complication after ECCE/Phacoemulsification (due to proliferation of equatorial lens epithelial cells onto the posterior capsule forming <b>Elschnig's pearls</b> or fibrosis).</li>\n          <li><b>Treatment of Choice (Top Repeated Question — 4 Exams!):</b> Non-invasive laser opening of the posterior capsule (Posterior Capsulotomy) using the photodisruptive <span class=\"buzz\">Nd:YAG Laser</span>!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q17"
    ],
    "isRepeat": false,
    "stem": "The ideal position for an intraocular lens (IOL) after phacoemulsification is:",
    "options": [
      {
        "letter": "A",
        "text": "Anterior chamber"
      },
      {
        "letter": "B",
        "text": "Posterior chamber"
      },
      {
        "letter": "C",
        "text": "Capsular bag"
      },
      {
        "letter": "D",
        "text": "Iris fixated"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Capsular bag).</b><br><b>Rationale:</b> Placing the PCIOL directly inside the intact capsular bag (\"in-the-bag\") provides the most stable centration, physiological optical position, and lowest risk of uveitis or glaucoma.",
    "index": 88
  },
  {
    "id": "q-89",
    "moduleId": "m3",
    "moduleName": "Module 3: Dr. Fouad Al-Khayyat",
    "topicId": "m3-t3",
    "topicTitle": "3.3 Cataract Surgery, IOL Placement &amp; Post-Op YAG Laser",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Cataract Surgery &amp; PCO)</span>\n    <ul>\n      <li><b>Primary Indication for Cataract Extraction Today:</b> We do <b>NOT</b> wait for a cataract to mature! Surgery is indicated whenever an <span class=\"buzz\">early/immature cataract compromises the patient's daily visual activities</span> (or for medical/fundus view indications).</li>\n      <li><b>Ideal Intraocular Lens (IOL) Position:</b> After Phacoemulsification or ECCE, the ideal anatomical site for Posterior Chamber IOL (PCIOL) implantation is inside the <span class=\"buzz\">Capsular Bag (\"In-the-bag\" placement)</span>.</li>\n      <li><b>Posterior Capsule Opacification (PCO / \"After-Cataract\"):</b>\n        <ul>\n          <li><b>Pathology:</b> The most common late complication after ECCE/Phacoemulsification (due to proliferation of equatorial lens epithelial cells onto the posterior capsule forming <b>Elschnig's pearls</b> or fibrosis).</li>\n          <li><b>Treatment of Choice (Top Repeated Question — 4 Exams!):</b> Non-invasive laser opening of the posterior capsule (Posterior Capsulotomy) using the photodisruptive <span class=\"buzz\">Nd:YAG Laser</span>!</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 4 Exams!",
      "Batch 23 Midterm - Q15",
      "Batch 22 Midterm - Q3 &amp; Q17",
      "Batch 20 Final - Q16"
    ],
    "isRepeat": true,
    "stem": "Which laser is used for posterior capsulotomy (treatment of After-cataract / Posterior capsule opacification in post-cataract surgery)?",
    "options": [
      {
        "letter": "A",
        "text": "Diode laser (or To remove cataract completely)"
      },
      {
        "letter": "B",
        "text": "Carbon dioxide laser (or Open-angle glaucoma)"
      },
      {
        "letter": "C",
        "text": "Excimer laser (or Retinal detachment)"
      },
      {
        "letter": "D",
        "text": "YAG laser (To treat posterior capsule opacification / After cataract)"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Nd:YAG laser — To treat posterior capsule opacification / After cataract).</b><br><b>Rationale:</b> Nd:YAG laser photodisruption creates a clear central opening in an opacified posterior lens capsule (After-cataract / PCO) following ECCE or Phacoemulsification.",
    "index": 89
  },
  {
    "id": "q-90",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q12"
    ],
    "isRepeat": false,
    "stem": "Photoreceptor cells are absent in which retinal area?",
    "options": [
      {
        "letter": "A",
        "text": "Macula"
      },
      {
        "letter": "B",
        "text": "Fovea"
      },
      {
        "letter": "C",
        "text": "Optic disc"
      },
      {
        "letter": "D",
        "text": "Nasal retina"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Optic disc).</b><br><b>Rationale:</b> The optic nerve head (optic disc) consists solely of unmyelinated ganglion cell axons exiting the globe through the lamina cribrosa and contains no rods or cones, creating the physiological blind spot.",
    "index": 90
  },
  {
    "id": "q-91",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q15"
    ],
    "isRepeat": false,
    "stem": "The test used to detect color vision:",
    "options": [
      {
        "letter": "A",
        "text": "Snellen chart"
      },
      {
        "letter": "B",
        "text": "Ishihara color test"
      },
      {
        "letter": "C",
        "text": "Schirmer test"
      },
      {
        "letter": "D",
        "text": "Amsler grid"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Ishihara color test).</b><br><b>Rationale:</b> Ishihara pseudoisochromatic plates test red-green color vision (dyschromatopsia is an early sensitive sign of optic nerve disease). Snellen = visual acuity; Schirmer = dry eye; Amsler grid = macular function.",
    "index": 91
  },
  {
    "id": "q-92",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q4",
      "Batch 20 Midterm - Q10"
    ],
    "isRepeat": true,
    "stem": "A 35-year-old woman presents with sudden/rapid onset of unilateral vision loss and pain on eye movement (up and in), with an afferent pupillary conduction defect. The most likely diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Optic neuritis"
      },
      {
        "letter": "B",
        "text": "Glaucoma / Papilledema"
      },
      {
        "letter": "C",
        "text": "Anterior ischemic optic neuropathy"
      },
      {
        "letter": "D",
        "text": "Central retinal artery occlusion"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Optic neuritis).</b> <i>(Option A in Batch 23 Midterm; Option C in Batch 20 Midterm).</i><br><b>Rationale:</b> Rapid unilateral visual loss in a young adult accompanied by ocular pain on eye movement and a Relative Afferent Pupillary Defect (RAPD) is the classic triad of Acute Optic Neuritis (retrobulbar neuritis).",
    "index": 92
  },
  {
    "id": "q-93",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q19",
      "Batch 23 Final - Q5"
    ],
    "isRepeat": true,
    "stem": "Relative afferent pupillary defect (RAPD / APD) in one eye is classically seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Glaucoma / Dry eye"
      },
      {
        "letter": "B",
        "text": "Cataract"
      },
      {
        "letter": "C",
        "text": "Optic neuritis"
      },
      {
        "letter": "D",
        "text": "Myopia / Peripheral retinal detachment"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Optic neuritis).</b> <i>(Option A in Batch 23 Midterm; Option C in Batch 23 Final).</i><br><b>Rationale:</b> RAPD reflects asymmetric conduction along the anterior afferent visual pathway, most characteristically seen in unilateral Optic Neuritis. Media opacities like cataract NEVER cause an RAPD.",
    "index": 93
  },
  {
    "id": "q-94",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q40"
    ],
    "isRepeat": false,
    "stem": "A Relative afferent pupillary defect (RAPD) is also called:",
    "options": [
      {
        "letter": "A",
        "text": "Argyll Robertson pupil"
      },
      {
        "letter": "B",
        "text": "Hutchinson pupil"
      },
      {
        "letter": "C",
        "text": "Marcus Gunn pupil"
      },
      {
        "letter": "D",
        "text": "Adie's tonic pupil"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Marcus Gunn pupil).</b><br><b>Rationale:</b> Marcus Gunn pupil is the eponym for Relative Afferent Pupillary Defect (RAPD), demonstrated clinically by paradoxical dilation of both pupils when the flashlight swings from the normal eye to the diseased eye.",
    "index": 94
  },
  {
    "id": "q-95",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q37"
    ],
    "isRepeat": false,
    "stem": "Which drug is known to cause optic neuritis as an adverse effect?",
    "options": [
      {
        "letter": "A",
        "text": "Isoniazid"
      },
      {
        "letter": "B",
        "text": "Rifampicin"
      },
      {
        "letter": "C",
        "text": "Ethambutol"
      },
      {
        "letter": "D",
        "text": "Pyrazinamide"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Ethambutol).</b><br><b>Rationale:</b> Ethambutol causes dose-dependent retrobulbar toxic optic neuropathy presenting with bilateral central/centrocecal scotoma and early red-green color vision loss.",
    "index": 95
  },
  {
    "id": "q-96",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q2"
    ],
    "isRepeat": false,
    "stem": "Papilledema is caused by:",
    "options": [
      {
        "letter": "A",
        "text": "Optic neuritis"
      },
      {
        "letter": "B",
        "text": "Raised intracranial pressure"
      },
      {
        "letter": "C",
        "text": "Central retinal vein occlusion"
      },
      {
        "letter": "D",
        "text": "Retinal detachment"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Raised intracranial pressure).</b><br><b>Rationale:</b> By definition, the term \"Papilledema\" is reserved specifically for passive bilateral optic disc swelling secondary to raised intracranial pressure (transmitted along the subarachnoid space of the optic nerve sheath).",
    "index": 96
  },
  {
    "id": "q-97",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q6"
    ],
    "isRepeat": false,
    "stem": "Which of the following is NOT a feature of papilledema:",
    "options": [
      {
        "letter": "A",
        "text": "Bilateral optic disc swelling"
      },
      {
        "letter": "B",
        "text": "Vision loss (Early stage)"
      },
      {
        "letter": "C",
        "text": "Enlarged blind spot"
      },
      {
        "letter": "D",
        "text": "Headache"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Vision loss — Early stage).</b><br><b>Rationale:</b> Central visual acuity remains completely normal (6/6) in early and established papilledema; this is the single most important clinical feature differentiating early papilledema from bilateral papillitis!",
    "index": 97
  },
  {
    "id": "q-98",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q22"
    ],
    "isRepeat": false,
    "stem": "Common symptom with papilledema:",
    "options": [
      {
        "letter": "A",
        "text": "Pain"
      },
      {
        "letter": "B",
        "text": "Diplopia"
      },
      {
        "letter": "C",
        "text": "Visual field defect"
      },
      {
        "letter": "D",
        "text": "Photophobia"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Visual field defect).</b><br><b>Rationale:</b> Papilledema causes enlargement of the physiological blind spot early on, followed by progressive concentric peripheral visual field constriction in chronic stages.",
    "index": 98
  },
  {
    "id": "q-99",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q7"
    ],
    "isRepeat": false,
    "stem": "The type of optic atrophy that follows papilledema is:",
    "options": [
      {
        "letter": "A",
        "text": "Secondary optic atrophy"
      },
      {
        "letter": "B",
        "text": "Consecutive optic atrophy"
      },
      {
        "letter": "C",
        "text": "Glaucomatous optic atrophy"
      },
      {
        "letter": "D",
        "text": "Primary optic atrophy"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Secondary optic atrophy).</b><br><b>Rationale:</b> Secondary optic atrophy follows any condition preceded by optic disc swelling (chronic papilledema or papillitis), leaving a dirty-gray disc with blurred, gliotic margins.",
    "index": 99
  },
  {
    "id": "q-100",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q4"
    ],
    "isRepeat": false,
    "stem": "The characteristic feature of giant cell (temporal) arteritis is:",
    "options": [
      {
        "letter": "A",
        "text": "Bilateral papilledema"
      },
      {
        "letter": "B",
        "text": "Central retinal artery occlusion"
      },
      {
        "letter": "C",
        "text": "Jaw claudication"
      },
      {
        "letter": "D",
        "text": "Sudden onset headache"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Jaw claudication).</b><br><b>Rationale:</b> Jaw claudication (ischemic pain in the masseter muscles while chewing) is the most specific systemic symptom of Giant Cell Arteritis, which threatens vision via Arteritic Anterior Ischemic Optic Neuropathy (AAION).",
    "index": 100
  },
  {
    "id": "q-101",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q1"
    ],
    "isRepeat": false,
    "stem": "A pupil that reacts to near reflex but not to light reflex is called:",
    "options": [
      {
        "letter": "A",
        "text": "Marcus Gunn pupil"
      },
      {
        "letter": "B",
        "text": "Argyll Robertson pupil"
      },
      {
        "letter": "C",
        "text": "Holmes-Adie pupil"
      },
      {
        "letter": "D",
        "text": "Hutchinson pupil"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Argyll Robertson pupil).</b><br><b>Rationale:</b> Argyll Robertson pupil (dorsal midbrain/pretectal lesion in tertiary neurosyphilis) exhibits light-near dissociation: accommodation reflex is preserved, but direct and consensual light reflexes are absent.",
    "index": 101
  },
  {
    "id": "q-102",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q1"
    ],
    "isRepeat": false,
    "stem": "Regarding Horner syndrome:",
    "options": [
      {
        "letter": "A",
        "text": "Ptosis"
      },
      {
        "letter": "B",
        "text": "Anisocoria increases in daylight"
      },
      {
        "letter": "C",
        "text": "Exophthalmos"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Ptosis).</b><br><b>Rationale:</b> Horner syndrome causes mild Ptosis (paralysis of sympathetic Müller's muscle), Miosis (anisocoria increases in the DARK, not daylight!), Anhidrosis, and apparent Enophthalmos (not exophthalmos!).",
    "index": 102
  },
  {
    "id": "q-103",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q13"
    ],
    "isRepeat": false,
    "stem": "Anisocoria that increases in dark is associated with:",
    "options": [
      {
        "letter": "A",
        "text": "Atropine"
      },
      {
        "letter": "B",
        "text": "Horner syndrome"
      },
      {
        "letter": "C",
        "text": "All of the above"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Horner syndrome).</b><br><b>Rationale:</b> In darkness, the normal pupil dilates rapidly while the sympathetic-denervated Horner pupil fails to dilate (dilation lag), causing the difference in pupil size (anisocoria) to maximize in the dark.",
    "index": 103
  },
  {
    "id": "q-104",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q10"
    ],
    "isRepeat": false,
    "stem": "Mydriasis is present in all the following except:",
    "options": [
      {
        "letter": "A",
        "text": "Third nerve lesion"
      },
      {
        "letter": "B",
        "text": "Pontine haemorrhage"
      },
      {
        "letter": "C",
        "text": "Datura poisoning"
      },
      {
        "letter": "D",
        "text": "Fourth stage of anesthesia"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Pontine haemorrhage).</b><br><b>Rationale:</b> Pontine hemorrhage interrupts descending sympathetic pathways, producing bilateral \"pinpoint\" Miosis. CN III palsy, Datura (belladonna alkaloids), and Stage IV medullary anesthesia all cause Mydriasis.",
    "index": 104
  },
  {
    "id": "q-105",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q22"
    ],
    "isRepeat": false,
    "stem": "Homonymous hemianopia results from a lesion in the:",
    "options": [
      {
        "letter": "A",
        "text": "Optic nerve"
      },
      {
        "letter": "B",
        "text": "Optic tract"
      },
      {
        "letter": "C",
        "text": "Optic chiasma"
      },
      {
        "letter": "D",
        "text": "Retina"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Optic tract).</b><br><b>Rationale:</b> Any retrochiasmal lesion (Optic tract, LGB, Optic radiations, or Visual cortex) affects crossed nasal fibers from the contralateral eye and uncrossed temporal fibers from the ipsilateral eye, producing a contralateral Homonymous Hemianopia.",
    "index": 105
  },
  {
    "id": "q-106",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t1",
    "topicTitle": "4.1 Optic Nerve, Visual Pathway &amp; Pupillary Abnormalities",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Optic Nerve &amp; Neuro-Ophthalmology)</span>\n    <ul>\n      <li><b>Optic Disc Anatomy:</b> Axons of ganglion cells exit at the Optic Disc, which completely <span class=\"buzz\">lacks photoreceptor cells</span> (producing the physiological blind spot). Color vision (a sensitive test of optic nerve function!) is tested using <span class=\"buzz\">Ishihara pseudoisochromatic plates</span>.</li>\n      <li><b>Optic Neuritis (Papillitis / Retrobulbar Neuritis) vs. Papilledema (Top Tested Comparison!):</b>\n        <ul>\n          <li><b>Optic Neuritis:</b> Young female (20–40 yrs, linked to <b>Multiple Sclerosis</b>) presenting with <span class=\"buzz\">rapid/sudden unilateral vision loss + pain on eye movement</span> (especially looking up/in due to superior/medial rectus origin pulling on the optic nerve sheath at the annulus of Zinn) + <span class=\"buzz\">Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil)</span> + dyschromatopsia (red desaturation). Drug known to cause toxic optic neuritis: anti-TB drug <span class=\"buzz\">Ethambutol</span>!</li>\n          <li><b>Papilledema:</b> Passive bilateral optic disc swelling caused by <span class=\"buzz\">Raised Intracranial Pressure (ICP)</span> (or Malignant Stage 4 Hypertension). Features: Headache, transient obscurations (amaurosis fugax), bilateral disc hyperemia/blurred margins, and <span class=\"buzz\">Visual field defect (Enlarged Blind Spot)</span>. <b>Crucial Exam Rule:</b> <span class=\"buzz\">Vision loss is NOT a feature of early-stage papilledema</span> (visual acuity remains 6/6 early on!).</li>\n          <li><b>Optic Atrophy Types:</b> Chronic Papilledema or Papillitis heals with gliosis and dirty-gray obscured disc margins called <span class=\"buzz\">Secondary Optic Atrophy</span>; Retrobulbar neuritis, MS, or chiasmal compression causes chalky-white sharply demarcated <span class=\"buzz\">Primary Optic Atrophy</span>; Retinitis pigmentosa or CRAO causes waxy <span class=\"buzz\">Consecutive Optic Atrophy</span>.</li>\n          <li><b>Giant Cell (Temporal) Arteritis:</b> Causes arteritic Anterior Ischemic Optic Neuropathy (AAION) and CRAO in elderly patients; its pathognomonic systemic feature is <span class=\"buzz\">Jaw Claudication</span> (plus scalp tenderness and high ESR/CRP).</li>\n        </ul>\n      </li>\n      <li><b>Pupillary Reflex Abnormalities (Memorize Every Eponym!):</b>\n        <ul>\n          <li><span class=\"buzz\">Marcus Gunn Pupil = Relative Afferent Pupillary Defect (RAPD):</span> Detected by swinging flashlight test; classically seen in asymmetric <b>Optic Neuritis</b> (or severe retinal disease like CRAO; <i>never caused by cataract or refractive error!</i>).</li>\n          <li><span class=\"buzz\">Argyll Robertson Pupil:</span> Small bilateral irregular pupils that <b>react to near (accommodation) reflex but do NOT react to light reflex</b> (Light-near dissociation; \"prostitute's pupil\" of <b>Neurosyphilis</b>).</li>\n          <li><span class=\"buzz\">Horner Syndrome (Oculosympathetic Palsy):</span> Triad of mild <b>Ptosis</b> (Müller's muscle) + <b>Miosis</b> + facial <b>Anhidrosis</b> + apparent Enophthalmos (<i>NEVER exophthalmos!</i>). Because the dilator pupillae is paralyzed, the affected pupil fails to dilate in dim light → <span class=\"buzz\">Anisocoria increases in the DARK</span>!</li>\n          <li><b>Causes of Mydriasis (Dilated Pupil):</b> <b>3rd nerve lesion</b>, <b>Datura/Atropine poisoning</b>, and <b>4th (medullary) stage of anesthesia</b>. <b>Exam Trap:</b> <span class=\"buzz\">Pontine Hemorrhage</span> causes bilateral **pinpoint miosis** (sympathetic disruption), NOT mydriasis!</li>\n        </ul>\n      </li>\n      <li><b>Visual Pathway Lesions:</b>\n        <ul>\n          <li><b>Optic Chiasm (Central lesion / Pituitary tumor):</b> Bitemporal hemianopia.</li>\n          <li><b>Optic Tract (or Geniculocalcarine pathway):</b> Contralateral <span class=\"buzz\">Homonymous Hemianopia</span>.</li>\n          <li><b>Temporal Lobe Lesion (Meyer's loop):</b> Contralateral superior quadrantanopia (<span class=\"buzz\">Right upper temporal / \"Pie in the sky\"</span> defect for a Left temporal lobe lesion).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q4"
    ],
    "isRepeat": false,
    "stem": "An adult patient presents with a left temporal lobe clot. After removal of the clot he suffers from left temporal lobe dysfunction. Which visual field defect is likely to occur?",
    "options": [
      {
        "letter": "A",
        "text": "Right upper temporal"
      },
      {
        "letter": "B",
        "text": "Right lower temporal"
      },
      {
        "letter": "C",
        "text": "Right upper nasal"
      },
      {
        "letter": "D",
        "text": "Right lower nasal"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Right upper temporal — \"Pie in the sky\").</b><br><b>Rationale:</b> Inferior retinal fibers sweep anteriorly through the temporal lobe (Meyer's loop). A left temporal lobe lesion causes a right homonymous superior quadrantanopia (\"Pie in the sky\"), which includes the right upper temporal visual field.",
    "index": 106
  },
  {
    "id": "q-107",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q25"
    ],
    "isRepeat": false,
    "stem": "Separation of the lamellae of the eyelid is marked by the:",
    "options": [
      {
        "letter": "A",
        "text": "Lash line"
      },
      {
        "letter": "B",
        "text": "Tarsal line"
      },
      {
        "letter": "C",
        "text": "Gray line"
      },
      {
        "letter": "D",
        "text": "Lid margin"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Gray line).</b><br><b>Rationale:</b> The gray line (muscle of Riolan) on the intermarginal strip divides the eyelid into the anterior lamella (skin + orbicularis) and posterior lamella (tarsus + conjunctiva).",
    "index": 107
  },
  {
    "id": "q-108",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 22 Midterm - Q9",
      "Batch 21 Final - Q4"
    ],
    "isRepeat": true,
    "stem": "Which is true about the Levator palpebrae superioris muscle (All are false except):",
    "options": [
      {
        "letter": "A",
        "text": "It depresses the upper lid / Present in upper and lower eyelids"
      },
      {
        "letter": "B",
        "text": "It elevates the upper lid &amp; is supplied by the 3rd cranial nerve"
      },
      {
        "letter": "C",
        "text": "Its paralysis causes lid retraction / Inserts into posterior tarsal plate"
      },
      {
        "letter": "D",
        "text": "It is supplied by the fourth cranial nerve"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Elevates the upper lid &amp; supplied by the 3rd cranial nerve).</b><br><b>Rationale:</b> The Levator palpebrae superioris is located solely in the upper eyelid, inserts into the anterior tarsal surface/skin, is innervated by the superior division of CN III, and elevates the upper lid (its paralysis causes ptosis).",
    "index": 108
  },
  {
    "id": "q-109",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q2"
    ],
    "isRepeat": false,
    "stem": "Most common cause of congenital ptosis:",
    "options": [
      {
        "letter": "A",
        "text": "Aponeurogenic"
      },
      {
        "letter": "B",
        "text": "Myogenic"
      },
      {
        "letter": "C",
        "text": "Neurogenic"
      },
      {
        "letter": "D",
        "text": "Traumatic"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Myogenic).</b><br><b>Rationale:</b> Simple congenital ptosis is most commonly myogenic (developmental dystrophic replacement of levator muscle fibers by fibrous and adipose tissue). (Aponeurogenic/involutional is the most common cause of acquired senile ptosis).",
    "index": 109
  },
  {
    "id": "q-110",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q19"
    ],
    "isRepeat": false,
    "stem": "Causes of lagophthalmos except:",
    "options": [
      {
        "letter": "A",
        "text": "Facial nerve palsy"
      },
      {
        "letter": "B",
        "text": "Proptosis"
      },
      {
        "letter": "C",
        "text": "Cicatricial eyelid changes"
      },
      {
        "letter": "D",
        "text": "Third nerve palsy"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Third nerve palsy).</b><br><b>Rationale:</b> Lagophthalmos is inability to close the eyelids (caused by CN VII palsy, severe proptosis, or cicatricial lid contraction). CN III palsy paralyzes the levator muscle, causing Ptosis (drooping/closure of the upper lid), not lagophthalmos.",
    "index": 110
  },
  {
    "id": "q-111",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q20"
    ],
    "isRepeat": false,
    "stem": "Distichiasis is defined as:",
    "options": [
      {
        "letter": "A",
        "text": "Inward turning of eyelashes"
      },
      {
        "letter": "B",
        "text": "Outward turning of eyelid"
      },
      {
        "letter": "C",
        "text": "Accessory row of eyelashes"
      },
      {
        "letter": "D",
        "text": "Loss of eyelashes"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Accessory row of eyelashes).</b><br><b>Rationale:</b> Distichiasis is an abnormal extra (second) row of eyelashes arising from metaplastic Meibomian gland orifices behind the gray line. (Loss of lashes = Madarosis; whitening of lashes = Poliosis).",
    "index": 111
  },
  {
    "id": "q-112",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q7"
    ],
    "isRepeat": false,
    "stem": "The condition where lashes rub on the conjunctiva is:",
    "options": [
      {
        "letter": "A",
        "text": "Entropion"
      },
      {
        "letter": "B",
        "text": "Ectropion"
      },
      {
        "letter": "C",
        "text": "Trichiasis"
      },
      {
        "letter": "D",
        "text": "Blepharitis"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Trichiasis).</b><br><b>Rationale:</b> Trichiasis is the posterior misdirection of eyelashes so that they rub directly against the cornea and bulbar conjunctiva while the lid margin itself remains in normal position.",
    "index": 112
  },
  {
    "id": "q-113",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q21"
    ],
    "isRepeat": false,
    "stem": "Clinical case: Hyperemic lashes matted with yellow crusts with painful ulcer. Diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Squamous blepharitis"
      },
      {
        "letter": "B",
        "text": "Ulcerative blepharitis"
      },
      {
        "letter": "C",
        "text": "Chalazion"
      },
      {
        "letter": "D",
        "text": "Hordeolum"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Ulcerative blepharitis).</b><br><b>Rationale:</b> Staphylococcal ulcerative blepharitis is characterized by matted yellow fibrinous crusts at the lash base which, when peeled off, expose small bleeding painful ulcers (unlike squamous/seborrheic blepharitis which has greasy scales without ulcers).",
    "index": 113
  },
  {
    "id": "q-114",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Midterm - Q7",
      "Batch 21 Final - Q5"
    ],
    "isRepeat": true,
    "stem": "A patient with a history of blepharitis develops a painless swelling on the eyelid (Chronic inflammation of the meibomian gland). The most likely diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Chalazion (Chronic inflammation of the meibomian gland)"
      },
      {
        "letter": "B",
        "text": "Hordeolum (Inflammation of Zeis gland)"
      },
      {
        "letter": "C",
        "text": "Dacryocystitis"
      },
      {
        "letter": "D",
        "text": "Preseptal cellulitis"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Chalazion).</b> <i>(Option A in Batch 23 Midterm; Option B in Batch 21 Final).</i><br><b>Rationale:</b> A chalazion is a chronic, painless lipogranulomatous inflammation of an obstructed Meibomian gland in the tarsal plate.",
    "index": 114
  },
  {
    "id": "q-115",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t2",
    "topicTitle": "4.2 Eyelid Disorders (Ptosis, Cilia, Blepharitis &amp; Chalazion)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Eyelids)</span>\n    <ul>\n      <li><b>Surgical Eyelid Anatomy:</b>\n        <ul>\n          <li><span class=\"buzz\">Gray Line:</span> Mucocutaneous junction on the lid margin that marks the surgical plane separating the eyelid into the **Anterior Lamella** (skin + orbicularis oculi) and **Posterior Lamella** (tarsal plate + conjunctiva).</li>\n          <li><span class=\"buzz\">Levator Palpebrae Superioris (LPS):</span> Present ONLY in the **upper eyelid**; originates from the lesser wing of sphenoid at the orbital apex; inserts into skin, anterior surface/upper border of tarsus, and superior fornix; **elevates the upper lid**; innervated by the <span class=\"buzz\">3rd Cranial Nerve (Oculomotor)</span>!</li>\n        </ul>\n      </li>\n      <li><b>Ptosis &amp; Lagophthalmos:</b>\n        <ul>\n          <li><b>Most Common Cause of Congenital Ptosis:</b> <span class=\"buzz\">Myogenic</span> (maldevelopment/dystrophy of the LPS muscle fibers).</li>\n          <li><b>Causes of Lagophthalmos (Inability to close eyelids):</b> <b>Facial nerve (CN VII) palsy</b>, <b>Proptosis</b>, and <b>Cicatricial eyelid changes</b> (burns, symblepharon). <span class=\"buzz\">Third nerve palsy</span> causes **Ptosis** (drooping/closed lid), NEVER lagophthalmos!</li>\n        </ul>\n      </li>\n      <li><b>Cilia &amp; Lid Margin Disorders:</b>\n        <ul>\n          <li><span class=\"buzz\">Trichiasis:</span> Posterior misdirection of normal eyelashes rubbing against the conjunctiva and cornea (#1 cause is Trachoma/blepharitis).</li>\n          <li><span class=\"buzz\">Distichiasis:</span> Congenital or acquired **accessory (extra) second row of eyelashes** emerging from the Meibomian gland orifices behind the gray line.</li>\n          <li><span class=\"buzz\">Ulcerative (Staphylococcal) Blepharitis:</span> Hyperemic lid margins + eyelashes matted with **yellow crusts** that leave **small bleeding, painful ulcers** when removed (complications: madarosis, trichiasis, poliosis, tylosis).</li>\n        </ul>\n      </li>\n      <li><b>Chalazion vs. Hordeolum (Stye):</b>\n        <ul>\n          <li><span class=\"buzz\">Chalazion:</span> **Painless**, chronic lipogranulomatous inflammation of the <span class=\"buzz\">Meibomian gland</span> within the tarsal plate (often preceded by posterior blepharitis). **Primary initial conservative treatment:** <span class=\"buzz\">Hot compresses</span> (and lid massage; persistent large ones require vertical tarsal incision &amp; curettage).</li>\n          <li><b>External Hordeolum (Stye):</b> Acute painful suppurative infection of <b>Zeis / Moll gland</b> at the lash follicle.</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q20"
    ],
    "isRepeat": false,
    "stem": "The primary treatment of chalazion is:",
    "options": [
      {
        "letter": "A",
        "text": "Hot compression"
      },
      {
        "letter": "B",
        "text": "Massage"
      },
      {
        "letter": "C",
        "text": "Surgical excision"
      },
      {
        "letter": "D",
        "text": "Oral antibiotics"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Hot compression).</b><br><b>Rationale:</b> Warm/hot compresses (4 times daily) melt the inspissated lipid secretions and promote drainage, serving as the primary initial conservative therapy for a chalazion.",
    "index": 115
  },
  {
    "id": "q-116",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q5"
    ],
    "isRepeat": false,
    "stem": "All extraocular muscles emerge from the apex of the orbit except:",
    "options": [
      {
        "letter": "A",
        "text": "Superior rectus"
      },
      {
        "letter": "B",
        "text": "Superior oblique"
      },
      {
        "letter": "C",
        "text": "Inferior oblique"
      },
      {
        "letter": "D",
        "text": "Inferior rectus"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Inferior oblique).</b><br><b>Rationale:</b> The inferior oblique is the only extraocular muscle that originates from the anterior floor of the orbit (maxillary bone lateral to the nasolacrimal groove) rather than the orbital apex.",
    "index": 116
  },
  {
    "id": "q-117",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q13"
    ],
    "isRepeat": false,
    "stem": "The primary intorting extraocular muscle is:",
    "options": [
      {
        "letter": "A",
        "text": "Inferior oblique"
      },
      {
        "letter": "B",
        "text": "Superior rectus"
      },
      {
        "letter": "C",
        "text": "Superior oblique"
      },
      {
        "letter": "D",
        "text": "Inferior rectus"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Superior oblique).</b><br><b>Rationale:</b> The primary action of the superior oblique muscle (CN IV) is intorsion (incycloduction), while its secondary and tertiary actions are depression and abduction.",
    "index": 117
  },
  {
    "id": "q-118",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q10"
    ],
    "isRepeat": false,
    "stem": "All are present in 3rd nerve palsy except:",
    "options": [
      {
        "letter": "A",
        "text": "Mydriasis"
      },
      {
        "letter": "B",
        "text": "Ptosis"
      },
      {
        "letter": "C",
        "text": "Deviation of eye up and out"
      },
      {
        "letter": "D",
        "text": "Deviation of eye down and out"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Deviation of eye up and out).</b><br><b>Rationale:</b> In complete CN III palsy, unopposed action of the Lateral Rectus (CN VI) and Superior Oblique (CN IV) pulls the eye \"Down and Out\" (never up and out), accompanied by ptosis and mydriasis.",
    "index": 118
  },
  {
    "id": "q-119",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q11",
      "Batch 23 Final - Q11"
    ],
    "isRepeat": true,
    "stem": "A common life-threatening cause of a 3rd cranial nerve palsy with pupil involvement is:",
    "options": [
      {
        "letter": "A",
        "text": "Diabetes mellitus / Trauma"
      },
      {
        "letter": "B",
        "text": "Intracranial (Posterior communicating artery) aneurysm"
      },
      {
        "letter": "C",
        "text": "Hypertension"
      },
      {
        "letter": "D",
        "text": "Multiple sclerosis"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Intracranial / Posterior communicating artery aneurysm).</b><br><b>Rationale:</b> Pupillomotor parasympathetic fibers travel superficially on the dorsomedial perimeter of CN III. External compression by a PCom aneurysm compromises the pupil early (\"surgical 3rd nerve palsy\"), whereas microvascular ischemia (DM/HTN) affects the central vasa nervorum and spares the pupil.",
    "index": 119
  },
  {
    "id": "q-120",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q9"
    ],
    "isRepeat": false,
    "stem": "The most common cranial nerve palsy in diabetes mellitus is:",
    "options": [
      {
        "letter": "A",
        "text": "3rd cranial nerve"
      },
      {
        "letter": "B",
        "text": "4th cranial nerve"
      },
      {
        "letter": "C",
        "text": "6th cranial nerve"
      },
      {
        "letter": "D",
        "text": "7th cranial nerve"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (3rd cranial nerve).</b><br><b>Rationale:</b> According to Kanski and the Batch 23 Final official key, ischemic microvascular palsy of the 3rd cranial nerve (pupil-sparing) is the most common diabetic cranial mononeuropathy.",
    "index": 120
  },
  {
    "id": "q-121",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q13"
    ],
    "isRepeat": false,
    "stem": "Only one of the following causes binocular diplopia:",
    "options": [
      {
        "letter": "A",
        "text": "Peripheral iridectomy"
      },
      {
        "letter": "B",
        "text": "Complete third nerve paralysis"
      },
      {
        "letter": "C",
        "text": "Sixth nerve palsy"
      },
      {
        "letter": "D",
        "text": "Subluxated lens"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Sixth nerve palsy).</b><br><b>Rationale:</b> Peripheral iridectomy and subluxated lens cause *monocular* diplopia. Complete 3rd nerve paralysis does NOT cause diplopia because complete ptosis occludes the visual axis (unless the lid is manually lifted!). Thus, only 6th nerve palsy causes manifest binocular diplopia.",
    "index": 121
  },
  {
    "id": "q-122",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q1"
    ],
    "isRepeat": false,
    "stem": "A 55-year-old man with diabetes presents with squint and 6th cranial nerve palsy. The first thing to do is:",
    "options": [
      {
        "letter": "A",
        "text": "MRI"
      },
      {
        "letter": "B",
        "text": "Refer to ophthalmology for urgent surgery"
      },
      {
        "letter": "C",
        "text": "Wait 6 months if there are no other signs"
      },
      {
        "letter": "D",
        "text": "A and B"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (MRI).</b><br><b>Rationale:</b> Per the Batch 21 Final exam key, neuroimaging (MRI) is performed to exclude intracranial compressive, pontine, or skull-base lesions before attributing an acute cranial nerve palsy solely to microvascular ischemia.",
    "index": 122
  },
  {
    "id": "q-123",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q25"
    ],
    "isRepeat": false,
    "stem": "Tendency of the eye to deviate inward is called:",
    "options": [
      {
        "letter": "A",
        "text": "Esotropia"
      },
      {
        "letter": "B",
        "text": "Exotropia"
      },
      {
        "letter": "C",
        "text": "Hypertropia"
      },
      {
        "letter": "D",
        "text": "Hypotropia"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Esotropia).</b><br><b>Rationale:</b> \"Eso-\" denotes inward (nasal/convergent) deviation; \"Exo-\" = outward (temporal/divergent); \"Hyper-\" = upward; \"Hypo-\" = downward.",
    "index": 123
  },
  {
    "id": "q-124",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q11"
    ],
    "isRepeat": false,
    "stem": "Exophoria means:",
    "options": [
      {
        "letter": "A",
        "text": "Tendency for eyes to be directed nasally"
      },
      {
        "letter": "B",
        "text": "Tendency for eyes to be directed temporally"
      },
      {
        "letter": "C",
        "text": "Tendency for eyes to deviate upward"
      },
      {
        "letter": "D",
        "text": "Tendency for eyes to deviate downward"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Tendency for eyes to be directed temporally).</b><br><b>Rationale:</b> Exophoria is a latent divergent squint (tendency of the visual axes to deviate outward/temporally when fusion is broken).",
    "index": 124
  },
  {
    "id": "q-125",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 23 Final - Q28",
      "Batch 22 Final - Q14"
    ],
    "isRepeat": true,
    "stem": "The Hirschberg test assesses (The test used to detect the angle of squint):",
    "options": [
      {
        "letter": "A",
        "text": "Accommodation / Cover-uncover test"
      },
      {
        "letter": "B",
        "text": "Angle of squint (strabismus) — Hirschberg test"
      },
      {
        "letter": "C",
        "text": "Pupil reaction / Worth 4-dot test"
      },
      {
        "letter": "D",
        "text": "Color vision / Maddox rod test"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Angle of squint — Hirschberg test).</b><br><b>Rationale:</b> The Hirschberg corneal light reflex test objectively estimates the angle of manifest strabismus (1 mm displacement from pupil center = ~7° or 15 PD).",
    "index": 125
  },
  {
    "id": "q-126",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q3"
    ],
    "isRepeat": false,
    "stem": "The primary cause of amblyopia is:",
    "options": [
      {
        "letter": "A",
        "text": "Corneal opacity"
      },
      {
        "letter": "B",
        "text": "Refractive error"
      },
      {
        "letter": "C",
        "text": "Strabismus"
      },
      {
        "letter": "D",
        "text": "Optic nerve hypoplasia"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Strabismus).</b><br><b>Rationale:</b> Unilateral constant strabismus (strabismic amblyopia due to cortical suppression of the deviating eye) is the single most common cause of amblyopia.",
    "index": 126
  },
  {
    "id": "q-127",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q20"
    ],
    "isRepeat": false,
    "stem": "Causes of squint in children include:",
    "options": [
      {
        "letter": "A",
        "text": "Congenital causes"
      },
      {
        "letter": "B",
        "text": "Retinoblastoma"
      },
      {
        "letter": "C",
        "text": "Hypermetropia"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Childhood strabismus can result from congenital/infantile neuromuscular factors, uncorrected hypermetropia (accommodative esotropia), or sensory deprivation from intraocular pathology such as Retinoblastoma (2nd most common sign of RB after leukocoria!).",
    "index": 127
  },
  {
    "id": "q-128",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q7"
    ],
    "isRepeat": false,
    "stem": "Regarding congenital squint, all are false except:",
    "options": [
      {
        "letter": "A",
        "text": "All need surgery"
      },
      {
        "letter": "B",
        "text": "Early treatment is required to avoid amblyopia"
      },
      {
        "letter": "C",
        "text": "All of the above"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Early treatment is required to avoid amblyopia).</b><br><b>Rationale:</b> Early optical correction, amblyopia occlusion therapy, and alignment during the critical period of visual development are essential to prevent permanent strabismic amblyopia.",
    "index": 128
  },
  {
    "id": "q-129",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q13"
    ],
    "isRepeat": false,
    "stem": "Strabismus in children:",
    "options": [
      {
        "letter": "A",
        "text": "All need surgery"
      },
      {
        "letter": "B",
        "text": "Some treated by glasses"
      },
      {
        "letter": "C",
        "text": "Medical treatment only in some cases"
      },
      {
        "letter": "D",
        "text": "B &amp; C"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (B &amp; C).</b><br><b>Rationale:</b> Fully refractive accommodative esotropia is corrected entirely by hyperopic spectacles and medical/orthoptic therapy (patching/cycloplegics) without requiring surgery.",
    "index": 129
  },
  {
    "id": "q-130",
    "moduleId": "m4",
    "moduleName": "Module 4: Dr. Nabil Sabr",
    "topicId": "m4-t3",
    "topicTitle": "4.3 Strabismus (Squint), Extraocular Muscles &amp; Amblyopia",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Strabismus &amp; Motility)</span>\n    <ul>\n      <li><b>Extraocular Muscle Anatomy &amp; Actions:</b>\n        <ul>\n          <li><b>Origin Exception:</b> All extraocular muscles (4 recti + superior oblique + LPS) originate from the <b>Orbital Apex (Annulus of Zinn)</b> <span class=\"buzz\">EXCEPT the Inferior Oblique</span>, which originates anteriorly from the orbital floor just lateral to the lacrimal fossa!</li>\n          <li><b>Primary Intorter of the Eye:</b> <span class=\"buzz\">Superior Oblique</span> (supplied by <b>CN IV — Trochlear nerve</b>; actions = **Intorsion**, Depression, Abduction).</li>\n        </ul>\n      </li>\n      <li><b>Cranial Nerve Palsies (CN III vs. CN VI):</b>\n        <ul>\n          <li><b>3rd Cranial Nerve (Oculomotor) Palsy:</b> Causes complete <b>Ptosis</b> + <b>Mydriasis</b> (if compressive) + eye deviated <span class=\"buzz\">Down and Out</span> (due to unopposed Lateral Rectus &amp; Superior Oblique; <i>NEVER \"up and out\"!</i>).\n            <ul>\n              <li><i>Medical (Ischemic) CN III Palsy:</i> **Most common cranial nerve palsy in Diabetes Mellitus** (typically pupil-sparing!).</li>\n              <li><i>Surgical (Compressive) CN III Palsy with **Pupil Involvement** (dilated fixed pupil):</i> Medical emergency caused by a life-threatening <span class=\"buzz\">Posterior Communicating Artery (PCom) Intracranial Aneurysm</span> compressing superficial dorsomedial parasympathetic fibers!</li>\n            </ul>\n          </li>\n          <li><b>6th Cranial Nerve (Abducens) Palsy:</b> Paralyzes Lateral Rectus (inability to abduct) → causes horizontal <span class=\"buzz\">Binocular Diplopia</span>! (<i>Why doesn't complete 3rd nerve paralysis cause diplopia initially? Because complete **Ptosis** covers the pupil!</i>). In an older diabetic man presenting with squint and CN VI palsy, the exam key states first step is **MRI** to rule out compressive/pontine pathology.</li>\n        </ul>\n      </li>\n      <li><b>Strabismus Terminology, Diagnosis &amp; Management:</b>\n        <ul>\n          <li><span class=\"buzz\">Esotropia:</span> Manifest inward (nasal) deviation of the eye. <span class=\"buzz\">Exophoria:</span> Latent tendency of the eyes to deviate **temporally (outward)**.</li>\n          <li><b>Measuring Angle of Squint:</b> Assessed clinically by the corneal light reflex <span class=\"buzz\">Hirschberg Test</span> (1 mm decentration = 7° or 15 prism diopters).</li>\n          <li><b>Causes of Childhood Squint:</b> Congenital, Hypermetropia (accommodative esotropia), and **Retinoblastoma** (sensory deprivation squint — must always examine the fundus!).</li>\n          <li><b>Amblyopia &amp; Treatment of Squint:</b> **Primary cause of Amblyopia** is <span class=\"buzz\">Strabismus</span> (followed by anisometropia). Congenital squint requires **early treatment to prevent amblyopia**. Not all childhood squints need surgery — some are treated completely by **glasses** (accommodative esotropia) and **occlusion therapy (patching the good eye)**. (<span class=\"buzz\">Steroids</span> have NO role in treating squint!).</li>\n        </ul>\n      </li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q19"
    ],
    "isRepeat": false,
    "stem": "All of the following can treat squint except:",
    "options": [
      {
        "letter": "A",
        "text": "Occlusion therapy"
      },
      {
        "letter": "B",
        "text": "Surgical correction"
      },
      {
        "letter": "C",
        "text": "Correction of refractive error"
      },
      {
        "letter": "D",
        "text": "Steroids"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Steroids).</b><br><b>Rationale:</b> The 3 pillars of strabismus management are (1) Optical correction of refractive error, (2) Occlusion therapy for amblyopia, and (3) Extraocular muscle surgery. Steroids have no role in concomitant squint.",
    "index": 130
  },
  {
    "id": "q-131",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q39"
    ],
    "isRepeat": false,
    "stem": "Normal intraocular pressure range is approximately:",
    "options": [
      {
        "letter": "A",
        "text": "8–15 mmHg"
      },
      {
        "letter": "B",
        "text": "10–21 mmHg"
      },
      {
        "letter": "C",
        "text": "15–25 mmHg"
      },
      {
        "letter": "D",
        "text": "20–30 mmHg"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (10–21 mmHg).</b><br><b>Rationale:</b> Normal physiological IOP in the general population is 10–21 mmHg (mean 16 ± 2.5 mmHg).",
    "index": 131
  },
  {
    "id": "q-132",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q33"
    ],
    "isRepeat": false,
    "stem": "Intraocular pressure (IOP) is measured by:",
    "options": [
      {
        "letter": "A",
        "text": "Gonioscopy"
      },
      {
        "letter": "B",
        "text": "Ophthalmoscopy"
      },
      {
        "letter": "C",
        "text": "Tonometry"
      },
      {
        "letter": "D",
        "text": "Pachymetry"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Tonometry).</b><br><b>Rationale:</b> Tonometry measures intraocular pressure; Gonioscopy examines the anterior chamber angle; Pachymetry measures corneal thickness.",
    "index": 132
  },
  {
    "id": "q-133",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q7"
    ],
    "isRepeat": false,
    "stem": "The most accurate method of measuring IOP is:",
    "options": [
      {
        "letter": "A",
        "text": "Digital"
      },
      {
        "letter": "B",
        "text": "Applanation"
      },
      {
        "letter": "C",
        "text": "Air-puff non-contact tonometer"
      },
      {
        "letter": "D",
        "text": "Gonioscopy"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Applanation).</b><br><b>Rationale:</b> Goldmann Applanation Tonometry (based on the Imbert-Fick principle) is the clinical gold standard and most accurate method for measuring IOP.",
    "index": 133
  },
  {
    "id": "q-134",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q8"
    ],
    "isRepeat": false,
    "stem": "Regarding glaucoma:",
    "options": [
      {
        "letter": "A",
        "text": "Optic neuropathy due to increased intraocular pressure (IOP)"
      },
      {
        "letter": "B",
        "text": "Visual field defects present"
      },
      {
        "letter": "C",
        "text": "All of the above"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (All of the above).</b><br><b>Rationale:</b> Glaucoma is defined by progressive optic neuropathy (cupping/retinal ganglion cell loss) associated with elevated IOP and corresponding visual field defects.",
    "index": 134
  },
  {
    "id": "q-135",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 24 Midterm - Q6"
    ],
    "isRepeat": false,
    "stem": "A one-month-old boy presents with photophobia, lacrimation and a large hazy cornea. The most probable diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Congenital cataract"
      },
      {
        "letter": "B",
        "text": "Congenital glaucoma (Buphthalmos)"
      },
      {
        "letter": "C",
        "text": "Keratitis"
      },
      {
        "letter": "D",
        "text": "Megalocornea"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Congenital glaucoma / Buphthalmos).</b><br><b>Rationale:</b> The classic triad of epiphora (lacrimation), photophobia, and blepharospasm in an infant combined with corneal enlargement (buphthalmos) and edema (hazy cornea) is diagnostic of Primary Congenital Glaucoma. (Megalocornea has a clear cornea and normal IOP).",
    "index": 135
  },
  {
    "id": "q-136",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q19"
    ],
    "isRepeat": false,
    "stem": "Risk factors for open-angle glaucoma include:",
    "options": [
      {
        "letter": "A",
        "text": "Age &gt; 50"
      },
      {
        "letter": "B",
        "text": "Black race"
      },
      {
        "letter": "C",
        "text": "Family history"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Older age, African/Black ancestry, positive family history, elevated IOP, thin central cornea, and high myopia are the major established risk factors for POAG.",
    "index": 136
  },
  {
    "id": "q-137",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 22 Midterm - Q15",
      "Batch 20 Final - Q18"
    ],
    "isRepeat": true,
    "stem": "All the following visual field changes occur in primary open-angle glaucoma (POAG) EXCEPT:",
    "options": [
      {
        "letter": "A",
        "text": "Arcuate scotoma"
      },
      {
        "letter": "B",
        "text": "Annular scotoma"
      },
      {
        "letter": "C",
        "text": "Nasal step of Roenne"
      },
      {
        "letter": "D",
        "text": "Binasal quadrantanopia"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Binasal quadrantanopia).</b><br><b>Rationale:</b> Retinal nerve fiber bundle damage in POAG causes paracentral, arcuate (Bjerrum), annular (double arcuate), and Roenne's nasal step defects. Binasal quadrantanopia is a neurological chiasmal defect.",
    "index": 137
  },
  {
    "id": "q-138",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 22 Midterm - Q13"
    ],
    "isRepeat": false,
    "stem": "First-line treatment of open-angle glaucoma (OAG) is:",
    "options": [
      {
        "letter": "A",
        "text": "Beta-blocker"
      },
      {
        "letter": "B",
        "text": "Pilocarpine"
      },
      {
        "letter": "C",
        "text": "Atropine"
      },
      {
        "letter": "D",
        "text": "Laser trabeculoplasty"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Beta-blocker).</b><br><b>Rationale:</b> Among the given choices, topical Beta-blockers (e.g., Timolol 0.5%, which decreases aqueous humor secretion by the ciliary epithelium) are the first-line medical therapy for POAG.",
    "index": 138
  },
  {
    "id": "q-139",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q21"
    ],
    "isRepeat": false,
    "stem": "Topical/systemic beta blockers are relatively contraindicated in patients with:",
    "options": [
      {
        "letter": "A",
        "text": "Asthma"
      },
      {
        "letter": "B",
        "text": "Congestive heart failure"
      },
      {
        "letter": "C",
        "text": "Diabetes mellitus (brittle)"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Non-selective beta-blockers (Timolol) block β2 receptors in bronchi (causing fatal bronchospasm in asthma/COPD), block β1 receptors in the heart (worsening heart failure/bradycardia), and mask hypoglycemic tachycardia in brittle diabetics.",
    "index": 139
  },
  {
    "id": "q-140",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q18"
    ],
    "isRepeat": false,
    "stem": "The mechanism of primary angle-closure glaucoma is:",
    "options": [
      {
        "letter": "A",
        "text": "Vitreous traction"
      },
      {
        "letter": "B",
        "text": "Occlusion of trabecular angle"
      },
      {
        "letter": "C",
        "text": "Ciliary hypersecretion"
      },
      {
        "letter": "D",
        "text": "Optic nerve ischemia"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Occlusion of trabecular angle).</b><br><b>Rationale:</b> In PACG, relative pupillary block bows the peripheral iris forward (iris bombé) to physically occlude the trabecular meshwork drainage angle, causing a rapid spike in IOP.",
    "index": 140
  },
  {
    "id": "q-141",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q7",
      "Batch 22 Final - Q27"
    ],
    "isRepeat": true,
    "stem": "An adult patient presents with acute painful loss of vision, red eye, lacrimation, colored halos, increased IOP, and shallow anterior chamber angle. The probable diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Hypermature cataract / Vitreous hemorrhage"
      },
      {
        "letter": "B",
        "text": "Open angle glaucoma / Retinal detachment"
      },
      {
        "letter": "C",
        "text": "Uveitis / Central serous retinopathy"
      },
      {
        "letter": "D",
        "text": "Acute closed-angle glaucoma (AACG)"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Acute closed-angle glaucoma).</b> <i>(Option D in Batch 24 Midterm; Option A in Batch 22 Final).</i><br><b>Rationale:</b> Severe ocular pain + red eye + colored halos (from corneal epithelial edema) + decreased VA + high IOP + shallow AC is the classic presentation of an acute congestive angle-closure glaucoma attack.",
    "index": 141
  },
  {
    "id": "q-142",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q17"
    ],
    "isRepeat": false,
    "stem": "Primary acute closed angle glaucoma is characterized by:",
    "options": [
      {
        "letter": "A",
        "text": "Vision diminished to hand movement"
      },
      {
        "letter": "B",
        "text": "Pinpoint constricted pupil"
      },
      {
        "letter": "C",
        "text": "Cupping of the optic disc"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Vision diminished to hand movement).</b><br><b>Rationale:</b> In an acute congestive attack, corneal edema and optic nerve ischemia reduce vision profoundly to Hand Movements (HM). The pupil is mid-dilated vertically oval (NOT pinpoint!), and optic disc cupping only develops in chronic neglected stages, not during the first acute attack.",
    "index": 142
  },
  {
    "id": "q-143",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q6"
    ],
    "isRepeat": false,
    "stem": "The first-line treatment of acute congestive glaucoma is:",
    "options": [
      {
        "letter": "A",
        "text": "Beta-blocker"
      },
      {
        "letter": "B",
        "text": "Carbonic anhydrase inhibitor"
      },
      {
        "letter": "C",
        "text": "Laser iridotomy"
      },
      {
        "letter": "D",
        "text": "Pilocarpine"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Carbonic anhydrase inhibitor).</b><br><b>Rationale:</b> Immediate systemic/IV Acetazolamide (Carbonic anhydrase inhibitor) + hyperosmotic agents are given first-line in an acute attack to rapidly lower IOP below 40 mmHg (because when IOP is &gt;50 mmHg, the iris sphincter is ischemic and paralyzed, so Pilocarpine cannot work until IOP is lowered first!).",
    "index": 143
  },
  {
    "id": "q-144",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "🔥 Repeated in 2 Exams",
      "Batch 24 Midterm - Q12",
      "Batch 22 Midterm - Q5"
    ],
    "isRepeat": true,
    "stem": "Prophylactic treatment of choice for the fellow (other) eye in angle-closure glaucoma is:",
    "options": [
      {
        "letter": "A",
        "text": "Timolol drops / Surgical peripheral iridectomy"
      },
      {
        "letter": "B",
        "text": "YAG Laser iridotomy"
      },
      {
        "letter": "C",
        "text": "Trabeculectomy / Trabeculotomy"
      },
      {
        "letter": "D",
        "text": "Pilocarpine"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (YAG Laser iridotomy).</b><br><b>Rationale:</b> Primary angle closure is a bilateral anatomical predisposition (50–75% risk of fellow eye attack within 5 years); prophylactic Nd:YAG Laser Peripheral Iridotomy (LPI) in the fellow eye is mandatory to bypass pupillary block.",
    "index": 144
  },
  {
    "id": "q-145",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t1",
    "topicTitle": "5.1 Glaucoma &amp; Intraocular Pressure (14 Unique Cards = 20 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Glaucoma)</span>\n    <ul>\n      <li><b>Intraocular Pressure (IOP) &amp; Tonometry:</b>\n        <ul>\n          <li><b>Normal IOP Range:</b> <span class=\"buzz\">10–21 mmHg</span>.</li>\n          <li><b>Measurement:</b> Measured by <span class=\"buzz\">Tonometry</span>; the <b>most accurate method (Gold Standard)</b> is <span class=\"buzz\">Goldmann Applanation Tonometry</span>. (<i>Pachymetry = corneal thickness; Gonioscopy = AC angle; Ophthalmoscopy = fundus</i>).</li>\n          <li><b>Glaucoma Definition:</b> Progressive <span class=\"buzz\">optic neuropathy due to increased IOP</span> causing characteristic optic disc cupping and <span class=\"buzz\">visual field defects</span>.</li>\n        </ul>\n      </li>\n      <li><b>Primary Open-Angle Glaucoma (POAG / Chronic Simple Glaucoma):</b>\n        <ul>\n          <li><b>Risk Factors:</b> <span class=\"buzz\">Age &gt; 50 years, Black race, Positive family history</span>, High myopia, and Diabetes.</li>\n          <li><b>Visual Field Defects in POAG:</b> Paracentral scotoma, Seidel's scotoma, <span class=\"buzz\">Arcuate (Bjerrum) scotoma</span>, <span class=\"buzz\">Roenne's nasal step</span>, and <span class=\"buzz\">Annular (ring) scotoma</span> / tubular vision. (<b>Exam Trap:</b> <span class=\"buzz\">Binasal quadrantanopia</span> or hemianopia is a neuro-ophthalmic chiasmal/tract defect and NEVER occurs in POAG!).</li>\n          <li><b>Medical Treatment:</b> First-line in Thamar exam keys is topical <span class=\"buzz\">Beta-blocker (Timolol)</span> (or Prostaglandin analogs). <b>Contraindications to Beta-blockers:</b> <span class=\"buzz\">Asthma / COPD, Congestive Heart Failure / Heart block, and Brittle Diabetes</span> (masks hypoglycemia).</li>\n        </ul>\n      </li>\n      <li><b>Primary Acute Angle-Closure (Congestive) Glaucoma (AACG):</b>\n        <ul>\n          <li><b>Mechanism:</b> Pupillary block leading to <span class=\"buzz\">occlusion of the trabecular drainage angle</span> by the peripheral iris in an eye with a <b>shallow anterior chamber</b> (hypermetropic eye).</li>\n          <li><b>Clinical Picture:</b> <span class=\"buzz\">Acute painful loss of vision (down to Hand Movements)</span> + redness, profuse lacrimation, <span class=\"buzz\">colored halos around lights</span>, stony-hard high IOP, shallow AC, and a <b>vertically oval, mid-dilated fixed pupil</b> (<i>NOT a pinpoint constricted pupil!</i>).</li>\n          <li><b>Management &amp; Drug Contraindication:</b>\n            <ul>\n              <li><i>First-line acute medical IOP reduction:</i> Systemic/IV <span class=\"buzz\">Carbonic Anhydrase Inhibitor (Acetazolamide)</span> + Hyperosmotic Mannitol + Topical Beta-blocker + Pilocarpine (miotic).</li>\n              <li><i>Prophylactic &amp; Definitive Treatment of Choice for the **Fellow (Other) Eye**:</i> <span class=\"buzz\">Nd:YAG Laser Peripheral Iridotomy (LPI)</span>!</li>\n              <li><i>Strictly Contraindicated Drug:</i> <span class=\"buzz\">Atropine (and all mydriatics)</span> — dilates the pupil, crowding the iris into the angle and worsening the attack!</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li><b>Congenital Glaucoma (Buphthalmos):</b> Presents in an infant (e.g., 1-month-old boy) with the classic triad of <span class=\"buzz\">epiphora (lacrimation), photophobia, blepharospasm</span> + <span class=\"buzz\">large hazy/cloudy cornea (&gt;13 mm)</span> due to Haab's striae and corneal edema.</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q6"
    ],
    "isRepeat": false,
    "stem": "Which drug is contraindicated in acute primary angle-closure glaucoma?",
    "options": [
      {
        "letter": "A",
        "text": "Pilocarpine"
      },
      {
        "letter": "B",
        "text": "Atropine"
      },
      {
        "letter": "C",
        "text": "Timolol"
      },
      {
        "letter": "D",
        "text": "Acetazolamide"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Atropine).</b><br><b>Rationale:</b> Mydriatics/cycloplegics like Atropine dilate the pupil and bunch up the peripheral iris tissue into the narrow drainage angle, precipitating or worsening angle closure.",
    "index": 145
  },
  {
    "id": "q-146",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 20 Midterm - Q5"
    ],
    "isRepeat": false,
    "stem": "A cardiac patient complains of sudden painless loss of vision in one eye with no perception of light. The possible diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Vitreous hemorrhage"
      },
      {
        "letter": "B",
        "text": "Optic neuritis"
      },
      {
        "letter": "C",
        "text": "Papilledema"
      },
      {
        "letter": "D",
        "text": "Central retinal artery occlusion"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Central retinal artery occlusion).</b><br><b>Rationale:</b> Cardiac emboli (from atrial fibrillation or valvular disease) lodging in the central retinal artery cause instantaneous, painless, profound monocular blindness (often down to No PL).",
    "index": 146
  },
  {
    "id": "q-147",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 22 Final - Q28"
    ],
    "isRepeat": false,
    "stem": "Cherry red spot is seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Central retinal artery occlusion (CRAO)"
      },
      {
        "letter": "B",
        "text": "Central retinal vein occlusion (CRVO)"
      },
      {
        "letter": "C",
        "text": "Optic neuritis"
      },
      {
        "letter": "D",
        "text": "Retinopathy of prematurity"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Central retinal artery occlusion — CRAO).</b><br><b>Rationale:</b> In CRAO, ischemic Cloudy swelling whitens the ganglion cell layer of the posterior pole, whereas the thin foveola (which lacks ganglion cells) allows the normal red choroidal reflex to shine through as a Cherry-Red Spot.",
    "index": 147
  },
  {
    "id": "q-148",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q5"
    ],
    "isRepeat": false,
    "stem": "In diabetic retinopathy, neovascularization occurs due to:",
    "options": [
      {
        "letter": "A",
        "text": "Increased intraocular pressure"
      },
      {
        "letter": "B",
        "text": "Retinal ischemia"
      },
      {
        "letter": "C",
        "text": "Retinal detachment"
      },
      {
        "letter": "D",
        "text": "Vitreous hemorrhage"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Retinal ischemia).</b><br><b>Rationale:</b> Capillary non-perfusion and retinal hypoxia/ischemia stimulate the ischemic retina to secrete Vascular Endothelial Growth Factor (VEGF), driving proliferative retinal neovascularization.",
    "index": 148
  },
  {
    "id": "q-149",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q14"
    ],
    "isRepeat": false,
    "stem": "Hard exudates in the retina are composed mainly of:",
    "options": [
      {
        "letter": "A",
        "text": "Proteins"
      },
      {
        "letter": "B",
        "text": "Lipids"
      },
      {
        "letter": "C",
        "text": "Hemorrhage"
      },
      {
        "letter": "D",
        "text": "Calcium"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Lipids).</b><br><b>Rationale:</b> Hard exudates are yellow, waxy intraretinal deposits of lipoproteins and lipid-laden macrophages located in the outer plexiform layer due to chronic microvascular leakage.",
    "index": 149
  },
  {
    "id": "q-150",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Midterm - Q13"
    ],
    "isRepeat": false,
    "stem": "The first sign of hypertensive retinopathy is:",
    "options": [
      {
        "letter": "A",
        "text": "Cotton wool spots"
      },
      {
        "letter": "B",
        "text": "Papilledema"
      },
      {
        "letter": "C",
        "text": "Retinal hemorrhages"
      },
      {
        "letter": "D",
        "text": "Arteriolar narrowing"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (Arteriolar narrowing).</b><br><b>Rationale:</b> The earliest autoregulatory response of retinal arterioles to systemic hypertension is generalized/focal vasoconstriction (Grade 1 arteriolar narrowing).",
    "index": 150
  },
  {
    "id": "q-151",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q15"
    ],
    "isRepeat": false,
    "stem": "Which of the following are typical signs of hypertensive retinopathy?",
    "options": [
      {
        "letter": "A",
        "text": "Cotton wool spots"
      },
      {
        "letter": "B",
        "text": "Hard exudates"
      },
      {
        "letter": "C",
        "text": "Both A and B"
      },
      {
        "letter": "D",
        "text": "Cherry red spot"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Both A and B).</b><br><b>Rationale:</b> Grade 3 hypertensive retinopathy features flame-shaped hemorrhages, cotton-wool spots (NFL ischemia), and hard exudates (often arranged as a macular star).",
    "index": 151
  },
  {
    "id": "q-152",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 20 Final - Q20"
    ],
    "isRepeat": false,
    "stem": "Which of the following is seen in the 4th stage of hypertensive retinopathy:",
    "options": [
      {
        "letter": "A",
        "text": "Arteriovenous crossing"
      },
      {
        "letter": "B",
        "text": "Papilledema"
      },
      {
        "letter": "C",
        "text": "Soft exudates"
      },
      {
        "letter": "D",
        "text": "Cotton wool spots"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Papilledema).</b><br><b>Rationale:</b> In the Keith-Wagener-Barker classification, Stage 4 (malignant) hypertensive retinopathy is defined by the addition of bilateral optic disc swelling (Papilledema) to Stage 3 changes.",
    "index": 152
  },
  {
    "id": "q-153",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q20"
    ],
    "isRepeat": false,
    "stem": "Roth spots (white-centered retinal hemorrhages) can be seen in:",
    "options": [
      {
        "letter": "A",
        "text": "Hypertension"
      },
      {
        "letter": "B",
        "text": "Diabetes mellitus"
      },
      {
        "letter": "C",
        "text": "Bacterial endocarditis"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "rationale": "<b>Correct Answer: D (All of the above).</b><br><b>Rationale:</b> Roth spots (retinal hemorrhages with a central white fibrin-platelet plug or focal ischemia) occur in subacute bacterial endocarditis, leukemia, severe anemia, hypertension, and diabetes.",
    "index": 153
  },
  {
    "id": "q-154",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "🔥 3 Related RD Questions in Batch 22 Final!",
      "Batch 22 Final - Q8, Q26 &amp; Q30"
    ],
    "isRepeat": true,
    "stem": "A patient complains of flashes of light and floaters followed by sudden painless loss of vision like a curtain falling. The most likely diagnosis is:",
    "options": [
      {
        "letter": "A",
        "text": "Central retinal artery occlusion (Painful)"
      },
      {
        "letter": "B",
        "text": "Central retinal vein occlusion (Gradual with redness)"
      },
      {
        "letter": "C",
        "text": "Retinal detachment (Painless, flashes &amp; floaters, curtain falling)"
      },
      {
        "letter": "D",
        "text": "Optic neuritis"
      }
    ],
    "answer": "C",
    "rationale": "<b>Correct Answer: C (Retinal detachment).</b><br><b>Rationale:</b> Covers 3 questions in Batch 22 Final: (Q8) Sudden loss of vision like a curtain falling = <b>Retinal detachment</b>; (Q26) Flashes of light and floaters are present in = <b>Retinal detachment</b>; (Q30) True about retinal detachment = <b>Painless</b>.",
    "index": 154
  },
  {
    "id": "q-155",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 21 Final - Q11"
    ],
    "isRepeat": false,
    "stem": "Associated with night blindness:",
    "options": [
      {
        "letter": "A",
        "text": "Retinitis pigmentosa"
      },
      {
        "letter": "B",
        "text": "Progressive myopia"
      },
      {
        "letter": "C",
        "text": "Chronic glaucoma"
      },
      {
        "letter": "D",
        "text": "All of the above"
      }
    ],
    "answer": "A",
    "rationale": "<b>Correct Answer: A (Retinitis pigmentosa).</b><br><b>Rationale:</b> Retinitis pigmentosa is a hereditary rod-cone photoreceptor dystrophy in which early degeneration of retinal rods causes Nyctalopia (night blindness) as the earliest hallmark symptom.",
    "index": 155
  },
  {
    "id": "q-156",
    "moduleId": "m5",
    "moduleName": "Module 5: Glaucoma, Retina & Emergencies",
    "topicId": "m5-t2",
    "topicTitle": "5.2 Retina &amp; Chemical Ocular Emergencies (12 Unique Cards = 15 Exam Questions)",
    "studyReview": "<span class=\"sr-title\">💡 Concise Study Review &amp; Exam Concepts (Retina &amp; Emergencies)</span>\n    <ul>\n      <li><b>Central Retinal Artery Occlusion (CRAO):</b> Presents in a cardiac/carotid/hypertensive patient with <span class=\"buzz\">sudden, painless, profound monocular loss of vision (down to No Perception of Light / Counting Fingers)</span> + RAPD + pale milky retina with a macular <span class=\"buzz\">Cherry-Red Spot</span> (intact choroidal glow seen through thin avascular foveola).</li>\n      <li><b>Diabetic &amp; Hypertensive Retinopathy:</b>\n        <ul>\n          <li><b>Diabetic Retinopathy (DR):</b> <span class=\"buzz\">Neovascularization</span> (hallmark of Proliferative DR) occurs due to <span class=\"buzz\">Retinal Ischemia</span> (VEGF release). <span class=\"buzz\">Hard exudates</span> are composed mainly of <span class=\"buzz\">Lipids</span> leaking from abnormal capillaries.</li>\n          <li><b>Hypertensive Retinopathy:</b> **1st / Earliest sign** is generalized <span class=\"buzz\">Arteriolar Narrowing</span> (vasoconstriction). Typical signs include **Cotton-wool spots** (nerve fiber layer micro-infarcts) and **Hard exudates** (macular star). **4th Stage (Malignant) Hypertensive Retinopathy** is defined by the presence of <span class=\"buzz\">Papilledema (Optic disc swelling)</span>!</li>\n          <li><b>Roth Spots (White-centered retinal hemorrhages):</b> Non-specific; seen in <span class=\"buzz\">Subacute Bacterial Endocarditis, Leukemia/Anemia, Hypertension, and Diabetes Mellitus</span>.</li>\n        </ul>\n      </li>\n      <li><b>Retinal Detachment (RD) &amp; Retinitis Pigmentosa (RP):</b>\n        <ul>\n          <li><b>Retinal Detachment:</b> Completely <span class=\"buzz\">Painless</span>; preceded by premonitory <span class=\"buzz\">Flashes of light (Photopsia) and Floaters</span>, followed by sudden visual loss described as a <span class=\"buzz\">\"black curtain / veil falling\"</span> across the field of vision.</li>\n          <li><b>Retinitis Pigmentosa:</b> Dystrophy of retinal rods presenting classically with <span class=\"buzz\">Night Blindness (Nyctalopia)</span> + tunnel vision (ring scotoma) + fundus triad of **bone-spicule pigmentation, attenuated arterioles, and waxy disc pallor**.</li>\n        </ul>\n      </li>\n      <li><b>Chemical Injury to the Eye (Alkali / Acid Burn):</b> True ophthalmic emergency; the **immediate first-line management** before any test or referral is <span class=\"buzz\">copious irrigation with normal saline or plain tap water</span>!</li>\n    </ul>",
    "tags": [
      "Batch 23 Final - Q36"
    ],
    "isRepeat": false,
    "stem": "The immediate management of chemical injury to the eye includes:",
    "options": [
      {
        "letter": "A",
        "text": "Topical steroids immediately"
      },
      {
        "letter": "B",
        "text": "Copious irrigation with saline/water"
      },
      {
        "letter": "C",
        "text": "Patching the eye"
      },
      {
        "letter": "D",
        "text": "Immediate topical antibiotics only"
      }
    ],
    "answer": "B",
    "rationale": "<b>Correct Answer: B (Copious irrigation with saline/water).</b><br><b>Rationale:</b> Immediate, continuous, copious irrigation with normal saline, Ringer's lactate, or plain tap water for at least 15–30 minutes until pH normalizes (7.0–7.4) is the single most critical sight-saving intervention in chemical burns.",
    "index": 156
  }
];
