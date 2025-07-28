import type { Character } from "@/types/character";
import { useStore } from "../use-store";

const useCreateCharacter = () => {
  const setData = useStore((state) => state.setData);

  const createCharacter = () => {
    const newCharacter: Character = {
      name: "",
      class: "",
      level: 1,
      abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
    };
    setData((state: Character) => ({
      ...state,
      character: newCharacter,
    }));
  };

  return { createCharacter };
};

export default useCreateCharacter;
