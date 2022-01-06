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
                This is not a valid email.
            </div>
        );
    }
};

const validUsername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    } 
};

const validPassword = value => {
    if(value.length < 6 || value.length > 40) {
        return (
            <div role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export function Register() {
    const form = useRef();
    const checkBtn = useRef();

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ successful, setSuccessful ] = useState(false);
  
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
                            type="text"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                        />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <Input 
                            type="text"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required, validPassword]}
                        />
                    </label>
                    
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
