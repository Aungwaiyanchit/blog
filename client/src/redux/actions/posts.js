import * as api  from '../../api/posts'

export const fetchPosts = ()  => async(dispatch) => {
   try {
        const posts = await api.fetchPosts();
        dispatch({ type: "FETCH_POSTS", payload: posts })
   } catch (error) {
       console.log(error.message);
   }
}