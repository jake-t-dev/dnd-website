import useUpdateCharacterDetails from "@/hooks/character/update-character-details";
import useCharacterDetails from "@/hooks/character/use-character-details";

const useCoreDetails = () => {
  const { character } = useCharacterDetails();
  const { updateCharacter } = useUpdateCharacterDetails();
  const name = character?.name || "Adventurer";
  const playerName = character?.playerName || "";
  const level = character?.level || 1;
  const className = character?.class || "";
  const race = character?.race || "";

  const updateCoreDetails = (name: string) => {
    updateCharacter({ name });
  };

  return { name, playerName, level, className, race, updateCoreDetails };
};

export default useCoreDetails;
