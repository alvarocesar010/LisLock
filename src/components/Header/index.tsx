"use client";
import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [dropbox, setDropbox] = useState(false);

  const handleDropbox = () => {
    setDropbox((prev) => !prev);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/produtos", label: "Produtos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav className="h-[140px] fixed w-full">
      <div
        className=" bg-indigo-950 h-[70px] 
      flex flex-row items-center
      place-content-between
      md:place-content-start
      
      px-4"
      >
        {/* Logomarca */}
        <Link href="/">
          <Image
            src="/images/logoMarca_noBack.webp"
            alt="LisLock"
            width={130}
            height={70}
          />
        </Link>

        {/* Menu pages @media width > 768px */}
        <div className="hidden text-indigo-50 text-2xl font-semibold gap-18 md:flex items-center w-full justify-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Menu pages  @media width < 768px*/}
        <button
          onClick={handleDropbox}
          className="block md:hidden"
          aria-label="Toggle menu"
        >
          <LuMenu className="text-indigo-50 text-6xl" />
        </button>

        <div
          className={`absolute top-[60px] right-6 bg-indigo-50 flex flex-col items-center justify-center w-55 rounded-lg opacity-97 border border-indigo-950 
          ${dropbox ? "flex" : "hidden"}
          `}
        >
          {links.map((link) => (
            <Link
              onClick={() => setDropbox(false)}
              key={link.href}
              className="h-16 text-indigo-950 text-2xl/normal font-bold flex items-center justify-center border-b border-indigo-950 w-5/6 last:border-b-0"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Cellphone contact */}
      <div className="h-[70px] bg-indigo-100 flex flex-row items-center justify-center gap-2.5">
        <Link
          className="h-12 bg-amber-500 text-lg text-amber-50 w-[200px] flex items-center justify-center gap-2 rounded-md font-extrabold border-1 border-indigo-950 "
          href="/contact?type=Ligar"
        >
          <BsTelephoneFill /> Ligar 933 401 695
        </Link>
        {/* WhatsApp contact */}
        <Link
          className="bg-green-500 text-xl text-amber-50 w-[180px] h-12 flex items-center justify-center gap-2 border-1 border-indigo-950 rounded-md font-extrabold"
          href="/contact?type=WhatsApp"
        >
          <FaWhatsapp /> WhatsApp
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
