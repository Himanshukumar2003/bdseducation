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

        <Script
          id="bds-education-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "BDS Education",
  "description": "BDS Education empowers schools & colleges with AI, coding, and robotics labs. Get books, teacher training, online support, and exciting student projects.",
  "serviceType": "Robotics Lab, STEM Lab and Tinkering Lab Solutions",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "BDS Education",
    "url": "https://bdseducation.in/"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "keywords": [
    "Robotics lab provider for schools and colleges",
    "Educational robotics lab",
    "Robotics lab setup",
    "Robotics training lab",
    "Robotics lab for schools",
    "Robotics lab for CBSE schools",
    "Robotics lab for ICSE schools",
    "AI & Robotics lab for schools",
    "STEM lab for schools",
    "ATL robotics lab",
    "Robotics lab for colleges",
    "Robotics lab for engineering colleges",
    "Robotics lab for polytechnic colleges",
    "AI & Robotics lab for colleges",
    "IoT and robotics lab",
    "STEM robotics lab",
    "AI lab for education",
    "Coding and robotics lab",
    "Innovation lab for institutions",
    "Future skills lab",
    "Robotics lab installation",
    "Turnkey robotics lab solution",
    "End-to-end robotics lab provider",
    "Faculty training for robotics",
    "Robotics workshops for schools and colleges",
    "Robotics lab provider in India",
    "STEM lab setup",
    "STEM lab for schools",
    "STEM lab for colleges",
    "Educational STEM lab",
    "STEM learning lab",
    "STEM lab for CBSE schools",
    "STEM lab for ICSE schools",
    "STEM lab for K-12 schools",
    "STEM lab for primary schools",
    "STEM lab for secondary schools",
    "ATL STEM lab",
    "STEM lab for engineering colleges",
    "STEM lab for degree colleges",
    "STEM lab for polytechnic colleges",
    "STEM innovation lab for colleges",
    "Research-based STEM lab",
    "AI-based STEM lab",
    "Coding and STEM lab",
    "AI & robotics STEM lab",
    "IoT-based STEM lab",
    "STEM curriculum provider",
    "STEM education solutions",
    "STEM teacher training",
    "Faculty training for STEM lab",
    "Hands-on STEM learning",
    "STEM lab installation",
    "Turnkey STEM lab solution",
    "End-to-end STEM lab provider",
    "STEM lab maintenance & support",
    "STEM workshops for schools and colleges",
    "NEP 2020 STEM lab",
    "Government approved STEM lab",
    "ATL compliant STEM lab",
    "Skill development STEM lab",
    "Best STEM lab provider",
    "Affordable STEM lab setup",
    "Customized STEM lab solutions",
    "STEM lab with curriculum and kits",
    "STEM lab provider in India",
    "STEM lab setup company in India",
    "STEM lab provider near me",
    "Tinkering lab provider",
    "Tinkering lab setup",
    "School tinkering lab",
    "Educational tinkering lab",
    "Innovation tinkering lab",
    "Atal Tinkering Lab provider",
    "ATL lab setup",
    "ATL lab for schools",
    "ATL compliant lab",
    "Atal Tinkering Lab equipment",
    "ATL lab solution provider",
    "Tinkering lab for schools",
    "Tinkering lab for CBSE schools",
    "Tinkering lab for ICSE schools",
    "K-12 tinkering lab",
    "STEM tinkering lab for schools",
    "Tinkering lab for colleges",
    "Innovation lab for colleges",
    "STEM tinkering lab for colleges",
    "Research & innovation lab",
    "STEM tinkering lab",
    "AI tinkering lab",
    "Robotics tinkering lab",
    "Coding and tinkering lab",
    "IoT tinkering lab",
    "Tinkering lab installation",
    "Turnkey tinkering lab solution",
    "End-to-end ATL lab setup",
    "Tinkering lab curriculum provider",
    "Teacher training for ATL lab",
    "NITI Aayog ATL lab",
    "NEP 2020 aligned tinkering lab",
    "Government approved tinkering lab",
    "Skill development tinkering lab",
    "Best tinkering lab provider",
    "Affordable ATL lab setup",
    "Customized tinkering lab solutions",
    "ATL lab with curriculum & kits",
    "Tinkering lab provider in India",
    "ATL lab provider in India",
    "Tinkering lab setup company near me",
    "Robotics products",
    "Educational robotics products",
    "Robotics kits",
    "Robotics learning kits",
    "Robotics lab products",
    "Robotics kits for schools",
    "Robotics products for kids",
    "Beginner robotics kits",
    "School robotics equipment",
    "Educational robot kits",
    "Robotics products for colleges",
    "Advanced robotics kits",
    "Robotics research equipment",
    "Engineering robotics kits",
    "Mechatronics lab equipment",
    "Arduino robotics kits",
    "ESP32 robotics kits",
    "Raspberry Pi robotics kits",
    "AI robotics kits",
    "IoT robotics kits",
    "Line follower robot kit",
    "Obstacle avoidance robot kit",
    "Ultrasonic sensor",
    "IR sensor",
    "Gas sensor",
    "Temperature sensor",
    "Motion sensor PIR",
    "Robotics sensor kits",
    "DC motors",
    "Servo motors",
    "Stepper motors",
    "Motor driver modules",
    "Robot wheels and chassis",
    "AI vision kits",
    "Voice recognition modules",
    "Gesture control robotics kits",
    "Smart robot kits",
    "Autonomous robot kits",
    "Tinkering lab robotics products",
    "Innovation lab robotics kits",
    "STEM robotics products",
    "Breadboard",
    "Jumper wires",
    "Power supply modules",
    "Battery packs",
    "Soldering kit",
    "Robotics tool kits",
    "Robotics programming software",
    "Block-based coding robots",
    "Python robotics kits",
    "Scratch robotics kits",
    "Best robotics products for education",
    "Affordable robotics kits",
    "Robotics products supplier",
    "Robotics products manufacturer",
    "Robotics products distributor",
    "Robotics products in India",
    "Robotics kits supplier India",
    "Educational robotics products India"
  ]
}`}
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
