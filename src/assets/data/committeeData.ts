// Committee member information
// The format specified below must be followed

export type CommitteeData = {
  id: number;
  name: string;
  image: string;
  position: string;
  quote: string;
  behance: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  github: string;
  youtube: string;
}

export const committeeData: CommitteeData[] = [
  {
    id: 0,
    name: "Abrar Ahmed",
    image: "committee_images/abrar_ahmed.png",
    position: "Director of Membership",
    quote: "JavaScript is depression.",
    behance: "https://www.behance.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    github: "https://www.github.com",
    youtube: "https://www.youtube.com",
  },
  {
    id: 1,
    name: "Abrar Ahmed (Evil)",
    image: "committee_images/abrar_ahmed_evil.png",
    position: "Director of Evil",
    quote: "JavaScript is excellent.",
    behance: "https://www.behance.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    github: "https://www.github.com",
    youtube: "https://www.youtube.com",
  }
]
