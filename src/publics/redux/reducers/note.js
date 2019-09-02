const intialState = {
    noteList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}
const category = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_ALL_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_ALL_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_ALL_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                noteList: action.payload.data
            }
        case 'POST_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'POST_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_NOTES_FULFILLED':
            state.noteList.push(action.payload.data)
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            }
        case 'PATCH_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'PATCH_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'PATCH_NOTES_FULFILLED':
            let data = state.noteList.find((item)=>Number(item.idNote)===Number(action.payload.data.idNote))
            let index = state.noteList.indexOf(data)
            state.noteList[index] = action.payload.data
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            }
        default:
            return state
    }
}

export default category