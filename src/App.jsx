
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        // Outer container for centering and background
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">

            {/* Logo Container */}
            <div className="flex space-x-10 mb-8">
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    {/* Tailwind class for logo size and transition effect */}
                    <img
                        src={viteLogo}
                        className="h-24 w-24 p-4 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300"
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    {/* Tailwind class for logo size and transition effect */}
                    <img
                        src={reactLogo}
                        className="h-24 w-24 p-4 hover:drop-shadow-[0_0_2em_#61dafb] transition-all duration-300 animate-spin-slow"
                        alt="React logo"
                    />
                </a>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold mb-6 text-indigo-400">
                Vite + React + Tailwind
            </h1>

            {/* Card Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-sm w-full text-center space-y-4">

                {/* Button */}
                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 w-full"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </button>

                {/* Instructions Paragraph */}

            </div>

            {/* Footer Text */}
            <p className="mt-8 text-sm text-gray-500">
                Click on the logos to learn more
            </p>
        </div>
    )
}

export default App