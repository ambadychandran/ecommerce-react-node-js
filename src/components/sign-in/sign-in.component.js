import React from 'react';
import FormInput from '../form-inputs/form-inputs.components';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }


    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I alredy Have and account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        handleChange={this.handleChange}
                        value={email}
                        required
                        label="Email"
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={password}
                        required
                        label="Password"
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSiginIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;