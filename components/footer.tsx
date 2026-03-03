"use client";
import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/overview" },
      { label: "Features", href: "/features" },
      { label: "Solutions", href: "/" },
      { label: "Tutorials", href: "/tutorial" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Careers", href: "/career" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Cookie Policy", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mouhamed.amine.lazreg/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mouhamedaminelz/",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://github.com/MedAmine2221/AM-Academy",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #083838 0%, #0d5555 50%, #0a4545 100%)" }}
    >
      {/* Decorative top border */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f4b438 30%, #f4b438 70%, transparent)",
        }}
      />

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244,180,56,0.06) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-10">
        {/* Main grid: logo/tagline + 3 link columns */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Logo + tagline + socials */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-2 flex flex-col gap-5"
          >
            <Image
              src="/logo-mobile-footer.png"
              alt="AM Academy Logo"
              width={90}
              height={68}
              priority
              onClick={() => (window.location.href = "/")}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              High-quality courses designed to sharpen your skills and grow your
              expertise — at your own pace.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-[#f4b438] hover:bg-white/10 transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <motion.div key={col.title} variants={itemVariants} className="flex flex-col gap-3">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{ color: "#f4b438" }}
              >
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/55 text-sm hover:text-[#f4b438] transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        >
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} AM Academy. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/mohamed-amine-lazreg-831b1817a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4b438]/70 hover:text-[#f4b438] transition-colors duration-200"
            >
              Mouhamed Amine Lazreg
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}