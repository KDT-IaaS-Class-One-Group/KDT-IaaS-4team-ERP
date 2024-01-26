"use client";
import Image from "next/image";
export default function AdminPage() {
  return (
    <div className="flex justify-center items-center w-full h-full opacity-80 p-4">
      <Image
        width={1300}
        height={900}
        src={"/images/starcraftwall.jpg"}
        alt={"스타크래프트"}
      />
    </div>
  );
}
