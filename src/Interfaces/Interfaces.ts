export interface Animal {
    id: `${string}-${number}`;
    name: string;
    nickName: string;
    legs: number;
    owner: Owner
}

export interface Dog extends Animal {
    legs: 4;
    breed: string;
    colour: "grey" | "brown" | "black" | "white";
    size: "small" | "medium" | "large";
}

export interface Cat extends Animal {
    legs: 4;
    disposition: "grumpy" | "happy";
    foodPreference: "fish" | "treats";
}

export interface Bird extends Animal {
    legs: 2;
    canTalk: boolean;
}

export interface Owner {
    name: string;
    address: string;
}