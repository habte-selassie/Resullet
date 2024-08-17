import {createSlice} from "@reduxjs/toolkit";

const initialState = { 
  loginInfo: {
    full_name: '',
    job_title: '',
    description: '',
    phone: '',
    address: '',
    region: '',
    github: '',
    linkedin: '',
    telegram: '',
    twitter: ''
  },
  educations: [],
  careers: [],
  awards: []
};

export const ResumeReducer = createSlice({
  name: "resumeReducer",
  initialState,
  reducers: {
    /**
     * Update a specific field in loginInfo
     * @param { initialState } state 
     * @param { Object } action - { name: param_name, value: param_new_value }
     */
    changeLoginInfo: (state, action) => {
      state.loginInfo = {
        ...state.loginInfo,
        [action.payload.name]: action.payload.value
      };
    },

    /**
     * Set the entire loginInfo object
     * @param { initialState } state 
     * @param { Object } action - new loginInfo object
     */
    setLoginInfo: (state, action) => {
      state.loginInfo = action.payload;
    },

    /**
     * Add new education entry
     * @param { initialState } state 
     * @param { Object } action - new education object
     */
    addEducation: (state, action) => {
      state.educations.push(action.payload);
    },

    /**
     * Add new career entry
     * @param { initialState } state 
     * @param { Object } action - new career object
     */
    addCareer: (state, action) => {
      state.careers.push(action.payload);
    },

    /**
     * Add new award entry
     * @param { initialState } state 
     * @param { Object } action - new award object
     */
    addAward: (state, action) => {
      state.awards.push(action.payload);
    },

    /**
     * Delete an education entry by index
     * @param { initialState } state 
     * @param { number } action - index of education entry to remove
     */
    deleteEducation: (state, action) => {
      state.educations.splice(action.payload, 1);
    },

    /**
     * Delete a career entry by index
     * @param { initialState } state 
     * @param { number } action - index of career entry to remove
     */
    deleteCareer: (state, action) => {
      state.careers.splice(action.payload, 1);
    },

    /**
     * Delete an award entry by index
     * @param { initialState } state 
     * @param { number } action - index of award entry to remove
     */
    deleteAward: (state, action) => {
      state.awards.splice(action.payload, 1);
    },
    /**
     * Update an education entry by index
     * @param { initialState } state 
     * @param { Object } action - { index, updatedEducation }
     */
    updateEducation: (state, action) => {
      state.educations[action.payload.index] = action.payload.updatedEducation;
    },

    /**
     * Update a career entry by index
     * @param { initialState } state 
     * @param { Object } action - { index, updatedCareer }
     */
    updateCareer: (state, action) => {
      state.careers[action.payload.index] = action.payload.updatedCareer;
    },

    /**
     * Update an award entry by index
     * @param { initialState } state 
     * @param { Object } action - { index, updatedAward }
     */
    updateAward: (state, action) => {
      state.awards[action.payload.index] = action.payload.updatedAward;
    },

    /**
     * Reset the educations, careers, or awards list
     * @param { initialState } state 
     * @param { string } action - list name (educations, careers, awards)
     */
    resetList: (state, action) => {
      state[action.payload] = [];
    },
  },
});

// Export all actions including setLoginInfo
export const {
  changeLoginInfo,
  setLoginInfo,
  addEducation,
  updateEducation,
  deleteEducation,
  addCareer,
  updateCareer,
  deleteCareer,
  addAward,
  updateAward,
  deleteAward,
  resetList,
} = ResumeReducer.actions;

export default ResumeReducer.reducer;
