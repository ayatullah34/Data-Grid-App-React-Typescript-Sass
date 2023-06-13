import { configureStore } from '@reduxjs/toolkit'
import socialMedia from './socialMediaSlice'

export const store = configureStore({
    reducer: { socialMedia },
})