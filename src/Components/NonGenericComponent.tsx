import React from "react";
import { Dog, Owner } from "../Interfaces/Interfaces";

interface DogPetSelectionProps {
  setSelectedPet: (pet: Dog | null) => void;
  selectedPet: Dog;
  pet: Dog;
  otherDogs: { friends: Dog[]; enemies: Dog[] };
  owner: Owner;
}

export const DogPetSelection = (props: DogPetSelectionProps) => {
  const { setSelectedPet, selectedPet, pet, otherDogs, owner } = props;

  const onSelectCallback = React.useCallback(() => {
    selectedPet === pet ? setSelectedPet(null) : setSelectedPet(pet);
  }, [pet, selectedPet, setSelectedPet]);

  return (
    <div key={pet.id} onClick={onSelectCallback}>
      <h1>{pet.nickName}</h1>
      <p>
        This {pet.name} has {pet.legs} legs!
      </p>
      <p>
        Their best friends are {otherDogs.friends.join(" ,")}, but they don't
        get along with {otherDogs.enemies.join(" ,")}.
      </p>
      <p>
        Please get in contact with their owner, {owner.name} at {owner.address},
        if you'd like to meet them!
      </p>
    </div>
  );
};
