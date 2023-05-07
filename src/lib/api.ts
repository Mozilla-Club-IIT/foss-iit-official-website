import {client} from "./sanity";

export async function getPeople() {
    const people = await client.fetch('*[_type == "person"]')
    console.log(people)
    return people;
  }