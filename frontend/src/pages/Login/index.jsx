import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import './style.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = value => {
    if (!value) {
        return (
            <div role="alert">
                This field is required!
            </div>
        );
    }
};

import { login } from "../../actions/auth";

export function Login(props) {
    const form = useRef();
    const checkBtn = useRef();

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username)
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = e => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    console.log("hello im supposed to be reloading")
                    props.history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/profile" />
    };

    return (        
        <Form onSubmit={handleLogin} ref={form}>
            <label htmlFor="username">
                Username:
                <Input 
                type="text"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
                />
            </label>

            <label htmlFor="password">
                Password:
                <Input
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                />
            </label>

            <button disabled={loading}>
                {loading && (
                    <span>*Loading spinner*</span>
                )}
                <span>Login</span>
            </button>

            {message && (
                <div>
                    {message}
                </div>
            )}

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>        
    )
}