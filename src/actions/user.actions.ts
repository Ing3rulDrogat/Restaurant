"use server";
import { createClient } from "@/utils/supabase/server";

export const getCurrentUser = async () => {
  const supabase = await createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {}
};
