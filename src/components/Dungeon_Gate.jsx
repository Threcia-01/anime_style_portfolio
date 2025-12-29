// src/components/Dungeon_Gate.jsx

import gateImg from "../assets/dungeon_gate.png";

export default function DungeonGate({ logo,title, subtitle, tech, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative
        w-[300px]
        h-4/5
        mx-auto
        cursor-pointer
        transition-transform
        hover:scale-105
      "
    >
        {/* Gate Image */}
        <img
            src={gateImg}
            alt="Dungeon Gate"
            className="w-full block"
        />

        {/* Content INSIDE the gate */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
            <div
                className="
                w-[67%]
                h-[80%]
                flex flex-col items-center justify-center
                pb-12
                text-center
                space-y-0
                "
            >
                {logo && (
                    <img
                        src={logo}
                        alt=""
                        className="w-[70%] max-w-[180px] h-[20%] max-h-[150px] object-contain mb-1"
                    />
                )}
                <h3 className="text-white font-semibold text-lg">
                    {title}
                </h3>

                <p className="text-white/70 text-xs">
                    {subtitle}
                </p>

                <p className="text-indigo-300 text-[10px] tracking-wide">
                    {tech}
                </p>
            </div>
        </div>
    </div>
  );
}

