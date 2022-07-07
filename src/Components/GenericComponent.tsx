import React, { Dispatch, SetStateAction } from "react";
import { Animal } from "../Interfaces/Interfaces";

interface GenericPetSelectionProps<T, U> {
  setSelectedPet: Dispatch<SetStateAction<T | null>>;
  selectedPet: T | null;
  pet: T;
  getsAlongWith: U[];
}

export const PetSelection = <
  T extends Required<Animal>,
  U extends Required<Animal>
>(
  props: GenericPetSelectionProps<T, U>
) => {
  const { setSelectedPet, selectedPet, pet, getsAlongWith } = props;

  const onSelectCallback = React.useCallback(() => {
    selectedPet === pet ? setSelectedPet(null) : setSelectedPet(pet);
  }, [pet, selectedPet, setSelectedPet]);

  return (
    <div
      onClick={onSelectCallback}
      style={{
        cursor: "pointer",
        backgroundColor: selectedPet?.id === pet.id ? "#a6e3b6" : "#e3d1a6",
      }}
    >
      <h1>{pet.nickName}</h1>
      <p>
        This {pet.name} has {pet.legs} legs!
      </p>
      <p>
        Their best friends are
        {getsAlongWith.map((animal) => animal.nickName).join(", ")}.
      </p>
      <p>
        Please get in contact with their owner, {pet.owner.name} at{" "}
        {pet.owner.address}, if you'd like to meet them!
      </p>
    </div>
  );
};
