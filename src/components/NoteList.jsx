import React from 'react'
import NoteCard from "./NoteCard.jsx";


    //Temporary sample data until Appwrite is integrated
const NoteList = () =>{
    const sampleNotes=[
        {
            "id": 1,
            "title": "Stand-up Meeting Notes",
            "content": "Discussed progress on current tasks and any roadblocks encountered during the daily stand-up.",
            "category": "Work",
            "timestamp": new Date().toISOString()
        },
        {
            "id": 2,
            "title": "Book Appointment with Dentist",
            "content": "Need to call the dentist's office to schedule a routine check-up.",
            "category": "Personal",
            "timestamp": new Date().toISOString()
        },
        {
            "id": 3,
            "title": "Ideas for Portfolio Project",
            "content": "Brainstorming potential features for the personal portfolio website.",
            "category": "ideas",
            "timestamp": new Date().toISOString()
        },
        {
            "id": 4,
            "title": "Follow Tech Newsletters",
            "content": "Consider subscribing to a few popular tech newsletters to stay updated.",
            "category": "others",
            "timestamp": new Date().toISOString()
        }
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleNotes.map((note)=>(
                <NoteCard
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    timestamp={note.timestamp}
                    onEdit={()=> console.log(`Edit note ${note.id}`)}
                    onDelete={()=>console.log(`Delete note ${note.id}`)}
                />
            ))}
        </div>
    )
}
export default NoteList
