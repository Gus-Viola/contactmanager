import React, { Component/*, PropTypes*/ } from 'react';

/**
 * ComponentName
 */
class AddContact extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    name: '',
    email: '',
    phone: ''
  }
  render() {
    const {name, email, phone} = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                value={name}
                />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
                />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-ligh btn-block"/>
          </form>
        </div>
      </div>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default AddContact;
