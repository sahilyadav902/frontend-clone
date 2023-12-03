import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    type: "FREE",
    price: "$0",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
    ],
    theme: "light",
  },
  {
    type: "STANDARD",
    price: "$25",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
      "Account performance reporting",
    ],
    theme: "dark",
  },
  {
    type: "BUSINESS",
    price: "$42",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
    ],
    theme: "light",
  },
];

const Card = ({ card }) => {
  const isLightTheme = card.theme === "light";

  return (
    <div
      className={`text-left rounded-3xl p-8 pr-24 space-y-2 relative ${
        isLightTheme ? "bg-card" : "bg-primary1 pt-14 -mt-6"
      } `}
    >
      <div className="px-2 py-1 w-fit bg-white rounded-lg border-[1px] text-highlight text-xs font-semibold tracking-wider">
        {card.type}
      </div>
      <div
        className={`font-medium ${
          isLightTheme ? "text-primary1" : "text-white"
        } `}
      >
        <span className="text-[56px]">{card.price}</span>
        <span className="text-base ml-2">/month</span>
      </div>
      <ul className="pb-20 text-secondary space-y-3">
        {card.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center font-inter text-base font-medium text-inter mb-2"
          >
            <Image
              className="w-5 h-5 mr-2"
              src="/assets/tick.svg"
              alt="Tick"
              width={80}
              height={80}
            />
            {feature}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-8 left-30 flex justify-center ">
        <Link
          href="/"
          className={`${
            isLightTheme
              ? "bg-white text-primary1 hover:border-black"
              : "bg-button text-white border-purple-400 hover:shadow-all hover:shadow-button/30"
          } px-6 py-3 rounded-2xl border-[1px] transition ease-in-out duration-300 text-lg font-semibold`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center gap-8 py-20 text-center font-outfit max-w-[85%] mx-auto"
    >
      <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
        <Image
          className="h-4 w-4"
          src="/assets/dollar.svg"
          alt="Dollar"
          width={40}
          height={40}
        />
        <div className="text-purple-600 text-xs font-semibold tracking-wider">
          PRICING
        </div>
      </div>
      <div className="-mt-4 text-primary1 text-[56px] leading-none font-medium">
        Select your ideal <span className="text-highlight">Pricing</span> plan
      </div>
      <div className="font-inter text-secondary text-xl font-medium max-w-lg">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>
      <div className="flex justify-evenly w-full py-10">
        {cardsData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
