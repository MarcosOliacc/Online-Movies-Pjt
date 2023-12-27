import { options } from '@/settings/fetchopts';
export const midiaServices =  {
    trendRequestToday: async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => err.response );
        return data
    }
    
}