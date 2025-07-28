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
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden relative z-0">
      <img
        src="/assets/images/404.jpg"
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
            <CardTitle className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
              404
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground">
              You seem to be lost in the void...
            </CardDescription>
          </CardHeader>
            <CardContent className="flex flex-col gap-4 items-center">
            <CardAction className="mt-2 w-full flex justify-center">
              <Button
              onClick={() => navigate("/")}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
              Return to the Material Plane
              </Button>
            </CardAction>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageNotFound;
