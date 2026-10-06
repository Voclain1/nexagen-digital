import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site-shell";
import { projects } from "@/lib/site";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} case study`, description: project.summary, alternates: { canonical: `/work/${project.slug}` } } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const localCovers: Partial<Record<(typeof projects)[number]["slug"], string>> = { ijmb: "/work/ijmb-cover.jpg", "sailglobe-resource": "/work/sailglobe-cover.jpg", "momentum-desk": "/work/momentum-desk.jpg" };
  const capture = localCovers[project.slug] ?? `https://image.thum.io/get/width/1600/crop/900/noanimate/https://${project.url}`;
  return <>
    <section className="case-hero" style={{ background: project.color }}><div className="shell">
      <p className="eyebrow">{project.category}</p><h1>{project.title}</h1>
      <div className="case-hero-grid"><p>{project.summary}</p><div className="stat"><strong>{project.impact}</strong><span>Project outcome</span></div></div>
      <div className="case-browser"><div className="site-frame-bar"><i/><i/><i/><span>{project.url}</span></div><div className="case-browser-image"><Image src={capture} alt={`${project.title} homepage`} fill priority unoptimized sizes="(max-width: 1280px) 100vw, 1200px" /></div></div>
    </div></section>
    <section className="section"><div className="shell detail-grid"><p className="eyebrow">The assignment</p><div>
      <p className="prose-large">{project.details}</p>
      <div className="case-story"><div><span>01</span><h3>Challenge</h3><p>{project.challenge}</p></div><div><span>02</span><h3>Approach</h3><p>{project.approach}</p></div><div><span>03</span><h3>Outcome</h3><p>{project.result}</p></div></div>
      <div className="capability-grid">{project.services.map((service, index) => <div key={service}>0{index + 1} &nbsp; {service}</div>)}</div>
    </div></div></section>
    <section className="section dark-section"><div className="shell detail-grid"><p className="eyebrow light">See it live</p><div><h2>Built to work in the real world.</h2><p style={{ color: "#aaa", lineHeight: 1.8, maxWidth: 680, marginTop: 35 }}>Explore the live product and see how strategy, design and engineering come together in the finished experience.</p><a className="button" style={{ marginTop: 35 }} href={`https://${project.url}`} target="_blank" rel="noreferrer">Visit {project.url} ↗</a></div></div></section>
    <CtaBand />
  </>;
}
