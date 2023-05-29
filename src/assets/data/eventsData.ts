//  Event data that will be used throughout the site
// Events must contain the following data in the following format

export type EventData = {
  id: number;
  name: string;
  image: string;
  description: string;
  date: string;
  link: string;
  buttonText: string;
}

// Sorted data
export const eventsData: EventData[] = [
  {
    id: 0,
    name: "ReactCon Sri Lanka 2023",
    image: "events_images/react_con_sl_2023.png",
    description: "The first ever ReactCon to happen in Sri Lanka!",
    date: "2023-07-10",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 1,
    name: "UX/UI Bootcamp 2022",
    image: "events_images/ux_ui_bootcamp_2022.png",
    description: "A platform for the undergraduates across the country to brainstorm and develop their UX/UI design principles.",
    date: "2022-09-24",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 3,
    name: "Openhack 3.0",
    image: "events_images/openhack_3_0_2023.png",
    description: "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
    date: "2023-07-12",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 4,
    name: "MERN Stack Webinar",
    image: "events_images/mern_stack_webinar_2022.png",
    description: "An opportunity for the students to understand the fundamentals of MERN stack and develop their skills in web development.",
    date: "2022-10-26",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 5,
    name: "Flutter Bootcamp 2022",
    image: "events_images/flutter_bootcamp_2022.png",
    description: "An event to encourage students to brainstorm, be better acquainted with Flutter and related technologies and become experts in mobile development.",
    date: "2022-10-29",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 6,
    name: "Binance Workshop 2023",
    image: "events_images/binance_workshop_2023.png",
    description: "Enable participants to gain a better understanding and a deeper insight into the world of crypto currency.",
    date: "2023-02-16",
    link: "",
    buttonText: "Learn More",
  },
  {
    id: 7,
    name: "OpenHack 2.0",
    image: "events_images/openhack_2_0_2022.png",
    description: "Openhack 2022 is an Inter-University competition organized by the Mozilla Campus Club & FOSS Community of IIT which consists of three separate events; a Designathon, a Hackathon and an Ideathon. Over 2000+ undergraduates from all over Sri Lanka will get an exclusive opportunity to participate in the Designathon, Hackathon, and Ideathon as per preference.",
    date: "2023-02-18",
    link: "https://openhack.live",
    buttonText: "Learn More",
  }
].sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);

  return aDate > bDate ? -1 : 1;
});

export const pastEventsData: EventData[] = eventsData.filter((event) => new Date(event.date) < new Date());
export const upcomingEventsData: EventData[] = eventsData.filter((event) => new Date(event.date) >= new Date());

