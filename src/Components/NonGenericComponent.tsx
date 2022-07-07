import React from "react";
import { Dog } from "../Interfaces/Interfaces";

interface DogPetSelectionProps {
  setSelectedPet: (pet: Dog | null) => void;
  selectedPet: Dog;
  pet: Dog;
  friends: Dog[];
}

export const DogPetSelection = (props: DogPetSelectionProps) => {
  const { setSelectedPet, selectedPet, pet, friends } = props;

  const onSelectCallback = React.useCallback(() => {
    selectedPet === pet ? setSelectedPet(null) : setSelectedPet(pet);
  }, [pet, selectedPet, setSelectedPet]);

  return (
    <div key={pet.id} onClick={onSelectCallback}>
      <h1>{pet.nickName}</h1>
      <p>
        This {pet.name} has {pet.legs} legs!
      </p>
      <p>Their best friends are {friends.map((d) => d.nickName).join(" ,")}.</p>
    </div>
  );
};
