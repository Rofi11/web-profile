"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import alice from "../../../public/images/login-allice-ig.png";
import Image from "next/image";
import { IoCodeSharp } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { CgHashtag } from "react-icons/cg";
import CardProject from "@/components/Card";
import turuProject from "../../../public/images/thumbnail-renting-apps.png";
import cloneInstagram from "../../../public/images/thumbnail-clone-instagram.png";
import cloneMaps from "../../../public/images/thumbnial-clone-maps.png";
import grab from "../../../public/images/clone-grab-2.png";
import netflix from "../../../public/images/clone-netflix.png";
import porto from "../../../public/images/web-porto.png";
import productIPTV from "../../../public/images/product-iptv.png";

function Project() {
  // for type array object
  type techObject =
    | { tech1: string }
    | { tech2: string }
    | { tech3: string }
    | { tech4: string }
    | { tech5: string }
    | { tech6: string };

  // for data project
  interface data_type {
    id: number;
    time: string;
    title: string;
    content: string;
    image?: any;
    srcCode?: string;
    link?: string;
    prototype?: string;
    tech?: string[];
  }

  const dataProject: data_type[] = [
    {
      id: 7,
      time: "March 2024",
      title: "Portofolio Website",
      image: porto,
      srcCode: "https://github.com/Rofi11/web-profile/tree/develop",
      content:
        "This is my portfolio profile website, showcasing my background and some of the projects I have worked on, as well as the technologies I have mastered as a software engginer.",
      tech: ["NextJS", "TypeScript", "TailwindCSS"],
    },
    {
      id: 6,
      time: "March 2023",
      title: "System IPTV",
      image: productIPTV,
      content:
        "This is an IPTV (Smart TV) system that I created at my last company. This system is used by hotels to assist them in providing the best service to customers through a modern system that can be accessed directly from the TV in each room. Here, I worked as a full-stack developer, creating a content management system and developing a RESTful API for the TVs.",
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "PostgreSql",
        "JavaScript",
        "TailwindCSS",
      ],
    },
    {
      id: 5,
      time: "January 2023",
      title: "Renting Web Apps (Turu Project)",
      content:
        "This is a website with a concept similar to Airbnb, where users can book properties owned by clients in the Turu app, such as rooms, houses, villas, for a customizable duration of stay.",
      image: turuProject,
      srcCode: "https://github.com/Rofi11/jcwdvl00701",
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySql",
        "JavaScript",
        "ChakraUi",
      ],
    },
    {
      id: 4,
      time: "September 2022",
      title: "Clone Instagram",
      content:
        "This is a website clone of Instagram web, which has small features from Instagram to be used as the initial project in Purwadhika as the first graduation requirement. This is a full-stack web that can post, write comments, enter profiles, and delete photos.",
      image: cloneInstagram,
      srcCode: "https://github.com/Rofi11/Allice-Project-FE",
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySql",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      id: 3,
      time: "Desember 2022",
      title: "Clone Maps",
      image: cloneMaps,
      srcCode: "https://github.com/Rofi11/clone-maps-fe",
      content:
        "A sample static maps website that features several points in Singapore, with standard map features, and utilizes simple open-source mapping technology.",
      tech: ["ReactJS", "JavaScript", "CSS"],
    },
    {
      id: 2,
      time: "July 2022",
      title: "Clone Landing page Grab",
      image: grab,
      srcCode: "https://github.com/Rofi11/grab",
      content: "Simple website to clone landing page grab",
      tech: ["HTML", "CSS"],
    },
    {
      id: 1,
      time: "June 2022",
      title: "Clone Landing page Netflix",
      image: netflix,
      srcCode: "https://github.com/Rofi11/netflix",
      content: "Simple website to clone landing page Netflix",
      tech: ["HTML", "CSS"],
    },
  ];
  return (
    <main>
      <Navbar />

      <section id="page-project">
        <motion.div
          className="default-body sm:small-body md:medium-body lg:large-body text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold font-mark">
            What I recently worked on
          </h1>
          <p className="font-medium font-circular text-md text-gray-500 dark:text-whity mt-3 mb-6">
            Read about some of the products and website I've got the opportunity
            to work on
          </p>
          {dataProject.map((project) => (
            <CardProject
              key={project.id}
              id={project.id}
              time={project.time}
              title={project.title}
              content={project.content}
              image={project.image}
              srcCode={project.srcCode}
              link={project.link}
              prototype={project.prototype}
              tech={project.tech}
            />
          ))}
          {/* <CardProject /> */}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

export default Project;
