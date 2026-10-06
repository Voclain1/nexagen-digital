import Link from "next/link";
import { Arrow, CtaBand } from "@/components/site-shell";
import { ProjectCard } from "@/components/project-card";
import { insights, projects, services } from "@/lib/site";

export const metadata = {
  title: "Full-Service Digital Product & AI Agency",
  description: "Nexagen is a full-service digital product and AI agency delivering high-performance websites, SaaS platforms, AI automation and growth systems for ambitious businesses.",
  keywords: ["full-service digital agency", "digital product agency", "AI automation agency", "web development agency", "SaaS development agency"],
  alternates: { canonical: "/" },
};

export default function Home() {
  return <>
    <section className="hero"><div className="hero-grid-bg"/><div className="shell hero-inner"><p className="eyebrow">Full-service digital product &amp; AI agency · Lagos / Global</p><h1>We build digital products for <em>what’s next.</em></h1><div className="hero-foot"><p>Nexagen is a full-service digital product and AI agency helping ambitious companies launch high-performance websites, SaaS platforms and intelligent automation through strategy, design and engineering.</p><Link className="button" href="/work">Explore our work <Arrow /></Link></div><div className="hero-object" aria-hidden="true"><span/><span/><span/></div></div></section>
    <section className="trust-strip"><div className="shell"><span>Strategy</span><i>×</i><span>Design</span><i>×</i><span>Engineering</span><i>×</i><span>Growth</span></div></section>
    <section className="section work-section"><div className="shell"><div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Proof, not promises.</h2></div><Link href="/work" className="text-link">View all work <Arrow /></Link></div><div className="projects-grid">{projects.map((project, index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></div></section>
    <section className="section services-home"><div className="shell"><div className="services-heading"><p className="eyebrow light">What we do</p><h2>One partner from first question to final release.</h2><p>We unite business clarity, distinctive design and robust engineering so ideas move forward without losing their edge.</p></div><div className="services-list">{services.map((service)=><Link key={service.slug} href={`/services/${service.slug}`}><span>{service.number}</span><h3>{service.title}</h3><p>{service.short}</p><b><Arrow diagonal/></b></Link>)}</div></div></section>
    <section className="section manifesto"><div className="shell manifesto-grid"><p className="eyebrow">Our point of view</p><div><h2>Technology should make the business clearer—not more complicated.</h2><div className="manifesto-copy"><p>We ask difficult questions early, design around real behaviour and engineer for the world beyond launch.</p><p>That means fewer handoffs, stronger decisions and digital products with the substance to earn attention.</p></div><Link href="/about" className="text-link">Meet Nexagen <Arrow /></Link></div></div></section>
    <section className="section insight-section"><div className="shell"><div className="section-head"><div><p className="eyebrow">Ideas & field notes</p><h2>Thinking that moves work forward.</h2></div><Link href="/insights" className="text-link">All insights <Arrow /></Link></div><div className="insight-grid">{insights.map((post,index)=><Link href={`/insights/${post.slug}`} key={post.slug} className="insight-card"><div className={`insight-art art-${index+1}`}><span>0{index+1}</span></div><p className="eyebrow">{post.tag}</p><h3>{post.title}</h3><small>{post.date} · {post.read}</small></Link>)}</div></div></section>
    <CtaBand />
  </>;
}
