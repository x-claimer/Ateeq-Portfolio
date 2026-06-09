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
    slug: "sarwatech-junior-data-architect",
    company: "SarwaTech, Riyadh, Saudi Arabia",
    role: "Junior Data Architect",
    period: "July 2025 - August 2025",
    description:
      "Supported the design and implementation of enterprise data architecture solutions, developing scalable data models, ETL pipelines, and cloud-based data platforms to improve data accessibility, governance, and analytics capabilities across business units.",
    highlights: [
      "Designed and maintained conceptual, logical, and physical data models to support enterprise reporting, analytics, and operational systems.",
      "Collaborated with data engineers and business stakeholders to define data architecture standards, data flows, and integration strategies across multiple applications.",
      "Developed and optimized ETL/ELT pipelines, improving data quality, consistency, and processing efficiency for business-critical datasets.",
      "Implemented data governance practices including metadata management, data lineage tracking, and validation frameworks to enhance data reliability.",
      "Supported cloud-based data platform initiatives using Azure and SQL technologies, enabling scalable storage, reporting, and analytics solutions.",
      "Created technical documentation, architecture diagrams, and data dictionaries to improve knowledge sharing and system maintainability."
    ],
    tech: [
      "SQL",
      "Python",
      "Azure Data Factory",
      "Azure SQL Database",
      "Power BI",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Data Modeling",
      "ETL/ELT",
      "Data Governance",
      "Data Warehousing",
      "Git"
    ],
  },
  {
    slug: "capgemini-associate-consultant",
    company: "Capgemini, Bangalore, India",
    role: "Associate Consultant — Data Engineer",
    period: "April 2022 – June 2024",
    description:
      "Led cloud data engineering initiatives for enterprise clients including Coca-Cola and NHS Scotland, delivering scalable data warehouse solutions, cloud migrations, and automated ETL workflows.",
    highlights: [
      "Developed and maintained cloud-based data warehouse applications for Coca-Cola, improving sales data management efficiency by 30% and increasing pricing data availability by 50%.",
      "Led AWS data migration for NHS Scotland, transitioning from Oracle DB to Snowflake using AWS DMS and S3, reducing human intervention and wait times by 30%.",
      "Built a PC to IICS Accelerator App in Python that automated XML/JSON log conversion to Excel, reducing internal team workload by 40%.",
      "Optimized big data processing and ETL workflows using Apache Spark, Databricks, Azure Data Factory, Informatica, and Apache Airflow, reducing processing time by 25%.",
      "Designed CI/CD pipelines with Azure DevOps and automated reporting via Power BI, SSAS, and Tableau across Azure Analysis Server, Cosmos DB, MySQL, Oracle DB, Snowflake, and PostgreSQL.",
    ],
    tech: [
      "Python",
      "Apache Spark",
      "Databricks",
      "Snowflake",
      "AWS DMS",
      "Azure Data Factory",
      "Informatica",
      "Apache Airflow",
      "Azure DevOps",
      "Power BI",
      "Tableau",
      "PostgreSQL",
      "Oracle DB",
      "Cosmos DB",
    ],
  },
  {
    slug: "capgemini-senior-analyst",
    company: "Capgemini, Bangalore, India",
    role: "Senior Analyst — Cloud Developer",
    period: "November 2020 - April 2022",
    description:
      "Designed, deployed, and maintained cloud-based applications on Microsoft Azure, ensuring security compliance, high availability, and operational efficiency across Prod, Dev, and UAT environments.",
    highlights: [
      "Designed, developed, and deployed cloud-based applications while ensuring security compliance and high availability across Prod, Dev, and UAT environments.",
      "Managed cloud infrastructure, monitoring, and CI/CD-based deployments, preventing downtime and optimizing application access for teams and end users.",
      "Automated operational tasks using Azure Logic Apps, PowerShell, and Shell scripting while collaborating with vendors to streamline cloud operations.",
    ],
    tech: [
      "Microsoft Azure",
      "AWS",
      "Azure Logic Apps",
      "PowerShell",
      "Shell Scripting",
      "CI/CD",
    ],
  },
];
