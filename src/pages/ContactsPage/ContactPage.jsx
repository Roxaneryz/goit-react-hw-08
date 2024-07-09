import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";




const ContactPage = () => {
  return (
      <div><hi>Contatcs Page</hi>
          <ContactForm />
          <SearchBox />
          <ContactList/>
      </div>
  )
}

export default ContactPage