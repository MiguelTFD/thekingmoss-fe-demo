import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {ReactNode, useState, useEffect} from "react";

export interface FormModalProps<T> {
  trigger: ReactNode;
  onSave: (values: T) => void;
  initialData?: T;
  title: string;
  fields: {
    key: keyof T;
    label: string;
    placeholder?: string;
  }[];
}

function FormModal<T>({ trigger, onSave, initialData, title, fields }: FormModalProps<T>) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Partial<T>>({});

  useEffect(() => {
    if (initialData) setValues(initialData);
  }, [initialData]);

  function handleChange(key: keyof T, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    onSave(values as T);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {fields.map((f) => (
            <div key={String(f.key)}>
              <label className="block text-sm font-medium text-gray-700">
                {f.label}
              </label>
              <Input
                value={(values[f.key] as unknown as string) || ""}
                placeholder={f.placeholder}
                onChange={(e) => handleChange(f.key, e.target.value)}
                className="mt-1 w-full"
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default FormModal;

