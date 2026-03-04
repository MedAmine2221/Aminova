"use client";;
import News from "@/components/news";
import { motion } from "framer-motion";
import Course from "@/components/coursesCard";
import UploadCV from "@/components/selectFile";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full">
        <News /> 
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-8"
      >        
      <UploadCV />
      <Course/>
      </motion.div>
    </section>
  );
}
