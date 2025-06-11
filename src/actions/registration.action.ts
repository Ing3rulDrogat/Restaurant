"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const logInUser = async (email: string, password: string) => {
  var loggedIn: Boolean = false;
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error.message;
    loggedIn = true;
  } catch (err) {
    loggedIn = false;
    return err;
  }
  if (loggedIn) {
    redirect("/");
  }
};

export const signUpUser = async (email: string, password: string, firstName: string) => {
  const supabase = await createClient();
  try {
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
        },
      },
    });
    if (error) throw error.message;
  } catch (err) {
    return err;
  }
};

export const logInWithGoogle = async () => {
  const supabase = await createClient();
  const authCallbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

  let { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: authCallbackUrl,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    return error;
  }
  redirect(data?.url ?? "/");
};
