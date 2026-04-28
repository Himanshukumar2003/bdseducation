import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/povider";
import Layout from "@/components/layout/layout";
import QueryProvider from "@/providers/query-client-provider";
import { Toaster } from "sonner";
import { NuqsProvider } from "@/providers/nuqs-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Robotics, AI & STEM Lab Provider for Schools & Colleges | BDS Education",
  description:
    "BDS Education is a leading robotics, AI and STEM lab provider for schools and colleges in India. Complete lab setup, curriculum, training, and educational robotics solutions.",
  keywords: [
    "robotics lab provider India",
    "STEM lab for schools",
    "ATL tinkering lab setup",
    "AI lab for schools",
    "educational robotics kits",
    "STEM education solutions India",
    "robotics lab setup schools colleges",
    "Atal Tinkering Lab provider",
    "NEP 2020 STEM lab",
    "BDS Education robotics",
  ],
  icons: { icon: "/favicon.ico" },
  authors: [{ name: "BDS Education", url: "https://bdseducation.in" }],
  creator: "BDS Education",
  publisher: "BDS Education",
  openGraph: {
    title:
      "Robotics, AI & STEM Lab Provider for Schools & Colleges | BDS Education",
    description:
      "BDS Education empowers schools & colleges with AI, coding, and robotics labs. Books, teacher training, online support, and student projects included.",
    url: "https://bdseducation.in",
    siteName: "BDS Education",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bdseducation.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BDS Education — Robotics, AI & STEM Lab Provider for Schools and Colleges in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics, AI & STEM Lab Provider | BDS Education",
    description:
      "India's trusted STEM, AI & Robotics lab provider for schools and colleges. Turnkey lab setup, curriculum & training included.",
    images: ["https://bdseducation.in/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bdseducation.in",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="cjo53Wxpkw1646zHPtrxUcnewM_nWW7js3yhcBbnriI"
        />

        {/* ✅ FIX 10: Fixed preconnect URL — was missing "connect." subdomain */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://connect.facebook.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* LCP image preload — keep this, it's correct */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-1.jpg"
          fetchPriority="high"
        />

        <Script
          id="bds-education-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "@id": "https://bdseducation.in/#organization",
                name: "BDS Education",
                legalName: "Bharat Drone Systems Pvt. Ltd.",
                url: "https://bdseducation.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bdseducation.in/images/logo.png",
                  width: 200,
                  height: 60,
                },
                description:
                  "BDS Education provides Robotics, AI and STEM lab solutions for schools and colleges across India. Turnkey lab setup, curriculum, training and support included.",
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Robotics, STEM & ATL Lab Solutions",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "ATL Tinkering Lab Setup",
                        serviceType: "Atal Tinkering Lab Solutions",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Non-ATL Robotics & STEM Lab",
                        serviceType: "Robotics and STEM Lab Solutions",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Teacher Training & Curriculum Support",
                        serviceType: "Educational Training",
                      },
                    },
                  ],
                },
              },
            ]),
          }}
        />

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
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

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RBJESJVNXN"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RBJESJVNXN');
gtag('config', 'AW-17844158729');`}
        </Script>

        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') { window.location = url; }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-17844158729/ZxCTCL-20fEbEImC4bxC',
    'value': 1.0,
    'currency': 'INR',
    'event_callback': callback
  });
  return false;
}`}
        </Script>
      </head>

      <body className={`${geistSans.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            alt=""
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
