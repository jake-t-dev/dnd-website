import { Feather } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

export type ModalProps = {
  children?: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          tabIndex={-1}
        >
          <Feather />
        </Button>
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
