export interface TimelineItem {
  id: string;
  type: "work" | "education" | "certificate";
  title: string;
  organization: string;
  period: string;
  periodEnd?: string;
  location?: string;
  description?: string[];
  link?: string;
  linkLabel?: string;
  current?: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    id: "ugm-masters",
    type: "education",
    title: "Master in Computer Science",
    organization: "Universitas Gadjah Mada (UGM)",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    current: true,
  },
  {
    id: "revou-work",
    type: "work",
    title: "Data Analyst Associate",
    organization: "RevoU",
    period: "Sep 2023",
    periodEnd: "Jan 2024",
    location: "Indonesia (Remote)",
    description: [
      "Utilized data visualization tools to create interactive graphical representations of financial data",
      "Implemented advanced analytics techniques such as linear and logistic regression",
      "Created real-time business metrics dashboards for management decision-making",
      "Conducted gap analysis to identify process inefficiencies and recommend improvements",
    ],
  },
  {
    id: "revou-certificate",
    type: "certificate",
    title: "Full Stack Data Analytics",
    organization: "RevoU",
    period: "Apr 2023",
    description: ["13-week certified online course in data analytics"],
    link: "https://certificates.revou.co/fikri-firstly-arrasyid-hawe-certificate-completion-fsda21.pdf",
    linkLabel: "Verify Certificate",
  },
  {
    id: "amu-bachelor",
    type: "education",
    title: "Bachelor of Computer Application (BCA)",
    organization: "Aligarh Muslim University",
    period: "Aug 2018",
    periodEnd: "Sep 2024",
    location: "Aligarh, India",
  },
];
