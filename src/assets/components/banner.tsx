"use client";

import { Banner, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";

export function BannerHome() {
  return (
    <Banner>
      <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://levetica.vercel.app/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
          >
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-6" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
              Levetica
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Ce site est actuellement en construction, ce site sera officiellement publiée en bêta le 1er juin.
          </p>
        </div>
        <div className="flex shrink-0 items-center">
          <Button href="https://github.com/mpcgt/levetica">En savoir plus</Button>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </div>
    </Banner>
  );
}

export default BannerHome;