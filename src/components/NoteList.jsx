import React, {useEffect, useState} from 'react'
import NoteCard from "./NoteCard.jsx";
import Loader from "./Loader.jsx";
import {databases} from "../services/appwrite.js";
import {collectionId} from "../services/appwrite.js";
import {databaseId} from "../services/appwrite.js";


    //Temporary sample data until Appwrite is integrated
const NoteList = () =>{
    const [error ,setError]= useState(null);
    const [notes, setNotes]= useState([])
    const [isLoading, setIsLoading] = useState(false);
    const fetchNotes = async () =>{
        setIsLoading(true);
        try{
            const response = await databases.listDocuments(databaseId, collectionId);
            setNotes(response.documents);
            console.log(response);
        }catch (e) {
            setError("Error to fetch notes: ")
            console.log("Error to fetch notes",e);
        }finally {
            setIsLoading(false);
        }
        setError(null);


    }

    useEffect(()=>{
        fetchNotes()
    },[])

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
                    onDelete={()=>console.log(`Delete note ${note.id}`)}
                />
            ))}
        </div>
    )
}
export default NoteList
