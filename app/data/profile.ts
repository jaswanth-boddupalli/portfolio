export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  type: "journal" | "chapter" | "hydroponics";
  doi?: string;
  url: string;
  authors: string;
  highlight: string;
  tags: string[];
}

export interface PipelineStage {
  step: string;
  title: string;
  subtitle: string;
  category: "wet-lab" | "analytical" | "computational";
  color: string;
  accentHex: string;
  description: string;
  bullets: string[];
  benchMoat: string;
  computationalCoupling: string;
  metrics: string;
}

export const PROFILE_DATA = {
  name: "Dr. Jaswanth Boddupalli, Ph.D.",
  preferredName: "Dr. Jaswanth Boddupalli",
  formalName: "Boddupalli Krishna Jaswanth",
  headline: "Postdoctoral Researcher in Plant Metabolomics, Bioanalytical Instrumentation & In Silico Drug Discovery",
  subheadline: "Bridging the Experimental Bench with Scientific Python & Computational Cheminformatics",
  affiliation: {
    role: "Project Associate II (Postdoc)",
    lab: "Optics and Microfluidics Instrumentation (OMI) Laboratory",
    department: "Department of Instrumentation & Applied Physics (IAP)",
    institution: "Indian Institute of Science (IISc), Bengaluru",
    directoryUrl: "https://iap.iisc.ac.in/~saisiva.gorthi/people.html",
  },
  summary:
    "Doctoral researcher and bio-instrumentation specialist connecting endangered botanical micropropagation with analytical phytochemistry (GC-MS, FT-IR) and computational drug discovery (AutoDock Vina, RDKit, PyMOL). Conferred Ph.D. in Biotechnology (2026) and awarded University Gold Medal (1st Rank M.Sc. SVU).",
  location: "Bengaluru, Karnataka, India",
  email: "jaswanthkrish96@gmail.com",
  cvPath: "/docs/Dr_Jaswanth_Boddupalli_Curriculum_Vitae.pdf",
  links: {
    scholar: "https://scholar.google.com/citations?user=VP1qsPkAAAAJ",
    researchgate: "https://www.researchgate.net/profile/Jaswanth-Boddupalli",
    frontiers: "https://loop.frontiersin.org/people/2244216/overview",
    scilit: "https://www.scilit.com/scholars/019f29bf7abe71b7a70e6dcbcfc70e59",
    hal: "https://hal.science/hal-05035867",
    medium: "https://medium.com/@jaswanthkrish96/biostatistics-240f57b72b18",
    linkedin: "https://www.linkedin.com/in/jaswanthboddupalli",
    github: "https://github.com/jaswanth-boddupalli",
  },
  credentials: [
    {
      title: "University Gold Medalist (1st Rank)",
      institution: "Sri Venkateswara University (SVU)",
      year: "2018–2021",
      badge: "First Rank across cohort in M.Sc. Biotechnology",
      accent: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300",
    },
    {
      title: "Ph.D. in Biotechnology",
      institution: "Vikrama Simhapuri University (VSU)",
      year: "2021–2026",
      badge: "Doctoral Dissertation on Secondary Metabolite Elicitation",
      accent: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
    },
    {
      title: "Project Associate II (Postdoc)",
      institution: "Indian Institute of Science (IISc)",
      year: "2026–Present",
      badge: "Optics & Microfluidics Instrumentation Lab",
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
    },
    {
      title: "CRISPR-Cas Certification",
      institution: "Agri Biotech Foundation & FABA",
      year: "2023",
      badge: "Hands-on gRNA design & genome editing under Prof. Reddanna",
      accent: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
    },
  ],
  pipelineStages: [
    {
      step: "01",
      title: "Tissue Culture",
      subtitle: "Botanical Conservation",
      category: "wet-lab",
      color: "emerald",
      accentHex: "#10b981",
      description:
        "Rescuing vulnerable botanical germplasm through rigorous explant sterilization, hormone stoichiometry, and aseptic micropropagation.",
      bullets: [
        "Somatic embryogenesis protocols in Caralluma fimbriata",
        "High-frequency multiple shoot induction in Caralluma bhupenderiana",
        "Murashige & Skoog (MS) media salt balance & hormonal balancing",
        "Explant sterilization kinetics eliminating fungal/bacterial contamination",
      ],
      benchMoat: "Hands-on mastery of recalcitrant arid succulents and endangered medicinal flora.",
      computationalCoupling: "Empirical tissue growth rate curves & statistical hormonal synergy modeling.",
      metrics: "90%+ survival and reproducible callus regeneration protocols.",
    },
    {
      step: "02",
      title: "Secondary Elicitation",
      subtitle: "Bioactive Enhancement",
      category: "wet-lab",
      color: "sky",
      accentHex: "#0284c7",
      description:
        "Simulating biotic and abiotic environmental stressors to dramatically upregulate secondary therapeutic pathways in cell suspension cultures.",
      bullets: [
        "Jasmonic Acid (JA) biotic signaling elicitation runs",
        "Salicylic Acid (SA) systemic acquired resistance triggering",
        "Cell suspension biomass growth curves & viability assays",
        "Time-course harvest kinetic optimization across 12 to 96-hour windows",
      ],
      benchMoat: "Controlled cell suspension bioreactor conditions maintaining sterile elicitor uptake.",
      computationalCoupling: "Time-series kinetic decay curves & multivariate ANOVA fold-change significance.",
      metrics: "Statistically significant yield enhancement of pregnane glycosides.",
    },
    {
      step: "03",
      title: "Analytical Metabolomics",
      subtitle: "Spectroscopic Characterization",
      category: "analytical",
      color: "indigo",
      accentHex: "#6366f1",
      description:
        "High-resolution chemical fingerprinting of elicited extracts combining Gas Chromatography-Mass Spectrometry and Fourier-Transform Infrared spectroscopy.",
      bullets: [
        "GC-MS operational chromatography & Kovats retention index calculations",
        "FT-IR functional group vibrational spectroscopy (3600–500 cm⁻¹)",
        "NIST library deconvolution of novel volatile & semi-volatile phytocompounds",
        "Automated retention time alignment & spectral peak normalization",
      ],
      benchMoat: "End-to-end extraction from Soxhlet/ultrasonic methods to spectrometer loading.",
      computationalCoupling: "Python automated data wrangling, PCA clustering & Volcano significance plots.",
      metrics: "Unambiguous spectral annotation of pharmacologically active secondary metabolites.",
    },
    {
      step: "04",
      title: "In Silico Virtual Screening",
      subtitle: "Computational Drug Discovery",
      category: "computational",
      color: "rose",
      accentHex: "#f43f5e",
      description:
        "Translating bench-discovered phytomolecules into computational lead candidates through molecular docking, binding energy modeling, and ADMET profiling.",
      bullets: [
        "AutoDock Vina blind and grid-targeted receptor-ligand docking",
        "RDKit computational cheminformatics & Lipinski Rule of 5 validation",
        "Free energy binding affinity calculation (ΔG in kcal/mol)",
        "PyMOL 3D active-site pocket mapping (hydrogen bonds & hydrophobic contacts)",
      ],
      benchMoat: "Docking targets grounded in real, experimentally elicited phytochemical isolates.",
      computationalCoupling: "Automated batch virtual screening scripts across target enzyme families.",
      metrics: "High-affinity lead candidates identified with drug-like pharmacokinetics.",
    },
  ] as PipelineStage[],
  publications: [
    {
      id: "bentham-bacopa",
      title: "Conservation of Medicinal Plant Bramhi - Bacopa monnieri (L.) Wettstein Through in vitro Cultures",
      venue: "Micropropagation of Medicinal Plants - Volume 2, Bentham Science Publishers",
      year: 2024,
      type: "chapter",
      url: "https://www.eurekaselect.com/chapter/21893",
      authors: "Jaswanth Boddupalli, P.V.B. Reddy, C. Kiranmai",
      highlight: "Comprehensive monograph chapter detailing micropropagation, conservation, and elicitation of Bacopa monnieri (ISBN: 978-981-5238-30-3).",
      tags: ["Bentham Science", "Book Chapter", "Bacopa monnieri", "Tissue Culture"],
    },
    {
      id: "ajbls-caralluma",
      title: "In vitro Strategies for the Production of Bioactive Therapeutics from Caralluma Species",
      venue: "Asian Journal of Biological and Life Sciences (AJBLS)",
      year: 2025,
      type: "journal",
      doi: "10.5530/ajbls.20251406",
      url: "https://www.ajbls.com/article/14/1/1.pdf",
      authors: "Boddupalli Krishna Jaswanth, Pichili Vijaya Bhaskar Reddy, Chadipiralla Kiranmai",
      highlight: "Translational review and experimental framework on pregnane glycoside elicitation and pharmacological bioactivity in Caralluma.",
      tags: ["AJBLS", "Peer-Reviewed", "Bioactive Therapeutics", "Caralluma"],
    },
    {
      id: "pcbmb-caralluma-bhupenderiana",
      title: "Efficient In vitro Propagation and Optimized Multiple Shoot Induction of Caralluma bhupenderiana an Endangered Medicinal Plant",
      venue: "Plant Cell Biotechnology and Molecular Biology (PCBMB) / HAL Open Science",
      year: 2025,
      doi: "10.56557/pcbmb/2025/v26i3-49252",
      url: "https://hal.science/hal-05035867",
      authors: "Boddupalli Krishna Jaswanth, Pichili Vijaya Bhaskar Reddy, Chadipiralla Kiranmai",
      highlight: "First optimized protocol for rapid shoot induction and ex vitro acclimatization of vulnerable C. bhupenderiana.",
      tags: ["PCBMB", "Open Access", "Multiple Shoot Induction", "HAL Science"],
    },
    {
      id: "ejbps-spinacia",
      title: "Optimization of Different Parameters for Cultivation of Spinacia oleracea in NFT Hydroponics",
      venue: "European Journal of Biomedical and Pharmaceutical Sciences (EJBPS)",
      year: 2024,
      url: "https://www.ejbps.com/ejbps/abstract_id/11070",
      authors: "Boddupalli Krishna Jaswanth, Pichili Vijaya Bhaskar Reddy, Chadipiralla Kiranmai",
      highlight: "Parametric optimization of nutrient concentration, pH, and flow rate for soilless cultivation of spinach.",
      tags: ["EJBPS", "Controlled Agriculture", "NFT Hydroponics", "Nutrient Kinetics"],
    },
    {
      id: "arcc-chili-hydroponics",
      title: "Evaluating the Growth Parameters of Chili in Hydroponics using the Nutrient Film Technique (NFT)",
      venue: "Agricultural Science Digest, ARCC",
      year: 2025,
      url: "https://www.researchgate.net/publication/393504425_Evaluating_the_Growth_Parameters_of_Chili_in_Hydroponics_using_the_Nutrient_Film_Technique_NFT_A_Sustainable_and_Efficient_Alternative_to_Traditional_Agriculture",
      authors: "Boddupalli Krishna Jaswanth, et al.",
      highlight: "Empirical study on yield kinetics, water conservation, and nutrient uptake efficiency under controlled NFT environments.",
      tags: ["ARCC", "Hydroponics", "Sustainable Agriculture", "Kinetic Modeling"],
    },
    {
      id: "ejbps-caralluma-ja",
      title: "Effect of Jasmonic Acid on Somatic Embryogenesis in Caralluma fimbriata",
      venue: "European Journal of Biomedical and Pharmaceutical Sciences / ResearchGate",
      year: 2024,
      url: "https://www.researchgate.net/publication/391700969_Effect_of_Jasmonic_Acid_on_Somatic_Embryogenesis_in_Caralluma_fimbriata",
      authors: "Boddupalli Krishna Jaswanth, et al.",
      highlight: "Demonstrated direct signaling trigger of jasmonic acid on embryogenic callus differentiation and yield kinetics.",
      tags: ["Elicitation", "Jasmonic Acid", "Somatic Embryogenesis"],
    },
  ] as Publication[],
  stack: {
    wetLab: [
      { name: "Plant Tissue Culture", detail: "Somatic embryogenesis, multiple shoot induction, aseptic micropropagation" },
      { name: "Secondary Elicitation", detail: "Jasmonic acid, Salicylic acid, and NaCl stress induction in suspension cultures" },
      { name: "Bio-Instrumentation", detail: "GC-MS chromatography, FT-IR spectroscopy, UV-Vis spectrophotometers" },
      { name: "Controlled Agriculture", detail: "Nutrient Film Technique (NFT) hydroponics, EC/pH kinetic dosing systems" },
    ],
    computational: [
      { name: "AutoDock Vina", detail: "Blind & targeted molecular docking, binding energy (ΔG) profiling" },
      { name: "RDKit & Cheminformatics", detail: "Lipinski Rule of 5, SMILES parsing, 2D/3D conformer generation" },
      { name: "PyMOL & Biopython", detail: "Receptor-ligand pocket visualization, contact residues, PDB structure cleanup" },
      { name: "Scientific Python", detail: "NumPy, Pandas, SciPy, Scikit-Learn (PCA), Matplotlib, Automated ANOVA & Tukey HSD" },
    ],
  },
  gallery: [
    {
      title: "ICBMCT-2024 Conference Presentation",
      subtitle: "Senate Hall, Sri Venkateswara University",
      image: "/images/conference_talk_svu.png",
      tag: "Academic Keynote",
      caption: "Presenting doctoral research on secondary metabolite elicitation and endangered botanical conservation.",
    },
    {
      title: "Jasmonic Acid Elicitation Kinetics (Figure 4)",
      subtitle: "Published Dose-Response Curves",
      image: "/images/figure_elicitation_curves.png",
      tag: "Experimental Data",
      caption: "Empirical dose-response curves showing jasmonic acid concentrations vs embryogenic callus differentiation.",
    },
    {
      title: "Bioanalytical Instrumentation Facility",
      subtitle: "Spectroscopic & Extraction Setup",
      image: "/images/lab_instrumentation.png",
      tag: "Laboratory Bench",
      caption: "Departmental instrumentation facility utilized for GC-MS and FT-IR spectral acquisitions.",
    },
    {
      title: "Aseptic Callus & Tissue Cultures",
      subtitle: "In Vitro Micropropagation",
      image: "/images/tissue_culture_callus.png",
      tag: "Micropropagation",
      caption: "Reproducible embryogenic callus induction and shoot proliferation plates under laminar flow.",
    },
  ],
};
