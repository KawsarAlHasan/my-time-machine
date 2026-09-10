import { HiArrowRight } from "react-icons/hi2";

export default function PrimaryButton({
  htmlContent,
  isRightArrow = false,
}: any) {
  return (
    <button
      type="button"
      className="cursor-pointer group flex items-center gap-3 rounded-md border border-orange-400 bg-black/50 px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-orange-400/10"
      style={{ boxShadow: "0 0 16px rgba(251,146,60,0.55)" }}
    >
      {htmlContent}
      {isRightArrow && (
        <HiArrowRight className="text-orange-300 text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
