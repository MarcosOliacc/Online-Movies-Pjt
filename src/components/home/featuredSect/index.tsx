import {options} from '@/settings/fetchopts'
import style from './styles.module.scss'
export async function FeaturedSect() {
      const i = Math.floor(Math.random()*(19-1))
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
        .then(response => response.json())
        .catch(err => console.error(err));
    const movie = await res.results[i]
    return<>
        <section style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '320px'
        }} className={style.conteiner}>
            <div className={style.content}>
                <div>
                    <h1 className={style.title}>Bem-Vindo(a).</h1>
                    <p className={style.subtitle}>Milhões de Filmes, Séries e Pessoas para Descobrir, Explore já.</p>
                </div>
                <div className={style.inputContent}>
                    <input type="text" 
                    placeholder='Buscar por um Filme, Série ou Pessoa...'
                    className={style.searchInput}/>
                    <button className={style.searchBtn}>Search</button>
                </div>
            </div>
            
        </section>
    </>
}