import React from 'react'
import NoteCard from "./NoteCard.jsx";


    //Temporary sample data until Appwrite is integrated
const NoteList = () =>{
    const sampleNotes=[
        {
            id: 1,
            title: 'Project Meeting',
            content: 'Discuss project milestones and deadlines with the team',
            category: 'Work',
            timestamp: new Date().toISOString(),
        },
        // Add more sample notes for testing
        {
            id: 2,
            title: 'Project Meeting',
            content: 'Discuss project milestones and deadlines with the team',
            category: 'Personal',
            timestamp: new Date().toISOString(),
        },
        {
            id: 3,
            title: 'Project Meeting',
            content: 'Discuss project milestones and deadlines with the team',
            category: 'ideas',
            timestamp: new Date().toISOString(),
        },
        // Add more sample notes for testing
        {
            id: 4,
            title: 'Project Meeting',
            content: 'Discuss project milestones and deadlines with the team',
            category: 'others',
            timestamp: new Date().toISOString(),
        },
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
