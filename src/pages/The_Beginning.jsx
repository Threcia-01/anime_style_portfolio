// src/pages/The_Beginning.jsx

import Background from "../components/Background";

export default function The_Beginning() {
  return (
    <Background>
      <div className="relative z-10 min-h-screen flex items-center px-16 text-white">
        
        {/* LEFT CONTENT PANEL */}
        <div className="max-w-xl ">
          
          {/* Rank */}
          <div className="flex items-center text-indigo-300 tracking-widest">
            <span className="text-2xl font-bold">S </span>
            <span className="uppercase text-sm opacity-80">Rank</span>
          </div>

          {/* Title */}
          <p className="text-sm uppercase tracking-wider text-white/70">
            Threica • AKA
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-tight">
            DEEPANSHU <br />
            CHAUDHARY
          </h1>

          {/* Subtitle (optional – anime style) */}
          <p className="text-white/60 text-lg">
            The One Who Chose the Path of Growth
          </p>

          {/* Description */}
          <p className="text-sm leading-relaxed text-white/70 pt-4">
            A developer who began as a beginner in the realm of Binary code.
            Through continuous learning, real-world projects, and discipline,
            he awakened his potential and now walks the path toward mastery in
            frontend, backend, and cloud technologies.
          </p>

          <p className="text-sm leading-relaxed text-white/60">
            Each project cleared, each skill unlocked, and each challenge faced
            contributes to his evolution as a full-stack developer.
          </p>
          <br></br>

          <p className="text-sm leading-relaxed font-bold text-white/60">
            "Strength was not given — it was built.
          </p>

          <p className="text-sm leading-relaxed font-bold text-white/60">
            Discover its beginning in Origins."
          </p>


        </div>
      </div>
    </Background>
  );
}
