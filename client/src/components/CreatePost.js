import React from 'react'
import { IoIosClose } from 'react-icons/io'

export const CreatePost = ({showModel, setShowModel}) => {
    const handecloseModel = ()  => {
        setShowModel(false)
    }
    return (
        <div>
            {showModel ? (
                <div className="justify-center  flex  fixed inset-0 bg-black bg-opacity-80 outline-none focus:outline-non  w-full h-full z-10">
                     <div className="relative m-28 bg-white shadow rounded w-96 h-xl">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h1 className="text-3xl font-bold">Create Post</h1>
                            <IoIosClose className="text-4xl font-bold items-center cursor-pointer" onClick={handecloseModel}/>
                        </div>
                     </div>
                </div>
            ): null}   
        </div>
    )
}
