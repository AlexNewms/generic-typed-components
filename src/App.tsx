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
      <h1 style={{ textAlign: "center" }}>Dogs</h1>
      {dogs.map((dog) => (
        <PetSelection
          getsAlongWith={cats}
          setSelectedPet={setSelectedDog}
          selectedPet={selectedDog}
          pet={dog}
        />
      ))}

      <h1 style={{ textAlign: "center" }}>Cats</h1>
      {cats.map((cat) => (
        <PetSelection
          getsAlongWith={birds}
          setSelectedPet={setSelectedCat}
          selectedPet={selectedCat}
          pet={cat}
        />
      ))}

      <h1 style={{ textAlign: "center" }}>Birds</h1>
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
