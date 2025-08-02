import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-5 items-center p-24 text-center"
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <img
          src={`/public/images/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
          alt=""
          className="w-[158px] h-[158px] rounded-full object-cover"
        />
        <p className="font-ovo capitalize max-md:text-[26px] font-normal text-foreground text-center leading-10 text-[28px]">
          nour Mahmoud
        </p>
      </div>
      <div className="font-ovo">
        <h1 className="text-[80px] max-md:text-[60px] font-normal leading-[85px] text-primary  capitalize">
          frontend web developer.
        </h1>
        <p className="text-[20px] w-[500px] mx-auto leading-10 text-foreground">
          I am a frontend developer from Syria.
        </p>
      </div>
      <div className="flex items-center justify-center gap-[18px] max-md:flex-col">
        <Button
          className="rounded-4xl has-[>svg]:px-6 py-7"
          variant={"default"}
        >
          <p className="text-lg capitalize">contact me</p>
          <IoIosArrowRoundForward className="size-7 mt-1" />
        </Button>
        <Button
          variant={"outline"}
          className="rounded-4xl has-[>svg]:px-6 py-7 space-x-2"
        >
          <p className="text-lg">My resume</p>
          <BsDownload className="size-5" />
        </Button>
      </div>
    </section>
  );
}
