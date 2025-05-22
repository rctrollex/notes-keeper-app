import React, {useState} from 'react'
import Header from "./components/Header.jsx";
import NoteForm from "./components/NoteForm.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteCard from "./components/NoteCard.jsx";

const App = () => {
    const [refetchTrigger, setRefetchTrigger] = useState(false);
    const [editNote, setEditNote]=useState(null);
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen p-3 sm:p-6 md:p-6 font-sans">
            <div className="container mx-auto max-w-4xl">
                <Header />
                <NoteForm
                    refetchTrigger={refetchTrigger}
                    onAddNote={()=> {
                        setRefetchTrigger(prev => !prev);}}
                    editNote={editNote}
                    setEditNote={setEditNote}
                />
                <NoteList
                    refetchTrigger={refetchTrigger}
                    onAddNote={()=> {
                        setRefetchTrigger(prev => !prev);}}
                    setEditNote={setEditNote}
                />
            </div>

        </div>
    )
}
export default App
