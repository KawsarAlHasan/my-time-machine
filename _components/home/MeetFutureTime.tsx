import React from "react";
import {
  FiBriefcase,
  FiHeart,
  FiUsers,
  FiHeadphones,
  FiTarget,
  FiEdit3,
} from "react-icons/fi";
import PrimaryTitle from "../ui/PrimaryTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import SmallTitle from "../ui/SmallTitle";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function FeatureCard({ icon, title, subtitle }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-[#3a2e1f] bg-black/40 p-5 transition-colors hover:border-[#8a6a3a]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#4a3a26] text-[#d8b978]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}

export default function MeetFutureTime() {
  const features: FeatureCardProps[] = [
    {
      icon: <FiBriefcase size={18} />,
      title: "Career & money",
      subtitle: "Stronger than ever",
    },
    {
      icon: <FiHeart size={18} />,
      title: "Health & Energy",
      subtitle: "At your peak",
    },
    {
      icon: <FiUsers size={18} />,
      title: "Relationships",
      subtitle: "Fulfilled",
    },
    {
      icon: <FiHeadphones size={18} />,
      title: "Lifestyle",
      subtitle: "The life you designed",
    },
    {
      icon: <FiTarget size={18} />,
      title: "Goals & Purpose",
      subtitle: "Bigger impact",
    },
    {
      icon: <FiEdit3 size={18} />,
      title: "The Headline",
      subtitle: "You can change it.",
    },
  ];

  return (
    <div id="about-manny" className="min-h-[90vh] w-full bg-black py-16 lg:py-24 max-sm:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-9">
        {/* Left: Newspaper image card */}
        <div className="flex items-center justify-center rounded-2xl border border-[#3a2e1f] bg-black p-10 h-full w-full col-span-4">
          <div className="relative">
            {/* Replace src with your image */}
            <img
              src="/images/MeetFutureTime.png"
              alt="Future Times newspaper front page"
              className="relative w-72 rounded-sm shadow-2xl md:w-80"
            />
          </div>
        </div>

        {/* Right: Copy + features */}
        <div className="col-span-5">
          <SmallTitle
            children="FUTURE TIMES"
            classNameText=""
            fontSize="12px"
          />

          {/* Heading */}
          <PrimaryTitle
            classNameText="my-4! whitespace-nowrap!"
            children="Meet your"
          />
          <SecondaryTitle
            classNameText="my-4! whitespace-nowrap!"
            children="Future Times."
          />

          <p className="mt-6 max-w-md text-gray-300">
            Your Future Times transforms your current trajectory into a
            personalized glimpse of a possible future. As your actions change,
            your trajectory can change.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
