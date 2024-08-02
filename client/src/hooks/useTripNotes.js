import { useEffect } from "react";
import tripNotesApi from "../api/trip-notes-api";
import { useState } from "react";

export function useGetAllTripNotes(){
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const result = await tripNotesApi.getAllTripNotes();
                setNotes(result);
            } catch(err){
                console.log(err.message);
            }
        })()
    }, []);

    return [notes, setNotes];
}

export function useGetOneTripNote(noteId){
    const [note, setNote] = useState({});

    useEffect(() => {
        (async () => {
            const result = await tripNotesApi.getOneTripNote(noteId);
            setNote(result);
        })()
    }, [noteId]);

    return [note, setNote];
}

export function useCreateTripNote(){
    const tripNoteCreateHandler = (noteData) => tripNotesApi.createTripNote(noteData);

    return tripNoteCreateHandler;
}