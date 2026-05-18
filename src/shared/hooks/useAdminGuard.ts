"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routes } from "../constants/routes";
import { getAccessToken } from "../helpers/auth-storage";

export const useAdminGuard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!getAccessToken()) {
      router.replace(routes.adminLogin);
    }
  }, [router]);
};
