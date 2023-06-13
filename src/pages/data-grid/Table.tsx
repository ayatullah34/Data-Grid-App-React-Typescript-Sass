import { Column, DataGrid } from 'devextreme-react/data-grid';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import { RootState } from '../../interfaces/IRootState';
import { SocialMediaData } from '../../interfaces/ISocialMediaData';
import ToolbarPage from './ToolbarPage';

const Table = () => {
    const newDataSource = useSelector((state: RootState) => state.socialMedia.dataSource)
    const filterItems = useSelector((state: RootState) => state.socialMedia.filterItems);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedRowId, setSelectedRowId] = useState<number>(0);
    const [rowPerPage, setRowPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;

    function renderCell(data: any) {
        return <span className="table-cell">{data.value}</span>;
    }

    function renderHeaderCell(data: any) {
        return <span className="table-header-cell">{data.column.caption}</span>;
    }

    const handleSearch = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1);
    };

    // Filtering table data with a search value
    const filteredData = useMemo(() => {
        return newDataSource.filter((item: SocialMediaData) => {
            const lowerCaseSearchValue = searchValue.toLowerCase();
            return (
                item.link.toLowerCase().includes(lowerCaseSearchValue) ||
                item.name.toLowerCase().includes(lowerCaseSearchValue) ||
                item.description.toLowerCase().includes(lowerCaseSearchValue)
            );
        });
    }, [searchValue, newDataSource]);

    // Inserting box shadow to selected row
    function onRowPrepared(e: any) {
        const isRowSelected = e.data?.id === selectedRowId;
        if (isRowSelected) {
            e.rowElement.classList.add('selected');
        } else {
            e.rowElement.classList.remove('selected');
        }
    }

    function handleRowClick(e: any) {
        const clickedRowId = e.data?.id;
        setSelectedRowId(clickedRowId);
    }

    const handleRowPerPage = (newRowPerPage: number) => {
        setRowPerPage(newRowPerPage < 1 ? 1 : newRowPerPage);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    // adjust data with rowPerPage and currentPage
    const currentPageData = useMemo(() => {
        if (filterItems.length > 0) {
            return filteredData.filter((item) => filterItems.includes(item.name as never)).slice(startIndex, endIndex);
        } else {
            return filteredData.slice(startIndex, endIndex);
        }
    }, [filterItems, filteredData, startIndex, endIndex]);

    const totalPage = Math.ceil(filteredData.length / rowPerPage);

    return (
        <>
            <ToolbarPage onSearch={handleSearch} />
            <DataGrid
                dataSource={currentPageData}
                keyExpr="id"
                showBorders
                onRowPrepared={onRowPrepared}
                onRowClick={handleRowClick}
                wordWrapEnabled
                height={600}
            >
                <Column
                    dataField="link"
                    caption="Sosyal Medya Linki"
                    headerCellRender={renderHeaderCell}
                    cellRender={renderCell}
                    width="32%"
                    minWidth={200}
                />
                <Column
                    dataField="name"
                    caption="Sosyal Medya Adı"
                    headerCellRender={renderHeaderCell}
                    cellRender={renderCell}
                    width="28%"
                    minWidth={180}
                />
                <Column
                    dataField="description"
                    caption="Açıklama"
                    headerCellRender={renderHeaderCell}
                    cellRender={renderCell}
                    width="40%"
                    minWidth={300}
                />
            </DataGrid>

            <Pagination
                changeRowPerPage={handleRowPerPage}
                rowPerPage={rowPerPage}
                currentPage={currentPage}
                changePage={handlePageChange}
                totalPage={totalPage}
            />
        </>
    );
};

export default Table;
