import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import useCoreDetails from "./use-core-details";

export type CoreDetailsFormProps = {
  characterName?: string;
};

const CoreDetailsForm = ({ characterName }: CoreDetailsFormProps) => {
  const [name, setName] = useState(characterName || "");

  const { updateCoreDetails } = useCoreDetails();

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Submitting name:", name);

    e.preventDefault();
    updateCoreDetails(name);
  };

  return (
    <DialogHeader>
      <DialogTitle>Update Character Details</DialogTitle>
      <Card className="w-full max-w-sm mx-auto mt-10 p-4">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <DialogClose asChild>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </DialogClose>
          </CardFooter>
        </form>
      </Card>
    </DialogHeader>
  );
};

export default CoreDetailsForm;
