"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Mail, Phone, MapPin, Linkedin, Github, Download,
  Code2, Sparkles, BrainCog, MessageCircle, Briefcase, GraduationCap, Printer
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/cv/SectionHeading";
import { SkillsGrid } from "@/components/cv/SkillsGrid";
import { ExperienceCard } from "@/components/cv/ExperienceCard";
import { EducationCard } from "@/components/cv/EducationCard";

// Local Component Imports
type SocialButtonProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};
type ContactItemProps = {
  icon: LucideIcon;
  text: string;
};
export default function Home() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };
  const mySkillsData = [
    {
      category: "Frontend", items: [
        "HTML5",
        "CSS3",
        "SCSS",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Styled-Components",
        "Shadcn UI",
        "MUI",
        "Angular",
        "Node.js",
        "Express.js",
        "Nest.js",
        "Redux Toolkit",
        "Context API",
        "REST API",
        "GraphQL",
        "Jest",
        "Storybook",
        "React Testing Library",
        "Responsive & Mobile-First Design",
        "Cross-Browser Compatibility",
        "Familiar with Storybook",
        "Familiar with Strapi, WordPress",
      ]
    },
    
    { category: "Tools & Platforms", items: [
      "Docker",
      "Git",
      "GitLab",
      "CI/CD",
      "ARGO CD",
      "Jira",
      "Confluence",
      "Azure DevOps",
      "SVN",
      "Figma"
    ] },
    { category: "AI Tools", items: ["Github Copilot", "Cursor", "Replit Ghostwriter", "Codeium", "ChatGPT"] }
  ];
  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-emerald-500/30 selection:text-emerald-200 p-4 md:p-12 lg:p-20 print:p-0 print:bg-black">
      <div className="mx-auto max-w-7xl print:max-w-none">
        <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm rounded-3xl print:rounded-none print:border-none print:bg-black">
          <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-12 print:block">

            {/* STICKY SIDEBAR */}

            <aside className="h-full lg:col-span-4 bg-neutral-900 p-8 lg:p-12 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 border-b lg:border-b-0 lg:border-r border-neutral-800 lg:sticky lg:top-0 lg:self-start min-h-screen print:min-h-0 print:border-b-2 print:border-neutral-800 print:mb-8">

              {/* CREATIVE PROFILE ICON */}
              <div className="relative group mx-auto lg:mx-0">
                {/* The Animated Border Layer */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-900 to-cyan-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 animate-spin-slow print:hidden"></div>

                <Avatar className="relative h-44 w-44 ring-2 ring-neutral-950 bg-neutral-900 border-4 border-neutral-900/50 print:ring-0">
                  <AvatarImage
                    src="/profile.jpg"
                    alt="Vipin Patel"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <AvatarFallback className="bg-neutral-900 text-emerald-500 text-3xl font-black italic">
                    {"<VP />"}
                  </AvatarFallback>
                </Avatar>

                {/* REPOSITIONED BADGE: CENTER BOTTOM */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-neutral-950 border border-emerald-500/50 px-3 py-1 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-2 print:bg-black print:border-neutral-700">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse print:animate-none" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                   Immediate Joiner {/* 9+ Yrs Exp */}
                  </span>
                </div>
              </div>

              <div className="space-y-4 w-full">
                <div className="space-y-2">
                  <h1 className="text-4xl font-black tracking-tighter text-neutral-100  print:text-white">Vipin Patel</h1>
                  <p className="text-emerald-400 font-mono font-bold tracking-widest text-xs uppercase bg-emerald-500/10 py-1 px-3 rounded-full inline-block print:bg-transparent print:border print:border-emerald-500/50">
                    Senior Frontend Engineer
                  </p>
                </div>

                <p className="text-neutral-400 leading-relaxed font-medium antialiased print:text-neutral-300">
                  Crafting <span className="text-neutral-100">high-performance web systems </span>
                  with a focus on maintainability,
                  reusable UI architecture, and seamless user experiences.
                </p>

                <div className="space-y-4 pt-6 border-t border-neutral-800">
                  <ContactItem icon={Mail} text="vipinpateler@email.com" />
                  <ContactItem icon={Phone} text="+91-9540701111" />
                  <ContactItem icon={MapPin} text="Gurugram, India" />
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4 no-print">
                  <SocialButton href="https://linkedin.com/in/vipinpatels" icon={Linkedin} label="LinkedIn" />
                  <SocialButton href="https://github.com/vipinpatell" icon={Github} label="GitHub" />
                  <SocialButton href="https://wa.me/919540701111" icon={MessageCircle} label="WhatsApp" />
                </div>
                <div className="flex items-center flex-wrap justify-center lg:justify-start gap-3 pt-4 no-print">
                    <Button onClick={handlePrint} className="h-12 bg-white hover:bg-emerald-500 text-black font-bold rounded-sm transition-all gap-2 mt-2 shadow-xl shadow-emerald-500/10 no-print">
                  <Printer size={18} /> Print CV
                </Button>
                <Button className="h-12 bg-white hover:bg-emerald-500 text-neutral-950 font-bold rounded-sm transition-all gap-2 mt-2 shadow-lg shadow-emerald-500/10 no-print" asChild>
                  <a href="/frontend-developer-cv-vipin.pdf" rel="noopener noreferrer" target="_blank">
                    <Download size={18} /> Download CV
                  </a>
                </Button>
                </div>
                
              </div>
            </aside>
            {/* MAIN CONTENT AREA */}
            <section className="lg:col-span-8 p-8 lg:p-16 space-y-20 bg-gradient-to-b from-neutral-900/20 to-transparent print:px-8 print:py-12 print:space-y-12">

              {/* SUMMARY */}
              <div className="space-y-6">
                <SectionHeading title="Technical Summary" icon={Sparkles} />
                <p className="text-xl text-neutral-300 leading-relaxed font-medium tracking-tight print:text-neutral-200">
                  Senior <span className="text-white underline decoration-emerald-500/50 underline-offset-4">Frontend Engineer</span> with 10+ years of experience. Specialist in <strong>Enterprise SaaS</strong>, <strong>FinTech</strong>, and <strong>Healthcare</strong> ecosystems, delivering scalable web applications using React & Next.js.
                </p>
              </div>

              {/* SKILLS */}
              <div className="space-y-8">
                <SectionHeading title="Core Stack" icon={Code2} />
                <SkillsGrid skills={mySkillsData} />
              </div>

              {/* EXPERIENCE */}
              <div className="space-y-8">
                <SectionHeading title="Professional Experience" icon={Briefcase} />
                <div className="space-y-0 print:space-y-8">
                  <ExperienceCard
                    role="Senior Frontend Developer"
                    company="Havas Worldwide"
                    duration="Dec 2022 – Jan 2026"
                    location="Bengaluru, India"
                    bullets={[
                      `Developed and maintained enterprise-level website and web applications using React, Next.js,
                      Typescript, modern JavaScript (ES6+), JSX, Tailwind CSS, and Styled Components.`,
                      `Integrated REST APIs and GraphQL APIs to fetch and display dynamic data.`,
                      `form validation, error handling, and state management using Redux Toolkit and Context API.`,
                      `Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.`,
                      `Translated Figma and design system specifications into responsive, pixel-perfect web interfaces, maintaining brand consistency across multiple platforms.`,
                      `Ensured cross-browser and device compatibility, guaranteeing seamless experience on multiple devices and browsers.`,
                      `Collaborated with designers, backend engineers, QA teams, and stakeholders in Agile/Scrum environments to deliver business-aligned solutions.`,
                      `Delivered few resent projects including Sudlife, FIITJEE, Canon Snapshot, Canon Photomarathon, and CL Havas.`,
                    ]}
                  />
                  <ExperienceCard
                    role="Senior UI Developer"
                    company="Areteans"
                    duration="Dec 2021 – Oct 2022"
                    location="Gurgaon, India"
                    bullets={[
                      `Developed COSMOS-based UI layouts using HTML, CSS, and JavaScript, with custom enhancements
                      in PEGA environments.`,
                      `Built and maintained enterprise UI skins and themes based on defined style guides.`,

                      `Integrated REST APIs and GraphQL APIs to fetch and display dynamic data.`,
                      `form validation, error handling, and state management using Redux Toolkit and Context API.`,
                      `Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.`,
                      `Translated Figma and design system specifications into responsive, pixel-perfect web interfaces, maintaining brand consistency across multiple platforms.`,
                      `Ensured cross-browser and device compatibility, guaranteeing seamless experience on multiple devices and browsers.`,
                      `Collaborated with designers, backend engineers, QA teams, and stakeholders in Agile/Scrum environments to deliver business-aligned solutions.`,
                      `Delivered few projects including Dr. Reddy’s Biologics, Unilever, and AlterDomus.`,
                    ]}
                  />

                  <ExperienceCard
                    role="UI/UX Developer"
                    company="Aadya Techno Bytes"
                    duration="Sept 2017 – Dec 2021"
                    location="Noida, India"
                    bullets={[
                      `Developed reusable angular components and frontend features using html, css, scss and mui.`,
                      `Led an 11-member team while delivering responsive, user-centric web interfaces.`,
                      `Developed responsive UI for .NET MVC and CI4 PHP applications.`,
                      `Developed react and next.js projects for scalable UI development`,
                      `Integrated REST APIs and GraphQL APIs to fetch and display dynamic data.`,
                      `form validation, error handling, and state management using Redux Toolkit and Context API.`,
                      `Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.`,
                      `Translated Figma and design system specifications into responsive, pixel-perfect web interfaces, maintaining brand consistency across multiple platforms.`,
                      `Ensured cross-browser and device compatibility, guaranteeing seamless experience on multiple devices and browsers.`,
                      `Created wireframes and prototypes using mock flow.`,
                      `Collaborated with backend engineers, QA teams, and stakeholders in Agile/Scrum environments to deliver business-aligned solutions.`,
                      `Delivered few projects including SimonsCeptre, Brookfield, Bosch, Indiabizzness.`,
                    ]}
                  />

                  <ExperienceCard
                    role="UI Developer"
                    company="MAGICBRICKS - PAYROLL: SHARP & YOUNG IT SOLUTIONS PVT. LTD."
                    duration="DEC 2014 – AUG 2016"
                    location="Noida, India"
                    bullets={[
                      `Built responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap.`,
                      `Developed cross-platform compatible HTML/CSS email templates.`,
                      `Developed responsive UI for .NET MVC and CI4 PHP applications.`,
                      `Converted PSD designs into pixel-perfect HTML/CSS implementations.`,
                      `Delivered few projects including PropIndex and MB Microsite.`,
                    ]}
                  />
                </div>
              </div>
              {/* EDUCATION SECTION */}
              <section className="space-y-10 print:break-before-page">
                <SectionHeading title="Education" icon={GraduationCap} />
                <div className="space-y-0  print:space-y-8">
                  <EducationCard
                    degree="Master of Computer Applications (MCA)"
                    institution="Swami Vivekananda Subharti University"
                    year="2018"
                    grade="A Grade"
                  />
                  <EducationCard
                    degree="Bachelor of Computer Applications (BCA)"
                    institution="Mahatma Gandhi Kashi Vidyapith University"
                    year="2014"
                    grade="71% Marks"
                  />
                </div>
              </section>
              {/* PROJECTS CHIPS */}
              <section className="space-y-6 print:break-before-page">
                <SectionHeading title="Recent Projects" icon={BrainCog} />
                <div className="flex flex-wrap gap-3 print:space-y-8">
                  {["Canon Snapshot", "Canon Photomarathon", "Sudlife", "Sudlife Bankboard", "CLHavas", "FIITJEE", "Dr. Reddy Biologics", "Bosch", "Indiabizzness"].map((project) => (
                    <span key={project} className="px-5 py-2 rounded-xl bg-neutral-800 text-neutral-200 text-sm font-bold border border-neutral-700/50 hover:border-emerald-500/50 transition-colors cursor-default">
                      {project}
                    </span>
                  ))}
                </div>
              </section>

            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

// Sub-components for cleaner Main Layout
const ContactItem = ({ icon: Icon, text }: ContactItemProps) => (
  <div className="flex items-center gap-3 text-neutral-400 group cursor-default  print:text-neutral-300">
    <div className="p-2 rounded-lg bg-neutral-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all print:border-none">
      <Icon size={16} />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const SocialButton = ({ href, icon: Icon, label }: SocialButtonProps) => (
  <Link href={href} target="_blank">
    <Button size="icon" variant="outline" className="rounded-xl cursor-pointer border-neutral-800 bg-neutral-800 text-neutral-400  hover:bg-neutral-800 hover:text-emerald-400 transition-all" aria-label={label}>
      <Icon size={20} />
    </Button>
  </Link>
);