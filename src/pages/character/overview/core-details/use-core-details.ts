import useCharacterDetails from "@/hooks/character/use-character-details";

const useCoreDetails = () => {
  const { character } = useCharacterDetails();
  const name = character?.name || "Adventurer";
  const playerName = character?.playerName || "";
  const level = character?.level || 1;
  const className = character?.class || "";
  const race = character?.race || "";

  return { name, playerName, level, className, race };
};

export default useCoreDetails;
