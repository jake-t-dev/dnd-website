import { useStore } from "../use-store";

const useCharacterDetails = () => {
  const character = useStore((state) => state.data?.character);

  return { character };
};

export default useCharacterDetails;
