'use client'
import React from "react";
import Image from "next/image";
import homeIcon from "../../public/icons/home-icon.svg";
import mineIcon from "../../public/icons/mine-icon.svg";
import rankIcon from "../../public/icons/rank-icon.svg";
import mateIcon from "../../public/icons/mate-icon.svg";
import walletIcon from "../../public/icons/wallet-icon.svg";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const getOpacity = (path: string) => (currentPath === path ? "100%" : "50%");

  return (
    <div className="fixed bottom-[1%] left-1/2 transform -translate-x-1/2 flex justify-between w-[88%] px-[6%] py-[3%] items-center bg-secondary text-[3vw] border border-[#22272B] rounded-[2vw]">
      {/* Home */}
      <div
        onClick={() => router.push("/")}
        className={`flex flex-col items-center opacity-[${getOpacity("/")}] `}
      >
        <span>
          <Image
            alt="loading logo"
            src={homeIcon}
            style={{ maxWidth: "4vw", height: "auto" }}
          />
        </span>
        <span>Home</span>
      </div>
      {/* Mine */}
      <div
      onClick={() => router.push("/mine")}
        className={`flex flex-col items-center opacity-[${getOpacity(
          "/mine"
        )}] `}
      >
        <span>
          <Image
            alt="loading logo"
            src={mineIcon}
            style={{ maxWidth: "4vw", height: "auto" }}
          />
        </span>
        <span>Mine</span>
      </div>
      {/* Rank */}
      <div
      onClick={() => router.push("/rank")}
        className={`flex flex-col items-center opacity-[${getOpacity(
          "/rank"
        )}] `}
      >
        <span>
          <Image
            alt="loading logo"
            src={rankIcon}
            style={{ maxWidth: "4vw", height: "auto" }}
          />
        </span>
        <span>Rank</span>
      </div>
      {/* Mate */}
      <div
      onClick={() => router.push("/mate")}
        className={`flex flex-col items-center opacity-[${getOpacity(
          "/mate"
        )}] `}
      >
        <span>
          <Image
            alt="loading logo"
            src={mateIcon}
            style={{ maxWidth: "4vw", height: "auto" }}
          />
        </span>
        <span>Mate</span>
      </div>
      {/* Wallet */}
      <div
      onClick={() => router.push("/wallet")}
        className={`flex flex-col items-center opacity-[${getOpacity(
          "/wallet"
        )}] `}
      >
        <span>
          <Image
            alt="loading logo"
            src={walletIcon}
            style={{ maxWidth: "4vw", height: "auto" }}
          />
        </span>
        <span>Wallet</span>
      </div>
    </div>
  );
};

export default Footer;
