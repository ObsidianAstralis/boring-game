import React from 'react'

type SquareProps = {
  value: string | null
  onClick: () => void
  highlight: boolean
}

const Tile: React.FC<SquareProps> = ({value, onClick, highlight}) => {
  return (
    <button 
      title='tile' 
      type="button" 
      className={`size-24 border-4 border-gray-400 text-4xl font-bold bg-transparent shadow-md shadow-cyan-500 rounded-2xl
        hover:border-4 hover:border-indigo-600 hover:bg-gray-200 hover:text-black ${highlight ? "text-red-500 hover:text-red-500" : "text-white"}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Tile