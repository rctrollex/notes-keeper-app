import React, {useState} from 'react'
import {databaseId} from "../services/appwrite.js";
import {collectionId} from "../services/appwrite.js";
import {databases} from "../services/appwrite.js";

const NoteForm = ({onAddNote}) => {
    const [title, setTitle]=useState('');
    const [content, setContent]=useState('');
    const [category, setCategory]=useState('');
    const [errorMessage, setErrorMessage]=useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!title || !category || !content){
            setErrorMessage("Please insert values");
            return;
        }
        setErrorMessage('')

        try{
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
            setTitle('');
            setContent('')
            onAddNote();
        }catch (e) {
            console.log('Error: ',e)
            setErrorMessage("Failed to add notes.")
        }
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
                        className="w-full bg-blue-300 p-3 rounded-lg text-gray-800 cursor hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:bg-blue-400 cursor-pointer"
                        type="submit"
                        id="addNote"
                    >
                        Add Note
                    </button>
                </div>
                {errorMessage && <p className="text-red-500 text-xs sm:text-sm mb-2">{errorMessage}</p>}
            </form>
        </div>
    )
}
export default NoteForm
