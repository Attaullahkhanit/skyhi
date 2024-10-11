"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type RouteContextType = {
  route: string;
};

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const route =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  useEffect(() => {
    console.log("Current Route:", route);
  }, [route]);

  const contextValue: RouteContextType = {
    route,
  };

  return (
    <RouteContext.Provider value={contextValue}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRoute must be used within a RouteProvider");
  }
  return context;
};
