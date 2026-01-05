"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ WAJIB

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"   // ⬅️ PERHATIKAN INI
              alt="Logo"
              width={100}
              height={50}
              priority
            />
          </Link>
        </div>

        <nav className={`menu ${open ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </header>
  );
}
