import "@/styles/globals.css";
import React from "react";
import Navigation from "@/components/navigation";
import { KEYWORDS } from "lib/utils/constants";
import { Poppins, Source_Code_Pro as SourceCodePro } from "next/font/google";
import cn from "@/lib/utils/cn";

export const fontSans = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
});

export const fontMono = SourceCodePro({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-mono",
});

export const metadata = {
    creator: "Drew Beamer",
    icons: {
        icon: "/favicon.png",
    },
    keywords: KEYWORDS,
    metadataBase: "https://www.drewbeamer.io/",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    "font-sans bg-background",
                    fontSans.variable,
                    fontMono.variable
                )}
            >
                <Navigation />
                <main>
                    <div className="max-w-screen-xl w-full mx-auto">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
//  <Footer />
