import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site-shell";
import { insights } from "@/lib/site";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt, keywords: [article.keyword, article.tag, "Nexagen Digital"], alternates: { canonical: `/insights/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt } } : {};
}

export default async function Insight({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, datePublished: "2026-09-01", author: { "@type": "Organization", name: "Nexagen Digital" }, publisher: { "@type": "Organization", name: "Nexagen Digital" } };
  return <>
    <article className="section" style={{ paddingTop: 190 }}><div className="shell article-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="eyebrow">{article.tag} · {article.read}</p><h1>{article.title}</h1><p className="lead">{article.excerpt}</p>
      <div className="article-meta"><span>Target topic</span><strong>{article.keyword}</strong><span>{article.date}</span></div>
      <div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{"bullets" in section && section.bullets && <ul>{section.bullets.map((item: string) => <li key={item}>{item}</li>)}</ul>}</section>)}</div>
    </div></article><CtaBand />
  </>;
}
