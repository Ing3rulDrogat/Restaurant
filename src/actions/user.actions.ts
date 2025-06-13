"use server";
import { createClient } from "@/utils/supabase/server";
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

export const resetUserPassword = async (email: string) => {
  const supabase = await createClient();
  let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/account?fromReset=true",
  });
};

export const setUserSession = async (code: string) => {
  const supabase = await createClient();
  console.log("Got to here");
  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    console.log(data);
    if (data && data.session) {
      const { access_token, refresh_token } = data.session;
      const response = supabase.auth.setSession({ access_token, refresh_token });
    }

    console.log("Should have set session, next is the response");
  } catch (err) {}

  console.log("Shoul've worked?");
};
