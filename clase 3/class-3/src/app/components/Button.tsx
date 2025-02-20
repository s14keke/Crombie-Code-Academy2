"use client"

import Link from "next/link"
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href} className="bg-gray-500 text-white p-2 rounded hover:bg-black">
      {children}
    </Link>
  );
};

export default Button;

