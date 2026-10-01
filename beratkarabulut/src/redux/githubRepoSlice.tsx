import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { GithubRepo, GithubRepoState } from "../types/Type";
import { projectMeta } from "../data/ProjectMeta";


const initialState: GithubRepoState = {
    projects: [],
    loading: false,
    error: null,
};

export const getGithubProjects = createAsyncThunk(
    "githubRepo/getGithubProjects",
    async () => {
        const response = await axios.get<GithubRepo[]>(
            "https://api.github.com/users/beratkrbltt/repos"
        );

        const projects = response.data
            .filter((repo) => repo.topics.includes("portfolio"))
            .sort(
                (a, b) =>
                    (projectMeta[a.name]?.order ?? 999) -
                    (projectMeta[b.name]?.order ?? 999)
            );
        return projects;
    }
);


export const githubRepoSlice = createSlice({
    name: "githubRepo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGithubProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getGithubProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(getGithubProjects.rejected, (state) => {
                state.loading = false;
                state.error = "Projeler alınırken bir hata oluştu.";
            });
    },
});


export const { } = githubRepoSlice.actions

export default githubRepoSlice.reducer;