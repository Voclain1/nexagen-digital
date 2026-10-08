"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useState } from "react";
import { nav } from "@/lib/site";

export function MobileMenu() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openPath === pathname;
  const close = () => setOpenPath(null);

  return <div className={`mobile-menu${open ? " open" : ""}`}>
    <button className="mobile-menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpenPath(open ? null : pathname)}>
      <span className="menu-label">{open ? "Close" : "Menu"}</span><i/><i/>
    </button>
    {open && typeof document !== "undefined" && createPortal(<div className="mobile-menu-panel" id="mobile-navigation">
      <nav aria-label="Mobile navigation">
        {nav.map((item,index) => <Link key={item.href} href={item.href} onClick={close}><span>0{index+1}</span>{item.label}<b aria-hidden="true">↗</b></Link>)}
        <Link href="/contact" className="mobile-menu-cta" onClick={close}><span>05</span>Start a project<b aria-hidden="true">↗</b></Link>
      </nav>
      <div className="mobile-menu-foot"><a href="mailto:enquiry@nexagen.digital" onClick={close}>enquiry@nexagen.digital</a><a href="https://www.instagram.com/nexagen_digital?stkn=MTg1c3pqd2Vzb3lmdw==" target="_blank" rel="noreferrer" onClick={close}>Instagram ↗</a></div>
    </div>, document.body)}
  </div>;
}
