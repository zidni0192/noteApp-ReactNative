import axios from 'axios'
import host from '../host'
export const getAllNotes = () => {
    return {
        type: 'GET_ALL_NOTES',
        payload: axios.get(`${host}/note`)
    }
}
export const postNote = (data) => {
    return {
        type: 'POST_NOTES',
        payload: axios.post(`${host}/note`,data)
    }
}
export const patchNote = (data,idNote) => {
    return {
        type: 'PATCH_NOTES',
        payload: axios.patch(`${host}/note/${idNote}`,data)
    }
}
