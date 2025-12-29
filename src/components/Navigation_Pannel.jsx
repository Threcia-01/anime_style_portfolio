// src/components/Navigation_Pannel.jsx

import { NavLink } from "react-router-dom";

const items = [
  { name: "The Beginning", path: "/" },
  { name: "Origins", path: "/origins" },
  { name: "Dungeons Cleared", path: "/dungens_cleared" },
  { name: "Inventory", path: "/inventory" },
  { name: "Rank & Trials", path: "/rank_and_trials" },
  { name: "Status Window", path: "/status_window" },
  { name: "Guild Card", path: "/guild_card" },
];

export default function Navigation_Pannel({ position = "right", textColor }) {
  const baseText = textColor === "black" ? "text-black" : "text-white";
  const mutedText =
    textColor === "black" ? "text-black/60" : "text-white/60";

  const positionClass =
    position === "center"
      ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      : "right-14 top-1/2 -translate-y-1/2";

  return (
    <aside
      className={`
        fixed
        text-xl
        z-30
        pointer-events-auto
        ${positionClass}
      `}
    >
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} end={item.path === "/"}>
              {({ isActive }) => (
                <div
                  className={`
                    flex items-center gap-3 transition-all duration-200
                    ${
                      isActive
                        ? `${baseText} text-base font-semibold scale-110`
                        : `${mutedText} hover:${baseText}`
                    }
                  `}
                >
                  {/* ✅ DOT — NOW 100% GUARANTEED */}
                  <span
                    className={`
                      h-2 w-2 rounded-full
                      bg-current
                      ${isActive ? "opacity-100" : "opacity-0"}
                      transition-opacity
                    `}
                  />
                  <span>{item.name}</span>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
