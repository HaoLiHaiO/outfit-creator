import "./gender-selection.css";

type Gender = "male" | "female";

interface IGenderSelectionProps {
  setGender: (gender: Gender) => void;
}

export const GenderSelection = ({ setGender }: IGenderSelectionProps) => {
  const handleSelection = (gender: Gender): void => {
    setGender(gender);
  };

  return (
    <div className="gender-selection">
      <button className="gender-button" onClick={() => handleSelection("male")}>
        Men
      </button>
      <div className="separator"></div>
      <button
        className="gender-button"
        onClick={() => handleSelection("female")}
      >
        Women
      </button>
    </div>
  );
};
