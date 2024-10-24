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
    <div className="flex gap-5 items-center min-w-[384px] hover:scale-105 transition-transform duration-300">
    <Image
        src={imagesrc}
        alt={`${title} education`}
        width={80}
        height={80}
        className="rounded-full border-4 border-blue-700 transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold transition-colors duration-300 hover:text-blue-700">{title}</p>
          <p className="text-md text-gray-400 transition-colors duration-300 hover:text-gray-600">{period}</p>
        </div>
        <p className="text-md text-gray-400 transition-colors duration-300 hover:text-gray-600">{description}</p>
      </div>
    </div>
  );
}
