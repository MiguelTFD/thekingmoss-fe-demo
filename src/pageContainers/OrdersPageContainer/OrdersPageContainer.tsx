import {
    ColumnDef,
} from "@tanstack/react-table";

import orders from './orders.json';
import CustomTable from "@/components/CustomTable/CustomTable.tsx";

type Order = {
    orderId: number,
    orderDate: string,
    deliveryType: string,
    orderInfo: string,
    deliveryInstructions: string,
    orderStatus: string
};

const createColumns = ():ColumnDef<Order>[] =>[
    {
        header: ()=> 'Id del pedido',
        accessorKey:'orderId',
    },
    {
        header:()=> 'Fecha del pedido',
        accessorKey:'orderDate',
    },
    {
        header:()=> 'Tipo de entrega',
        accessorKey:'deliveryType',
    },
    {
        header:()=> 'Informacion adicional',
        accessorKey:'orderInfo',
    },
    {
        header:()=> 'Instrucciones de entrega',
        accessorKey:'deliveryInstructions',
    },
    {
        header:()=> 'Status del pedido',
        accessorKey:'orderStatus',
    },
]

const columns = createColumns();


const OrdersPageContainer = ()=>{
    return (
        <div>
            <CustomTable
                tableTitle={"Pedidos"}
                data={orders}
                columns={columns}
            />
        </div>
    );
}

export default  OrdersPageContainer;
