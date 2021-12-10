import React, { useEffect } from 'react'
import { Posts } from './components/Posts'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './redux/actions/posts'
import { Nav } from './components/Nav'


export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])
    return (
        <>
          <Nav />
          <Posts />
        </>
    )
}
