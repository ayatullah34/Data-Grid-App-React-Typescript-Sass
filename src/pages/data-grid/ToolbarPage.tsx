import React, { useState } from 'react';
import SearchPanel from '../../components/SearchPanel';
import { ToolbarPageProps } from '../../interfaces/IToolbarPageProps';
import AddAccountDialog from './actions/AddAccountDialog';
import FilterDialog from './actions/FilterDialog';
import filterIcon from '../../../public/assets/filter-icon.svg';

const ToolbarPage: React.FC<ToolbarPageProps> = ({ onSearch }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isFilterPopupVisible, setIsFilterPopupVisible] = useState<boolean>(false);

  const handleAddClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
  };

  const handleFilterClick = () => {
    setIsFilterPopupVisible(true);
  };

  const handleFilterClose = () => {
    setIsFilterPopupVisible(false);
  };

  return (
    <div className="toolbar">
      <div className="toolbar__div">
        <SearchPanel placeholder="Search objects..." onSearch={onSearch} />
        <div className="toolbar__filter-icon" onClick={handleFilterClick}>
          <img src={filterIcon} alt="filter-icon" />
        </div>
      </div>
      <div style={{flexGrow:1}}/>
      <div className="toolbar__add-icon" onClick={handleAddClick}>
        <i className="dx-icon-plus"></i>
        Yeni hesap ekle
      </div>

      {isDialogOpen && <AddAccountDialog isOpen={isDialogOpen} onClose={handleDialogClose} onConfirm={handleDialogConfirm} />}

      {isFilterPopupVisible && <FilterDialog open={isFilterPopupVisible} close={handleFilterClose} />}
    </div>
  );
};

export default ToolbarPage;
