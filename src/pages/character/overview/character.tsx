import CoreDetailsSection from "./core-details/core-details-section";
import useCoreDetails from "./core-details/use-core-details";

const Character = () => {
  const { name, playerName, level, className, race } = useCoreDetails();

  return (
    <>
      <CoreDetailsSection
        characterName={name}
        playerName={playerName}
        level={level}
        class={className}
        race={race}
      />
    </>
  );
};

export default Character;
