import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { CreatePost } from './CreatePost'

export const Nav = () => {
    const [ showlModel, setShowModel ] = useState(false)
    const handelshowModel = () => {
        setShowModel(true)
    }
    return (
       <>
        <div className="bg-blue-400 w-full h-20 flex items-center justify-around shadow-md">
            <h1 className="text-4xl text-white font-bold">Memories Blog</h1>
            {/* <span className="py-2 px-4 bg-green-300 rounded cursor-pointer text-gray-700">Login</span> */}
            <IoIosAdd className="text-3xl" onClick={handelshowModel}/>    
        </div>
        <CreatePost setShowModel={setShowModel} showModel={showlModel} />
       </>
    )
}
