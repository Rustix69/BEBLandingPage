"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import ManagementTeam from "@/components/ManagementTeam";

export default function ProfilePage() {
  const images = [
    "/home_hero/1.jpg",
    "/home_hero/2.jpg",
    "/home_hero/3.jpg",
    "/home_hero/4.jpg",
    "/home_hero/5.jpg",
  ];

  return (
    <main>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center absolute inset-0"
        >
          <motion.h1 className="font-bold text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Management Team
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl text-center text-neutral-200 max-w-xl px-4">
            Meet the team that drives our success
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <ManagementTeam/>
    </main>
  );
} 