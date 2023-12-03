import Image from "next/image";

const cardsData = [
  {
    path: "/assets/card-1.png",
    title: "Flexible Scheduling",
    subtitle: "Stay productive with our flexible scheduling system",
  },
  {
    path: "/assets/card-2.png",
    title: "Easy Communication",
    subtitle: "Collaborate seamlessly with your team in real-time",
  },
  {
    path: "/assets/card-3.png",
    title: "Analytics",
    subtitle: "Gain valuable insights with our advanced analytics feature",
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="flex flex-col items-center gap-8 py-6 text-center font-outfit"
    >
      <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
        <Image
          className="h-5 w-5"
          src="/assets/fire.svg"
          alt="Waving Hand"
          width={40}
          height={40}
        />
        <div className="text-purple-600 text-xs font-semibold tracking-wider">
          PREMIER FEATURES!
        </div>
      </div>
      <div className="-mt-4 text-primary1 text-[56px] leading-none font-medium">
        Discover our product's{" "}
        <span className="text-highlight">Capabilities</span>
      </div>
      <div className="font-inter text-secondary text-xl font-medium max-w-xl">
        Don't settle for mediocrity - embrace the future of management with
        Manage Wise.
      </div>
      <div className="my-6 flex justify-between gap-10 max-w-[85%] text-left">
        <div className="space-y-4 bg-card p-10 rounded-3xl max-w-[45%] ">
          <Image
            className="w-14 h-14 bg-white p-3 mt-8 rounded-3xl "
            src="/assets/star.svg"
            alt="Star Icon"
            width={40}
            height={40}
          />
          <div className="text-[42px] leading-snug font-medium">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </div>
        </div>
        <div className="py-6 space-y-3 bg-white border-[1px] rounded-3xl max-w-[55%] w-full">
          <Image
            className="w-full"
            src="/assets/tasks.png"
            alt="Tasks"
            width={800}
            height={800}
          />
          <div className="px-10 text-2xl font-semibold">
            Smart Task Management
          </div>
          <div className="px-10 font-inter text-secondary text-base font-medium">
            Say goodbye to chaos with our smart task management system
          </div>
        </div>
      </div>
      <div className="my-6 flex justify-between gap-10 max-w-[85%] text-left">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="py-6 space-y-3 bg-white border-[1px] rounded-3xl"
          >
            <Image
              className="w-full "
              src={card.path}
              alt={card.title}
              width={800}
              height={800}
            />
            <div className="px-10 text-2xl font-semibold">{card.title}</div>
            <div className="px-10 font-inter text-secondary text-base font-medium">
              {card.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
