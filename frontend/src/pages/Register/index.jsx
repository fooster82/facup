import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = value => {
    if (!isEmail(value)) {
        return (
            <div role="alert">
                Please enter a valid email address.
            </div>
        );
    }
};

const validUsername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div role="alert">
                Your username must be between 3 and 20 characters.
            </div>
        );
    } 
};

const validPassword = value => {
    if(value.length < 6) {
        return (
            <div role="alert">
                Your password must be more than 6 characters long.
            </div>
        );
    }
};

export function Register() {
    const form = useRef();
    const checkBtn = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const [ confirmEmail, setConfirmEmail ] = useState("");
    const [ successful, setSuccessful ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
  
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeConfirmPassword = e => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword);
    }

    const onChangeConfirmEmail = e => {
        const confirmEmail = e.target.value;
        setConfirmEmail(confirmEmail);
    }

    const handleRegister = e => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };
        
    const samePassword = value => {
        const password = passwordRef.current.props.value;
        if (value != password) {        
            return (
                <div role="alert">
                    Your passwords must match.
                </div>
            );
        }
    }

    const sameEmail = value => {
        const email = emailRef.current.props.value;
        if (value != email) {        
            return (
                <div role="alert">
                    Your emails must match.
                </div>
            );
        }
    }

    const handleButtonDown = () => setShowPassword(prevShowPassword => !prevShowPassword)

    return (
        <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
                <div>
                    <label htmlFor="username">
                        Username:
                        <Input 
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required, validUsername]}
                        />
                    </label>

                    <label htmlFor="email">
                        Email:
                        <Input 
                            ref={emailRef}
                            type="text"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                        />
                    </label>

                    <label htmlFor="confirmEmail">
                        Confirm Email:
                        <Input
                            name="confirmEmail"
                            value={confirmEmail}
                            onChange={onChangeConfirmEmail}
                            validations={[required, sameEmail]}
                        />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <Input 
                            ref={passwordRef}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required, validPassword]}
                        />
                    </label>

                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                            validations={[required, samePassword]}
                        />
                    </label>

                    <button onMouseDown={handleButtonDown}>Show password</button>
                    
                    <button>Sign Up</button>
                </div>
            )}
            
            {message && (
                <div className ={ successful ? "success" : "danger" } role="alert">
                    {message}
                </div>
            )}

            <CheckButton style= {{ display: "none" }} ref={checkBtn} />
        </Form>
    )
}
