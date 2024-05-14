import { useCallback } from "react";
import { RandomOutfitDisplay } from "./RandomOutfitDisplay";
import { useFetchItem } from "./hooks/useFetchItem";
import "./complete-outfit.css";

interface ICompleteOutfitProps {
  gender: string;
  setGender: (gender: string | null) => void;
}

export const CompleteOutfit = ({ gender, setGender }: ICompleteOutfitProps) => {
  const {
    randomOutfitElement: accessories,
    loading: loadingAccessories,
    error: errorAccessories,
    refetch: refetchAccessories,
  } = useFetchItem("api/accessories", gender);
  const {
    randomOutfitElement: tops,
    loading: loadingTops,
    error: errorTops,
    refetch: refetchTops,
  } = useFetchItem("api/tops", gender);
  const {
    randomOutfitElement: bottoms,
    loading: loadingBottoms,
    error: errorBottoms,
    refetch: refetchBottoms,
  } = useFetchItem("api/bottoms", gender);

  const toggleGender = () => {
    setGender(gender === "male" ? "female" : "male");
  };

  const refetchAll = useCallback(() => {
    refetchAccessories();
    refetchTops();
    refetchBottoms();
  }, [refetchAccessories, refetchTops, refetchBottoms]);

  return (
    <div className="complete-outfit">
      <button className="outfit-button" onClick={toggleGender}>
        Switch to {gender === "male" ? "Female" : "Male"} Outfits
      </button>
      {(loadingAccessories || loadingTops || loadingBottoms) && (
        <p>Loading...</p>
      )}
      {(errorAccessories || errorTops || errorBottoms) && (
        <p>Error: {errorAccessories || errorTops || errorBottoms}</p>
      )}
      <div className="outfits-wrapper">
        <RandomOutfitDisplay outfit={accessories} />
        <RandomOutfitDisplay outfit={tops} />
        <RandomOutfitDisplay outfit={bottoms} />
      </div>
      <button className="outfit-button" onClick={refetchAll}>
        Refresh All
      </button>
    </div>
  );
};
