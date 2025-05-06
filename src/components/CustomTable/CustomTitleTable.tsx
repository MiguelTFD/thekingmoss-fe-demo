import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

type CustomTableProps = {
    title: string;
    onRowClick: any;
}


const CustomTitleTable = (
    {
        title = "",
        onRowClick,
    }: CustomTableProps
) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
                {title}
            </h1>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <Input
                        type="Busqueda"
                        placeholder="Busqueda..."
                        className="w-full rounded-md bg-white px-10 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-500"
                    />
                </div>
                <Button onClick={onRowClick} size="sm">Agregar</Button>
            </div>
        </div>
    )
}

export default CustomTitleTable;
