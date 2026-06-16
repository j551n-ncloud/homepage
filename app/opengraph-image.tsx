import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Johannes Nguyen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const bgData = fs.readFileSync(path.join(process.cwd(), "public/bg.jpg"));
  const bgBase64 = `data:image/jpeg;base64,${bgData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        {/* background image */}
        <img
          src={bgBase64}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* dark overlay matching hero */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.22), rgba(0,0,0,0.38))",
          display: "flex",
        }} />

        {/* content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "64px 80px" }}>
          {/* name */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "108px", fontWeight: 800, color: "#141414", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Johannes
            </span>
            <span style={{ fontSize: "108px", fontWeight: 800, color: "#141414", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Nguyen
            </span>
          </div>

          {/* bottom section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.25)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  {["Infrastructure", "Automation", "DevOps", "DKFZ"].map((tag) => (
                    <div
                      key={tag}
                      style={{
                        fontSize: "16px", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "#141414", border: "1px solid rgba(20,20,20,0.5)",
                        padding: "8px 20px", display: "flex",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5eead4", display: "flex" }} />
                  <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5eead4" }}>
                    Available
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
                j551n.com
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
