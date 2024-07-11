import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactPage.module.css"
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Flex } from "antd";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch");
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex align="center" vertical gap="20px" className={css.contactPage}>
      <h1 className={css.header}>Contacts Page</h1>
      <div className={css.contactForm}>
        <ContactForm />
      </div>
      <div className={css.searchBox}>
        <SearchBox />
      </div>
      <div className={css.contactList}>
        <ContactList />
      </div>
    </Flex>
  );
};

export default ContactPage;