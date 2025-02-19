"use client"

import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const Card = ({ imageUrl, title, description, href }: CardProps) => {
  return (
    <Link href={href}>
      <a className="max-w-sm rounded overflow-hidden shadow-lg">
        <image className="w-full"> src={imageUrl} alt={title} </image>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Card;

