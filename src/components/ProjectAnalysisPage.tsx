"use client";

import Link from "next/link";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { ProjectAnalysis } from "@/data/projectAnalysis";
import type { Project } from "@/data/projects";

interface ProjectAnalysisPageProps {
  project: Project;
  analysis: ProjectAnalysis;
}

const PIE_COLORS = ["#b08f5a", "#c8a87a", "#d9bc90", "#e8d5b7", "#f5efe4"];

function ChartBlock({ chart }: { chart: ProjectAnalysis["charts"][number] }) {
  if (chart.type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chart.data} margin={{ top: 5, right: 10, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0e6d3" />
          <XAxis
            dataKey={chart.xKey}
            tick={{ fontSize: 11, fill: "#8a7055" }}
            angle={-35}
            textAnchor="end"
            interval={0}
          />
          <YAxis tick={{ fontSize: 11, fill: "#8a7055" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#faf8f5",
              border: "1px solid #e8d5b7",
              borderRadius: "8px",
              fontSize: 12,
            }}
          />
          {chart.dataKeys.length > 1 && <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />}
          {chart.dataKeys.map((dk) => (
            <Bar key={dk.key} dataKey={dk.key} name={dk.name ?? dk.key} fill={dk.color} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chart.type === "horizontal-bar") {
    return (
      <ResponsiveContainer width="100%" height={Math.max(240, chart.data.length * 36)}>
        <BarChart
          data={[...chart.data].reverse()}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0e6d3" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: "#8a7055" }} />
          <YAxis
            type="category"
            dataKey={chart.xKey}
            tick={{ fontSize: 11, fill: "#8a7055" }}
            width={95}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#faf8f5",
              border: "1px solid #e8d5b7",
              borderRadius: "8px",
              fontSize: 12,
            }}
          />
          {chart.dataKeys.map((dk) => (
            <Bar key={dk.key} dataKey={dk.key} name={dk.name ?? dk.key} fill={dk.color} radius={[0, 3, 3, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chart.type === "line") {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chart.data} margin={{ top: 5, right: 10, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0e6d3" />
          <XAxis
            dataKey={chart.xKey}
            tick={{ fontSize: 11, fill: "#8a7055" }}
            angle={-35}
            textAnchor="end"
            interval={0}
          />
          <YAxis tick={{ fontSize: 11, fill: "#8a7055" }} tickFormatter={(v) => {
            if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
            if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
            return v;
          }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#faf8f5",
              border: "1px solid #e8d5b7",
              borderRadius: "8px",
              fontSize: 12,
            }}
            formatter={(value) => {
              const num = Number(value);
              if (num >= 1000000) return [`${(num / 1000000).toFixed(2)}M`, ""];
              if (num >= 1000) return [`${(num / 1000).toFixed(1)}K`, ""];
              return [num.toLocaleString(), ""];
            }}
          />
          {chart.dataKeys.length > 1 && <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />}
          {chart.dataKeys.map((dk) => (
            <Line
              key={dk.key}
              type="monotone"
              dataKey={dk.key}
              name={dk.name ?? dk.key}
              stroke={dk.color}
              strokeWidth={2.5}
              dot={{ r: 3, fill: dk.color }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (chart.type === "pie") {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chart.data}
            dataKey={chart.dataKeys[0].key}
            nameKey={chart.xKey}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}%`}
            labelLine={true}
          >
            {chart.data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#faf8f5",
              border: "1px solid #e8d5b7",
              borderRadius: "8px",
              fontSize: 12,
            }}
            formatter={(value) => [`${value}%`, ""]}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
}

export default function ProjectAnalysisPage({ project, analysis }: ProjectAnalysisPageProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <div className="bg-white border-b border-khaki-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            href="/#projects"
            className="flex items-center gap-1.5 text-xs font-semibold text-dark/60 hover:text-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          <div className="flex-1 h-px bg-khaki-100" />
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-dark/60 hover:text-dark transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Title */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-0.5 rounded-full bg-khaki-100 border border-khaki-200 text-khaki-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-dark mb-3">{project.title}</h1>
          <p className="text-sm text-dark/60 leading-relaxed max-w-3xl">{project.description}</p>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {analysis.overview.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl border border-khaki-100 p-4 text-center shadow-sm"
            >
              <div className="text-2xl mb-1">{metric.icon}</div>
              <div className="text-lg font-black text-dark">{metric.value}</div>
              <div className="text-[11px] text-dark/50 font-medium mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-2xl border border-khaki-100 p-6 shadow-sm mb-8">
          <h2 className="text-sm font-black text-dark uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-1 h-4 bg-khaki-400 rounded-full inline-block" />
            Key Insights
          </h2>
          <ol className="space-y-3">
            {analysis.insights.map((insight, i) => (
              <li key={i} className="flex gap-3 text-sm text-dark/70 leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-khaki-100 text-khaki-600 text-[10px] font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {insight}
              </li>
            ))}
          </ol>
        </div>

        {/* Charts */}
        <div className="mb-8">
          <h2 className="text-sm font-black text-dark uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-1 h-4 bg-khaki-400 rounded-full inline-block" />
            Visualizations
          </h2>
          <div className={`grid gap-6 ${analysis.charts.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
            {analysis.charts.map((chart, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-khaki-100 p-5 shadow-sm ${
                  analysis.charts.length === 3 && i === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <h3 className="text-xs font-bold text-dark/70 mb-4">{chart.title}</h3>
                <ChartBlock chart={chart} />
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-2xl border border-khaki-100 p-6 shadow-sm">
          <h2 className="text-sm font-black text-dark uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-khaki-400 rounded-full inline-block" />
            Methodology
          </h2>
          <div className="flex flex-wrap gap-2">
            {analysis.methodology.map((step) => (
              <span
                key={step}
                className="text-xs px-3 py-1.5 rounded-full bg-khaki-50 border border-khaki-200 text-khaki-700 font-medium"
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
