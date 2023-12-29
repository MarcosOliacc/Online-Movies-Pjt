
'use client'
import { SlideTrend } from './slide'
import style from './styles.module.scss'
import { useState } from 'react'
export function TrendingSect() {
    const [trendingDate, setTrendingDate] = useState(1)
    return(
        <section className={style.conteiner}>
            <div className={style.titleContent}>
                <h2 className={style.title}>Tendências</h2>
                <div className={style.btnContent}>
                    <span className={`${style.trendBtn} ${trendingDate==1? style.btnAct:null}`} onClick={(ev)=>setTrendingDate(1)}>Hoje</span>
                    <span className={`${style.trendBtn} ${trendingDate==2? style.btnAct:null}`} onClick={()=>setTrendingDate(2)}>Nesta Semana</span>
                    <button className={`${style.slideTrend} ${trendingDate==2? style.goRight:null}`}></button>
                </div>
            </div>
            {trendingDate==1?<SlideTrend trendingDate={trendingDate}/>:<></>}
            {trendingDate==2?<SlideTrend trendingDate={trendingDate}/>:<></>}
            
        </section>
    )
}