import React from 'react'
import NoteCard from "./NoteCard.jsx";

const NoteList = () => {
    return (
        <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>

            </div>
        </div>

    )
}
export default NoteList
