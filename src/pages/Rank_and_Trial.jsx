// src/pages/Rank_and_Trials.jsx
import bgImg from "../assets/Rank_and_Trials_Background.png";

/* Background Wrapper */
function RankTrialsBackground({ children }) {
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
          backgroundColor: "#131430",
        }}
      />

      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}

export default function Rank_and_Trials() {
  return (
    <RankTrialsBackground>
      <div className="relative z-10 min-h-screen p-16 text-white pt-[150px]">
        <div className="max-w-[800px] space-y-6">

          {/* Title */}
          <p className="text-3xl font-bold leading-relaxed text-white/90">
            Rank & Trials mark the stage where learning was tested through
            real-world execution.
          </p>

          {/* Experience */}
          <h2 className="text-4xl font-extrabold text-white pt-6">
            Experience
          </h2>

          <div className="bg-black/60 space-y-4 text-sm text-white/70">
            <div className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-white">
                  Front End Developer Intern
                </p>
                <p className="text-white/60">
                  AT MICRO IT · Remote
                </p>
              </div>
              <span className="whitespace-nowrap text-white/60">
                May 2025 – June 2025
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              <li>UI structuring & layout optimization</li>
              <li>DOM handling & vanilla JavaScript logic</li>
              <li>Git & GitHub version control discipline</li>
              <li>Design intuition for real-world user flow</li>
            </ul>
          </div>

          {/* Achievements */}
          <h2 className="text-4xl font-extrabold text-white pt-10">
            Achievements & Certifications
          </h2>

          <div className="bg-black/60 space-y-4 text-sm text-white/70">

            <div className="flex justify-between gap-6">
              <p className="font-medium text-white">
                Web Development Course — Hitesh Choudhary
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-white/60 hover:text-white underline"
              >
                View
              </a>
            </div>

            <div className="flex justify-between gap-6">
              <p className="font-medium text-white">
                Code Titans — Battle of Brilliance
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-white/60 hover:text-white underline"
              >
                View
              </a>
            </div>

            <div className="flex justify-between gap-6">
              <p className="font-medium text-white">
                Adobe Designation — IIT Delhi
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-white/60 hover:text-white underline"
              >
                View
              </a>
            </div>

            <div className="flex justify-between gap-6">
              <p className="font-medium text-white">
                UI/UX Hackathon — IIT BHU (5th Position)
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-white/60 hover:text-white underline"
              >
                View
              </a>
            </div>

          </div>
        </div>
      </div>
    </RankTrialsBackground>
  );
}
