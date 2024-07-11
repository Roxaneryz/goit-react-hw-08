
import { FaPhoneVolume } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import EditForm from "../EditForm/EditForm"
import css from "./Contact.module.css"
import { Card, Flex, Typography } from "antd";
import Modal from "react-modal";




Modal.setAppElement("#root");

const { Title } = Typography;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fdfdfd",
    maxWidth:"300px",
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
    <Card
      className={css.contact}
      title={name}
      bordered={true}
      style={{
        width: 300,
      }}
    >
      {/* <p>
        <FaUserAlt />: {name}{" "}
      </p> */}

      <p>
        <FaPhoneVolume size="24" />: {number}
      </p>
      <Flex gap="20px">
        <button
          type="button"
          onClick={() => {
            confirmAlert(options);
          }}
        >
          Delete
        </button>
        <button type="button" onClick={openModal}>
          Edit
        </button>
      </Flex>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > <Flex vertical><Title className={css.edit} level={4} >Edit Contact</Title>
        <EditForm id={id} name={name} number={number} /> </Flex>
      </Modal>
    </Card>
  );
}

export default Contact