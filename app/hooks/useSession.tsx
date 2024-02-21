"use client";

export default function useSession(
  key: string
): [string | null, (session: string) => void] {
  const isServer = typeof window === "undefined";
  const setSession = (session: string) => {
    isServer || window.sessionStorage.setItem(key, session);
  };
  return [isServer ? "" : window.sessionStorage.getItem(key), setSession];
}
