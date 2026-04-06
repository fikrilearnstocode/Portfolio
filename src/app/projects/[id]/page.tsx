import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { projectAnalyses } from "@/data/projectAnalysis";
import ProjectAnalysisPage from "@/components/ProjectAnalysisPage";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectAnalyses.map((a) => ({ id: a.projectId }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Fikri Firstly`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const analysis = projectAnalyses.find((a) => a.projectId === id);

  if (!project || !analysis) {
    notFound();
  }

  return <ProjectAnalysisPage project={project} analysis={analysis} />;
}
