"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ExperiencePage() {
  return (
    <main>
      <Navbar />

      <section id="experience-me">
        <motion.div
          className="default-body sm:small-body md:medium-body lg:large-body text-gray-800 dark:text-white pt-20 sm:pt-28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold font-mark">Experience</h1>
          <h2 className="font-bold font-mark pt-1 text-2xl">
            All about my work experience and self-development
          </h2>

          <section id="profesional-work">
            {/* part Masi tech */}
            <section id="masi-tech" className="pl-2 mt-5">
              <div className="font-mark text-xl font-semibold text-gray-700 underline underline-offset-2">
                Masi Technology (Mar 2023 - Feb 2024)
              </div>
              <p className="text-gray-700 pl-3">
                Here My first profesional job in software developer after switch
                career to technology, my role in this company to be Fullstack
                javascript to make Content Management System (CMS) in web for
                IPTV(Smart TV Platform), make UI Front-web and make Web API for
                Web and Smart TV, The CMS use to manythings like input content
                for TV, report for management how to usefull system in hotel
                room use system IPTV
              </p>
              <div
                role="list"
                className="list-disc text-justify space-y-2 pl-6 mt-3 text-sm text-gray-600"
              >
                <li>
                  an application to make masterdata for use inside engine IPTV
                  (Smart TV Platform) at hotel
                </li>
                <li>
                  Build user interface using React.JS(Vite.JS) for front-end Web
                </li>
                <li>Build website using React-Hook</li>
                <li>Styling Website using Tailwind CSS</li>
                <li>Transfer Data using axios and React-Query</li>
                <li>
                  Using npm packages for building complex UI (CSS Library like
                  Daisy Ui)
                </li>
                <li>Working with team using Git and Gitlab</li>
                <li>Using state management global Redux-toolkit</li>
                <li>
                  Make Restfull API using Node.JS, Express.JS and Sequelize ORM
                </li>
                <li>Build Database use Postgree SQL</li>
                <li>Build responsive web and mobile design</li>
                <li>
                  Build validator type data in back-end use Express Validator
                </li>
              </div>
            </section>
            {/* part purwadhika */}
            <section id="purwadhika" className="pl-2 mt-5">
              <div className="font-mark text-xl font-semibold text-gray-700 underline underline-offset-2">
                Certificated Purwadhika Digital Technology School (Jul 2022 -
                Jan 2023)
              </div>
              <p className="text-gray-700 pl-3">
                i have interest to technology , so i took bootcamp in purwadhika
                digital technology school, for have sertificated in Fullstack
                Web Development
              </p>
              <div
                role="list"
                className=" list-disc text-justify space-y-2 pl-6 mt-3 text-sm text-gray-600"
              >
                <li>Learn Fundamental Programming</li>
                <li>Learn Front End Development</li>
                <li>Learn Back End Development</li>
                <li>Learn Project Management</li>
                <li className="font-bold">Makes Final Project</li>
                <ul className="list-decimal pl-6">
                  <li>Clone Web Instagram</li>
                  <li>Web E-commerce (Renting Web Apps)</li>
                </ul>
              </div>
            </section>
            {/* part cv. nikmat */}
            <section id="cv-nikmat" className="mt-5 pl-2">
              <div className="font-mark text-xl font-semibold text-gray-700 underline underline-offset-2">
                CV.Nikmat (Aug 2018 - Jul 2022)
              </div>
              <p className="text-gray-700 pl-3">
                i work in a family company in the field of food for small and
                medium enterprises, specializing in local food production
              </p>
              <div
                role="list"
                className="list-disc text-justify space-y-2 pl-6 mt-3 text-sm text-gray-600"
              >
                <li>Creating Inventory Reports</li>
                <li>Finding new customers</li>
                <li>Record income and expenses</li>
                <li>Stock opname</li>
              </div>
            </section>
          </section>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}

export default ExperiencePage;
