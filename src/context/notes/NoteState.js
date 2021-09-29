// LEARNING CONTEXT API 
// STATE FILE

import NoteContext from "./NoteContext"; // this is from our note context file
import { useState } from "react";
import { Children } from "react";
const NoteState = (props) => {
    const s1 = {
        "name": "veer",
        "websiteDevloped": 0
    }
    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "websiteDevloped": 4
            })

        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;