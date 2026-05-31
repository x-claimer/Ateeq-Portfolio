export interface TimelineEntry {
  date: string;
  title: string;
  description?: string;
}

export const timeline: TimelineEntry[] = [
  {
    date: "May 2025",
    title: "Graduated with Master's Degree in Data Science",
    description: "Completed my Master's in Data Science at the University of Maryland.",
  },
  {
    date: "Apr 2022 – Jun 2024",
    title: "Associate Consultant (Data Engineer) at Capgemini",
    description: "Led cloud data engineering for enterprise clients including Coca-Cola and NHS Scotland.",
  },
  {
    date: "Nov 2020 – Apr 2022",
    title: "Senior Analyst (Cloud Developer) at Capgemini",
    description: "Designed and deployed cloud-based applications on Azure and AWS, automating operations and ensuring high availability.",
  },
  {
    date: "June 2020",
    title: "Graduated with Bachelor's Degree in Electronics and Communication Engineering",
    description: "Completed my Bachelor's in Electronics and Communication Engineering at the NIT Calicut.",
  },
];
