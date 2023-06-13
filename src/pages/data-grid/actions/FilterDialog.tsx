import { Popup } from 'devextreme-react';
import { Button } from 'devextreme-react/button';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../../interfaces/IRootState';
import { setFilterItems } from '../../../redux/socialMediaSlice';

interface FilterDialogProps {
    open: boolean;
    close: () => void;
}

interface CheckboxItem {
    name: string;
    checked: boolean;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ open, close }) => {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const dataSource = useSelector((state: RootState) => state.socialMedia.dataSource)
    //insert check for same social media name
    const uniqueNames = useMemo(() =>
        Array.from(new Set(dataSource.map((item) => item.name)))
        , [dataSource]);
    const filterItems = useSelector((state: RootState) => state.socialMedia.filterItems);
    const [selectedItems, setSelectedItems] = useState<CheckboxItem[]>([]);

    useEffect(() => {
        setSelectedItems(
            uniqueNames.map((name) => ({
                name,
                checked: filterItems.includes(name as never),
            }))
        );
    }, []);

    const handleSave = () => {
        const selectedNames = selectedItems.filter((item) => item.checked).map((item) => item.name);
        dispatch(setFilterItems(selectedNames));
        close();
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.map((item) => (item.name === name ? { ...item, checked } : item))
        );
    };

    const handleSelectAll = (checked: boolean) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.map((item) => ({ ...item, checked }))
        );
    };

    const isAllChecked = useMemo(() => selectedItems.every((item) => item.checked), [selectedItems]);

    return (
        <Popup
            visible={open}
            onHiding={close}
            maxWidth={288}
            maxHeight={356}
            showCloseButton={false}
            titleRender={() => (
                <div className="filter-dialog-header">
                    <div className="header-left">
                        <input
                            type="checkbox"
                            checked={isAllChecked}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        <span>Select All</span>
                    </div>
                    <Button icon="close" stylingMode="text" onClick={close} />
                </div>
            )}
        >
            <div className="filter-dialog-content">
                <div className="filter-dialog-items">
                    {selectedItems.map((item) => (
                        <div key={item.name} className="filter-dialog-item">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={(e) => handleCheckboxChange(item.name, e.target.checked)}
                            />
                            <span className="item-text">{item.name}</span>
                            <hr className="item-divider" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-dialog-buttons">
                <Button text="Vazgeç" className="close" onClick={() => close()} />
                <Button text="Kaydet" className="save" onClick={handleSave} />
            </div>
        </Popup>
    );
};

export default FilterDialog;
