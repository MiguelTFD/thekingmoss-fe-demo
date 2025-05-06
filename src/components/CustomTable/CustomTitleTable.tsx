
import { Button } from "@/components/ui/button";
import FormModal from "./FormModal";

interface CustomTitleTableProps<T> {
  title: string;
  onAdd: (item: T) => void;
  addFields: { key: keyof T; label: string; placeholder?: string }[];
}

export function CustomTitleTable<T>({ title, onAdd, addFields }: CustomTitleTableProps<T>) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <FormModal
          trigger={<Button size="sm">Agregar</Button>}
          title={`Agregar ${title}`}
          fields={addFields}
          onSave={onAdd}
        />
      </div>
    </div>
  );
}

export default CustomTitleTable;
