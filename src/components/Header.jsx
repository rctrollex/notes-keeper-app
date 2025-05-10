import React from 'react'

const Header = () => {
    return (
        <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
            <header className="mb-6">
                <h1 className="text-3xl text-bold text-gray-900 dark:text-white">Note Keeper</h1>
                <p className="italic text-gray-400 dark:text-gray-400">Organize your thoughts with ease</p>
            </header>
        </div>
    )
}
export default Header
