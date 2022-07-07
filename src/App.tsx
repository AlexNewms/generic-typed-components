import React from "react";
import { Bird, Cat, Dog } from "./Interfaces/Interfaces";
import { dogs } from "./Constants/dogs";
import { PetSelection } from "./Components/GenericComponent";
import { cats } from "./Constants/cats";
import { birds } from "./Constants/birds";

function App() {
  const [selectedDog, setSelectedDog] = React.useState<Dog | null>(dogs[0]);
  const [selectedCat, setSelectedCat] = React.useState<Cat | null>(cats[0]);
  const [selectedBird, setSelectedBird] = React.useState<Bird | null>(birds[0]);

  return (
    <div className="App">
      {dogs.map((dog) => (
        <PetSelection
          setSelectedPet={setSelectedDog}
          selectedPet={selectedDog}
          pet={dog}
          getsAlongWith={dogs.filter((d) => d.id !== dog.id)}
        />
      ))}
      {cats.map((cat) => (
        <PetSelection
          setSelectedPet={setSelectedCat}
          selectedPet={selectedCat}
          pet={cat}
          getsAlongWith={birds}
        />
      ))}
      {birds.map((bird) => (
        <PetSelection
          setSelectedPet={setSelectedBird}
          selectedPet={selectedBird}
          pet={bird}
          getsAlongWith={[...dogs, ...cats]}
        />
      ))}
    </div>
  );
}

export default App;
