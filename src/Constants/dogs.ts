import { Dog } from "../Interfaces/Interfaces";

export const dogs: Dog[] = [{
   id: "dog-1",
   name: "dog",
   breed: "Golden Retriever",
   colour: "black",
   size: "large",
   nickName: "Geoffrey",
   legs: 4,
   owner: {
    name: "Jeff",
    address: "Manchester"
   }
},{
    id: "dog-2",
    name: "dog",
    breed: "Daschund",
    colour: "grey",
    size: "small",
    nickName: "Chip",
    legs: 4,
    owner: {
        name: "Hollie",
        address: "Balham"
       }
 },{
    id: "dog-3",
    name: "dog",
    breed: "Terrier",
    colour: "grey",
    size: "medium",
    nickName: "Alex",
    legs: 4,
    owner: {
        name: "Robin",
        address: "Kent"
       }
 },{
    id: "dog-4",
    name: "dog",
    breed: "Greyhound",
    colour: "black",
    size: "large",
    nickName: "Greg",
    legs: 4,
    owner: {
        name: "Susan",
        address: "London"
       }
 }]