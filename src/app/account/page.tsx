"use client";
import { logUserOut, setUserSession } from "@/actions/user.actions";
import Account from "@/components/Account";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

function AccountPage() {
  return (
    <Suspense>
      <Account></Account>
    </Suspense>
  );
}

export default AccountPage;
