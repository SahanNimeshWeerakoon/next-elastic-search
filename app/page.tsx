"use client"

// import { puter } from "@heyputer/puter.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const run = async () => {
      try {
        // if(!puter.auth.isSignedIn()) await puter.auth.signIn();

        // const res = await puter.ai.chat("Hello");
        console.log(res);
      } catch(e) {
        console.error("puter sign in error", e)
      }
    }

    run();
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
      </main>
    </div>
  );
}
