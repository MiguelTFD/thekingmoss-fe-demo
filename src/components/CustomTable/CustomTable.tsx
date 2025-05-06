import {
    ColumnDef,
    HeaderGroup,
    RowModel,
    useReactTable,
    getCoreRowModel,
    flexRender,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import CustomTitleTable from "@/components/CustomTable/CustomTitleTable";
import {Card, CardContent} from "@/components/ui/card.tsx";

export interface TableProps<T> {
    data: T[];
    tableTitle: string;
    columns: ColumnDef<T>[];
    onRowClick?: (row: T) => void;
    initalSorting?: {
        columnId: string;
        desc: boolean;
    };
}

export interface TableHeaderProps<T> {
    headerGroups: HeaderGroup<T>[];
}

export interface TableBodyProps<T> {
    rowModel: RowModel<T>;
    onRowClick?: (row: T) => void;
}

const CustomTableHeader = <T,>({ headerGroups }: TableHeaderProps<T>) => {
    return (
        <TableHeader>
            {headerGroups.map((headerGroup, hgIndex) => (
                <TableRow key={`table-head-${hgIndex}`}>
                    {headerGroup.headers.map((header, idx) => (
                        <TableHead
                            key={`table-header-${idx}`}
                            onClick={header.column.getToggleSortingHandler()}
                        >
                            <div className="flex items-center justify-center">
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                                {header.column.getIsSorted() === "asc" && ' ↑'}
                                {header.column.getIsSorted() === "desc" && ' ↓'}
                            </div>
                        </TableHead>
                    ))}
                </TableRow>
            ))}
        </TableHeader>
    );
};

const CustomTableBody = <T,>({ rowModel, onRowClick }: TableBodyProps<T>) => {
    return (
        <TableBody>
            {rowModel.rows.map((row) => (
                <TableRow
                    key={`table-body-${row.id}`}
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => onRowClick?.(row.original)}
                >
                    {row.getVisibleCells().map((cell, idx) => (
                        <TableCell key={`tablebody-cell-${idx}`}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
};

const CustomTable = <T,>(props: TableProps<T>) => {
    const { data, columns, onRowClick, initalSorting, tableTitle } = props;

    const table = useReactTable({
        data,
        columns,
        initialState: {
            sorting: initalSorting
                ? [{ id: initalSorting.columnId, desc: initalSorting.desc }]
                : undefined,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="px-4 lg:px-6">
            <Card className="@container/card">
                <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                     <div className="flex flex-col gap-6">
                        <CustomTitleTable
                            title={tableTitle}
                            onRowClick={onRowClick}
                        />
                        <div
                            className="overflow-x-auto rounded-lg border shadow-sm"
                        >
                            <Table
                                aria-label="table component"
                            >
                                <CustomTableHeader
                                    headerGroups={table.getHeaderGroups()}
                                />
                                <CustomTableBody
                                    rowModel={table.getRowModel()}
                                    onRowClick={onRowClick}
                                />
                            </Table>
                        </div>
                     </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CustomTable;
