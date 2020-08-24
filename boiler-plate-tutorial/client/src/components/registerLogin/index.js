import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

class RegisterLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            error: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = event => {
        event.preventDefault(); // 이벤트가 한번만 실행되게끔 하게 하는 (refresh를 막는 용도)
        let dataToSubmit = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(dataToSubmit);
        if(this.isFormValid(this.state)){
            this.setState({ errors: [] });
            this.props.dispatch(loginUser(dataToSubmit))
            .then(response => {
                if(response.payload.loginSuccess){
                    this.props.history.push('/');
                }else {
                    this.setState({
                        errors: this.state.errors.concat(
                            "Failed to log in, please check your Email and Password"
                        )
                    })
                }
            } )
        }
    }

    isFormValid = ( { email, password }) => email && password;



    render() {
        return (
            <div>
                <div>
                    <input name="email" value={this.state.email} onChange={ e => this.handleChange(e)} id="email" type="email" className="validate/"/> 
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="Type a right type of email" data-success="right"/>
                </div>
                <div>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} id="password" type="password" className="validate"/>
                    <label htmlFor="email">password</label>
                    <span className="helper-text" data-error="wrong password" data-success="right password" />
                </div>

                <div>
                    <button type="submit" name="action" onClick={this.submitForm}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(RegisterLogin);
