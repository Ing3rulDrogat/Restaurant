"use client";
import { logUserOut } from "@/actions/user.actions";
import React from "react";

function Account() {
  return (
    <div className="w-screen h-screen bg-black justify-items-center content-center">
      <div className="w-1/3 h-2/3 bg-amber-700 content-center">
        <button className="bg-red-500" onClick={logUserOut}>
          Log-Out
        </button>
      </div>
    </div>
  );
}

export default Account;
