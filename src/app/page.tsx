'use client';
import Plants from "./plants/page";
export default function Page() {
  return (
    <main className="font-mono flex min-h-screen flex-col items-center justify-between p-4">
      <Plants />
    </main>
  );
}