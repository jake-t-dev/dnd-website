import { Card, CardContent } from "@/components/ui/card";

export type EditableContainerProps = {
  children: React.ReactNode;
  editContent?: React.ReactNode;
};

const EditableContainer = ({
  children,
  editContent,
}: EditableContainerProps) => {
  return (
    <Card className="p-4 relative group max-w-md shadow-lg">
      <CardContent className="space-y-4">{children}</CardContent>
      {editContent && editContent}
    </Card>
  );
};

export default EditableContainer;
