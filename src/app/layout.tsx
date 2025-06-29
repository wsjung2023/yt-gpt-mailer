import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "YT→GPT→Mailer",
  description: "Automation dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}