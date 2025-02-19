"use client"

import Link from "next/link"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className="bg-blue-500 text-white p-2 rounded hover:bg-red-500">
        {children}
      </a>
    </Link>
  );
};

export default Button;

