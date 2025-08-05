import Card1 from "@/components/card1";

export default function Projects() {
  return (
    <section
      id="work"
      className={`text-foreground py-20 px-24 max-md:px-16 space-y-10`}
    >
      <div className={`w-full text-center font-ovo space-y-3`}>
        <p className="text-2xl">My portfolio</p>
        <h1 className={`text-6xl font-normal`}>My latest work</h1>
        <p
          className={`text-xl font-normal leading-10 mt-7 max-w-[764px] mx-auto`}
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
      </div>
      <div className={`grid max-md:grid-cols-1 grid-cols-4 gap-8`}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </section>
  );
}
