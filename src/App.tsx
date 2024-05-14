import { useState } from "react";
import { GenderSelection } from "./components/gender-selection/GenderSelection";
import { CompleteOutfit } from "./components/outfit-display/CompleteOutfit";

function App() {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <>
      {!gender ? (
        <GenderSelection setGender={setGender} />
      ) : (
        <CompleteOutfit gender={gender} setGender={setGender} />
      )}
    </>
  );
}

export default App;
