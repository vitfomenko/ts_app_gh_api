import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';

const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware),
});

export default store;
