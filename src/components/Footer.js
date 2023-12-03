import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto py-14 max-w-[85%]">
      <div className="flex justify-between pb-28 border-b-[1px]">
        <Image
          className="h-12"
          src="/assets/logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-3 text-base text-primary1 font-medium">
          <Link href="#features" className="hover:text-secondary">
            Features
          </Link>
          <Link href="#faq" className="hover:text-secondary">
            FAQ
          </Link>
          <Link href="#pricing" className="hover:text-secondary">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-secondary">
            Testimonials
          </Link>
        </div>
      </div>
      <div className="flex justify-between pt-14">
        <div>© 2022 ManageWise, Inc.</div>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/" target="blank">
            <Image
              className="w-5"
              src="/assets/instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://twitter.com/home" target="blank">
            <Image
              className="w-5"
              src="/assets/twitter.svg"
              alt="Twitter"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="blank">
            <Image
              className="w-5"
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
