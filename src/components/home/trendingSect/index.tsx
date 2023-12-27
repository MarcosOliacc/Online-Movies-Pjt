'use client'
import useSWR from 'swr'
import style from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { midiaServices } from '@/services/midiaServices'
export function TrendingSect() {
    const { data, error, isLoading } = useSWR(midiaServices.trendRequestToday())
    if(!data) return <><h1>loading...</h1></>
    if(error) return <><h1>erro!!!</h1></>
    if(data) return(
        <section className={style.conteiner}>
            <div className={style.titleContent}>
                <h2 className={style.title}>Tendências</h2>
                <div className={style.btnContent}>
                    <span className={style.trendBtn}>Hoje</span>
                    <span className={style.trendBtn}>Nesta Semana</span>
                </div>
            </div>
            <div>
                <Swiper>
                    
                </Swiper>
            </div>
        </section>
    )
}