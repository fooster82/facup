import React, { useState, useEffect } from 'react';
import './style.css';

import UserService from "../../services/user.service";
import { Rules } from '../../components';

export function Home() {
    const [ content, setContent ] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            res => {
                setContent(res.data)
            },
            err => {
                const _content = 
                    (err.res && err.res.data) ||
                    err.message ||
                    err.toString();

                setContent(_content)
            }
        );
    }, []);

    return (
       <>
       <h3>{content}</h3>
        <Rules />
       </>
    )
}
