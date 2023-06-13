import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../interfaces/IRootState';
import { SocialMediaData } from '../../interfaces/ISocialMediaData';
import { setDataSource } from '../../redux/socialMediaSlice';
import Table from './Table';

const TableSkeleton = () => {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const storedDataSource = JSON.parse(localStorage.getItem('dataSource') || '[]') as SocialMediaData[];
    const reduxData = useSelector((state: RootState) => state.socialMedia.dataSource)
    const newDataSource = storedDataSource?.length > 0 ? storedDataSource : reduxData;

    useEffect(() => {
        dispatch(setDataSource(
            Object.keys(newDataSource || []).length > 0
                ? newDataSource
                : []))
    }, [])

    return (
        <div className="table-skeleton">
            <div className="table-skeleton__inside">
                <Table />
            </div>
        </div>
    )
}

export default TableSkeleton;