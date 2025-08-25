"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Wallet } from "lucide-react";
import Graph from "./graph";
import Footer from "./footer";
import Stat from "./stats";
import Divider from "./divider";

export default function Hero() {
  const stats = [
    {
      label: "Current Marketcap",
      value: "1.2M",
      icon: "/images/icon-park-solid_stock-market.png",
      valueIcon: "/images/sol-small.png",
    },
    {
      label: "FDV",
      value: "2.5M",
      icon: "/images/mdi_arrow-up-bold.png",
      valueIcon: "/images/sol-small.png",
    },
    {
      label: "Total Raised",
      value: "800k",
      icon: "/images/ph_money-wavy-fill.png",
      valueIcon: "/images/sol-small.png",
    },
    {
      label: "Gamble Rate",
      value: "15.00%",
      icon: "/images/streamline_discount-percent-fire-solid.png",
      valueIcon: "/images/sol-small.png",
    },
    {
      label: "Win Rate",
      value: "85.00%",
      icon: "/images/streamline_discount-percent-fire-solid (1).png",
      valueIcon: "/images/sol-small.png",
    },
  ];
  const [amount, setAmount] = useState("999,999,999.00");

  return (
    <main className="min-h-screen bg text-white md:px-6 px-4 2xl:py-12 py-8">
      <header className="flex justify-between items-center mb-8 2xl:mb-20 txlmb md:max-w-[1200px] w-full mx-auto md:flex-nowrap flex-wrap gap-y-4">
        <div className="flex gap-4 md:gap-8 items-center">
          <Image
            className="w-[96px] h-[24px] object-contain"
            src="/images/logo.svg"
            alt="Aqua Bot Logo"
            width={120}
            height={40}
            priority
          />
          <nav className="space-x-6 text-gray-300 text-sm clashnormal">
            <Link href="#">Telegram Bot</Link>
            <Link href="#">Docs</Link>
            <Link href="#">Guide</Link>
          </nav>
        </div>
        <button className="bg-white text-black md:px-4 px-3 py-2 rounded-xl wallet_btn flex items-center space-x-2 clashmedium hover:scale-105 transition">
          <span>Connect Wallet</span>
          <Wallet size={18} />
        </button>
      </header>
      <div className="flex gap-5 lg:flex-nowrap flex-wrap mb-8 justify-center md:max-w-[1500px] w-full mx-auto">
        <div className="bg-white/10 rounded-xl backdrop-blur-md px-6 py-5 shadow-lg md:max-w-[405px] w-full flex flex-col clashmedium">
          <span className="text-gray-400 flex gap-2 items-center">
            {" "}
            <Image
              className="w-6 h-6 object-contain"
              src="/images/material-symbols_arming-countdown.png"
              alt="Aqua Bot Logo"
              width={24}
              height={24}
              priority
            />{" "}
            Countdown
          </span>
          <p className="md:text-5xl text-3xl my-5 my3">00:00:00:00</p>
        </div>
        <div className="bg-white/10 rounded-xl backdrop-blur-md p-6 shadow-lg md:max-w-[1110px] w-full flex gap-6 clashmedium">
          <div className="flex gap-3 items-center xl:flex-nowrap flex-wrap w-full">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex gap-3 items-center w-full xl:flex-nowrap flex-wrap"
              >
                <Stat {...s} />
                {i !== stats.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-[1500px] w-full mx-auto">
        {/* Chart */}
        <div className="bg-white/10 rounded-xl backdrop-blur-md p-6 shadow-lg">
          <div className="flex items-center space-x-2 mb-4 clashmedium py-1 bg-white/5 rounded-xl w-[170px] px-3">
            <input type="checkbox" className="accent-blue-500 rounded-xl" />
            <span className="text-gray-300 text-sm">Market Cap Graph</span>
          </div>
          <div className="2xl:h-[40vh] md:h-[60vh] h40 h-64 bg1 py-4">
            <Graph />
          </div>
        </div>
        <div className="bg-white/10 rounded-xl backdrop-blur-md pb-6 pt-8 px-6 shadow-lg flex flex-col justify-between">
          <ul className="space-y-3 text-white/80 text-sm clashnormal border-t border-white/10 pt-5 list-disc pl-4">
            <li>
              There’s 10 different entry chances, the most profitable ones are
              the less profitable, but even though, structured in a way where
              there’s a big chance of getting a fair entry
            </li>
            <li>
              The community decides the valuation they want. If the ladder has
              more liquidity, higher market cap
            </li>
            <li>
              To appreciate community interest, the higher valuation, the higher
              profits they will have
            </li>
          </ul>
          <div className="mt-6">
            <div className="flex justify-between items-center gap-4 md:flex-nowrap flex-wrap">
              <div className="text-white/60 py-1.5 bg-white/5 rounded-xl text-sm mb-2 clashnormal md:max-w-[300px] w-full px-2 flex gap-2 items-center">
                <Image
                  src="/images/streamline_investment-selection-remix.png"
                  alt="Aqua Bot Logo"
                  width={18}
                  height={18}
                  priority
                />
                <span>Your total Solana currently invested</span>
              </div>
              <span className="text-white font-semibold flex gap-2 items-center clashnormal">
                {" "}
                <Image
                  className="opacity-50"
                  src="/images/sol-small.png"
                  alt="Aqua Bot Logo"
                  width={16}
                  height={16}
                  priority
                />{" "}
                8.5
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-xl mt-4  px-4 py-5 clashmedium outline outline-1 outline-offset-[-1px] outline-white/20">
              <span className="text-white py-1.5 bg-white/10 rounded-xl flex gap-2 items-center px-3">
                <Image
                  src="/images/cbi_solana-sol.png"
                  alt="Aqua Bot Logo"
                  width={16}
                  height={16}
                  priority
                />
                SOL
              </span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent flex-1 text-right outline-none md:text-4xl text-xl w-full"
              />
            </div>
            <button className="w-full mt-6 outline outline-1 outline-offset-[-1px] outline-white/30 hover:scale-[1.02] p_btn py-3 rounded-xl text-base transition clashmedium">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
