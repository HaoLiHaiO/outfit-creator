import "./gender-selection.css";

type Gender = "male" | "female";

interface IGenderSelectionProps {
  setGender: (gender: Gender) => void;
}

/**
 * GenderSelection Component
 * 
 * This component renders two buttons for selecting the gender of the outfit.
 * It calls the setGender function passed as a prop with the selected gender
 * ("male" or "female").
 * 
 * @param {Object} props - The component props
 * @param {Function} props.setGender - Function to set the selected gender
 * @returns {JSX.Element} A div containing the gender selection buttons
 */
export const GenderSelection = ({ setGender }: IGenderSelectionProps): JSX.Element => {
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
