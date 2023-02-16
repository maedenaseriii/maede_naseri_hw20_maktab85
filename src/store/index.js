import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  isTouched: false,
};
const validationSlice = createSlice({
  name: validationForm,
  initialState,
  reducers: {
    input(state, action) {
      state.value = action.value;
    },
    blur(state) {
      state.isTouched = true;
    },
    reset(state, action) {
      (state.isTouched = false), (state.value = "");
    },
  },
});

export const validateActions = validationSlice.actions;

const store = configureStore({ reducer: validationSlice.reducer });

export default store;


const valueChangeHandler = (event) => {
  dispatch(validateActions.input(event.target.value));
};

const inputBlurHandler = (event) => {
  dispatch(validateActions.blur());
};
const reset = () => {
  dispatch(validateActions.reset());
};
