
import { FaUserAlt, FaPhoneVolume } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import EditForm from "../EditForm/EditForm"
import css from "./Contact.module.css"

import Modal from "react-modal";



Modal.setAppElement("#root");



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
 
const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = () => {
   console.log();
   dispatch(deleteContact(id));
 };

    function openModal() {
    setIsOpen(true);
  }

  
  function closeModal() {
    setIsOpen(false);
  
  }
  const options = {
    title: 'Delete Contact',
    message: 'Are you sure you want to delete this contact?',
    buttons: [
      {
        label: 'Yes',
        onClick: handleClick
      },
      {
        label: 'No',
        
      }
    ],
  }
  
  
 
  return (
    <div className={css.contact}>
      <p>
        <FaUserAlt />: {name}{" "}
      </p>

      <p>
        <FaPhoneVolume size="24" />: {number}
      </p>

      <button
        type="button"
        onClick={() => {
          confirmAlert(options);
        }}
      >
       
        Delete
      </button>
      <button
        type="button"
        onClick={openModal}
      >
       
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <EditForm id={id} name={name} number={number} />
      </Modal>
    </div>
  );
}

export default Contact