import React from "react";
import { useState } from "react";
import supabase from "./utils/supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [usename, setUsername] = useState<string | undefined>();

  async function signUpWithEmail() {
    try {
      if (email && password) {
        const resp = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (resp.error) throw resp.error;
        const userId = resp.data.user?.id;
        if (userId) {
          await createUser(userId);
          console.log("userId: ", userId);
        }
        
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
  
  async function createUser(userId: string) {
    try {
      const {error} = await supabase.from("users").insert({id: userId, username: username});
      if (error) throw error;
    } catch (error) {
      console.log("error: ", error);
    }
    
  }
  return (
    <div className="flex flex-col w-full justify-center items-center">
            <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700"
      >
        Username
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="username"
          id="username"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Rachamv"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="your email@google.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mt-4"
      >
        Password
      </label>
      <div className="mt-1">
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Your Password "
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="inline-flex items-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500  mt-2 "
        onClick={signUpWithEmail}
      >
        Sign up
      </button>
    </div>
  );
}
