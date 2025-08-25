"use client";
import Image from "next/image";
// import Link from "next/link";
export default function Graph() {
  return (
    <>
      <footer className="flex justify-between items-center mt-8 mt8 text-white text-xs clashmedium md:max-w-[1500px] w-full mx-auto md:flex-nowrap flex-wrap gap-y-4">
        <span className="px-3 py-1.5 bg-white/5 rounded-xl flex gap-2 items-center cursor-pointer">
          {" "}
          <Image
            src="/images/wpf_faq.png"
            alt="Aqua Bot Logo"
            width={16}
            height={16}
            priority
          />{" "}
          Frequently Asked Questions
        </span>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:scale-[1.02] transition px-3 py-1.5 bg-white/5 rounded-xl flex gap-2 items-center"
          >
            <Image
              src="/images/prime_twitter.png"
              alt="Aqua Bot Logo"
              width={16}
              height={16}
              priority
            />
            Twitter X
          </a>
          <a
            href="#"
            className="hover:scale-[1.02] transition px-3 py-1.5 bg-white/5 rounded-xl flex gap-2 items-center"
          >
            <Image
              src="/images/mingcute_telegram-fill.png"
              alt="Aqua Bot Logo"
              width={16}
              height={16}
              priority
            />
            @AquaBot
          </a>
        </div>
      </footer>
    </>
  );
}
