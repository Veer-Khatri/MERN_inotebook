import React, { useContext ,useEffect } from 'react' // here we imported useContext to use the context api  
import noteContext from '../context/notes/NoteContext' // here noteContext file is imported because 
function About() {
    const a = useContext(noteContext) // here we used the context
    useEffect(() => {
        a.update()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            this is about {a.state.name} and website made by him is {a.state.websiteDevloped}
        </div>
    )
}

export default About
