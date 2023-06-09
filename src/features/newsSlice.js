import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "initial",
    news: [],
    country: null,
    totalResults: null,
    view: true,
    modal: false,
    newsModal: false,
    language: false,
  },
  reducers: {
    statusLoading: (state) => {
      state.news = null;
      state.status = "loading";
      state.view = true;
    },
    statusSuccess: (state, { payload: news }) => {
      state.news = news;
      state.status = "success";
    },
    statusError: () => ({ news: null, status: "error" }),

    countryChange: (state, { payload: country }) => {
      state.country = country;
    },
    totalResults: (state, { payload: totalResults }) => {
      state.totalResults = totalResults;
    },
    changeView: (state) => {
      state.view = !state.view;
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    toggleNewsModal: (state) => {
      state.newsModal = !state.newsModal;
    },
    toggleLanguage: (state) => {
      state.language = !state.language;
    },
    fetchNews: () => {},
  },
});

export const {
  statusError,
  statusLoading,
  statusSuccess,
  fetchNews,
  totalResults,
  countryChange,
  changeView,
  toggleModal,
  toggleNewsModal,
  toggleLanguage,
} = newsSlice.actions;

export const selectNews = (state) => state.news;

export const selectNewsStatus = (state) => selectNews(state).status;

export const selectNewsData = (state) => selectNews(state).news;

export const selectCountry = (state) => selectNews(state).country;

export const selectTotalResults = (state) => selectNews(state).totalResults;

export const selectView = (state) => selectNews(state).view;

export const selectModal = (state) => selectNews(state).modal;

export const selectNewsModal = (state) => selectNews(state).newsModal;

export const selectLanguage = (state) => selectNews(state).language;

export default newsSlice.reducer;
