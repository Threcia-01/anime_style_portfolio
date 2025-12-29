// src/pages/Origins.jsx
import bgImg from "../assets/Origins_Background.jpeg";

/* Background Wrapper */
function OriginsBackground({ children }) {
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

export default function Origins() {
  return (
    <OriginsBackground >
      <div className=" relative z-10 min-h-screen p-16 text-white pt-[150px]">
        <div className="max-w-[800px] space-y-6">

          {/* Title */}
          <p className="text-3xl font-bold leading-relaxed text-white/90">
            Origins is where it all started for me…
          </p>

          {/* Summary */}
          <h2 className="text-4xl font-extrabold text-white pt-6">
            Summary
          </h2>

          <p className=" bg-black/60  text-sm leading-relaxed text-white/80">
            I began by learning the basics of the web—HTML, CSS, and JavaScript—
            and building small things just to understand how everything worked.
            Over time, those experiments turned into real projects, and I started
            paying attention to structure, clarity, and how ideas come together
            into something usable.
          </p>

          <p className="bg-black/60 text-sm leading-relaxed text-white/80">
            This phase is about curiosity, trial and error, and developing the
            habit of learning continuously. It laid the foundation for how I
            approach building today.
          </p>

          {/* Education */}
          <h2 className="text-4xl font-extrabold text-white pt-10">
            Education
          </h2>

          <div className="bg-black/60 space-y-4 text-sm text-white/70">

            <div className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-white">
                  B.Tech in Artificial Intelligence
                </p>
                <p className="text-white/60">
                  Babu Banarsi Das University, Lucknow           
                </p>
              </div>
              <span className="whitespace-nowrap text-white/60">
                2022 – 2026
              </span>
            </div>

            <div className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-white">
                  Senior Secondary (12th CBSE)
                </p>
                <p className="text-white/60">
                  Rani Lakshmi Bai Memorial School
                </p>
              </div>
              <span className="whitespace-nowrap text-white/60">
                2020 – 2021
              </span>
            </div>

            <div className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-white">
                  Secondary (10th CBSE)
                </p>
                <p className="text-white/60">
                  Rani Lakshmi Bai Memorial School
                </p>
              </div>
              <span className="whitespace-nowrap text-white/60">
                2019 – 2020
              </span>
            </div>

          </div>
        </div>
      </div>
    </OriginsBackground>
  );
}
