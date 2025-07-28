import { useStore } from "../use-store";

const useUpdateCharacterDetails = () => {
  const updateCharacter = useStore((state) => state.updateData);
  return { updateCharacter };
};

export default useUpdateCharacterDetails;
