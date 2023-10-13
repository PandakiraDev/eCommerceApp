import { ImageResponse } from "next/server";

export const runtime = "edge";
export const contentType = "image/jpg";
export const size = {
  width: 800,
  height: 400,
};
export const alt = "OpenGraph Image";

export default function OpenGraphImage({}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <svg
          width="75"
          viewBox="0 0 75 65"
          fill="#000"
          style={{ margin: "0 75px" }}
        >
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
        <div style={{ marginTop: 40 }}>Hello, World</div>
      </div>
    )
  );
}