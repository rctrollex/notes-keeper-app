import React from 'react'

const NoteCard = () => {
    return (
        <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg border-l-4 border-blue-400 p-4 shadow-md">
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg">Project Meeting</h3>
                    <p className="text-gray-400 dark:text-gray-300 font-light  text-sm mt-1">Discuss project milestones and deadlines with the team.</p>
                    <div className="mt-2 mb-2">
                        <span className="text-blue-600 button bg-blue-300 rounded-lg text-sm px-2 py-1">Work</span>
                    </div>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-xs mt-1">Last updated: May 10, 2025</p>
                    <div className="flex justify-start space-x-3">
                        <button className="text-blue-400 cursor-pointer hover:text-blue-500">Edit</button>
                        <button className="text-red-300 cursor-pointer hover:text-red-500">Delete</button>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default NoteCard
