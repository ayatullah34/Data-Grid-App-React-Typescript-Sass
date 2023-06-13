import { SocialMediaData } from './ISocialMediaData';

export type RootState = {
    socialMedia: {
        dataSource: SocialMediaData[],
        filterItems:[]
    };
}