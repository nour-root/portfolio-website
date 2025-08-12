export default function Card1() {
  return (
    <div className={`relative overflow-hidden rounded-lg w-fit z-20`}>
      <img
        src="/images/bbc37bfea596ba59ddf697a0cfd29095b7c491b8.png"
        className="object-cover"
        alt=""
      />
      <div
        className={`absolute bottom-2 left-2 rounded-lg bg-background z-10 px-5 py-[10px] flex items-center gap-6 cursor-pointer group hover:transform hover:-translate-y-1 transition-all duration-150`}
      >
        <div>
          <p className={`font-semibold md:text-lg`}>Frontend project</p>
          <p
            className={`font-normal text-muted-foreground text-[14px] md:text-[16px]`}
          >
            Web Design
          </p>
        </div>
        <div
          className={`rounded-full w-10 h-10 pt-1 pr-[1px] flex items-center justify-center border group-hover:bg-accent transition-all duration-150`}
        >
          <svg
            className="fill-foreground transition-all duration-150 group-hover:fill-foreground"
            width="15"
            height="15"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7.28544L18 0L10.286 17L9 8.5L0 7.28544Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
