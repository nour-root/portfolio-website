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
    <section id="about" className={`text-foreground py-20 px-24  space-y-16`}>
      <div className={`w-full text-center font-ovo space-y-3`}>
        <p className="text-2xl">Introduction</p>
        <p className={`text-6xl font-normal`}>About me</p>
      </div>
      <div className="w-full flex gap-20 justify-center items-start max-lg:flex-col max-lg:items-center">
        <img
          src={`/images/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
          className={`min-w-[400px] h-[538px] rounded-4xl max-lg:min-w-[300px] max-lg:h-[438px] object-cover`}
          alt=""
        />
        <div className={`text-left space-y-12`}>
          <p className=" mx-auto text-xl font-ovo leading-10 max-md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium perspiciatis voluptate voluptates id reiciendis in,
            illum repudiandae laboriosam, beatae ab temporibus deleniti qui
            dolores inventore maiores at voluptatum, ad fuga.
          </p>
          <div className={`flex gap-9 items-center w-full max-md:flex-col`}>
            {itemsCard.map((x) => (
              <Card
                key={x.name}
                icon={x.icon}
                name={x.name}
                textContent={x.textContent}
              />
            ))}
          </div>
          <div className="space-y-3">
            <p className={`text-xl font-ovo text-primary`}>Tools I use</p>
            <div className="flex gap-4 w-full">
              <div className={`border p-3 rounded-[10px] flex items-center`}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8479 1.32139C24.8479 0.281401 23.6835 0.281389 23.166 0.411387C23.8905 -0.160608 24.7401 -0.0219247 25.042 0.151402L32.0387 3.58211C32.7053 3.909 33.1282 4.58916 33.1282 5.33454V27.9035C33.1282 28.6589 32.6941 29.3463 32.0139 29.6679L25.4302 32.7811C24.9773 32.9759 23.994 33.457 23.166 32.7809C24.2011 32.976 24.7617 32.2394 24.8479 31.741V1.32139Z"
                    fill="url(#paint0_linear_1_148)"
                  />
                  <path
                    d="M23.2513 0.391666C23.8006 0.28313 24.8494 0.333464 24.8494 1.32042V9.08895L3.63668 25.1364C3.2659 25.417 2.74408 25.3703 2.42827 25.0286L0.242003 22.6629C-0.100496 22.2924 -0.0765322 21.7122 0.295355 21.3715L23.1673 0.410419L23.2513 0.391666Z"
                    fill="url(#paint1_linear_1_148)"
                  />
                  <path
                    d="M24.8494 24.418L3.63668 8.37053C3.2659 8.09003 2.74408 8.13658 2.42827 8.47831L0.242003 10.844C-0.100496 11.2146 -0.0765322 11.7947 0.295355 12.1356L23.1673 33.0966C24.2024 33.2916 24.7631 32.5549 24.8494 32.0565V24.418Z"
                    fill="url(#paint2_linear_1_148)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_148"
                      x1="28.1472"
                      y1="3.22854e-08"
                      x2="28.1472"
                      y2="33.1296"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#32B5F1" />
                      <stop offset="1" stopColor="#2B9FED" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_148"
                      x1="24.8494"
                      y1="4.18037"
                      x2="1.20888"
                      y2="24.024"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0F6FB3" />
                      <stop offset="0.270551" stopColor="#1279B7" />
                      <stop offset="0.421376" stopColor="#1176B5" />
                      <stop offset="0.618197" stopColor="#0E69AC" />
                      <stop offset="0.855344" stopColor="#0F70AF" />
                      <stop offset="1" stopColor="#0F6DAD" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_148"
                      x1="1.36686"
                      y1="9.76183"
                      x2="24.9408"
                      y2="29.281"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1791D2" />
                      <stop offset="1" stopColor="#1173C5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={`border p-3 rounded-[10px]`}>
                <img
                  className="object-cover w-10"
                  src={`/images/937443bd7bf5de319752d485d4b4a32b0e754e27.png`}
                  alt=""
                />
              </div>
              <div className={`border p-3 rounded-[10px]`}>
                <img
                  className="object-cover w-10"
                  src={`/images/a1b2403f1e634e1a73577c828b3d7982c40a792f.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
