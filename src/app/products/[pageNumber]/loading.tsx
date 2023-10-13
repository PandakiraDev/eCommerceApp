export default function Loading() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      aria-busy="true"
    >
      {" "}
      <div className="animate-spin w-12 h-12 bg-red-100">Loading...</div>
    </div>
  );
}
