import React, { Component } from "react";
import alice from "../../../public/images/login-allice-ig.png";
import Image from "next/image";
import { IoCodeSharp } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { CgHashtag } from "react-icons/cg";
import clsx from "clsx";

function CardProject({
  id,
  time,
  title,
  content,
  image,
  srcCode,
  link,
  prototype,
  tech,
}: {
  id: number;
  time: string;
  title: string;
  content: string;
  image: any;
  srcCode?: string;
  link?: string;
  prototype?: string;
  tech?: any;
}) {
  return (
    <>
      <div className="border-2 flex rounded-lg bg-gray-50 h-max mb-8" key={id}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {/* for image project */}
          <div className="px-5 py-5">
            <Image priority alt="image-project" src={image} />
          </div>
          {/* for memo project*/}
          <div className="pb-6 pt-2 px-6 sm:py-6">
            <time className="block mb-2 text-xs font-normal leading-none text-gray-400">
              {time}
            </time>
            <h1 className="text-2xl font-semibold font-circular mt-4">
              {title}
            </h1>
            <p className="text-gray-500 text-sm font-circular mt-2">
              {content}
            </p>
            <div className="mt-2 mb-4 flex flex-wrap">
              {tech.map((item: any, index: any) => {
                return (
                  <span
                    key={index}
                    className={clsx(
                      `text-xs font-semibold rounded pb-0.5 px-2 m-1`,
                      item
                    )}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="flex">
              {srcCode ? (
                <a
                  href={srcCode}
                  target="_blank"
                  className="rounded font-bold font-circular hover:text-whity px-1 py-1 flex"
                >
                  <IoCodeSharp className="font-extrabold mt-1 mr-1 size-5" />
                  source code
                </a>
              ) : null}
              {link ? (
                <a
                  href="test"
                  className="rounded font-bold font-circular hover:text-whity px-1 py-1 flex"
                >
                  <IoPlayCircle className="font-extrabold mt-1 mr-1 size-5" />
                  project
                </a>
              ) : null}

              {prototype ? (
                <a
                  href="test"
                  className="rounded font-bold font-circular hover:text-whity px-1 py-1 flex"
                >
                  <CgHashtag className="font-extrabold mt-1 mr-1 size-5" />
                  prototype
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
