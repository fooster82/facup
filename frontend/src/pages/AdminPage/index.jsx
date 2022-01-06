import React, { useEffect, useState } from 'react';
import './style.css';

import UserService from "../../services/user.service";
import { AddTeam } from '../../components';

export function AdminPage() {
    const [ content, setContent ] = useState("");

    useEffect(() => {
        UserService.getAdminContent().then(
            res => {
                setContent(res.data);
            },
            err => {
                const _content =
                    (err.res && err.res.data && err.res.data.message) ||
                    err.message ||
                    err.toString();

                setContent(_content)
            }
        );
    }, []);

    return (
        <div>
            <h3>{content}</h3>
            <AddTeam />
        </div>
    )
}
