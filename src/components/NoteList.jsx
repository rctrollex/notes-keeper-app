import React, {useEffect, useState} from 'react'
import NoteCard from "./NoteCard.jsx";
import Loader from "./Loader.jsx";
import {databases} from "../services/appwrite.js";
import {collectionId} from "../services/appwrite.js";
import {databaseId} from "../services/appwrite.js";


    //Temporary sample data until Appwrite is integrated
const NoteList = ({refetchTrigger}) =>{
    const [error ,setError]= useState(null);
    const [notes, setNotes]= useState([])
    const [isLoading, setIsLoading] = useState(false);

    const fetchNotes = async () =>{
        setIsLoading(true);
        try{
            const response = await databases.listDocuments(databaseId, collectionId);
            setNotes(response.documents);
            console.log(response);
            setError(null);
        }catch (e) {
            setError("Error to fetch notes: ")
            console.log("Error to fetch notes",e);
        }finally {
            setIsLoading(false);
        }


    }

    useEffect(()=>{
        fetchNotes()
    },[refetchTrigger])



    if(error){
        return(
            <p className="text-red-500 text-base">{error}</p>
        )
    }

    if(isLoading){
        return(
            <Loader/>
        )
    }

    if (notes.length === 0){
        return(
            <p className="text-gray-500 text-base text-center">No notes yet.</p>
        )
    }

    const handleDelete = async (noteID)=>{
        try{
            await databases.deleteDocument(databaseId, collectionId, noteID)
            setNotes(prevNotes=> prevNotes.filter(note=> note.$id !== noteID));
        }catch (e) {
            console.log("Error deleting",e)
        }
    }



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note)=>(
                <NoteCard
                    key={note.$id}
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    timestamp={note.$createdAt}
                    onEdit={()=> console.log(`Edit note ${note.id}`)}
                    onDelete={()=>handleDelete(note.$id)}
                />
            ))}
            {error && <p className="text-red-500 text-xs sm:text-sm mb-2">{error}</p>}
        </div>
    )
}
export default NoteList
