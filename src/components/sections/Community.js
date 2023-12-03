import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div className="flex mx-auto gap-10 p-24 my-28 font-outfit bg-white rounded-3xl border-[1px] max-w-[80%]">
      <div className="flex flex-col gap-6 items-start">
        <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
          <Image
            className="h-5 w-5"
            src="/assets/hand.png"
            alt="Waving Hand"
            width={40}
            height={40}
          />
          <div className="text-purple-600 text-xs font-semibold tracking-wider">
            DON'T MISS OUT
          </div>
        </div>
        <div className="text-primary1 text-[56px] leading-none font-medium">
          Unleash your <span className="text-highlight">Potential</span> with us
        </div>
        <div className="font-inter text-secondary text-xl leading-relaxed font-medium max-w-sm">
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-white bg-button px-8 py-3 rounded-2xl border-[1px] border-purple-400 transition ease-in-out duration-300 hover:shadow-all hover:shadow-button/30"
        >
          Try it now
          <Image
            className="w-5 h-5"
            src="/assets/arrow.svg"
            alt="Arrow Icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="my-auto space-y-8 p-6">
        <div className="px-6 py-3 w-fit mx-auto text-2xl font-semibold bg-white border-[1px] rounded-2xl shadow-all shadow-purple-300/10">
          <span className="text-button">200+</span> Happy users
        </div>
        <div className="relative w-full">
          <Image
            className=""
            src="/assets/avatars.png"
            alt="Avatars"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 flex">
            <div className="w-1/4 h-full bg-gradient-to-r from-white to-transparent" />
            <div className="w-1/2" />
            <div className="w-1/4 h-full bg-gradient-to-r from-transparent to-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
