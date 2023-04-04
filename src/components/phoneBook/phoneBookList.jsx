
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredContacts } from "redux/selectors"
import { fetchContacts } from 'redux/operation';
import { ContactsItem } from 'components/phoneBookItem/phoneBookItem' 
export const ContactsList = () => {
    const dispatch = useDispatch();
    
     useEffect(() => {
         dispatch(fetchContacts());
     }, [dispatch]);
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
