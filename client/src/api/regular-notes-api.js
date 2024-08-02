import { useContext } from "react";
import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/regularnotes';

// const createRegularNote = async (noteId, subject, content) => {
//     return requester.post(`${BASE_URL}/create`, { noteId, subject, content });
// }


const createRegularNote = (noteData) => request.post(`${BASE_URL}`, noteData);

// const getAllRegularNotes = (noteId) => {
//     const params = new URLSearchParams({ 
//         where: `noteId="${noteId}"`,
//         load: 'regularnotes=_ownerId:users'
//     });

//     return requester.get(`${BASE_URL}?${params.toString()}`);
// }

const getAllRegularNotes = async () => {
    const result = await request.get(BASE_URL);

    const regularNotes = Object.values(result)
    // console.log(regularNotes);
    
    return regularNotes
}

const regularNotesApi = {
    createRegularNote,
    getAllRegularNotes
};

export default regularNotesApi;