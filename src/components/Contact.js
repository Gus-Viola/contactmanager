import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName
 */
class Contact extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo})
  }//onShowClick. I kept this function, unlike Mr. Traversy.

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down">
          </i>
      </h4>
        {showContactInfo ? (        <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null }
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
