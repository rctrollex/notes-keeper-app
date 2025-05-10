import React from 'react'

const NoteForm = () => {
    return (
        <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                <form>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Note Title"
                            id="noteTitle"
                            className="text-gray-900 dark:text-white w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            typeof="text"
                            placeholder="Note Content"
                            id="noteContent"
                            className="text-gray-900 dark:text-white w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-trasparent"
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <select
                            id="noteCategory"
                            className="text-gray-900 dark:text-white w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus-blue-300 focus:border-transparent">

                            <option value=""className="bg-gray-500 text-white">Select Category</option>
                            <option value="work" className="bg-gray-500 text-white">Work</option>
                            <option value="personal" className="bg-gray-500 text-white">Personal</option>
                            <option value="ideas" className="bg-gray-500 text-white">Ideas</option>
                            <option value="others" className="bg-gray-500 text-white">Others</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <button
                            className="w-full bg-blue-300 p-3 rounded-lg text-gray-800 cursor hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:bg-blue-400"
                            type="submit"
                            id="addNote"
                        >
                            Add Note
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default NoteForm
