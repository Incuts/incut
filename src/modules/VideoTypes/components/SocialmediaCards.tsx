import { cn } from "@/lib/utils";

export default function FeatureGrid() {
  const cards = [
    { title: "YouTube Shorts", icon: "🔗", row: true },
    { title: "Instagram Reels", icon: "🎥", row: true },
    { title: "Product Demos", icon: "▶️" },
    { title: "Video Explainers", icon: "❓" },
    {
      title: "Social Media Ads",
      icon: "📣",
      subtitle:
        "Facebook, Twitter, Instagram, LinkedIn, TikTok. We can do it all.",
      column: true,
      row: true,
    },
    { title: "Podcast Shorts", icon: "🎤", row: true },
    { title: "TikTok Videos", icon: "🎬", row: true },
    { title: "Landing Page", icon: "🎞️" },
    { title: "Motion Graphics", icon: "⚡" },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-4 p-4 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            `relative ${card.row ? "row-span-4" : "row-span-2"} ${
              card.column ? `col-span-2` : `col-span-1`
            } flex flex-col justify-between bg-purple-200 p-10  rounded-lg shadow-md hover:shadow-lg overflow-hidden`
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-20 text-purple-400 text-8xl pointer-events-none">
            {card.icon}
          </div>

          <div className="relative z-10">
            <h3 className="text-lg font-bold">{card.title}</h3>
            {card.subtitle && (
              <p className="text-sm text-gray-600 mt-2">{card.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
