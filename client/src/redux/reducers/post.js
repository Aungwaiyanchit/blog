export default function postReducer(posts = [], action){
    switch(action.type){
        case "FETCH_POSTS":
            return action.payload.data
        default:
            return posts;
    }
}