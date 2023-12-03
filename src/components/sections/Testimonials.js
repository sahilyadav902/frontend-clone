import Image from "next/image";
import React, { useEffect, useState } from "react";

const cardData = [
  {
    quote:
      "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations.",
    image: "/assets/emily.jpg",
    name: "Emily",
    designation: "Art Director",
  },
  {
    quote:
      "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    image: "/assets/sarah.jpg",
    name: "Sarah",
    designation: "Project Manager",
  },
  {
    quote:
      "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    image: "/assets/david.jpg",
    name: "David",
    designation: "Freelancer",
  },
  {
    quote:
      "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
    image: "/assets/alex.jpg",
    name: "Alex",
    designation: "IT Manager",
  },
];

export default function Testimonials() {
  const [extendedCardData, setExtendedCardData] = useState([]);
  useEffect(() => {
    setExtendedCardData([...cardData, ...cardData, ...cardData]);
  }, []);

  return (
    <div id="testimonials" className="space-y-16 py-12">
      <div className="flex flex-col gap-8 font-outfit max-w-[85%] mx-auto">
        <div className="flex items-center gap-2 px-2 py-1 bg-white w-fit rounded-lg border-[1px]">
          <Image
            className="h-5 w-5"
            src="/assets/heart.svg"
            alt="Heart"
            width={40}
            height={40}
          />
          <div className="text-purple-600 text-xs font-semibold tracking-wider">
            TESTIMONIALS
          </div>
        </div>
        <div className="-mt-4 text-primary1 text-[56px] leading-none font-medium">
          Hear from our <span className="text-highlight">Satisfied</span>{" "}
          clients
        </div>
        <div className="font-inter text-secondary text-xl font-medium max-w-xl">
          Discover why our clients love working with us. Read their testimonials
          and learn how we have helped businesses.
        </div>
      </div>
      <div className="relative overflow-hidden mx-4">
        <div className="no-scrollbar flex overflow-x-auto space-x-6">
          {extendedCardData.map((card, index) => (
            <div
              key={index}
              className="slide bg-white rounded-3xl border p-10 w-[350px] flex-none text-xl font-medium font-inter"
            >
              <div className="mb-8">{`"${card.quote}"`}</div>
              <div className="flex items-center">
                <Image
                  className="w-14 h-14 rounded-full mr-4"
                  src={card.image}
                  alt={`${card.name}'s image`}
                  width={80}
                  height={80}
                />
                <div>
                  <p>{card.name}</p>
                  <p className="text-base text-secondary">{card.designation}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute -inset-10 flex">
            <div className="w-1/6 h-full bg-gradient-to-r from-white to-transparent" />
            <div className="w-2/3" />
            <div className="w-1/6 h-full bg-gradient-to-r from-transparent to-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
