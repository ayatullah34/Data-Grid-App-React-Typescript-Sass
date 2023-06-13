export interface PaginationProps {
    rowPerPage: number;
    changeRowPerPage: (newRowPerPage: number) => void;
    currentPage: number;
    changePage: (newPage: number) => void;
    totalPage:number;
}
