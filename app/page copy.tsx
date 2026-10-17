"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Code2,
  Sparkles,
  BrainCog,
  MessageCircle,
  CalendarRange,
  Building2,

} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-6 flex items-center justify-center"
      role="main"
    >
      <Card className="w-full max-w-6xl bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-2xl shadow-2xl">
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">

          <aside
            className="md:col-span-1 bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center text-center gap-4"
            aria-label="Profile"
          >
            <Avatar className="h-32 w-32 ring-2 ring-emerald-500/40">
              <AvatarImage src="/profile.jpg" alt="Vipin Patel profile photo" />
              <AvatarFallback>VP</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Vipin Patel
              </h1>
              <p className="text-emerald-400 text-sm font-mono">
                Senior Frontend Developer · 9+ Yrs
              </p>
            </div>

            <p className="text-sm text-base text-gray-300">
              Frontend specialist with a strong architectural mindset, crafting maintainable UI systems, reusable components, and performant applications using modern libraries and frameworks.
            </p>

            <div className="flex flex-col gap-2 text-sm text-base text-gray-300">
              <span className="flex items-center gap-2 justify-center">
                <Mail size={16} aria-hidden /> vipinpateler@email.com
              </span>
              <span className="flex items-center gap-2 justify-center">
                <Phone size={16} aria-hidden /> +91-9540701111
              </span>
              <span className="flex items-center gap-2 justify-center">
                <MapPin size={16} aria-hidden />Gurugram, India
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <Link href="https://www.linkedin.com/in/vipinpatels" target="_blank" passHref>
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="LinkedIn Profile"
                  className="text-foreground hover:text-emerald-400 border-border cursor-pointer"
                >
                  <Linkedin size={18} />
                </Button>
              </Link>
              <Link href="https://github.com/vipinpatell" target="_blank" passHref>
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="GitHub Profile"
                  className="text-foreground hover:text-emerald-400 border-border cursor-pointer"
                >
                  <Github size={18} />
                </Button>
              </Link>
              <Link href="mailto:vipinpateler@gmail.com" target="_blank" passHref>

                <Button
                  size="icon"
                  variant="outline"
                  aria-label="Send Email"
                  className="text-foreground hover:text-emerald-400 border-border cursor-pointer"
                >
                  <Mail size={18} />
                </Button>
              </Link>

              {/* WhatsApp */}
              <Link href="https://wa.me/919540701111" target="_blank" passHref>

                <Button
                  size="icon"
                  variant="outline"
                  aria-label="WhatsApp"
                  className="text-foreground hover:text-emerald-400 border-border cursor-pointer"
                >
                  <MessageCircle size={18} />
                </Button>

              </Link>
            </div>
            <div className="flex gap-3 pt-2">
            <Link className="w-full mt-4 gap-2 flex items-center  hover:text-emerald-400" href="https://drive.google.com/file/d/11MnMLD8DNn9I78HZ6O20ODUCrGFKiDcB/view?usp=drive_link" target="_blank" passHref>
              <Download size={16} /> Download CV
            </Link>
            </div>
          </aside>

          <section
            className="md:col-span-2 space-y-10"
            aria-label="Professional details"
          >
            {/* SUMMARY */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="text-emerald-400" size={18} />
                Technical Summary
              </h2>
              <Separator className="my-2" />
              <p className="text-base text-gray-300 leading-relaxed">
                Senior <strong>Frontend Engineer</strong> with 9+ years of experience across Banking, FinTech, Insurance, Healthcare, EdTech, FMCG, and Enterprise SaaS, delivering scalable, performant, and business-critical web applications using React, Next.js, and modern frontend technologies.
              </p>
            </section>

            {/* TECH STACK */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code2 className="text-emerald-400" size={18} />
                Technical Skills
              </h2>
              <Separator className="my-2" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-base text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>HTML, CSS, SCSS</li>
                  <li>Tailwind CSS, Bootstrap, Styled-components</li>
                  <li>JavaScript (ES6+), TypeScript</li>
                  <li>React.js, Next.js, Angular</li>
                  <li>Redux Toolkit, Context API</li>
                  <li>REST API, GraphQL</li>
                  <li>Familiar with Storybook</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Responsive & Mobile-First Design</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Git, GitHub, SVN</li>
                  <li>Figma (UI/UX Collaboration)</li>
                  <li>Strapi, WordPress (Familiar)</li>
                  <li>Docker, CI/CD, Jest</li>
                  <li>AI Tools: Github Copilot, Cursor, ChatGPT</li>
                </ul>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BrainCog className="text-emerald-400" size={18} />
                Experience
              </h2>
              <Separator className="my-2" />

              <div className="space-y-6">
                <article>
                  <h3 className="font-medium flex items-center gap-2 mt-3 mb-2">
                    <Building2  className="text-emerald-400" size={18}/>
                    Senior Frontend Developer · Havas Worldwide – Havas Media
                  </h3>
                  <p className="text-sm text-base text-gray-300 flex items-center gap-2">
                    <CalendarRange className="text-emerald-400" size={14} />
                    Dec 2022 – Present · Gurugram
                  </p>

                  <ul className="list-disc pl-5 mt-2 mb-6 text-sm text-base text-gray-400 space-y-1">
                    <li>
                      Developed and maintained enterprise-level website and web applications using React, Next.js,
                      Typescript, modern JavaScript (ES6+), JSX, Tailwind CSS, and Styled Components.
                    </li>
                    <li>
                      Integrated REST APIs and GraphQL APIs with robust form validation, error handling, and state management to ensure reliable and dynamic user interactions.
                    </li>
                    <li>
                      Translated Figma and design system specifications into responsive, pixel-perfect web interfaces, maintaining brand consistency across multiple platforms.
                    </li>
                    <li>
                      Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.
                    </li>
                    <li>
                      Ensured cross-browser and device compatibility, guaranteeing seamless experience on multiple devices and browsers.
                    </li>
                    <li>
                      Collaborated with designers, backend engineers, QA teams, and stakeholders in Agile/Scrum environments to deliver business-aligned solutions.
                    </li>
                    <li>
                      Delivered few resent projects for Sudlife, FIITJEE, Canon Snapshot, Canon Photomarathon.
                    </li>
                  </ul>
                  {/* <Card
                    className="mb-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-6"
                    aria-label="Worked Domains"
                  >
                    <h4 className="text-md font-semibold text-base text-gray-300">Worked Domains</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Insurance & InsurTech (Sudlife)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed life and general insurance portals, implemented policy management systems, and built customer onboarding platforms to improve operational efficiency and enhance user experience.
                        </p>
                      </div>

                    
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Banking & Financial Services (Sudlife Bankboard)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed retail and digital banking portals, built internal banking dashboards, and created transaction-based applications to streamline operations and enhance user experience.
                        </p>
                      </div>

                  
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          EdTech (FIITJEE)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed learning platforms and educational portals, building lead generation and enrollment systems to streamline student acquisition and enhance the overall learning experience.
                        </p>
                      </div>

                  
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Enterprise SaaS & B2B Platforms (CLHavas)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Worked on enterprise-grade SaaS and B2B applications involving role-based access, admin dashboards, workflow-driven modules, and data-heavy interfaces. Focused on scalable UI architecture, reusable components, performance optimization, and seamless backend integration for complex business workflows.
                        </p>
                      </div>

                   
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Media / Brand Campaigns (Canon Snapshot & Canon Photomarathon)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed and maintained user management, login/signup, and profile management systems. Implemented camera lens management and EXIF data handling features, ensuring smooth user experience and robust data tracking for Canon Snapshot & Canon Photomarathon campaigns.
                        </p>
                      </div>

                    </div>
                  </Card> */}

                </article>

                <article>
                  <h3 className="font-medium flex items-center gap-2  mt-3 mb-2">
                    <Building2  className="text-emerald-400" size={18}/>
                    Senior UI Developer · Areteans
                  </h3>
                  <p className="text-sm text-base text-gray-300 flex items-center gap-2">
                    <CalendarRange className="text-emerald-400" size={14} />
                    Dec 2021 – Oct 2022 · Gurugram
                  </p>
                  <ul className="list-disc pl-5 mt-2 mb-6 text-sm text-base text-gray-400 space-y-1">
                    <li>
                      Developed COSMOS-based UI layouts using HTML, CSS, and JavaScript, with custom enhancements
                      in PEGA environments.

                    </li>
                    <li>
                      Built and maintained enterprise UI skins and themes based on defined style guides.
                    </li>
                    <li>
                      Ensured cross-browser and device compatibility, guaranteeing seamless experience on multiple devices and browsers.
                    </li>
                    <li>
                      Worked on select projects using React, Next.js, and Typescript to deliver modern, component-driven
                      interfaces.
                    </li>
                    <li>
                      Integrated REST APIs and GraphQL APIs with robust form validation, error handling, and state management to ensure reliable and dynamic user interactions.
                    </li>
                    <li>
                      Translated Figma and design system specifications into responsive, pixel-perfect web interfaces, maintaining brand consistency across multiple platforms.
                    </li>
                    <li>
                      Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.
                    </li>
                    <li>
                      Collaborated with designers, backend engineers, QA teams, and stakeholders in Agile/Scrum environments to deliver business-aligned solutions.
                    </li>
                    <li>
                      Delivered few projects for Dr. Reddy’s Biologics, Unilever, AlterDomus.
                    </li>
                  </ul>
                 {/*  <Card
                    className="mb-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-6"
                    aria-label="Worked Domains"
                  >
                    <h4 className="text-md font-semibold text-base text-gray-300">Worked Domains</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Healthcare & Pharmaceuticals (Dr. Reddy’s Biologics)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed healthcare portals and pharma brand websites with regulatory-compliant enterprise features, ensuring responsive, secure, and user-centric experiences for patients, healthcare professionals, and internal stakeholders.
                        </p>
                      </div>
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Financial Services / Real Estate Investment (AlterDomus)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Built enterprise dashboards and investor portals at the intersection of finance and real estate investment, managing complex datasets, user roles, and secure workflows to support global fund operations.
                        </p>
                      </div>
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          FMCG / Global Enterprise (Unilever)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Delivered enterprise and brand platforms for Unilever, implementing global UI standards, consistent brand experiences, and performance-optimized interfaces across web and internal enterprise applications.
                        </p>
                      </div>

                    </div>
                  </Card>
 */}
                </article>

                <article>
                  <h3 className="font-medium flex items-center gap-2  mt-3 mb-2">
                    <Building2  className="text-emerald-400" size={18}/>
                    UI/UX Developer · Aadya Techno Bytes
                  </h3>
                  <p className="text-sm text-base text-gray-300 flex items-center gap-2">
                    <CalendarRange className="text-emerald-400" size={14} />
                    Sept 2017 – Dec 2021 · Noida
                  </p>
                  <ul className="list-disc pl-5 mt-2  mb-6 text-sm text-base text-gray-400 space-y-1">
                    <li>
                      Led an 11-member team while delivering responsive, user-centric web interfaces.
                    </li>
                    <li>
                      Developed reusable angular components and frontend features using html, css, scss and mui.
                    </li>
                    <li>
                      Contributed to react and next.js projects for scalable UI development.
                    </li>
                    <li>
                      Developed responsive UI for .NET MVC and CI4 PHP applications.
                    </li>
                    <li>
                      Integrated REST APIs and GraphQL APIs with robust form validation, error handling, and state management to ensure reliable and dynamic user interactions.
                    </li>
                    <li>
                      Implemented performance optimization techniques, including lazy loading, code splitting, and image optimization to improve Core Web Vitals and SEO.
                    </li>
                    <li>
                      Resolved UI and cross-browser issues to ensure consistent user experience across devices.
                    </li>
                    <li>
                      Created wireframes and prototypes using mock flow.
                    </li>
                    Collaborated with backend engineers, QA teams in Agile/Scrum environments to deliver business-aligned solutions.
                    <li>
                      Delivered few projects for SimonsCeptre, Brookfield, Bosch, Indiabizzness.
                    </li>
                  </ul>
                  {/* <Card
                    className="mb-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-6"
                    aria-label="Worked Domains"
                  >
                    <h4 className="text-lg font-semibold text-base text-gray-300">Worked Domains</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                   
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Real Estate & Property Management (Brookfield)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed property and asset management platforms, implemented user profile and role-based access management, and built enterprise listing and inventory systems. Designed data-driven dashboards for actionable operational insights.
                        </p>
                      </div>
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Incident Management System (SimonsCeptre)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Developed and maintained dispatch and workflow systems, implemented role-based permission (RBAC), and built comprehensive incident logging, tracking, and resolution flows. Managed dashboards for real-time operational insights.
                        </p>
                      </div>
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          Industrial / Manufacturing Technology (Bosch)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Built and maintained enterprise management modules including user profile management, role-based access control, product add/update/delete workflows, import/export management systems, and dynamic forms with robust validation, ensuring secure, scalable, and efficient industrial applications.
                        </p>
                      </div>
 
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-emerald-500 transition-all">
                        <h4 className="font-medium text-base text-gray-300 mb-2 flex items-center gap-2">
                          <span className="text-emerald-300">{`--`}</span>
                          FinTech (Indiabizzness)
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Implemented secure forms, validations, and API-driven user journeys used in financial onboarding and engagement flows.
                        </p>
                      </div>
                    </div>
                  </Card> */}

                </article>
                <article>
                  <h3 className="font-medium flex items-center gap-2  mt-3 mb-2">
                    <Building2  className="text-emerald-400" size={18}/>
                    MAGICBRICKS - PAYROLL: SHARP & YOUNG IT SOLUTIONS PVT. LTD.
                  </h3>
                  <p className="text-sm text-base text-gray-300 flex items-center gap-2">
                    <CalendarRange className="text-emerald-400" size={14} />
                    DEC 2014 – AUG 2016 · Noida
                  </p>
                  <div className="list-disc mt-2 text-sm text-base text-gray-400 space-y-1">
                    <p>
                      Built responsive user interfaces using HTML, CSS, Javascript and Bootstrap. Developed cross-platform,
                      compatible HTML/CSS email templates. Converted PSD designs into pixel-perfect HTML/CSS
                      implementations.
                    </p>

                  </div>
                </article>
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BrainCog className="text-emerald-400" size={18} />
                Education</h2>
              <Separator className="my-2" />
              <ul className="text-sm text-base text-gray-300 space-y-1">
                <li>
                  <strong>MASTER OF COMPUTER APPLICATIONS - MCA</strong> – Swami Vivekananda Subharti University
                  (2018) with A grade.
                </li>
                <li>
                  <strong>BACHELOR OF COMPUTER APPLICATIONS - BCA</strong> – Mahatma Gandhi Kashi Vidyapith University
                  (2014) with 71% of marks.
                </li>
              </ul>
            </section>

            {/*Few Recent Projects */}
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-emerald-400">{`//`}</span> Few Projects</h2>
              <Separator className="my-2" />
              <div className="flex flex-wrap gap-2" >
                {["Canon Snapshot", "Canon Photomarathon", "Sudlife", "Sudlife Bankboard", "CLHavas", "FIITJEE", "Dr. Reddy Biologics", "Bosch", "Indiabizzness"].map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-neutral-100 text-sm text-foreground border-border"  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

          </section>
        </CardContent>
      </Card>

    </main>
  );
}
