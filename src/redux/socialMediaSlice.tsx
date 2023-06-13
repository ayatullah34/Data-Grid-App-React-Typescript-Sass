import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocialMediaData } from "../interfaces/ISocialMediaData";
import { dataSource } from "../constant/dataSource";

interface SocialMediaState {
    dataSource: SocialMediaData[];
    filterItems: string[];
}

const initialState: SocialMediaState = {
    dataSource: dataSource as SocialMediaData[],
    filterItems: [] as string[]
};

const socialMediaSlice = createSlice({
    name: "socialMedia",
    initialState,
    reducers: {
        setDataSource: (state, action: PayloadAction<SocialMediaData[]>) => {
            state.dataSource = action.payload;
            // UPDATE LOCAL STORAGE
            localStorage.setItem("dataSource", JSON.stringify(action.payload));
        },
        setFilterItems: (state, action: PayloadAction<string[]>) => {
            state.filterItems = action.payload;
        },
    },
});

export const { setDataSource, setFilterItems } = socialMediaSlice.actions;
export default socialMediaSlice.reducer;
