import React, { Component } from 'react';
import Input from '../../images/input.svg';
import email from '../../images/@.svg';
import eye from '../../images/eye.svg';
import { withRouter } from 'react-router-dom';

export class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }

      handleChangeEvent = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      handleSubmit = event => {
        event.preventDefault()
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        if(data !== "") {
            this.props.history.push('/home')
        }
      }
      

      
    render() {
        return (
            <div className="signup">
               <div className='signup__first'>
                   <div className='signup__hassles'>No hassles</div>
                   <div className='signup__hassle3'>Lorem ipsum dolor sit</div>
               </div>
               <div className="signup__second">
                   <div className="signup__free">Create your free account</div>
                   <div className="signup__register">
                       <span className="signup__registered">Already Registered? </span>
                       <span className='signup__signin'>Sign in</span>
                   </div>
                   <form className="signup__form" onSubmit={this.handleSubmit}>
                   <div className="signup__flex">
                       <div className="signup__box">
                            <label className="signup__label">First Name</label>
                            <input type='text' name="firstName" onChange={this.handleChangeEvent} placeholder='Joshua' className='signup__input' />
                            <img src={Input} alt="Input" className="signup__icon" />
                       </div>
                       <div className="signup__box">
                            <label className="signup__label">Last Name</label>
                            <input type='text' name="lastName" onChange={this.handleChangeEvent}  placeholder='Bakare' className='signup__input'/>
                            <img src={Input} alt="Input" className="signup__icon" />
                        </div>
                   </div>
                   <div className="signup__box">
                       <label className="signup__label">Email</label>
                       <input type="email" name="email" onChange={this.handleChangeEvent} className='signup__input' id="signup__input" />
                       <img src={email} alt="Input" className="signup__icon" />
                   </div>
                   <div className="signup__box">
                       <label className="signup__label">Password</label>
                       <input type="password" name="password" onChange={this.handleChangeEvent} className='signup__input' id="signup__input" />
                       <img src={eye} alt="Input" className="signup__icon" />
                   </div>
                   <div className="signup__button">
                       <button className="signup__btn">Continue</button>
                   </div>
               </form>
               </div>
              
            </div>
        )
    }
}

export default Signup
