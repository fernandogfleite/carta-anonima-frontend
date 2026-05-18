"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "../constants/routes";
import { getAccessToken } from "../helpers/auth-storage";

export function AdminGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.replace(routes.adminLogin);
      return;
    }
    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
