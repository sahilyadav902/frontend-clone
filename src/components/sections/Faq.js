import Image from "next/image";
import { useState } from "react";

const accordionData = [
  {
    question: "What is Manage Wise and what does it offer?",
    answer:
      "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  },
  {
    question:
      "Is Manage Wise suitable for small businesses and larger enterprises alike?",
    answer:
      "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
  },
  {
    question: "Can I access Manage Wise from different devices and platforms?",
    answer:
      "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
  },
  {
    question: "What kind of support options do you offer to users?",
    answer:
      "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
  },
  {
    question: "How secure is the data stored within Manage Wise?",
    answer:
      "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
  },
];

export default function Faq() {
  const [openSections, setOpenSections] = useState([]);
  const toggleAccordion = (index) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(index)) {
        return prevOpenSections.filter((i) => i !== index);
      } else {
        return [...prevOpenSections, index];
      }
    });
  };

  return (
    <div
      id="faq"
      className="flex flex-row justify-between mx-auto gap-10 font-outfit max-w-[80%] py-20"
    >
      <div className="flex flex-col gap-6 items-start max-w-[30%]">
        <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg border-[1px]">
          <Image
            className="h-5 w-5"
            src="/assets/faq.png"
            alt="FAQ"
            width={40}
            height={40}
          />
          <div className="text-purple-600 text-xs font-semibold tracking-wider">
            FAQ
          </div>
        </div>
        <div className="text-primary1 text-[56px] leading-none font-medium max-w-xs">
          Need <span className="text-highlight">Answers?</span>
        </div>
        <div className="font-inter text-secondary text-xl leading-relaxed font-medium max-w-sm">
          Check out our most commonly asked questions below to find the
          information you need.
        </div>
      </div>

      <div className="max-w-[60%] space-y-3">
        {accordionData.map((item, index) => (
          <div key={index} className="rounded-3xl bg-[#f7f8fd] p-4">
            <button
              className={`flex justify-between items-center w-full p-3 text-2xl font-semibold text-left ${
                openSections.includes(index) ? "text-button" : "text-primary1"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <Image
                className="w-6 h-6"
                src={
                  openSections.includes(index)
                    ? "/assets/cross.svg"
                    : "/assets/plus.svg"
                }
                alt="Open/Close Icon"
                width={80}
                height={80}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                openSections.includes(index) ? "max-h-36" : "max-h-0"
              }`}
            >
              <div className="font-inter text-base font-medium text-secondary p-3">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
