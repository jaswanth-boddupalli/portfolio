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

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  department: string;
  period: string;
  location: string;
  type: "current" | "doctoral" | "research" | "fellowship";
  badge?: string;
  summary: string;
  highlights: string[];
  skills: string[];
  url?: string;
  logo?: string;
}

export const PROFILE_DATA = {
  name: "Dr. Jaswanth Boddupalli, Ph.D.",
  preferredName: "Dr. Jaswanth Boddupalli",
  formalName: "Boddupalli Krishna Jaswanth",
  headline: "Postdoctoral Researcher in Plant Metabolomics, AI Digital Twins, Biosensing & In Silico Drug Discovery",
  subheadline: "Bridging the Experimental Bench with Scientific Python, AI Digital Twins & Computational Cheminformatics",
  affiliation: {
    role: "Project Associate II (Postdoc)",
    lab: "Optics and Microfluidics Instrumentation (OMI) Laboratory",
    department: "Department of Instrumentation & Applied Physics (IAP)",
    institution: "Indian Institute of Science (IISc), Bengaluru",
    directoryUrl: "https://iap.iisc.ac.in/~saisiva.gorthi/people.html",
  },
  summary:
    "Postdoctoral researcher and bio-instrumentation specialist connecting botanical micropropagation with analytical phytochemistry (GC-MS, FT-IR), cyber-physical AI digital twins (PROSAIL, PLS/XGBoost), and computational drug discovery (AutoDock Vina, RDKit, PyMOL). Conferred Ph.D. in Biotechnology (2026) and awarded University Gold Medal (1st Rank M.Sc. SVU).",
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
      logo: "/images/logos/svu_logo.png",
    },
    {
      title: "Ph.D. in Biotechnology",
      institution: "Vikrama Simhapuri University (VSU)",
      year: "2021–2026",
      badge: "Doctoral Dissertation on Secondary Metabolite Elicitation",
      accent: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
      logo: "/images/logos/vsu_logo.png",
    },
    {
      title: "Project Associate II (Postdoc)",
      institution: "Indian Institute of Science (IISc)",
      year: "2026–Present",
      badge: "Optics & Microfluidics Instrumentation Lab",
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
      logo: "/images/logos/iisc_logo.png",
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
      { name: "AI Digital Twin & Ecotoxicology", detail: "PLSRegression chemometric inversion, Tox21 AhR pathway neural surrogates, MQTT telemetry" },
      { name: "PROSAIL & Optical Biosensing", detail: "Canopy radiative transfer simulation (400–1000 nm), Latin Hypercube Sampling, XGBoost trait retrieval" },
      { name: "AutoDock Vina", detail: "Blind & targeted molecular docking, binding energy (ΔG) profiling" },
      { name: "RDKit & Cheminformatics", detail: "1,024-bit Morgan circular fingerprints, Lipinski Rule of 5, SMILES parsing, 3D conformers" },
      { name: "PyMOL & Biopython", detail: "Receptor-ligand pocket visualization, contact residues, PDB structure cleanup" },
      { name: "Scientific Python", detail: "NumPy, Pandas, SciPy, Scikit-Learn (PCA/PLS), Streamlit, Automated ANOVA & Tukey HSD" },
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
      image: "/images/lab_bench/1_extraction.jpg",
      images: [
        { src: "/images/lab_bench/1_extraction.jpg", label: "1. Extraction" },
        { src: "/images/lab_bench/2_soxhlet.jpg", label: "2. Soxhlet" },
        { src: "/images/lab_bench/3_solvent_extraction.jpg", label: "3. Solvent Extraction" },
        { src: "/images/lab_bench/4_gcms_instrumentation.jpeg", label: "4. GC-MS Instrumentation" },
      ],
      tag: "Laboratory Bench",
      caption: "Departmental instrumentation facility utilized for GC-MS and FT-IR spectral acquisitions.",
    },
    {
      title: "Aseptic Callus & Tissue Cultures",
      subtitle: "In Vitro Micropropagation & Hardening",
      image: "/images/micropropagation/1_callus_culture_ptc.jpeg",
      images: [
        { src: "/images/micropropagation/1_callus_culture_ptc.jpeg", label: "1. Callus Culture (PTC)" },
        { src: "/images/micropropagation/2_callus.jpeg", label: "2. Embryogenic Callus" },
        { src: "/images/micropropagation/3_suspension_cultures.jpeg", label: "3. Cell Suspension Cultures" },
        { src: "/images/micropropagation/4_chilli_ptc.jpeg", label: "4. Chilli Micropropagation (PTC)" },
        { src: "/images/micropropagation/5_groundnut_ptc1.jpeg", label: "5. Groundnut Micropropagation (Stage 1)" },
        { src: "/images/micropropagation/6_groundnut_ptc2.jpeg", label: "6. Groundnut Shoot Proliferation (Stage 2)" },
        { src: "/images/micropropagation/7_shadenet_caralluma_species.jpeg", label: "7. Shade Net House Acclimatization (Caralluma)" },
        { src: "/images/micropropagation/8_shadenet_maintenance.jpeg", label: "8. Shade Net House Germplasm Maintenance" },
      ],
      tag: "Micropropagation",
      caption: "Reproducible embryogenic callus induction, cell suspension cultures, and shade net house acclimatization of endangered Caralluma species and crop cultivars.",
    },
    {
      title: "CRISPR-Cas Technology & Genome Editing",
      subtitle: "Hands-on Workshop · Agri Biotech Foundation & FABA",
      image: "/images/crispr_workshop/1_crispr_cas_workshop.jpeg",
      images: [
        { src: "/images/crispr_workshop/1_crispr_cas_workshop.jpeg", label: "1. CRISPR-Cas Training Cohort" },
        { src: "/images/crispr_workshop/2_mol_bio_crispr.jpeg", label: "2. Molecular Biology & gRNA Synthesis" },
        { src: "/images/crispr_workshop/3_agrobacterium_transformation.jpeg", label: "3. Agrobacterium Transformation" },
        { src: "/images/crispr_workshop/4_crispr_workshop_session.jpeg", label: "4. Practical Bench Session" },
      ],
      tag: "Genome Editing",
      caption: "Intensive hands-on training under Prof. P. Reddanna covering guide RNA (gRNA) design, vector construction, and Agrobacterium-mediated plant transformation.",
    },
    {
      title: "Nutrient Film Technique (NFT) Hydroponics",
      subtitle: "Controlled Environment Agriculture & Growth Kinetics",
      image: "/images/hydroponics/1_nft_hydroponics_facility.jpeg",
      images: [
        { src: "/images/hydroponics/1_nft_hydroponics_facility.jpeg", label: "1. Closed-Loop NFT System Facility" },
        { src: "/images/hydroponics/2_hydroponics_channels.jpeg", label: "2. Multi-Tier Hydroponic Channels" },
        { src: "/images/hydroponics/3_nutrient_medium.jpeg", label: "3. Precision Nutrient Dosing Medium" },
        { src: "/images/hydroponics/4_spinach_nft_1.jpeg", label: "4. Spinacia oleracea Growth Trial" },
        { src: "/images/hydroponics/5_spinach_nft_2.jpeg", label: "5. Spinach Root & Canopy Dynamics" },
        { src: "/images/hydroponics/6_chilli_nft_1.jpeg", label: "6. Chili (Capsicum annuum) Vegetative Stage" },
        { src: "/images/hydroponics/7_chilli_nft_2.jpeg", label: "7. Chili Yield & Flowering Response" },
        { src: "/images/hydroponics/8_tomato_nft.jpeg", label: "8. Tomato NFT Performance Trial" },
        { src: "/images/hydroponics/9_amaranthus_nft_1.jpeg", label: "9. Amaranthus Foliar Development" },
        { src: "/images/hydroponics/10_amaranthus_nft_2.jpeg", label: "10. Amaranthus Canopy Density" },
        { src: "/images/hydroponics/11_red_amaranthus_nft.jpeg", label: "11. Red Amaranthus Pigmentation" },
      ],
      tag: "CEA Hydroponics",
      caption: "Parametric optimization and sensor-logged nutrient kinetics (EC, pH, and flow dynamics) across leafy greens, Solanaceae, and endangered botanicals in closed-loop NFT systems.",
    },
    {
      title: "Ph.D. Notification & Press Recognition",
      subtitle: "Conferred by Dr. K.I. Varaprasad Reddy (Shantha Biotechnics)",
      image: "/images/phd_completion/1_phd_completion_varaprasad_reddy.jpg",
      images: [
        { src: "/images/phd_completion/1_phd_completion_varaprasad_reddy.jpg", label: "1. Ph.D. Notification · Dr. K.I. Varaprasad Reddy" },
        { src: "/images/phd_completion/2_eenadu_news.jpeg", label: "2. Eenadu State News Feature" },
        { src: "/images/phd_completion/3_sakshi_news.jpeg", label: "3. Sakshi State News Coverage" },
        { src: "/images/phd_completion/4_andhra_jyothi_news.jpeg", label: "4. Andhra Jyothi News Article" },
        { src: "/images/phd_completion/5_visalandhra_news.jpeg", label: "5. Visalandhra Press Feature" },
      ],
      tag: "Academic Honors",
      caption: "Receiving the official Ph.D. completion notification from Shantha Biotechnics Founder & Padma Bhushan awardee Dr. K.I. Varaprasad Reddy, followed by statewide media coverage across Eenadu, Sakshi, Andhra Jyothi, and Visalandhra.",
    },
    {
      title: "University Gold Medal & Convocation",
      subtitle: "Sri Venkateswara University (SVU) · First Rank Cohort",
      image: "/images/msc_convocation/1_gold_medal_receiving_stage.jpeg",
      images: [
        { src: "/images/msc_convocation/1_gold_medal_receiving_stage.jpeg", label: "1. Receiving Gold Medal on Stage (1st Rank)" },
        { src: "/images/msc_convocation/2_gold_medal_and_certificate.jpeg", label: "2. University Gold Medal & Degree Certificate" },
      ],
      tag: "Gold Medalist",
      caption: "Awarded the prestigious Sri Venkateswara University (SVU) Gold Medal for securing First Rank across the entire Master of Science (M.Sc.) Biotechnology cohort.",
    },
  ],
  experience: [
    {
      id: "iisc-postdoc",
      role: "Project Associate II (Postdoctoral Researcher)",
      institution: "Indian Institute of Science (IISc), Bengaluru",
      department: "Optics & Microfluidics Instrumentation (OMI) Lab, Dept. of Instrumentation & Applied Physics",
      period: "Apr 2026 – Present",
      location: "Bengaluru, Karnataka, India",
      type: "current",
      badge: "Active Postdoctoral Fellow",
      logo: "/images/logos/iisc_logo.png",
      summary:
        "Leading bioanalytical instrumentation workflows, optical profiling, and spectroscopic evaluation of plant-derived bioactive therapeutics under Prof. Sai Siva Gorthi.",
      highlights: [
        "Lead high-resolution optical and spectroscopic profiling workflows for botanical secondary metabolite extracts.",
        "Engineer automated Python data pipelines integrating spectral data acquisition with cheminformatic docking databases.",
        "Mentor junior project assistants and research scholars in bioanalytical quality control, instrument calibration, and laboratory safety protocols.",
      ],
      skills: ["Bioanalytical Instrumentation", "Optical Profiling", "Scientific Python", "Spectroscopy", "Mentorship"],
      url: "https://iap.iisc.ac.in/~saisiva.gorthi/people.html",
    },
    {
      id: "vsu-doctoral-spf",
      role: "Senior Project Fellow (SPF) & Doctoral Researcher",
      institution: "Vikrama Simhapuri University (VSU)",
      department: "Department of Biotechnology",
      period: "Sep 2021 – Mar 2026",
      location: "Nellore, Andhra Pradesh, India",
      type: "doctoral",
      badge: "Ph.D. Conferred 2026",
      logo: "/images/logos/vsu_logo.png",
      summary:
        "Spearheaded doctoral investigation on in vitro propagation, somatic embryogenesis, and secondary metabolite elicitation in endangered Caralluma species under Prof. P.V.B. Reddy & Dr. C. Kiranmai.",
      highlights: [
        "Standardized time-series elicitation kinetics with Jasmonic Acid and Salicylic Acid in cell suspension cultures, significantly boosting pregnane glycoside yields.",
        "Maintained and operated departmental bio-instrumentation including GC-MS chromatography, FT-IR spectroscopy, and Soxhlet extraction units.",
        "Authored 4 peer-reviewed journal articles and a Bentham Science book chapter on medicinal plant micropropagation and conservation.",
        "Mentored 12+ Master of Science (M.Sc.) Biotechnology postgraduate students in aseptic tissue culture, hormone stoichiometry, and biostatistics.",
      ],
      skills: ["Plant Tissue Culture", "Somatic Embryogenesis", "GC-MS", "FT-IR", "Elicitation Kinetics", "Mentorship"],
    },
    {
      id: "hydroponics-investigator",
      role: "Research Investigator · Controlled Environment Agriculture",
      institution: "Vikrama Simhapuri University & Agritech Centers",
      department: "Biotechnology & Hydroponic Systems Facility",
      period: "2023 – 2025",
      location: "Andhra Pradesh, India",
      type: "research",
      badge: "Published Fieldwork",
      logo: "/images/logos/vsu_logo.png",
      summary:
        "Engineered parametric optimization frameworks for Nutrient Film Technique (NFT) hydroponics systems, modeling nutrient kinetics and growth dynamics in soilless crops.",
      highlights: [
        "Modeled electrical conductivity (EC), pH dynamics, and nutrient uptake kinetics in soilless Spinacia oleracea and chili cultivation.",
        "Published 2 peer-reviewed studies in EJBPS and Agricultural Science Digest demonstrating water-efficient cultivation.",
        "Authored the open-source Python package 'hydroponics' for automated sensor logging, nutrient kinetics, and crop yield forecasting.",
      ],
      skills: ["NFT Hydroponics", "Nutrient Kinetics", "Sensor Logging", "Python Modeling", "Resource Optimization"],
      url: "https://github.com/jaswanth-boddupalli/hydroponics",
    },
    {
      id: "svu-gold-medalist",
      role: "Master's Research Scholar (University Gold Medalist)",
      institution: "Sri Venkateswara University (SVU)",
      department: "Department of Biotechnology",
      period: "2018 – 2021",
      location: "Tirupati, Andhra Pradesh, India",
      type: "fellowship",
      badge: "University 1st Rank",
      logo: "/images/logos/svu_logo.png",
      summary:
        "Graduated First Rank across the entire university cohort in Master of Science (M.Sc.) Biotechnology, earning the prestigious University Gold Medal.",
      highlights: [
        "Awarded University Gold Medal for academic distinction and top research thesis ranking across SVU cohort.",
        "Completed advanced laboratory coursework in molecular biology, biochemistry, genetic engineering, and biostatistics.",
        "Conducted foundational research on plant secondary pathways and computational sequence alignment.",
      ],
      skills: ["Molecular Biology", "Plant Genetics", "Biostatistics", "University Gold Medal"],
    },
  ] as ExperienceItem[],
};
