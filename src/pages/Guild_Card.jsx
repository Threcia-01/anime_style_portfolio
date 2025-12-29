// src/pages/Guild_Card.jsx

import bgImg from "../assets/Guild_Card_Background.png";
import logo from "../assets/DeepanshuLogo.png";
import { Github, Linkedin, Mail } from "lucide-react";

/* Background Wrapper */
function GuildCardBackground({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#E9D9B0",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
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

export default function Guild_Card() {
  return (
    <GuildCardBackground>
      {/* Same structure as Origins */}
      <div className="relative z-10 min-h-screen text-black">
        {/* Left content (right 40% reserved for nav panel) */}
        <div className="max-w-[60%]">

          {/* Logo + Content Layer */}
          <div className="relative">

            {/* Logo (background emblem layer) */}
            <img
              src={logo}
              alt="Deepanshu Logo"
              className="
                absolute
                pt-16
                pl-10
                h-[200px]
                opacity-80
                z-10
                pointer-events-none
              "
            />

            {/* Foreground Content */}
            <div className=" p-16 pt-[169px] relative z-10 space-y-6">

              <h1 className="text-5xl font-extrabold tracking-wide uppercase">
                Contact Me
              </h1>

              <p className="text-lg leading-relaxed max-w-xl">
                Ready to bring your vision to life or just want to chat?
                Reach out, and let’s create something memorable together.
              </p>

              <p className="text-sm text-black/70 leading-relaxed max-w-lg">
                I’m here to listen, collaborate, and craft design solutions
                that resonate.
              </p>

              {/* Email pill */}
              <div className="inline-flex items-center gap-3 mt-4 px-6 py-2 rounded-full border border-black/40 text-sm">
                <Mail size={16} />
                <span>deepchaudhary223@gmail.com</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-8 pt-6 text-sm">

                <a
                  href="https://github.com/Threcia-01"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-black/70 transition"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/deepanshu-chaudhary-a1b7012a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-black/70 transition"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:deepchaudhary223@gmail.com"
                  className="flex items-center gap-2 hover:text-black/70 transition"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </GuildCardBackground>
  );
}
