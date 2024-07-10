import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

// const contacts = useSelector((state) => state.contacts.items);
  // const filteredContacts = contacts.filter((contact) => {
  //  return contact.name.toLowerCase().includes(filter.toLowerCase())
  // });

  const handleDelContact = (id) => {
    dispatch(deleteContact(id));
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactLiItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={()=>handleDelContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
