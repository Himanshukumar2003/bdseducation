import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/povider";
import SmoothScrollProvider from "@/providers/smooth-scroll-provider";
import Layout from "@/components/layout/layout";
import QueryProvider from "@/providers/query-client-provider";
import { Toaster } from "sonner";
import { NuqsProvider } from "@/providers/nuqs-provider";
import Script from "next/script";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BDS Education",
  description:
    "BDS Education empowers schools & colleges with AI, coding, and robotics labs. Get books, teacher training, online support, and exciting student projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  // const path = usePathname();
  // const pathName = ["/dashboard"];
  // if (pathName.includes(path)) return children;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="cjo53Wxpkw1646zHPtrxUcnewM_nWW7js3yhcBbnriI"
        />

        <Script id="fb">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2052760585472820');
fbq('track', 'PageView');`}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RBJESJVNXN"
        ></Script>

        <Script id="config">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RBJESJVNXN');
            `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2052760585472820&ev=PageView&noscript=1"
          />
        </noscript>

        <QueryProvider>
          <Providers>
            <NuqsProvider>
              <Layout>{children}</Layout>
            </NuqsProvider>
          </Providers>
        </QueryProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
