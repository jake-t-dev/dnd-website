import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCreateCharacter from "@/hooks/character/use-create-character";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const { createCharacter } = useCreateCharacter();

  const handleNewClick = () => {
    createCharacter();
    navigate("/character");
  };

  const handleLoadClick = () => {
    // Logic to load a saved character
    navigate("/character");
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative z-0">
      <img
        src="/assets/images/backdrop.jpg"
        alt="Landing"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div className="absolute top-4 right-4 z-30">
        <ModeToggle />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Card className="w-full max-w-md shadow-lg mx-4 sm:mx-0">
          <CardHeader className="text-center mb-4">
            <CardTitle>Welcome to RPGSuite</CardTitle>
            <CardDescription>
              Choose an option below to get started!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
              <CardAction className="flex-1 w-full">
                <Button className="w-full" onClick={handleNewClick}>
                  Create a new Character
                </Button>
              </CardAction>
              <CardAction className="flex-1 w-full">
                <Button className="w-full" onClick={handleLoadClick}>
                  Load a saved Character
                </Button>
              </CardAction>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Landing;
