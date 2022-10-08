import React from "react";
import AllEventsHero from "../components/events/allEvents/AllEventsHero";
import Timeline from "../components/events/allEvents/Timeline";
import UpcomingEvents from "../components/events/UpcomingEvents";
import PastEvents from "../components/events/PastEvents";

function AllEvents() {
  return (
    <>
      <AllEventsHero />
      <Timeline />
    </>
  );
}

export default AllEvents;
