import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import moment from 'moment'

export const Post = ({post}) => {
    console.log(post);
    return (
        <>
            <div className="w-72 h-64 shadow-lg m-10 rounded relative">
                <img src={post.imageUrl} className="w-full h-40 rounded" alt=""/>
                <div>
                    <h1 className="text-xl font-bold mt-3 ml-3">{post.title}</h1>
                </div>
                <div className="mt-3 ml-3">
                    <p className="text-xs">{post.message}</p>
                </div>
                    <div className="absolute top-0 left-2 flex flex-col">
                        <span className=" text-white">{post.creator}</span>
                        <span className="text-xs text-white">{moment(post.timestamp).fromNow()}</span>
                    </div>
                    <IoIosMenu className="text-2xl text-white absolute top-0 right-1 cursor-pointer" />
            </div>
        </>
    )
}
