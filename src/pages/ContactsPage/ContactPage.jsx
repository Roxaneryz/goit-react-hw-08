import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactPage.module.css"



const ContactPage = () => {
  return (
    <div className={css.contactPage}>
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
    </div>
  );
};

export default ContactPage;