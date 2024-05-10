type Gender = "male" | "female";

interface IGenderSelectionProps {
  setGender: (gender: Gender) => void;
}

export const GenderSelection = ({ setGender }: IGenderSelectionProps) => {
  const handleSelection = (gender: Gender): void => {
    setGender(gender);
  };

  return (
    <div>
      <h2>Select a gender</h2>
      <p>
        This app will help you create random outfits. Please select a gender for
        the outfits you would like to create:
      </p>
      <button onClick={() => handleSelection("male")}>Male</button>
      <button onClick={() => handleSelection("female")}>Female</button>
    </div>
  );
};