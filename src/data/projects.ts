export interface Project {
  slug: string;
  name: string;
  role: string;
  description: string;
  features: string[];
  tech: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "data-pipeline-platform",
    name: "Data Pipeline Platform",
    role: "Data Engineer",
    description:
      "An end-to-end ETL pipeline built to ingest, transform, and load 10M+ records daily into a centralised data warehouse. The platform includes automated data quality checks, alerting, and lineage tracking to ensure reliable downstream analytics.",
    features: [
      "Ingests raw data from multiple sources (REST APIs, S3, databases) via Apache Airflow DAGs",
      "Distributed data processing with Apache Spark for high-throughput transformations",
      "Automated schema validation and data quality checks at each pipeline stage",
      "Centralised PostgreSQL data warehouse with optimised partitioning and indexing",
      "Alerting and monitoring via Slack notifications and custom dashboards",
      "Fully containerised with Docker and orchestrated via Docker Compose",
    ],
    tech: ["Python", "Apache Spark", "Apache Airflow", "PostgreSQL", "Docker", "AWS S3"],
    links: [
      { label: "GitHub", url: "https://github.com/MAteeq786" },
    ],
  },
  {
    slug: "real-time-analytics-api",
    name: "Real-time Analytics API",
    role: "Backend Developer",
    description:
      "A high-performance FastAPI service that consumes Kafka event streams and exposes real-time metrics via REST and WebSocket endpoints. Designed to power live dashboards with sub-second latency, backed by a Redis cache layer and a PostgreSQL warehouse.",
    features: [
      "Consumes Kafka topics with concurrent consumers for high throughput",
      "WebSocket endpoints push live updates to connected dashboard clients",
      "Redis caching layer reduces repeated database reads for hot metrics",
      "RESTful endpoints for historical queries against the PostgreSQL warehouse",
      "Async request handling via Python asyncio for minimal latency",
      "Dockerised service with health checks and graceful shutdown",
    ],
    tech: ["FastAPI", "Apache Kafka", "PostgreSQL", "Redis", "WebSockets", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/MAteeq786" },
    ],
  },
  {
    slug: "ml-feature-store",
    name: "ML Feature Store",
    role: "ML Engineer",
    description:
      "A centralised feature store that supports both online and offline feature retrieval for machine learning model training and serving. Deployed on Kubernetes using Helm charts with a fully automated CI/CD pipeline.",
    features: [
      "Offline feature store backed by PostgreSQL for batch model training jobs",
      "Online feature store using Redis for low-latency inference-time lookups",
      "REST API for feature registration, retrieval, and versioning",
      "Kubernetes deployment managed with Helm charts for reproducible releases",
      "CI/CD pipeline using GitHub Actions for automated testing and deployment",
      "Feature drift monitoring with scheduled comparison against training distributions",
    ],
    tech: ["Python", "Docker", "Kubernetes", "Helm", "Redis", "PostgreSQL", "GitHub Actions"],
    links: [
      { label: "GitHub", url: "https://github.com/MAteeq786" },
    ],
  },
  {
    slug: "diagrammer",
    name: "Diagrammer",
    role: "ML Engineer",
    description:
      "An automated pipeline that generates educational science diagrams from natural language descriptions. Combines LLM-based semantic planning with grounded diffusion modeling to produce diagrams that are both visually appealing and scientifically accurate.",
    features: [
      "LLM planner extracts entities and spatial relationships from text into structured JSON diagram plans",
      "LLM auditor validates and refines the plan for scientific correctness and consistency before rendering",
      "GLIGEN diffusion model renders layout-aware, grounded diagrams from the structured plan",
      "Post-processing pipeline enhances text clarity and contrast on generated images",
      "Evaluated with VPEVal for structural correctness and CLIPScore for semantic alignment",
    ],
    tech: ["Python", "PyTorch", "GLIGEN", "Hugging Face", "FastAPI", "Pillow", "Google Colab"],
    links: [
      { label: "GitHub", url: "https://github.com/x-claimer/Diagrammer" },
    ],
  },
  {
    slug: "pronounce-ai",
    name: "PronounceAI",
    role: "ML Engineer",
    description:
      "A pronunciation coaching app that provides phoneme-level feedback and voice cloning with accent conversion. Analyzes learner recordings across four dimensions and renders corrected audio in the speaker's own voice using their target accent.",
    features: [
      "Four-signal pronunciation scoring: phoneme accuracy, intonation, stress-rhythm, and vowel quality with per-phoneme feedback",
      "Voice cloning with accent conversion using CosyVoice 3 and Kokoro TTS in General American or Received Pronunciation",
      "Phrase library and free-text recording with actionable improvement tips and pitch overlays",
      "Voice Lab for text-to-speech with emotion control rendered in the learner's own cloned voice",
      "Local session progress tracking with no account required",
    ],
    tech: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "wav2vec2", "Whisper", "Kokoro TTS", "CosyVoice 3", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/vikranthreddimasu/PronounceAI" },
    ],
  },
  {
    slug: "careflow-ai",
    name: "CareFlowAI",
    role: "Full Stack Developer",
    description:
      "An AI-powered healthcare management platform for patients, doctors, and receptionists. Integrates an AI Nurse Assistant for health report analysis, an AI Health Tutor for medical education, and smart appointment scheduling with role-based access.",
    features: [
      "AI Nurse Assistant: upload health reports and chat with AI for instant analysis and insights",
      "AI Health Tutor: search medical terminology and get simple, clear explanations",
      "Role-based appointment scheduling for patients, doctors, and receptionists",
      "Collaborative comments on appointments with timestamps for care team coordination",
      "JWT authentication with bcrypt hashing and granular role-based permissions",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "OpenAI API", "Bcrypt"],
    links: [
      { label: "GitHub", url: "https://github.com/x-claimer/CareFlowAI" },
    ],
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    role: "Full Stack Developer",
    description:
      "A bento-style personal portfolio built with Astro and Tailwind CSS. Features smooth entry animations powered by the Motion library, a blog backed by Astro content collections, a travel tracker with an interactive globe, and a timezone card.",
    features: [
      "Bento grid layout with responsive breakpoints for mobile and desktop",
      "Entry animations using the Motion library with staggered card reveals",
      "Blog section powered by Astro content collections with RSS feed support",
      "Interactive 3D globe built with Three.js to visualise visited countries",
      "Live timezone card with real-time clock updates via client-side JavaScript",
      "Deployed on Netlify with automatic CI/CD from the GitHub repository",
    ],
    tech: ["Astro", "TypeScript", "Tailwind CSS", "Motion", "Three.js", "Netlify"],
    links: [
      { label: "GitHub", url: "https://github.com/x-claimer/Ateeq-Portfolio" },
      { label: "Live Site", url: "https://mohammed-ateeq.netlify.app" },
    ],
  },
];
