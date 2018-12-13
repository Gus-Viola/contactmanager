import React, { Component, PropTypes } from 'react';
import Contact from './Contact';

/**
 * Contacts
 */
export class Contacts extends Component { // eslint-disable-line react/prefer-stateless-function

state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-5555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "karen@gmail.com",
          phone: "555-6666"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "555-7777"
        }
      ]
    };//state


  render() {
    const {contacts} = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
             />
        ) )}
      </React.Fragment>
    );
  }
}

// Contacts.propTypes = {
//   prop: PropTypes.array .isRequired
// }

export default Contacts;
