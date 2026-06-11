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
  {
    slug: "careflow-ai",
    name: "CareFlowAI",
    role: "Cloud Developer",
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
      { label: "GitHub", url: "https://github.com/x-claimer/PronounceAI" },
    ],
  },
  {
    slug: "realtime-ecommerce-pipeline",
    name: "E-Commerce Analytics Pipeline",
    role: "Data Engineer",
    description:
      "An end-to-end streaming data pipeline that simulates a live e-commerce platform, publishing user activity events to Apache Kafka and persisting them to PostgreSQL for real-time analytics. Models a realistic conversion funnel across 20 products and 500 simulated users, with a suite of business-intelligence queries covering revenue, conversion rates, and pipeline health.",
    features: [
      "Python producer streams 1 event/second to Kafka with weighted funnel distribution (60% views, 30% add-to-cart, 10% purchases)",
      "Idempotent consumer uses ON CONFLICT DO NOTHING to guarantee exactly-once delivery into PostgreSQL",
      "Retry logic on both producer and consumer handles Kafka and PostgreSQL startup race conditions",
      "Consumer group architecture supports scaling to multiple parallel consumers without duplicate writes",
      "11 analytics queries covering revenue by category, per-product conversion rates, hourly traffic, and pipeline lag",
      "Fully containerised with Docker Compose — single command spins up Zookeeper, Kafka, and PostgreSQL",
    ],
    tech: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "kafka-python", "psycopg2"],
    links: [
      { label: "GitHub", url: "https://github.com/x-claimer/Ecommerce-Pipeline" },
    ],
  },
  {
    slug: "real-time-fraud-streaming-platform",
    name: "Real-Time Fraud Streaming Platform",
    role: "Data Engineer",
    description:
      "An enterprise-grade real-time fraud detection and streaming analytics platform that simulates high-volume financial transactions, streams events through Apache Kafka, and processes them using Spark Structured Streaming for near real-time fraud detection. The system combines rule-based scoring and optional ML inference, persists fraud outcomes into Delta Lake or Snowflake, and provides monitoring and analytics dashboards for operational visibility and fraud intelligence.",
    features: [
      "Python-based transaction generator simulates high-volume payment activity with configurable throughput and realistic fraud patterns including velocity fraud, geo anomalies, and high-value transactions",
      "Apache Kafka streaming architecture ingests and buffers live transaction events using scalable topic-based messaging",
      "Spark Structured Streaming pipeline performs schema validation, feature engineering, watermarking, checkpointing, and fault-tolerant stream processing",
      "Rule-based fraud engine generates fraud scores using transaction amount thresholds, merchant risk, velocity detection, and impossible-travel logic",
      "Optional ML fraud scoring using Random Forest or XGBoost enables hybrid fraud detection combining statistical models with business rules",
      "Delta Lake or Snowflake storage layer supports partitioned incremental writes for raw, processed, and fraud-scored transaction datasets",
      "Airflow orchestration manages pipeline startup checks, workflow dependencies, retry logic, and storage validation",
      "Prometheus and Grafana monitoring track Kafka lag, throughput, fraud rate, Spark failures, and end-to-end processing latency",
      "Docker Compose deployment provides one-command infrastructure setup for Kafka, Spark, Airflow, monitoring, and storage services",
      "Production-style engineering practices including logging, retry handling, modular architecture, automated testing, and CI/CD workflows"
    ],
    tech: [
      "Python", "Apache Kafka", "PySpark", "Spark Structured Streaming", "Apache Airflow", "Delta Lake", "Snowflake", "Docker", "Docker Compose", "Prometheus",
      "Grafana", "FastAPI", "GitHub Actions", "Pytest"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/x-claimer/Real-Time-Fraud-Streaming-Platform" },
    ],
  },
  {
  slug: "chess-engine",
  name: "Chess Engine — Play & Learn",
  role: "Full-Stack Developer",
  description:
    "A full-stack chess web application built entirely in Python and hosted on Streamlit. Play against an AI opponent powered by the Minimax algorithm with Alpha-Beta pruning, or study six classical openings on an interactive step-by-step practice board with live material tracking and captured-piece display.",
  features: [
    "AI opponent driven by Minimax search with Alpha-Beta pruning and selectable difficulty depth",
    "Position evaluation engine using material counts and piece-square tables for positional play",
    "Interactive openings library: six classical openings with step-by-step practice playback",
    "Legal-move validation, FEN parsing, and SVG board rendering via python-chess",
    "Live material advantage tracker and captured-piece display with from-square → to-square move input",
  ],
  tech: ["Python", "Streamlit", "python-chess", "Minimax", "Alpha-Beta Pruning"],
  links: [
    { label: "GitHub", url: "https://github.com/x-claimer/Chess_Game_Engine" },
  ],
  },
  // {
  //   slug: "real-time-analytics-api",
  //   name: "Real-time Analytics API",
  //   role: "Backend Developer",
  //   description:
  //     "A high-performance FastAPI service that consumes Kafka event streams and exposes real-time metrics via REST and WebSocket endpoints. Designed to power live dashboards with sub-second latency, backed by a Redis cache layer and a PostgreSQL warehouse.",
  //   features: [
  //     "Consumes Kafka topics with concurrent consumers for high throughput",
  //     "WebSocket endpoints push live updates to connected dashboard clients",
  //     "Redis caching layer reduces repeated database reads for hot metrics",
  //     "RESTful endpoints for historical queries against the PostgreSQL warehouse",
  //     "Async request handling via Python asyncio for minimal latency",
  //     "Dockerised service with health checks and graceful shutdown",
  //   ],
  //   tech: ["FastAPI", "Apache Kafka", "PostgreSQL", "Redis", "WebSockets", "Docker"],
  //   links: [
  //     { label: "GitHub", url: "" },
  //   ],
  // },
  // {
  //   slug: "ml-feature-store",
  //   name: "ML Feature Store",
  //   role: "ML Engineer",
  //   description:
  //     "A centralised feature store that supports both online and offline feature retrieval for machine learning model training and serving. Deployed on Kubernetes using Helm charts with a fully automated CI/CD pipeline.",
  //   features: [
  //     "Offline feature store backed by PostgreSQL for batch model training jobs",
  //     "Online feature store using Redis for low-latency inference-time lookups",
  //     "REST API for feature registration, retrieval, and versioning",
  //     "Kubernetes deployment managed with Helm charts for reproducible releases",
  //     "CI/CD pipeline using GitHub Actions for automated testing and deployment",
  //     "Feature drift monitoring with scheduled comparison against training distributions",
  //   ],
  //   tech: ["Python", "Docker", "Kubernetes", "Helm", "Redis", "PostgreSQL", "GitHub Actions"],
  //   links: [
  //     { label: "GitHub", url: "https://github.com/MAteeq786" },
  //   ],
  // },
];
