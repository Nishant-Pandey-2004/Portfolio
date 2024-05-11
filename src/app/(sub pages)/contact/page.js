import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Mystical Message
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Enter the mystical circle, where words become threads weaving through the 
          tapestry of the universe. Share your desires for collaborations, unravel 
          mysteries, or regale in tales of adventure. Use this conduit to send your 
          messages across the ethereal network, and anticipate the enchanting echoes 
          of magic in return.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
