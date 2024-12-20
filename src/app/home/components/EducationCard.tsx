import React from "react";
import Image from "next/image";

type EducationCardProps = {
  title: string;
  imagesrc: string;
  period: string;
  description: string;
};

export default function EducationCard(props: EducationCardProps) {
  const { title, imagesrc, period, description } = props;
  return (
    <div className="flex gap-5 items-center w-full hover:scale-105 transition-transform duration-300">
      <Image
        src={imagesrc}
        alt={`${title} education`}
        width={80}
        height={80}
        className="rounded-full border-4 border-blue-700 transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between max-sm:flex-col lg:flex-col">
          <p className="text-md font-bold transition-colors duration-300 hover:text-blue-700">{title}</p>
          <p className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600">{period}</p>
        </div>
        <p className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600">{description}</p>
      </div>
    </div>
  );
}
