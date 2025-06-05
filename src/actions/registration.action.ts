"use server";
import { createClient } from "@/utils/supabase/server";

export const logInUser = async (email: string, password: string) => {
  const supabase = await createClient();
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  } catch (error2) {}
};

export const signUpUser = async (email: string, password: string) => {
  const supabase = await createClient();
  try {
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  } catch (error) {}
};
