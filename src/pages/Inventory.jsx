// src/pages/Inventory.jsx

import { useState } from "react";
import inventoryBg from "../assets/Inventory.png";

export default function Inventory() {
  return (
    <Inventory_Background>
      <div className="flex flex-wrap gap-16 justify-center">
        <SkillCard
          title="Programming Languages"
          skills={["JavaScript", "Python"]}
        />

        <SkillCard
          title="Frontend Development"
          skills={["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"]}
        />

        <SkillCard
          title="Backend Development"
          skills={[
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT (Authentication)",
            "Winston",
            "Morgan",
          ]}
        />

        <SkillCard title="Databases" skills={["MongoDB", "MySQL"]} />

        <SkillCard
          title="Tools & Platforms"
          skills={[
            "Git / GitHub",
            "VS Code",
            "AWS Basics",
            "Figma",
            "Canva",
            "Cloudinary",
            "Eraser",
            "Postman",
          ]}
        />
      </div>
    </Inventory_Background>
  );
}

/* ─────────────────────────────────────────────── */

function Inventory_Background({ children }) {
  return (
    <div
      className="relative min-h-screen pr-60 pt-[70px] pl-8 overflow-hidden"
      style={{
        backgroundImage: `url(${inventoryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────── */

function SkillCard({ title, skills }) {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const expandable = skills.length > 3;
  const expanded = expandable && (locked || hovered);

  return (
    <div
      onMouseEnter={() => expandable && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => expandable && setLocked((p) => !p)}
      className={`
        w-[260px] h-[220px] p-5 rounded-lg
        bg-[rgba(19,20,48,0.85)]
        border border-[rgba(120,130,255,0.35)]
        backdrop-blur-md
        text-center
        shadow-[0_0_20px_rgba(120,130,255,0.15),inset_0_0_10px_rgba(120,130,255,0.05)]
        transition-all duration-300
        ${
          expandable
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(120,130,255,0.35)]"
            : "cursor-default"
        }
      `}
    >
      {/* Title */}
      <h3 className="text-[#ff4d5a] text-[16px] font-medium tracking-wide mb-3">
        {title}
      </h3>

      {/* Skills */}
      <div
        className={`
          text-[#d9dbff] transition-all duration-300
          ${
            expanded
              ? "text-[12px] leading-tight space-y-[2px]"
              : "text-sm leading-relaxed space-y-1"
          }
        `}
      >
        {(expanded ? skills : skills.slice(0, 3)).map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}

        {!expanded && expandable && <div className="opacity-60">...</div>}
      </div>

      {/* Hint */}
      {!expanded && expandable && (
        <div className="mt-2 text-white text-xs opacity-40">
          Hover or click to expand
        </div>
      )}
    </div>
  );
}
