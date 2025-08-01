import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex-1 flex justify-center items-start">
        <div className="max-w-2xl w-full space-y-5 text-gray-600 dark:text-gray-300 text-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#374151] dark:text-gray-300">
            About Me
          </h1>
          <p>
            Hey, I'm Rajab Muzaffarov — or just Rajab if you're cool like that.
          </p>
          <p>
            I’m a 21 y.o. frontend developer from Tashkent, Uzbekistan. I build
            fast, responsive websites using React, Next.js, Tailwind, and
            sometimes Vue/Quasar when needed. I don't just follow trends — I
            learn what matters and ship clean stuff.
          </p>
          <p>
            I started this journey with no fancy setup. No MacBook, no expensive
            bootcamp — just pure hustle, free resources, and a brain wired to
            figure things out. Got my first gigs coding on public computers with
            a USB stick and some VS Code portable. Real talk.
          </p>
          <p>
            Since then, I've worked on multiple freelance and team projects like{" "}
            <em>"toshkent sinov xizmati"</em>, Orzu Medical, Maktab 230 and
            more. I’m also building cross-platform apps now with fullstack tech
            like MongoDB, Supabase, Firebase, Edgestore, and Telegram API.
          </p>
          <p>
            I hate self-hype and all that fake guru energy. I’d rather let my
            work speak for itself. But if you wanna see what I’ve been up to
            professionally, check out my{" "}
            <a
              href="/rajab_resumeVZ.pdf"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              résumé
            </a>
            .
          </p>
          <p>
            Outside of code, I’m into anime, hiking, and just enjoying life. Hit
            me up if you're building something cool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
