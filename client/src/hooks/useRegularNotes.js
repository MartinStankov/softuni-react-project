import { useEffect } from "react";
import regularNotesApi from "../api/regular-notes-api";
import { useState } from "react";

// export function useCreateRegularNote() {
//     const createHandler = (noteId, subject, content) => regularNotesApi.createRegularNote(noteId, subject, content);

//     return createHandler;
// }

export function useCreateRegularNote() {
    const regularNoteCreateHandler = (noteData) => regularNotesApi.createRegularNote(noteData);
    
    return regularNoteCreateHandler;
}

// export function useGetAllRegularNotes(gameId) {
//     const [notes, setNotes] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const result = await regularNotesApi.getAllRegularNotes(gameId);
//             setNotes(result);
//         })()
//     }, [gameId]);

//     return [notes, setNotes];
// }

export function useGetOneRegularNote(noteId){
    const [note, setNote] = useState({});

    useEffect(() => {
        (async () => {
            try{
                const result = await regularNotesApi.getOneRegularNote(noteId);
                setNote(result);
            }catch(err){
                console.log(err.message);
            }
        })()
    }, [noteId]);

    return [note, setNote];
}

export function useGetAllRegularNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const result = await regularNotesApi.getAllRegularNotes();
                setNotes(result);
            }catch(err){
                console.log(err.message);
                
            }
        })()
    }, []);

    return [notes, setNotes];
}