import { useState } from "react";
import { GenderSelection } from "./components/gender-selection/GenderSelection";

function App() {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <>
      {!gender ? (
        <GenderSelection setGender={setGender} />
      ) : (
        <div>A gender has been selected.</div>
      )}
    </>
  );
}

export default App;