// src/pages/Status_Window.jsx

import bgImg from "../assets/Status_Window_Background.png";

/* Background Wrapper */
function StatusWindowBackground({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#131430",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}

export default function StatusWindow() {
  return (
    <StatusWindowBackground>
      {/* Page wrapper (left 70%, nav handled by MainLayout) */}
      <div className="min-h-screen pl-16 pt-[140px] pb-16">
        <div className="max-w-[65%]">
          {/* Resume Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10 text-black shadow-2xl space-y-12">

            {/* HEADER */}
            <header className="space-y-4">
              <h1 className="text-4xl font-bold tracking-wide">
                Deepanshu Chaudhary
              </h1>
              <p className="text-lg text-black/70">
                Junior Full-Stack Developer · Frontend-Focused
              </p>

              <div className="text-sm text-black/60 space-y-1">
                <p>📍 Lucknow, Uttar Pradesh, India</p>
                <p>📧 deepchaudhary29924@gmail.com</p>
                <p>📞 +91-7651882669</p>
                <p>
                  🔗 GitHub:{" "}
                  <a
                    href="https://github.com/Threcia-01"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-black"
                  >
                    github.com/Threcia-01
                  </a>
                </p>
                <p>
                  🔗 LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/deepanshu-chaudhary-a1b7012a7/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-black"
                  >
                    linkedin.com/in/deepanshu-chaudhary
                  </a>
                </p>
              </div>

              <a
                href="/resume/12_1_25_Deepanshu_Resume.pdf"
                download
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium text-white"
              >
                Download Resume (PDF)
              </a>
            </header>

            {/* SUMMARY */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Summary</h2>
              <p className="text-black/80 leading-relaxed">
                Junior programmer with strong fundamentals in HTML, CSS, and
                JavaScript, recently trained in AWS cloud services and actively
                pursuing full-stack mastery. Experienced in building scalable,
                modular UI architectures and backend systems with authentication,
                databases, and cloud storage. Passionate about clean system-oriented
                design, performance optimization, and continuous learning.
              </p>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

              <div className="space-y-4 text-black/80">
                <p>
                  <span className="font-medium text-black">Frontend:</span>{" "}
                  HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript,
                  React.js, Next.js, DOM handling, UI structuring
                </p>
                <p>
                  <span className="font-medium text-black">Backend:</span>{" "}
                  Node.js, Express.js, RESTful APIs, JWT Authentication,
                  MongoDB, PostgreSQL, Prisma, Drizzle
                </p>
                <p>
                  <span className="font-medium text-black">Cloud:</span>{" "}
                  AWS Lambda, IAM, CloudWatch, Cloudinary
                </p>
                <p>
                  <span className="font-medium text-black">Tools:</span>{" "}
                  Git, GitHub, VS Code, Postman, Figma, Canva, Eraser
                </p>
              </div>
            </section>

            {/* WORK EXPERIENCE (Education-style) */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

              <div className="space-y-4 text-sm text-black/70">
                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      Frontend Developer — Micro IT (Remote)
                    </p>
                    <p className="text-black/60">
                      UI structuring and layout optimization
                    </p>
                    <p className="text-black/60">
                      DOM manipulation using vanilla JavaScript
                    </p>
                    <p className="text-black/60">
                      Git & GitHub version control discipline
                    </p>
                    <p className="text-black/60">
                      Improved real-world user flow and usability
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    May 2025 – Jun 2025
                  </span>
                </div>
              </div>
            </section>

            {/* PROJECTS (Education-style) */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>

              <div className="space-y-4 text-sm text-black/70">
                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      AWS Code Optimization (Automation Project)
                    </p>
                    <p className="text-black/60">
                      AWS Lambda automation, unused EBS cleanup,
                      IAM policies, CloudWatch monitoring
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    Jul 2025
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      INDIAMart-Inspired B2B Marketplace Clone
                    </p>
                    <p className="text-black/60">
                      B2B e-commerce UI, product listings, cart flow,
                      scalable modular frontend
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    Apr 2025 – May 2025
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      VidTube — YouTube-Inspired Streaming Platform
                    </p>
                    <p className="text-black/60">
                      Full-stack video platform, React, Node.js,
                      JWT auth, MongoDB & Cloudinary
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    Sep 2025 – Oct 2025
                  </span>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>

              <div className="space-y-4 text-sm text-black/70">
                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      B.Tech in Artificial Intelligence
                    </p>
                    <p className="text-black/60">
                      Babu Banarsi Das University, Lucknow
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    2022 – 2026
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      Senior Secondary (12th CBSE)
                    </p>
                    <p className="text-black/60">
                      Rani Lakshmi Bai Memorial School
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    2020 – 2021
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <div>
                    <p className="font-medium text-black">
                      Secondary (10th CBSE)
                    </p>
                    <p className="text-black/60">
                      Rani Lakshmi Bai Memorial School
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-black/60">
                    2019 – 2020
                  </span>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Achievements & Certifications
              </h2>

              <ul className="list-disc list-inside text-black/80 space-y-1">
                <li>Web Development Course — Hitesh Choudhary</li>
                <li>Code Titans: Battle of Brilliance (Participant)</li>
                <li>Adobe Designation Program — IIT Delhi</li>
                <li>
                  UI/UX Hackathon — IIT BHU (5th position, 3rd round)
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </StatusWindowBackground>
  );
}
