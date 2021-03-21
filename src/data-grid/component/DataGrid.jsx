import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "../../css/DataGrid.css";
import { useEffect, useState } from 'react';
import {ReactModal} from './ReactModal';

/* 
* Data grid to display list of users with details
*/

export const DataGrid = (props) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        props.getAllUsers();
    }, []);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const columnDefs = [
        { headerName: "Name", field: "name" },
        { headerName: "Age", field: "age" },
        { headerName: "Email", field: "email" },
        { headerName: "Pin Code", field: "pincode" }

    ];

    const rows = props.users;

    return (
        <div>
            <button className="button-style" onClick={openModal}>Add a row</button>
            <div
                className="ag-theme-balham grid-css">
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rows}>
                </AgGridReact>
            </div>
            <ReactModal showModal={showModal} addUser={props.addUser} handleCloseModal={closeModal} />
        </div>
    );
}
