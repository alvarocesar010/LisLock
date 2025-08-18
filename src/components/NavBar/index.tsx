"use client";
import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [dropbox, setDropbox] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/produtos", label: "Produtos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top Nav */}
      <div className="bg-indigo-950 h-[60px] flex items-center justify-between md:justify-start px-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logoMarca_noBack.webp"
            alt="LisLock"
            width={140}
            height={55}
            className="hover:scale-105 transition-transform object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-10 text-indigo-50 text-lg font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-lg hover:bg-indigo-800/40 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setDropbox(!dropbox)}
          className="block md:hidden p-1"
          aria-label="Toggle menu"
        >
          <LuMenu className="text-indigo-50 text-4xl" />
        </button>

        {/* Mobile Dropdown */}
        {dropbox && (
          <div className="absolute top-[60px] right-4 w-52 bg-indigo-50 rounded-lg shadow-lg border border-indigo-200 overflow-hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDropbox(false)}
                className="block px-4 py-4 text-indigo-950 text-lg font-medium border-b border-indigo-200 last:border-b-0 hover:bg-indigo-100 text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Contact Buttons */}
      <div className="h-[60px] bg-indigo-100 flex items-center justify-center gap-3 px-2">
        <Link
          href="/contact?type=Ligar"
          className="h-12 w-[195px] flex items-center justify-center gap-2 rounded-lg bg-amber-500 text-amber-50 font-bold text-lg border-2 border-amber-700 hover:border-amber-600 hover:scale-105 active:scale-95 transition"
        >
          <BsTelephoneFill /> Ligar 933 401 695
        </Link>

        <Link
          href="/contact?type=WhatsApp"
          className="h-12 w-[180px] flex items-center justify-center gap-2 rounded-lg bg-green-500 text-amber-50 font-bold text-lg border-2 border-green-700 hover:border-green-900 hover:scale-105 active:scale-95 transition"
        >
          <FaWhatsapp /> WhatsApp
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
