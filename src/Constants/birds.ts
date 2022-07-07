import { Bird } from "../Interfaces/Interfaces";

export const birds: Bird[] = [{
   id: "bird-1",
   name: "bird",
   nickName: "Stephen Sqwarkings",
   legs: 2,
   canTalk: true,
   owner: {
    name: "Isaac",
    address: "Norwich"
   }
},{
    id: "bird-2",
   name: "bird",
   nickName: "Icarus",
   legs: 2,
   canTalk: false,
   owner: {
    name: "Arnold",
    address: "Liverpool"
   }
 },{
    id: "bird-3",
   name: "bird",
   nickName: "Bartholomew",
   legs: 2,
   canTalk: true,
   owner: {
    name: "Jonny",
    address: "Carlisle"
   }
 }]