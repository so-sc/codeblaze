// Themes.js

"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";

export default function Themes() {
  return (
    <div className="py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl md:text-4xl font-bold py-10">
        <TypingAnimation message="Themes" />
      </h1>
      <div className="px-4 grid md:grid-cols-2 gap-10">
        <Card img="health.jpg" theme="Healthcare" />
        <Card img="fin.jpg" theme="Finance" />
        <Card img="edu.jpg" theme="Education" />
        <Card img="agri.jpeg" theme="Agriculture and Sustainability" />
      </div>
    </div>
  );
}

function Card({ theme, img }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-700 hover:border-[#6D76A3] group aspect-video">
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        // src={`/theme/${img}`}
        src={`/og.png`}
        alt=""
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-center px-5 text-2xl lg:text-3xl font-bold text-white">
          {theme}
        </h1>
      </div>
    </div>
  );
}
