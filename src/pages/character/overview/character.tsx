import { Card } from "@/components/ui/card";
import CoreDetailsSection from "./core-details/core-details-section";
import useCoreDetails from "./core-details/use-core-details";

const Character = () => {
  const { name, playerName, level, className, race } = useCoreDetails();

  return (
    <>
      <Card className="m-4 mt-8 p-2 bg-background shadow-lg flex-1">
        <CoreDetailsSection
          characterName={name}
          playerName={playerName}
          level={level}
          class={className}
          race={race}
        />
      </Card>
    </>
  );
};

export default Character;
