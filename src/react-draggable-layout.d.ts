declare module "react-draggable-layout" {
  import * as React from "react";

  interface DraggableComponent {
    col: number;
    id: string;
    component: React.ReactNode;
  }

  interface DraggableLayoutProps {
    components: DraggableComponent[];
    columns: number;
    mainColumnIndex: number;
    draggable?: boolean;
    onChange?: (components: DraggableComponent[]) => void;
  }

  const DraggableLayout: React.FC<DraggableLayoutProps>;

  export default DraggableLayout;
}
