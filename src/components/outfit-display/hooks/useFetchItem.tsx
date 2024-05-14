import { useCallback, useEffect, useState } from "react";

interface IDescriptionItem {
    language: string;
    description: string;
  }

export interface IOutfitItem {
    id: string;
    maintenance_group: string;
    variants: {
      id: string;
      current_price: number;
      currency: string;
      images: {
        type: string; key: string 
}[];
    }[];
    descriptions: IDescriptionItem[];
  }

/**
 * useFetchItem Hook
 * 
 * This hook fetches a random outfit item from a given API endpoint based on
 * the specified gender.
 * It manages loading, error, and the fetched outfit state.
 * 
 * @param {string} endpoint - The API endpoint to fetch data from
 * @param {string} gender - The gender parameter for fetching the outfit data
 * 
 * @returns {Object} An object containing the fetched outfit item, loading
 * state, error state, and a refetch function
 */

export const useFetchItem = (endpoint: string, gender: string) => {
    const [randomOutfitElement, setRandomOutfitElement] = useState<IOutfitItem | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/${endpoint}?gender=${gender}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const json = await response.json();
        const randomIndex = Math.floor(Math.random() * json.items.length);
        setRandomOutfitElement(json.items[randomIndex]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }, [endpoint, gender]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);

    return { randomOutfitElement, loading, error, refetch: fetchData };
}