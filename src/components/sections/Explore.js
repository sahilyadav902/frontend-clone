import Image from "next/image";

const cardsData = [
  {
    path: "/assets/mobile.svg",
    title: "Cross Platform Compatibility",
    subtitle:
      "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.",
  },
  {
    path: "/assets/notifications.svg",
    title: "Stay Informed with Essential Notifications",
    subtitle:
      "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.",
  },
  {
    path: "/assets/fire-icon.svg",
    title: "Secure Data Encryption at all times",
    subtitle:
      "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.",
  },
];

export default function Explore() {
  return (
    <div className="flex flex-col gap-8 py-28 font-outfit max-w-[85%] mx-auto">
      <div className="flex items-center gap-2 px-2 py-1 bg-white w-fit rounded-lg border-[1px]">
        <Image
          className="h-5 w-5"
          src="/assets/star-struck.svg"
          alt="Star Struck"
          width={40}
          height={40}
        />
        <div className="text-purple-600 text-xs font-semibold tracking-wider">
          AND MORE...
        </div>
      </div>
      <div className="-mt-4 text-primary2 text-[56px] leading-none font-medium">
        Explore an array of features that elevate your{" "}
        <span className="text-highlight">Productivity</span> to new heights
      </div>
      <div className="font-inter text-secondary text-xl font-medium max-w-xl">
        Discover the tools that will revolutionize the way you manage and
        optimize your operations
      </div>
      <div className="my-6 flex justify-between gap-10 text-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="p-10 space-y-5 bg-[#212121] border-[1px] border-gray-600/20 rounded-3xl max-w-[32%]"
          >
            <div className="w-fit bg-button p-4 rounded-3xl mx-auto">
              <Image
                className="w-8"
                src={card.path}
                alt={card.title}
                width={80}
                height={80}
              />
            </div>
            <div className="text-2xl text-primary2 font-semibold">
              {card.title}
            </div>
            <div className="font-inter text-secondary text-base font-medium">
              {card.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
