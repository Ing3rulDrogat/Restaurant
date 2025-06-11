"use server";
import { createClient, supabaseBrowser } from "@/utils/supabase/server";
import { createBrowserClient } from "@supabase/ssr";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user;
};

export const logUserOut = async () => {
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signOut();
  } catch (error) {}
  redirect("/");
};
