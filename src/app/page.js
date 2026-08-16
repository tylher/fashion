import Image from "next/image";
import Hero from "../components/home/Hero";
import FeaturedCollection from "../components/home/FeaturedCollection";
import BrandStatement from "../components/home/BrandStatement";
import SocialProof from "../components/home/Socialproof";
import EmailCapture from "../components/home/EmailCapture";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <BrandStatement />
        <FeaturedCollection />
        <SocialProof />
        <EmailCapture />
      </main>
    </div>
  );
}
