import { HeroSection } from "@/modules/Hero/presentation";
import { HowItWorkSection } from "@/modules/HowItWorks/presentation";
import { RecentSection } from "@/modules/Recent/presentation";
import { VideoTypeSection } from "@/modules/VideoTypes/presentation";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecentSection />
      <HowItWorkSection />
      <VideoTypeSection />
    </div>
  );
}
