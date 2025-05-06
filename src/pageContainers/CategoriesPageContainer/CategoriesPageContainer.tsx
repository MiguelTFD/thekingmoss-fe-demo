import {
    ColumnDef,
} from "@tanstack/react-table";

import categories from './categories.json';
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Category = {
    categoryId: number;
    categoryName: string;
};

const createColumns = ():ColumnDef<Category>[] =>[
    {
        header: ()=> 'Id de categoria',
        accessorKey:'categoryId',
    },
    {
        header:()=> 'Nombre de categoria',
        accessorKey:'categoryName',
    },
]

const columns = createColumns();


const CategoriesPageContainer = ()=>{
    return (
        <div>
            <CustomTable
                tableTitle={"Categorias"}
                data={categories}
                columns={columns}
            />
        </div>
    );
}

export default  CategoriesPageContainer;
