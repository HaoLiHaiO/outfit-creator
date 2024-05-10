import { useState } from "react";
import { GenderSelection } from "./components/gender-selection/GenderSelection";
import OutfitDisplay from "./components/outfit-display/OutfitDisplay";

function App() {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <>
      {!gender ? (
        <GenderSelection setGender={setGender} />
      ) : (
        <OutfitDisplay gender={gender} />
      )}
    </>
  );
}

export default App;