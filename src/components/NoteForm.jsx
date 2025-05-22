import React, {useEffect, useState} from 'react'
import {databaseId} from "../services/appwrite.js";
import {collectionId} from "../services/appwrite.js";
import {databases} from "../services/appwrite.js";

const NoteForm = ({onAddNote,editNote, setEditNote}) => {
    const [title, setTitle]=useState('');
    const [content, setContent]=useState('');
    const [category, setCategory]=useState('');
    const [errorMessage, setErrorMessage]=useState(null)

    useEffect(() => {
        if(editNote){
            setTitle(editNote.title);
            setContent(editNote.content);
            setCategory(editNote.category);
        }else{
            setTitle('');
            setContent('');
            setCategory('');
        }
    }, [editNote]);


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!title || !category || !content){
            setErrorMessage("Please insert values");
            return;
        }
        setErrorMessage('')

        try{
            if(editNote){
                // update old one
                await databases.updateDocument(databaseId, collectionId, editNote.$id, {
                    title,
                    content,
                    category
                });
                setEditNote(null);
            }else{
                //create new one
                const newNote= await databases.createDocument(
                    databaseId,
                    collectionId,
                    'unique()',
                    {
                        title,
                        content,
                        category
                    }
                );
                console.log('Created New Note ', newNote);
            }
            setTitle('');
            setContent('')
            setCategory('');
            setEditNote(null);
            onAddNote();
        }catch (e) {
            console.log('Error: ',e)
            setErrorMessage("Failed to add notes.")
        }
    }

    const handleCancel = () =>{
        setTitle('');
        setContent('');
        setCategory('');
        setEditNote(null); // Exit edit mode
        setErrorMessage(null);
    }
    return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Note Title"
                        id="noteTitle"
                        className="text-gray-900 dark:text-white w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        placeholder="Note Content"
                        id="noteContent"
                        className="text-gray-900 h-32 dark:text-white w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-trasparent"
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-6">
                    <select
                        id="noteCategory"
                        className="text-gray-900 dark:text-white w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus-blue-300 focus:border-transparent"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                    >
                            <option value="" className="bg-gray-500 text-white">Select Category</option>
                            <option value="work" className="bg-gray-500 text-white">Work</option>
                            <option value="personal" className="bg-gray-500 text-white">Personal</option>
                            <option value="ideas" className="bg-gray-500 text-white">Ideas</option>
                            <option value="others" className="bg-gray-500 text-white">Others</option>
                    </select>
                </div>
                <div className="mb-6">
                    <button
                        type="submit"
                        disabled={!title || !content || !category}
                        className={`w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2
                        ${editNote ? 'bg-green-400 hover:bg-green-500' : 'bg-blue-300 hover:bg-blue-400'}
                        ${(!title || !content || !category) && 'opacity-50 cursor-not-allowed'}
  `}
                    >
                        {editNote ? 'Update Note' : 'Add Note'}
                    </button>
                    {editNote && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="w-full mt-3 bg-red-400 p-3 rounded-lg text-white hover:bg-red-400"
                        >
                            Cancel
                        </button>
                    )}

                </div>
                {errorMessage && <p className="text-red-500 text-xs sm:text-sm mb-2">{errorMessage}</p>}
            </form>
        </div>
    )
}
export default NoteForm
