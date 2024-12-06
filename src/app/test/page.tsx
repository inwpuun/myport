"use client";

import Menubar from "@/components/menubar";

export default function CosmicLanding() {
  return (
    <div className="flex items-center justify-center lg:h-screen w-full">
      <div className="relative z-10 flex flex-col items-center justify-center w-[94%] h-5/6 max-md:mt-4 p-5 md:p-10 bg-[rgba(2,18,24,0.3)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.5px] border-[1px] border-[hsla(243,38%,29%,1)]">
        <Menubar />
      </div>
    </div>
  );
}
