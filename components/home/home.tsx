import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcons } from "./social-icons";

const Home = () => {
  return (
    <main className="home-page flex flex-1 flex-col items-center justify-center py-4">
      <div id="avatar-container" className="mb-4 w-[200px] h-[200px]">
        <Image
          src="/rajab_photo.jpg"
          width={200}
          height={200}
          alt="Rajab Photo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="relative sm:mb-2 mb-0">
        <h1 className="full-name sm:text-4xl text-2xl text-center font-extrabold m-0 bg-gradient-to-br from-[#9b9b9b] to-[#414141] bg-clip-text text-transparent">
          Rajab Muzaffarov
        </h1>
      </div>

      <p className="sm:text-xl text-md mt-5 text-center text-gray-600 dark:text-gray-300">
        I am a software developer
      </p>

      <SocialIcons />

      <div className="w-70 flex sm:flex-row flex-col justify-center mt-10 items-center mb-6">
        {[
          { href: "/rajab_resumeVZ.pdf", label: "Résumé" },
          { href: "/about", label: "About me" },
          { href: "/blog", label: "Blog" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative group px-4 py-2 sm:mx-2 mb-2 sm:mb-0 text-lg font-bold focus:outline-none"
          >
            <div className="relative z-10 text-sky-600 dark:text-sky-400 text-nowrap">
              {item.label}
            </div>

            {/* Hover background with dynamic light/dark mode support */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 
                  bg-neutral-200 dark:bg-[#2e2e2e] 
                  shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.05)] 
                  dark:shadow-[inset_4px_4px_8px_#1a1a1a,inset_-4px_-4px_8px_#3b3b3b] 
                  group-hover:scale-105"
            />
          </Link>
        ))}
      </div>

      <div className="ezoic-ad" data-ez-name="homepage_hero" />
    </main>
  );
};

export default Home;
