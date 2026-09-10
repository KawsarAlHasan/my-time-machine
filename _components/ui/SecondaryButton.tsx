import { HiArrowRight } from "react-icons/hi2";

export default function SecondaryButton({
  htmlContent,
  isRightArrow = false,
  isPlayIcon = false,
}: any) {
  return (
    <button
      type="button"
      className="cursor-pointer group flex items-center gap-3 rounded-md border border-blue-400 bg-black/50 px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-blue-400/10"
      style={{ boxShadow: "0 0 16px rgba(96,165,250,0.55)" }}
    >
      {isPlayIcon && (
        <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-blue-300 flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            width="10"
            height="10"
            fill="currentColor"
            className="text-blue-300 ml-0.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
      {htmlContent}
      {isRightArrow && (
        <HiArrowRight className="text-blue-300 text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
