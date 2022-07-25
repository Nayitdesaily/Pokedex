import { createSlice } from '@reduxjs/toolkit';

// Cambiamos userSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
        initialState: "",
        reducers: {
            getUserName: (state, action) => {
                return action.payload;
            }
    }
})

export const { getUserName } = userSlice.actions;

export default userSlice.reducer;