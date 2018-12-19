import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';

/**
 * Contacts
 */
export class Contacts extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                   />
              ) )}
            </React.Fragment>
          )
        }}
      </Consumer>
    )

  }
}

// Contacts.propTypes = {
//   prop: PropTypes.array .isRequired
// }

export default Contacts;
