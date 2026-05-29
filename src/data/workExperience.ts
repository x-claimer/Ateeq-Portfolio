export interface WorkExperience {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    slug: "capgemini",
    company: "Capgemini",
    role: "Associate Consultant — Data Engineer",
    period: "Aug 2020 – Mar 2024",
    description:
      "Worked as a Data Engineer within Capgemini's engineering practice, designing and maintaining scalable ETL pipelines and data infrastructure for enterprise clients across multiple domains.",
    highlights: [
      "Built and maintained end-to-end ETL pipelines processing millions of records daily using Python and Apache Spark",
      "Designed data models and warehouse schemas in PostgreSQL to support downstream analytics and reporting",
      "Collaborated with cross-functional teams including analysts, architects, and client stakeholders to deliver data solutions on schedule",
      "Automated data quality checks and monitoring to reduce pipeline failures and improve reliability",
      "Contributed to CI/CD pipeline setup using Jenkins and Docker for consistent deployments",
    ],
    tech: ["Python", "Apache Spark", "PostgreSQL", "SQL", "Docker", "Jenkins", "AWS"],
  },
];
