import Link from "next/link";
import { Arrow } from "./site-shell";
import type { projects } from "@/lib/site";

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) { return <Link href={`/work/${project.slug}`} className="project-card group"><div className="project-visual" style={{ background: project.color }}><span className={`project-orbit orbit-${index % 4}`} /><span className="project-index">0{index + 1}</span><div className="mock-window"><div className="mock-bar"><i/><i/><i/></div><div className="mock-inner"><strong>{project.title}</strong><span>{project.summary}</span><b>Explore the platform →</b></div></div></div><div className="project-meta"><div><p>{project.category}</p><h3>{project.title}</h3></div><span className="round-arrow"><Arrow diagonal /></span></div><p className="project-summary">{project.summary}</p></Link>; }
