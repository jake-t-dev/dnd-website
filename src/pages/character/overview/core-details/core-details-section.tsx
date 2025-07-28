import EditableContainer from "@/components/character/editable-container";
import Modal from "@/components/character/modal";
import CoreDetailsForm from "./core-details-form";

export type CoreDetailsSectionProps = {
  characterName: string;
  playerName: string;
  level: number;
  class: string;
  race: string;
};

const CoreDetailsSection = ({
  characterName,
  playerName,
  level,
  class: characterClass,
  race,
}: CoreDetailsSectionProps) => {
  return (
    <EditableContainer
      editContent={
        <Modal>
          <CoreDetailsForm />
        </Modal>
      }
    >
      <div className="flex flex-col gap-2">
        <p className="text-lg">Name: {characterName}</p>
        <p className="text-lg">Player: {playerName}</p>
        <p className="text-lg">Level: {level}</p>
        <p className="text-lg">Class: {characterClass}</p>
        <p className="text-lg">Race: {race}</p>
      </div>
    </EditableContainer>
  );
};

export default CoreDetailsSection;