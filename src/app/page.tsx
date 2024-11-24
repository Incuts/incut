import { HeroSection } from "@/modules/Hero/presentation";
import { RecentSection } from "@/modules/Recent/presentation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecentSection />
    </div>
  );
}
