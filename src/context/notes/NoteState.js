// LEARNING CONTEXT API 
// STATE FILE

import NoteContext from "./NoteContext"; // this is from our note context file
const NoteState = (props) => {
       
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;