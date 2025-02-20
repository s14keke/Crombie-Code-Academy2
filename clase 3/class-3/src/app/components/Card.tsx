"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
  children?: ReactNode;
}

const Card = ({ imageUrl, title, description, href, children }: CardProps) => {
  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg text-center bg-gray-900">
      <Link href={href}>
        <Image className="w-full" src={imageUrl} alt={title} width={500} height={300} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base mb-4">
          {description}
        </p>
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;

