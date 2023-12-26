import Link from 'next/link'
import style from './styles.module.scss'
import Image from 'next/image'
export function Header() {
    return<>
        <div className={style.conteiner}>
            <div className={style.content}>
                <nav className={style.navigation}>
                    <Image className={style.img}
                        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
                        alt='logo themoviedb'
                        width={80}
                        height={40}
                    />
                    <Link className={style.link} href='/'>Início</Link>
                    <Link className={style.link} href='/movies'>Filmes</Link>
                    <Link className={style.link} href='/series'>Séries</Link>
                    <Link className={style.link} href='/popular'>Populares</Link>
                </nav>
                <div className={style.userHacks}>
                    <Image className={style.img} 
                        src='/profile-icon.png'
                        alt='user profile icon'
                        width={40}
                        height={40}
                    />
                    <Image className={style.img} 
                        src='/iconSearch.svg'
                        alt='user profile icon'
                        width={30}
                        height={30}
                    />
                    <Link className={style.link} href='/help'>Suporte</Link>

                </div>
            </div>
            
        </div>
    </>
}