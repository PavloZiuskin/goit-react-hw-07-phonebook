
import { useSelector } from 'react-redux';
import { getFilteredContacts} from "redux/selectors"
import { ContactsItem } from 'components/phoneBookItem/phoneBookItem' 
export const ContactsList = () => {
    const contacts = useSelector(getFilteredContacts);
    return (
        <section>
             <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                    <ContactsItem
                        item={contact}
                    /></li>))}
            </ul>
            
        </section>
    )
}
