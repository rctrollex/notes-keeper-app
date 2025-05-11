import React from 'react'
import Header from "./components/Header.jsx";
import NoteForm from "./components/NoteForm.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteCard from "./components/NoteCard.jsx";

const App = () => {
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen p-3 sm:p-6 md:p-6 font-sans">
            <div className="container mx-auto max-w-4xl">
                <Header />
                <NoteForm />
                <NoteList />
            </div>

        </div>
    )
}
export default App
