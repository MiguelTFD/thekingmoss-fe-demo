import {
    ColumnDef,
} from "@tanstack/react-table";

import products from './products.json';
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Order = {
    productId: number,
    name: string,
    stock: string,
    unitPrice: string,
    discount: string,
    description: string,
    size: string,
    weight: string,
    category: string,
};

const createColumns = ():ColumnDef<Order>[] =>[
    {
        header: ()=> 'Id',
        accessorKey:'productId',
    },
    {
        header:()=> 'Nombre',
        accessorKey:'name',
    },
    {
        header:()=> 'Stock',
        accessorKey:'stock',
    },
    {
        header:()=> 'Precio Unitario',
        accessorKey:'unitPrice',
    },
    {
        header:()=> 'Descuento',
        accessorKey:'discount',
    },
    {
        header:()=> 'Descripcion',
        accessorKey:'description',
    },
    {
        header:()=> 'Tamanio',
        accessorKey:'size',
    },
    {
        header:()=> 'Peso',
        accessorKey:'weight',
    },
    {
        header:()=> 'Categoria',
        accessorKey:'category',
    },
]

const columns = createColumns();


const ProductsPageContainer = ()=>{
    return (
        <div>
            <CustomTable
                tableTitle={"Productos"}
                data={products}
                columns={columns}
            />
        </div>
    );
}

export default  ProductsPageContainer;
