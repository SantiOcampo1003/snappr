'use client';
import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Header() {
  const handleSnapprClick = () => {
    window.location.reload();
  };

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
          onClick={handleSnapprClick} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Snappr
        </Typography>
        <div className="mr-600">
          <Link href="./about">
           About
          </Link>
        </div>
      </div>
    </Navbar>
  );
}