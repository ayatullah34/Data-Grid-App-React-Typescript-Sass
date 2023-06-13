import React from 'react';
import { PaginationProps } from '../interfaces/IPaginationProps';
import upIcon from '../../public/assets/up-icon.svg';
import downIcon from '../../public/assets/down-icon.svg';
import leftArrowIcon from '../../public/assets/left-arrow.svg';
import rightArrowIcon from '../../public/assets/right-arrow.svg';

const Pagination: React.FC<PaginationProps> = ({ rowPerPage, changeRowPerPage, currentPage, changePage, totalPage }) => {
    const decrementPage = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    };

    const incrementPage = () => {
        if (currentPage < totalPage) {
            changePage(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <div className="rows-update">
                <span>Show:</span>
                <div className="show-rows">
                    <span className="up-arrow" onClick={() => changeRowPerPage(rowPerPage + 2)}>
                        <img
                            src={upIcon}
                            alt="up-icon"
                        />
                    </span>
                    <span className="down-arrow" onClick={() => changeRowPerPage(rowPerPage - 2)}>
                        <img
                            src={downIcon}
                            alt="down-icon"
                        />
                    </span>
                    <span className="row-count">{rowPerPage + ' rows'}</span>
                </div>
            </div>

            <div className="paging">
                <span className="left-arrow" onClick={decrementPage}>
                    <img src={leftArrowIcon} alt="left-arrow" />
                </span>
                <div className="page-number">{currentPage}</div>
                <span style={{ color: '#C9C9C9' }}>of</span>
                <span>{totalPage}</span>
                <span
                    className={`right-arrow ${currentPage >= totalPage ? 'disabled' : ''}`}
                    onClick={incrementPage}
                >
                    <img src={rightArrowIcon} alt="right-arrow" />
                </span>
            </div>
        </div>
    );
};

export default Pagination;
