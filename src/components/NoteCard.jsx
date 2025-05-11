import React from 'react'

const NoteCard = ({title, content, category, timestamp, onEdit, onDelete}) => {
    const categoryColors = {
        work: {border: 'border-blue-400', bg: 'bg-blue-100', text: 'text-blue-400'},
        personal:{border: 'border-green-400', bg: 'bg-green-100', text: 'text-green-600'},
        ideas: {border: 'border-purple-400', bg: 'bg-purple-100', text: 'text-purple-600'},
        others: {border: 'border-gray-400', bg: 'bg-gray-100', text: 'text-gray-600'},
    }

    const colors = categoryColors[category.toLowerCase()] || categoryColors.others;

    return (
        <div className={`bg-white dark:bg-gray-700 rounded-lg border border-l-4 ${colors.border} p-4 shadow-md`}>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{content}</p>
            <div className="mt-2 mb-2">
                <span className={`${colors.bg} ${colors.text} rounded-lg text-sm px-2 py-1 capitalize`}>
                    {category}
                </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                Last Updated: {new Date(timestamp).toLocaleDateString()}
            </p>

            <div className="flex justify-start space-x-3 mt-2">
                <button onClick={onEdit} className={"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"}>
                    Edit
                </button>
                <button onClick={onDelete} className={"text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 cursor-pointer"}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default NoteCard
