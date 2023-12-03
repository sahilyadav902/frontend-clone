import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between px-6 py-4 border-b-[1px]">
      <Image
        className="h-12"
        src="/assets/logo.png"
        alt="Logo"
        width={200}
        height={200}
      />
      <div className="flex gap-14 items-center">
        <div className="flex gap-3 items-center font-inter font-primary text-base font-normal">
          <Link href="#features" className="hover:text-purple-600">
            Features
          </Link>
          <Image src="/assets/dot.svg" alt="Dot" width={30} height={30} />
          <Link href="#faq" className="hover:text-purple-600">
            FAQ
          </Link>
          <Image src="/assets/dot.svg" alt="Dot" width={30} height={30} />
          <Link href="#pricing" className="hover:text-purple-600">
            Pricing
          </Link>
          <Image src="/assets/dot.svg" alt="Dot" width={30} height={30} />
          <Link href="#testimonials" className="hover:text-purple-600">
            Testimonials
          </Link>
        </div>
        <Link
          href="/"
          className="font-outfit text-lg font-semibold bg-white px-5 py-2 rounded-xl border-[1px] transition ease-in-out duration-300 hover:border-black"
        >
          Buy Template
        </Link>
      </div>
    </div>
  );
}
