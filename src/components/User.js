import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {
  state = {
    isVisible: false
  }
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
  }
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     isVisible: false
  //   }
  // }
  //constructor(props) {
  //  super(props)
  //  this.onClickEvent = this.onClickEvent.bind(this);
  //}
  //onClickEvent(e) {
    //Undefined
    //console.log(this);
  //  console.log(this);
  //}

  onClickEvent = (number,e) =>{
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    //Destructuring 
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
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
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
}

export default User;