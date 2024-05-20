'use client';


import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white fixed bottom-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col items-center justify-center">
        <Typography color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Link href="https://github.com/SantiOcampo1003">
           @Santiago Ocampo
          </Link>
        </Typography>
      </div>
    </footer>
  );
}
