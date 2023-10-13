"use client";
export default function ErrorPage({
  error,
} // reset,
: {
  error: Error & { digest: string };
  // reset: () => void;
}) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {" "}
      <div className="animate-bounce w-12 h-12 bg-red-100">
        ERROR {error.digest}
      </div>
    </div>
  );
}
