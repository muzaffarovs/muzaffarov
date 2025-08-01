"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const SiteHeader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`header-container z-10 sticky top-0 w-full mx-auto px-4 bg-background ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <header className="max-w-4xl m-auto sm:py-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="my-0 sm:text-2xl text-xl font-extrabold text-gray-500 dark:text-gray-300"
        >
          Rajab's Blog
        </Link>
        <Button
          aria-label="Toggle theme"
          className="bg-transparent text-gray-400 dark:text-yellow-400 hover:bg-transparent hover:text-yellow-400 rounded-full p-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="text-lg sm:text-xl transition-transform rotate-45" />
          ) : (
            <Moon className="text-lg sm:text-xl transition-transform" />
          )}
        </Button>
      </header>
    </div>
  );
};

export default SiteHeader;
