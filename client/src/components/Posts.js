import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress  from '@mui/material/CircularProgress'
import { Post } from './Post'




export const Posts = () => {
    const posts = useSelector(state => state.postReducer)

    return (
        <>
            {
                !posts.length ? (<CircularProgress/>) : 
                (
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:place-items-center">
                          {posts.map(post => (
                               <div key={post._id}>
                                    <Post post={post} />
                              </div>
                          ))}
                        </div>
                    )
                
            }
        </>
    )
}
