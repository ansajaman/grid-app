import Modal from 'react-modal';
import "../../css/ReactModal.css";
import { useState } from 'react';


/* 
* Pop up to add a user with details
*/

export const ReactModal = (props) => {

    const [isDirty, setIsDirty] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: "" , age: "" , email: "" , pincode: "" });
    
    const setUserInfoOnClick = (value, slice) => {
        const values = JSON.parse(JSON.stringify(userInfo));
        values[slice] = value;
        setUserInfo(values);
        setIsDirty(true);
    }

    const onUserSaveClick = () => {
        props.addUser(userInfo);
        setUserInfo({});
        setIsDirty(false);
        props.handleCloseModal();
    } 
    
    const onCancelClick = () => {
        setUserInfo({});
        setIsDirty(false);
        props.handleCloseModal();
    }

    return (
        <div>
            <Modal
                isOpen={props.showModal}
                contentLabel="Add a user"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="input-div">
                    <div className="label-div">Name</div> <input className="input-box" onChange={(e) => { setUserInfoOnClick(e.target.value, "name") }} />
                </div>
                <div className="input-div">
                    <div className="label-div">Age</div> <input className="input-box" onChange={(e) => { setUserInfoOnClick(e.target.value, "age") }} />
                </div>
                <div className="input-div">
                    <div className="label-div">Email</div> <input className="input-box" onChange={(e) => { setUserInfoOnClick(e.target.value, "email") }} />
                </div>
                <div className="input-div">
                    <div className="label-div">Pin Code</div> <input className="input-box" onChange={(e) => { setUserInfoOnClick(e.target.value, "pincode") }} />
                </div>
                <button disabled={!isDirty} className="button-style-modal" onClick={onUserSaveClick}>Save</button>
                <button className="button-style-modal" onClick={onCancelClick}>Close</button>
            </Modal>
        </div>
    )
}
