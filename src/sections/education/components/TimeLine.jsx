import React from "react";

const TimeLine = () => {
  return (
    <div className="p-2">
      {/* Mobile View */}
      <ol className="relative border-s border-gray-200 dark:border-gray-700 md:hidden">
        <li className="mb-10 ms-6">
          {/* Engineering */}
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* ...svg... */}
          </span>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              B.E CSE
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Bannari Amman Institute Of Technology
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022-2026
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Studying core computer science subjects, software engineering, and
              modern technologies to build scalable solutions.
            </p>
          </div>
        </li>
        <li className="mb-10 ms-6">
          {/* HSC Bio Group */}
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* ...svg... */}
          </span>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              HSC (Bio Maths)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Adharsh Vidyalaya Matric Higher Secondary School
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020-2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Completed Higher Secondary with Biology, Physics, and Chemistry as
              major subjects, developing a strong foundation in science.
            </p>
          </div>
        </li>
        <li className="ms-6">
          {/* SSLC Math & Science */}
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* ...svg... */}
          </span>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              SSLC
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Venkitraj Matric Higher Secondary School
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Completed secondary education with focus on Mathematics and
              Science, building analytical and problem-solving skills.
            </p>
          </div>
        </li>
      </ol>

      {/* Desktop View */}
      <ol className="items-center hidden md:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* ...svg... */}
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              B.E CSE
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Bannari Amman Institute Of Technology
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022-2026
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Studying core computer science subjects, software engineering, and
              modern technologies to build scalable solutions.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* ...svg... */}
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              HSC (Bio Maths)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Adharsh Vidyalaya Matric Higher Secondary School
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020-2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Completed Higher secondary education with focus on Mathematics and
              physics, biology, chemistry and building analytical and problem-solving skills.

            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* ...svg... */}
            </div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              SSLC
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Venkitraj Matric Higher Secondary School
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Completed secondary education with focus on Mathematics and
              Science, building analytical and problem-solving skills.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
