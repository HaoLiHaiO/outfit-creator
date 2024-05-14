import { IOutfitItem } from "./hooks/useFetchItem";
import "./random-outfit.css"

interface IRandomOutfitElementProps {
  outfit: IOutfitItem | undefined;
}

interface IDescriptionItem {
  language: string;
  description: string;
}

export const RandomOutfitDisplay = ({ outfit }: IRandomOutfitElementProps) => {
  if (!outfit) return <p>No outfit found.</p>;

  const getEnglishDescription = (descriptions: IDescriptionItem[]): string => {
    const englishDescription = descriptions.find(desc => desc.language === 'EN');
    return englishDescription ? englishDescription.description : 'No description available';
  };

  const firstVariant = outfit.variants[0];

  const cutoutImage = firstVariant.images.find(image => image.type === 'CUTOUT');
  const displayImage = cutoutImage ? cutoutImage : firstVariant.images[0];

  return (
    <div className="random-outfit">
      <h3>{outfit.maintenance_group}: {getEnglishDescription(outfit.descriptions)}</h3>
      <div className="prices">Price: {firstVariant.current_price} {firstVariant.currency}</div>
      {firstVariant.images.length > 0 && (
        <img
          src={`https://api.newyorker.de/csp/images/image/public/${displayImage.key}?res=low&frame=1_1`}
          alt="Display Image"
        />
      )}
    </div>
  );
};
