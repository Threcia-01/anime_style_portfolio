// src/pages/Dungeon_Cleared.jsx

import DungeonGate from "../components/Dungeon_Gate";
import bgImg from "../assets/dungeon_background_1.jpg";

import vidtubeLogo from "../assets/VidtubeLogo.png";
import awsLogo from "../assets/aws_logo.jpg";
import todoLogo from "../assets/todo_list_logo.jpg";

/* Background Wrapper */
function DungeonBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-[#131430] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* Dungeon Node (Gate + Connector) */
function DungeonNode({ children, isLast = false }) {
  return (
    <div className="flex flex-col items-center">
      {children}

      {!isLast && (
        <div
          className="
            w-[2px]
            h-20
            bg-white/40
            -mt-5
          "
        />  
      )}
    </div>
  );
}

export default function Dungens_Cleared() {
  return (
    <DungeonBackground>
      <div className="min-h-screen pt-[140px] px-16 text-white">

        <h1 className="text-5xl font-extrabold mb-12">
          Dungeons Cleared
        </h1>

        {/* Dungeon Path */}
        <div className="mx-auto max-w-[500px]">

          <DungeonNode>
            <DungeonGate
              logo={vidtubeLogo}
              title="VidTube"
              subtitle="Video Streaming Platform"
              tech="React • Node • MongoDB"
              onClick={() => window.open("https://example.com", "_blank")}
            />
          </DungeonNode>

          <DungeonNode>
            <DungeonGate
              logo={awsLogo}
              title="AWS Optimization"
              subtitle="Automation Project"
              tech="AWS • Lambda • IAM"
            />
          </DungeonNode>

          <DungeonNode isLast>
            <DungeonGate
              logo={todoLogo}
              title="Todo List"
              subtitle="Task Manager"
              tech="HTML • CSS • JavaScript"
            />
          </DungeonNode>

        </div>
      </div>
    </DungeonBackground>
  );
}
