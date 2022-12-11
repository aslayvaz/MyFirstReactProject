import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
  }
  constructor(props){
    super(props);
    this.state ={
      isVisible: false
    }
  }

  render() {
    //Destructuring 
    const {name, department, salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline'>{name}</h4>
            <i className="fa-regular fa-trash-can"></i>
          </div>
          {
            isVisible ? 
            <div className="card-body">
              <p className="card-text">Maaş: {salary}</p>
              <p className="card-text">Departman: {department}</p>
            </div>
            : null
          }
          
        </div>        
      </div>
    )
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;