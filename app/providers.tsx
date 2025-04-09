"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
