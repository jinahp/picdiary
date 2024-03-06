"use client";

export default function useSessionStorage(
  key: string
): [string | null, (session: string) => void] {
  const isServer = typeof window === "undefined";
  const setSession = (session: string) => {
    isServer || window.sessionStorage.setItem(key, session);
  };
  return [isServer ? "" : window.sessionStorage.getItem(key), setSession];
}
