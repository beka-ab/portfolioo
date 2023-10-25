import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/Education";
import skillsReducer from "../features/skills/Skillsslice";

export const store = configureStore({
  reducer: {
    educations: educationReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
