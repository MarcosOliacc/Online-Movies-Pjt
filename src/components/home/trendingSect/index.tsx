import style from './styles.module.scss'

export async function TrendingSect() {
    
    return(
        <section className={style.conteiner}>
            <div className={style.titleContent}>
                <h2 className={style.title}>Tendências</h2>
                <div className={style.btnContent}>
                    <span className={style.trendBtn}>Hoje</span>
                    <span className={style.trendBtn}>Nesta Semana</span>
                </div>
            </div>
        </section>
    )
}