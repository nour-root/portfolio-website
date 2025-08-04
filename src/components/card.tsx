import type { CardProps } from "@/Types";
export default function Card({ icon: Icon, name, textContent }: CardProps) {
  return (
    <div className="relative p-6 border flex flex-col gap-3 w-[200px] min-h-[195px] overflow-hidden rounded-lg max-md:w-full bg-background">
      <Icon className="text-2xl" />
      <p className="text-xl font-medium">{name}</p>
      <p className="text-sm text-primary leading-6">
        {typeof textContent === "object"
          ? textContent.map((x) => x).join(", ")
          : textContent}
      </p>
    </div>
  );
}
