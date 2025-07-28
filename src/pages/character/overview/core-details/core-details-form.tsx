import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CoreDetailsForm = () => {
  return (
    <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
  );
};

export default CoreDetailsForm;
