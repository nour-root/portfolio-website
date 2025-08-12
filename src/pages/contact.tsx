import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contact" className={`ext-foreground py-20 px-24 max-md:px-16`}>
      <div className={`w-full text-center font-ovo space-y-3 mb-16`}>
        <p className="text-2xl">Connect with me</p>
        <h1 className={`text-6xl font-normal`}>Get in touch</h1>
        <p
          className={`text-xl font-normal leading-10 mt-7 max-w-[764px] mx-auto`}
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>
      <form className={`md:max-w-[764px] mx-auto relative`}>
        <div className={`grid grid-cols-2 gap-8 max-md:grid-cols-1`}>
          <Input placeholder="Enter your name" type="text"></Input>
          <Input placeholder="Enter your email" type="email"></Input>
          <Textarea
            placeholder="Enter your message"
            className="col-span-2 max-md:col-span-1"
          ></Textarea>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            className="mt-12 rounded-4xl has-[>svg]:px-6 py-7"
          >
            <p className="text-lg">Submit now</p>
            <IoIosArrowRoundForward className="md:size-5 max-md:size-6" />
          </Button>
        </div>
        <div className="absolute w-[calc(100%_+_150px)] h-[calc(100%_+_150px)] bg-accent/20 rounded-full blur-[100px] transform -translate-1/2 top-1/2 left-1/2 -z-10 "></div>
      </form>
    </section>
  );
}
