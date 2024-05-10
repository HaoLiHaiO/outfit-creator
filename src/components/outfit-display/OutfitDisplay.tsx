import { useState, useEffect } from "react";

interface IOutfit {
  id: string;
  imageUrl: string;
  description: string;
}

interface OutfitDisplayProps {
  gender: string;
}

const OutfitDisplay = ({ gender }: OutfitDisplayProps) => {
  const [outfits, setOutfits] = useState<IOutfit[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/outfits?gender=${gender.toUpperCase()}`)
      .then((response) => response.json())
      .then((data) => setOutfits(data))
      .catch((error) => console.error("Error fetching outfits:", error));
  }, [gender]);

  return (
    <div>
      <h2>Selected Gender: {gender}</h2>
      {outfits.length ? (
        outfits.map((outfit) => (
          <div key={outfit.id}>
            <img src={outfit.imageUrl} alt={outfit.description} />
            <p>{outfit.description}</p>
          </div>
        ))
      ) : (
        <p>No outfits found for the selected gender.</p>
      )}
    </div>
  );
};

export default OutfitDisplay;
