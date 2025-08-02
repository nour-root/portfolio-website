import type { CardProps } from "@/Types";
export default function Card({ icon: Icon, name, textContent }: CardProps) {
  return (
    <div className="p-6 border flex flex-col gap-3 w-[199px] h-[195px] overflow-hidden rounded-lg">
      <Icon className="text-2xl" />
      <p className="text-xl font-medium">{name}</p>
      <p className="text-sm text-primary">
        {typeof textContent === "object"
          ? textContent.map((x) => x).join(", ")
          : textContent}
      </p>
    </div>
  );
}
