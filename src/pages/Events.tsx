import React from "react";
import EventHero from "../components/events/EventHero";
import UpcomingEvents from "../components/events/UpcomingEvents";
import PastEvents from "../components/events/PastEvents";

function Events() {
  return (
    <>
      <EventHero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}

export default Events;
