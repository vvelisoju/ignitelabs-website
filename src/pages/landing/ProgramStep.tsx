export default function  ProgramStep({
  number,
  title,
  weeks,
  description,
  position,
}: {
  number: string;
  title: string;
  weeks: string;
  description: string;
  position: "left" | "right";
}) {
  return (
    <div
      className={`relative group mb-10 md:mb-12 md:grid md:grid-cols-2 md:gap-8 ${
        position === "right" ? "md:text-right" : ""
      }`}
    >
      {/* Mobile view with simplified layout */}
      <div className="block md:hidden">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-orange-50 border-b border-gray-100">
            <div className="text-primary font-medium text-xs px-2 py-1 rounded bg-white/80 shadow-sm">
              {weeks}
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
              {number}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-base font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10`}
      >
        <div className="absolute w-20 h-20 rounded-full bg-primary/20 animate-pulse-slow opacity-70"></div>

        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold shadow-md group-hover:scale-110 transition-transform text-xl relative z-10">
          {number}

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute -inset-full top-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-transparent to-white/20 transform rotate-45 translate-x-[200%] translate-y-[100%] group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-transform duration-700"></div>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:block pt-0 pb-8 ${
          position === "right" ? "md:col-start-2" : "md:col-start-1"
        }`}
      >
        <div
          className={`mb-3 md:mb-4 space-y-2 md:space-y-0 ${
            position === "right" ? "md:flex md:flex-col md:items-end" : ""
          }`}
        >
          <h3 className="text-xl font-bold group-hover:text-gradient transition-colors duration-300">
            {title}
          </h3>
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/5 shadow-sm">
            {weeks}
          </span>
        </div>
        <div
          className={`bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-primary/20 border border-transparent relative ${
            position === "right" ? "" : ""
          }`}
        >
          <div
            className={`absolute ${
              position === "right"
                ? "top-0 left-0 rounded-tl-lg"
                : "top-0 right-0 rounded-tr-lg"
            } w-8 h-8 bg-orange-50 transform origin-center scale-0 group-hover:scale-100 transition-transform duration-300`}
          ></div>

          <p className="text-muted-foreground relative z-10">{description}</p>
        </div>
      </div>

      <div
        className={`hidden md:block ${
          position === "right" ? "md:col-start-1" : "md:col-start-2"
        }`}
      ></div>
    </div>
  );
}