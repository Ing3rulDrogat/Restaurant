"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const supabase = await createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {}
};

export const logUserOut = async () => {
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signOut();
  } catch (error) {}
  redirect("/");
};
