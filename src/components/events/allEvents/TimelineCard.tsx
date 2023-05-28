import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import EventCard from "../allEvents/EventCard";
import data from "../../../assets/data/pastEventsData";
import upcomingEventsData from "../../../assets/data/upcomingEventsData";

// Combine past and upcoming data
data.push(...upcomingEventsData);

// Sort items by date
data.sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);

  return aDate > bDate ? -1 : 1;
});

function Timelinkcard() {
  return (
    <div className={Styles.mainWrapper}>
      {data.map((data: any) => (
        <div className={Styles.mainContainer}>
          <EventCard
            key={data.id}
            name={data.name}
            des={data.description}
            date={data.date}
            btn={data.buttonTxt}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Timelinkcard;
