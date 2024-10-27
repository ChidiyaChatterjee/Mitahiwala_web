import { TypewriterEffectSmooth } from "./ui";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Download.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: " Sweetness Now",
    },
  ];

  const handleContact = () => {
    window.location.href = "mailto:theamanjhaofficial@gmail.com";
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The way to Delightful Heaven
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="Mitahiwala_web\public\Mthaiwala.apk" download="Mithaiwala.apk">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Download
          </button>
        </a>
        <button
          onClick={handleContact}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
        >
          Contact us
        </button>
      </div>
    </div>
  );
}
