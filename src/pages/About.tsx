import { BsCodeSlash } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import type { CardProps } from "@/Types";
import Card from "@/components/card";
export default function About() {
  const itemsCard: CardProps[] = [
    {
      icon: BsCodeSlash,
      name: "skills",
      textContent: [
        "HTML",
        "CSS",
        "JavaScript",
        "TailwindCss",
        "TypeScript",
        "React JS",
        "React Router",
      ],
    },
    {
      icon: SlBriefcase,
      name: "projects",
      textContent: "Built more than 8 projects",
    },
  ];
  return (
    <section id="about" className={`text-foreground p-20 space-y-16`}>
      <div className={`w-full text-center font-ovo space-y-3`}>
        <p className="text-2xl">Introduction</p>
        <p className={`text-6xl font-normal`}>About me</p>
      </div>
      <div className="w-full flex gap-20 justify-center items-start">
        <img
          src={`/public/images/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
          className={`min-w-[400px] h-[538px] rounded-4xl`}
          alt=""
        />
        <div className={`text-left space-y-12`}>
          <p className="w-[600px] mx-auto text-xl font-ovo leading-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium perspiciatis voluptate voluptates id reiciendis in,
            illum repudiandae laboriosam, beatae ab temporibus deleniti qui
            dolores inventore maiores at voluptatum, ad fuga.
          </p>
          <div className={`flex gap-9 items-center w-full`}>
            {itemsCard.map((x) => (
              <Card icon={x.icon} name={x.name} textContent={x.textContent} />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
