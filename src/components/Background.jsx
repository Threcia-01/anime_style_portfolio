// src/components/Background.jsx

import bgImg from "../assets/Background_Image.jpeg";

export default function Background({ children }) {
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
          willChange: "transform, opacity",
        }}
      />

        <div
        aria-hidden="true"
        style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",

            background: `
            radial-gradient(600px 400px at 20% 30%, rgba(255,255,255,0.12), transparent 100%),
            radial-gradient(500px 350px at 70% 25%, rgba(255,255,255,0.10), transparent 100%),
            radial-gradient(700px 500px at 40% 70%, rgba(255,255,255,0.08), transparent 100%),
            radial-gradient(400px 300px at 85% 75%, rgba(255,255,255,0.10), transparent 100%)
            `,
        }}
        />

        {/* anything in this div will be above the background */}
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}

