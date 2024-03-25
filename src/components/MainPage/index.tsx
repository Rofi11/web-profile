"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "../../../public/images/avatar3.png";

export default function MainPage() {
  return (
    <div className="">
      <div className="default-body sm:small-body md:medium-body lg:hero-body text-gray-800 dark:text-white transition duration-300 ease-in-out">
        <section id="head-about">
          <div className="grid grid-cols-1 pt-28 sm:pt-28 md:pt-28 lg:pt-32 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center text-center sm:text-center md:text-center lg:text-left">
              <p className="animate-pulse text-sm font-semibold pt-5">
                👋 currently looking for work
              </p>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-mark mt-6">
                Muhammad Rofi
              </h1>
              <p className="leading-tight lg:leading-tight text-lg sm:text-lg md:text-lg lg:text-lg font-medium font-circular text-gray-500 dark:text-whity mt-6">
                is a full-stack developer & software engineer web enthusiast.
                Passionate about creating products and experiences people love
                to use✨{" "}
              </p>
              <div className="mt-6 mb-5 flex flex-wrap">
                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  JavaScript
                </span>
                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  TypeScript
                </span>
                <span className="bg-sky-200 text-sky-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  ReactJS
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  NextJS
                </span>
                <span className="bg-green-200 text-slate-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  NodeJS
                </span>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  ExpressJS
                </span>
                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  MySql
                </span>
                <span className="bg-blue-500 text-blue-900 text-xs font-semibold mr-2 m-1 px-2.5 py-0.5 rounded">
                  PostgresSql
                </span>
              </div>
            </div>
            <motion.div
              className="mx-auto my-auto sm:mx-auto sm:my-auto md:mx-auto md:my-auto lg:mx-auto lg:my-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div>
                <Image
                  priority
                  alt="main-image"
                  src={Avatar}
                  className="h-[500px] w-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
