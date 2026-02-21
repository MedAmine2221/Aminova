"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-12 flex flex-col items-center gap-8 md:flex-row">
        <div>
          <p className="text-xl text-center md:text-left">
            Welcome to <span className="font-bold text-[#1fa6a6]">AM Academy</span>, your gateway to a world of knowledge and learning. 
            We are dedicated to providing high-quality educational resources and courses to help you achieve your academic and professional goals. 
            Whether you're a <span className="font-bold text-[#1fa6a6]">student</span> looking to <span className="font-bold text-[#1fa6a6]">enhance your skills</span> or a <span className="font-bold text-[#1fa6a6]">professional seeking</span> to <span className="font-bold text-[#1fa6a6]">expand your expertise</span>, 
            <span className="font-bold text-[#1fa6a6]"> AM Academy</span> has something for everyone. 
            Join us on this exciting journey of discovery and growth!
          </p>
        </div>
        <Image
          src="/e-learning.png"
          alt=""
          width={400}
          height={400}
          priority
        />
      </div>
    </section>
  );
}
