import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/tripnotes'

// export const getAllTripNotes = async () => {
//     const result = await request.get(BASE_URL)

//     const regularNotes = Object.values(result)
//     return regularNotes
// }

// export const getAllTripNotes = async () => {
//     const params = new URLSearchParams({ 
//         where: `noteId="${noteId}"`,
//         load: 'author=_ownerId:users'
//     });

//     return request.get(`${BASE_URL}?${params.toString()}`);
// }

const getAllTripNotes = async () => {
    const result = await request.get(BASE_URL);

    const regularNotes = Object.values(result)
    // console.log(regularNotes);
    
    return regularNotes
}

export const getOneTripNote = async (noteId) => request.get(`${BASE_URL}/${noteId}`)

export const createTripNote = async (noteData) => request.post(`${BASE_URL}`, noteData)

const updateTripNote = (noteId, noteData) => request.put(`${BASE_URL}/${noteId}`, noteData);

const removeTripNote = (noteId) => request.del(`${BASE_URL}/${noteId}`);

const tripNotesApi = {
    getAllTripNotes,
    getOneTripNote,
    createTripNote,
    updateTripNote,
    removeTripNote,
}

export default tripNotesApi