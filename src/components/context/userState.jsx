import React, { useState } from "react";
import userContext from "./userContext";

export default function UserState(props) {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
    });

    return (
        <userContext.Provider value={{ user, setUser }}>
            {props.children}
        </userContext.Provider>
    )
}