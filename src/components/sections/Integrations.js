import Image from "next/image";

export default function Integrations() {
  return (
    <div className="flex flex-col items-center gap-8 pt-6 text-center font-outfit">
      <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
        <Image
          className="h-5 w-5"
          src="/assets/tools.svg"
          alt="Waving Hand"
          width={40}
          height={40}
        />
        <div className="text-purple-600 text-xs font-semibold tracking-wider">
          INTEGRATIONS
        </div>
      </div>
      <div className="-mt-4 text-primary2 text-[56px] leading-none font-medium max-w-2xl">
        Enable <span className="text-highlight">integration</span> with other
        popular tools and platforms
      </div>
      <div className="font-inter text-secondary text-xl font-medium max-w-lg">
        Seamlessly connect and amplify your workflow by enabling integration
        with a diverse array of widely-used tools and platforms.
      </div>
      <Image
        className="w-[40%]"
        src="/assets/connect.png"
        alt="Integration"
        width={800}
        height={800}
      />
    </div>
  );
}
