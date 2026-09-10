import ChoseJourney from "@/_components/theBook/ChoseJourney";
import DifferentJourneys from "@/_components/theBook/DifferentJourneys";
import Hero from "@/_components/theBook/Hero";
import MakeYourFuture from "@/_components/theBook/MakeYourFuture";

function page() {
  return (
    <div>
      <Hero />
      <ChoseJourney />
      <DifferentJourneys />
      <MakeYourFuture />
    </div>
  );
}

export default page;
