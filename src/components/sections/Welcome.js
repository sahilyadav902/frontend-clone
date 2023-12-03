import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center gap-8 py-24 text-center font-outfit">
      <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
        <Image
          className="h-5 w-5"
          src="/assets/hand.png"
          alt="Waving Hand"
          width={40}
          height={40}
        />
        <div className="text-purple-600 text-xs font-semibold tracking-wider">
          WELCOME TO MANAGE WISE!
        </div>
      </div>
      <div className="-mt-4 text-primary1 text-[85px] leading-none font-medium">
        <span>Empower your business with </span>
        <div>
          <span className="text-highlight">Strategic</span> insights
        </div>
      </div>
      <div className="font-inter text-secondary text-xl font-medium max-w-2xl">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </div>
      <div className="flex gap-6 text-xl font-semibold">
        <Link
          href="/"
          className="flex items-center gap-2 text-white bg-button px-8 py-3 rounded-2xl border-[1px] border-purple-400 transition ease-in-out duration-300 hover:shadow-all hover:shadow-button/30"
        >
          Get Started
          <Image
            className="w-5 h-5"
            src="/assets/arrow.svg"
            alt="Arrow Icon"
            width={40}
            height={40}
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl border-[1px] transition ease-in-out duration-300 hover:border-black"
        >
          Watch Demo
          <Image
            className="w-6 h-6"
            src="/assets/play.svg"
            alt="Play Icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <Image
        className="h-[95vh] w-auto my-10 rounded-3xl shadow-2xl shadow-blue-800/20 transition duration-300 transform scale-100 hover:scale-105"
        src="/assets/dashboard.jpg"
        alt="Dashboard"
        width={1000}
        height={1000}
      />
    </div>
  );
}
