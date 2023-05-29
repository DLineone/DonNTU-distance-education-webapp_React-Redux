import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
    name: 'groups', 
    initialState: { 
        groupsList: []
    },
    reducers: {
        
    }
});

export const groupsActions = groupsSlice.actions;

export default groupsSlice;