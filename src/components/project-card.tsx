import Image from "next/image";
import Link from "next/link";
import type { projects } from "@/lib/site";
import { Arrow } from "./site-shell";

function captureUrl(project: (typeof projects)[number]) {
  if (project.slug === "momentum-desk") return "/work/momentum-desk.jpg";
  const target = project.slug === "ijmb" ? "http://www.ijmb.ng" : project.slug === "sailglobe-resource" ? "http://www.sailgloberesourceltd.com" : `https://${project.url}`;
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${target}`;
}

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <Link href={`/work/${project.slug}`} className="project-card group"><div className="project-visual" style={{ background: project.color }}><span className="project-index">0{index + 1}</span><div className="site-frame"><div className="site-frame-bar"><i/><i/><i/><span>{project.url}</span></div><div className="site-frame-image"><Image src={captureUrl(project)} alt={`${project.title} homepage`} fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" /></div></div></div><div className="project-meta"><div><p>{project.category}</p><h3>{project.title}</h3></div><span className="round-arrow"><Arrow diagonal /></span></div><p className="project-summary">{project.summary}</p></Link>;
}
