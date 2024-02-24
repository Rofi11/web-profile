"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AboutMe() {
  return (
    <main>
      <Navbar />

      <section id="contact-me">
        <motion.div
          className="default-body sm:small-body md:medium-body lg:large-body text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold font-mark">About Me</h1>
          <p className="leading-loose font-circular text-md text-justify text-gray-500 dark:text-whity mt-3 mb-6">
            I have a background in public administration, but I have an interest
            in working in the technology field because it has a very good
            long-term prospect and I have decided to change my career to become
            a software development programmer. I decided to attend a bootcamp at
            Purwadhika. Now, I have full-stack web development skills including
            HTML, CSS, Javascript, React.JS, Next.JS Bootstrap, Chakra UI,
            Tailwind CSS, Node.js, Express.js, Sequelize and MySQL , PostgresSQL
            database. and while also scrum and agile I am an adaptable and
            communicative person, as a full-stack web developer, I can be placed
            in both front-end and back-end positions, and I can help the team
            better.
          </p>

          <h1 className="text-3xl font-bold font-mark">Contact</h1>
          <p className="font-medium font-circular text-md text-gray-500 dark:text-whity mt-3 mb-6">
            Here you can read my{" "}
            <a
              href="https://drive.google.com/file/d/1phTNfh4fAFH_K3lwRiWAC7WWTSgRlpvt/view?usp=sharing"
              target="_blank"
              className="underline hover:text-gray-900"
            >
              resume
            </a>{" "}
            , and you can reach me at:
          </p>
          <div
            role="list"
            className="list-disc space-y-2 pl-4 text-md sm:text-md md:text-lg lg:text-lg"
          >
            <li className="text-gray-400 font-circular dark:text-white">
              <span className="text-gray-600 dark:text-white">
                Email -{" "}
                <a
                  className="underline hover:text-gold-500 dark:hover:text-gold-500"
                  href="mailto:rofimuhamad0381@gmail.com"
                  target="_blank"
                >
                  rofimuhamad0381@gmail.com
                </a>
              </span>
            </li>
            <li className="text-gray-400 font-circular dark:text-white">
              <span className="text-gray-600 dark:text-white">
                GitHub -{" "}
                <a
                  className="underline hover:text-gold-500 dark:hover:text-gold-500"
                  href="https://github.com/Rofi11"
                  target="_blank"
                >
                  Rofi 11
                </a>
              </span>
            </li>
            <li className="text-gray-400 font-circular dark:text-white">
              <span className="text-gray-600 dark:text-white">
                Instagram -{" "}
                <a
                  className="underline hover:text-gold-500 dark:hover:text-gold-500"
                  href="https://www.instagram.com/rofi_mmhd/"
                  target="_blank"
                >
                  Rofi_mmhd
                </a>
              </span>
            </li>
            <li className="text-gray-400 font-circular dark:text-white">
              <span className="text-gray-600 dark:text-white">
                LinkedIn -{" "}
                <a
                  className="underline hover:text-gold-500 dark:hover:text-gold-500"
                  href="https://www.linkedin.com/in/muhammad-rofi-a0511b165/"
                  target="_blank"
                >
                  Muhammad Rofi
                </a>
              </span>
            </li>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

export default AboutMe;
