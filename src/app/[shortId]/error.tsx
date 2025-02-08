"use client";

import React from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md">
      <p className="font-semibold">Error:</p>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 bg-red-500 text-white p-2 rounded"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
