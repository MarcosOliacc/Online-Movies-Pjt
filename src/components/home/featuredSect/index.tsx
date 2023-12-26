import {options} from '@/settings/fetchopts'
import style from './styles.module.scss'
export async function FeaturedSect() {
      const i = Math.floor(Math.random()*(19-1))
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(response => response.json())
        .catch(err => console.error(err));
    const movie = await res.results[i]
    return<>
        <section style={{
            backgroundImage:`linear-gradient(#001, #00000013, #000), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '480px'
        }} className={style.conteiner}>
            <div className={style.infosContent}>
                <h2 className={style.info}>Destaque da vez:</h2>
                <h1 className={style.title}>{movie.title}</h1>
                <p className={style.synopsis}>{movie.overview}</p>
                <button className={style.infoBtn}>Saber Mais</button>
            </div>
            

        </section>
        
    </>
}