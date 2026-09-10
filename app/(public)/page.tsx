import Faq from "@/_components/home/Faq";
import Hero from "@/_components/home/Hero";
import HowItWorks from "@/_components/home/HowItWorks";
import ItIsSomething from "@/_components/home/ItIsSomething";
import MeetFutureTime from "@/_components/home/MeetFutureTime";
import SimpleSection from "@/_components/home/SimpleSection";
import StartYourTimeJump from "@/_components/home/StartYourTimeJump";
import Testimonials from "@/_components/home/Testimonials";
import TimeJumpExperience from "@/_components/home/TimeJumpExperience";
import TwoPaths from "@/_components/home/TwoPaths";
import VideoExplainer from "@/_components/home/VideoExplainer";

export default function HomePage() {
  return (
    <div className="bg-black">
      <Hero />
      <SimpleSection />
      <HowItWorks />
      <VideoExplainer />
      <TimeJumpExperience />
      <MeetFutureTime />
      <TwoPaths />
      <Testimonials />
      <StartYourTimeJump />
      <Faq />
      <ItIsSomething />
    </div>
  );
}
