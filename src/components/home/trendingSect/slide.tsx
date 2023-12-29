/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './styles.module.scss'
import { midiaServices } from '@/services/midiaServices'
import useSWR from 'swr'
interface props{
    trendingDate: number
}
export function SlideTrend({trendingDate}:props) {

    const { data, error, isLoading } = useSWR('/trending/all/day',()=>trendingDate == 1 ?midiaServices.trendRequestToday():midiaServices.trendRequestWeek())
    if(isLoading) return <><h1>loading...</h1></>
    if(error) return <><h1>erro!!!</h1></>
    if(data) return<>
        <Swiper
            slidesPerView={7.3}
            pagination={{clickable: true}}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'disabled_swiper_button'
                }}
                className={style.swiperConteiner}
        >
            {data.results.map((res:any)=> {
                return(
                <SwiperSlide
                    key={res.id}>
                    <div>
                        <img
                        src={`https://image.tmdb.org/t/p/original/${res.poster_path}`}
                        alt='poster img'
                        width={140}
                        height={220}
                        className={style.posterImg}
                        />
                        <p className={style.posterTitle}>{res.original_name?res.original_name:res.original_title}</p>
                        <p className={style.posterDate}>{res.release_date?res.release_date:res.first_air_date}</p>
                    </div>
                </SwiperSlide>)
            })}
        </Swiper>
    </>
}