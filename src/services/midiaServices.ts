import { options } from '@/settings/fetchopts';
export const midiaServices =  {
    trendRequestToday: async ()=> {    
      const res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=pt-BR', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
        return res
    },
    trendRequestWeek: async ()=> {    
      const res = await fetch('https://api.themoviedb.org/3/trending/all/week?language=pt-BR', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
        return res
    }
    
}