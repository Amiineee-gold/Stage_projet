import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, nom: "abd illah", niveau: "2BAC", matiere: "math physique", email: "abdo@example.com", phone: "0606060606", address: "marrakech", datePayement: "2025-03-10" },
  { id: 2, nom: "abd rahman", niveau: "1BAC", matiere: "Physique", email: "brka@example.com", phone: "0707070707", address: "rabat", datePayement: "2025-04-15" },
  { id: 3, nom: "amin", niveau: "1AC", matiere: "svt", email: "amin@example.com", phone: "0607607005", address: "casa", datePayement: "2025-05-20" },
  { id: 4, nom: "adam", niveau: "1AC", matiere: "Fr Eng", email: "adam@example.com", phone: "0707607005", address: "agadir", datePayement: "2025-06-22" },
];

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    updateStudent: (state, action) => {
      const index = state.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;