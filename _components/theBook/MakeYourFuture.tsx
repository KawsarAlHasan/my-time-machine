import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import SmallTitle from "../ui/SmallTitle";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";

export default function MakeYourFuture() {
  return (
    <section className="relative w-full bg-black" style={{ height: "659px" }}>
      {/* ── LEFT: sun/fire image ── */}
      <div className="absolute inset-y-0 left-0 z-0" style={{ width: "50%" }}>
        <Image
          src="/images/left-bg.png"
          alt="Fiery sun background"
          fill
          sizes="20vw"
          className="object-cover object-center"
        />
        {/* fade right into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 60%, #000 100%)",
          }}
        />
      </div>

      {/* ── RIGHT: blue planet image ── */}
      <div className="absolute inset-y-0 right-0 z-0" style={{ width: "50%" }}>
        <Image
          src="/images/right-bg.png"
          alt="Blue planet background"
          fill
          sizes="20vw"
          className="object-cover object-center"
        />
        {/* fade left into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 60%, #000 100%)",
          }}
        />
      </div>

      {/* ── CENTER content ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="w-full rounded-[22px] border border-white/40 bg-black/20 px-6 py-10 sm:px-14 sm:py-12 text-center flex flex-col justify-center items-center">
          <div className="">
            {/* Heading */}
            <PrimaryTitle
              classNameText="my-4! whitespace-nowrap! !text-[40px]"
              children="MAKE YOUR FUTURE VIVID ENOUGH"
            />
            <SecondaryTitle
              classNameText="my-7! whitespace-nowrap! !text-[40px]"
              children="TO CHANGE WHAT YOU DO TODAY."
            />

            {/* Subtext */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200/90 font-light">
              Book it. Read it. Experience it. Then step inside your own Time
              Machine.
            </p>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-9 flex justify-center">
              {/* Primary */}
              <PrimaryButton
                htmlContent="START MY TIME JUMP"
                isRightArrow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
