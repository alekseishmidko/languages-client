import type { GetServerSideProps, Metadata } from "next";
import { Rubik } from "next/font/google";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "./globals.css";
import { ThemeWrapper } from "./components/ThemeProvider/ThemeProvider";
import AuthLayout from "./components/Layouts/AuthLayout";
import { Toaster } from "sonner";
import { DEFAULT_THEME } from "./utils/constants/theme.constants";
import { cookies } from "next/headers";
import Header from "./components/Common/Header/Header";
const inter = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = (cookieStore.get("theme") ?? DEFAULT_THEME) as string;

  return (
    <AuthLayout>
      <html lang="en">
        <ThemeWrapper theme={theme}>
          <body className={`${inter.className} min-h-screen`}>
            <Header theme={theme} />
            {children}
          </body>{" "}
          <Toaster
            theme={"dark"}
            position="bottom-right"
            duration={2000}
            richColors
          />
        </ThemeWrapper>
      </html>
    </AuthLayout>
  );
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
