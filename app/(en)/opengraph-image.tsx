import { renderOGImage } from "@/lib/og";

export const alt = "Johannes Nguyen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return renderOGImage();
}
