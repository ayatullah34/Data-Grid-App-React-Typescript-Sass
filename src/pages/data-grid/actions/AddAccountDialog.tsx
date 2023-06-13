import { Popup } from 'devextreme-react';
import { Button } from 'devextreme-react/button';
import { TextBox } from 'devextreme-react/text-box';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../../interfaces/IRootState';
import { setDataSource } from '../../../redux/socialMediaSlice';

interface AddAccountDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const AddAccountDialog: React.FC<AddAccountDialogProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const dataSource = useSelector((state: RootState) => state.socialMedia.dataSource);
    const [formValues, setFormValues] = useState({
        link: '',
        name: '',
        description: '',
    });

    const handleInputChange = useCallback((e: any) => {
        const { name, value } = e?.event?.target || '';
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }, []);

    const clearFormData = () => {
        setFormValues({
            link: '',
            name: '',
            description: '',
        });
    };

    const handleCancel = useCallback(() => {
        clearFormData();
        onClose();
    }, [onClose]);

    // inserting new data in dataSource array
    const handleSave = useCallback(() => {
        const newAccount = {
            id: Date.now(), // unique ID
            link: formValues.link,
            name: formValues.name,
            description: formValues.description,
        };

        const updatedDataSource = [...dataSource, newAccount];

        // Dispatch the action to update the dataSource in Redux store
        dispatch(setDataSource(updatedDataSource));

        // Clear the form data and close the dialog
        clearFormData();
        onClose();
    }, [dataSource, formValues, onClose, dispatch]);


    return (
        <Popup
            visible={isOpen}
            onHiding={onClose}
            maxWidth={488}
            maxHeight={406}
            closeOnOutsideClick={true}
            showCloseButton={true}
        >
            <div className="add-dialog-content">
                <div className="input-container">
                    <label>Sosyal Medya Linki</label>
                    <TextBox
                        name="link"
                        value={formValues.link}
                        onValueChanged={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <label>Sosyal Medya Adı</label>
                    <TextBox
                        name="name"
                        value={formValues.name}
                        onValueChanged={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <label>Açıklama</label>
                    <TextBox
                        name="description"
                        value={formValues.description}
                        onValueChanged={handleInputChange}
                    />
                </div>
            </div>
            <div className="add-dialog-buttons">
                <Button text="Vazgeç" className="close" onClick={handleCancel} />
                <Button text="Kaydet" className="save" onClick={handleSave} />
            </div>
        </Popup>
    );
};

export default React.memo(AddAccountDialog);
