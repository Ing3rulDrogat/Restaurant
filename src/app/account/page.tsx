"use client";
import { logUserOut, setUserSession } from "@/actions/user.actions";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function Account() {
  const searchParams = useSearchParams();
  const cameFromEmail = searchParams.get("fromReset") === "true";

  useEffect(() => {
    if (cameFromEmail) {
      const code = searchParams.get("code");
      console.log(code);

      if (code) setUserSession(code);

      console.log("called set session");
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-black justify-items-center content-center">
      <div className="w-1/3 h-2/3 bg-amber-700 content-center">
        <button className="bg-red-500" onClick={logUserOut}>
          Log-Out
        </button>
        {cameFromEmail ? <p>Came from reset email</p> : <p>Didnt come from reset email</p>}
      </div>
    </div>
  );
}

export default Account;
