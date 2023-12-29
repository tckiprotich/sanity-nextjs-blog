import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "IPHURTS - We Build Digital Solutions",
      template: "%s | IPHURTS"
    },
    description:
      settings?.description ||
      "IPHURTS - Our mission is to empower busines  with crafting digital solutions. We build websites, web apps, mobile apps,Apis and more.",
    keywords: ["Software development", "APIs", "Custom software solution"],
    authors: [{ name: "Collins Tonui" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "IPHURTS",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
export const revalidate = 60;
