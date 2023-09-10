import Styles from './styles.module.scss';

import Image from 'next/image';
import bottomLeftPicture from '../../../assets/imgs/bottom-left.png';
import topCenterPicture from '../../../assets/imgs/top-center.png';
import bottomRightPicture from '../../../assets/imgs/bottom-right.png';
import topRightPicture from '../../../assets/imgs/top-right.png';
import gdgIbadanLogo from '../../../assets/svgs/gdg-ibadan-logo.svg';

const DevfestHero = ({ devfestHeroEnter, devfestLeave, volunteer, ticket, speaker }: { devfestHeroEnter: any, devfestLeave: any, volunteer: any, ticket: any, speaker: any }) => {

    return (
        <>
            <div className={Styles["devfesthero__wrapper"]}>
                <div className={Styles["nigeria__map"]}></div>
                <div className={`${Styles.bubble__picture__frame} ${Styles.bottom__left}`}>
                    <Image src={bottomLeftPicture} alt="devfest Ibadan past event" />
                </div>
                <div className={`${Styles.bubble__picture__frame} ${Styles.top__center}`}>
                    <Image src={topCenterPicture} alt="devfest Ibadan past event" />
                </div>
                <div className={`${Styles.bubble__picture__frame} ${Styles.bottom__right}`}>
                    <Image src={bottomRightPicture} alt="devfest Ibadan past event" />
                </div>
                <div className={`${Styles.bubble__picture__frame} ${Styles.top__right}`}>
                    <Image src={topRightPicture} alt="devfest Ibadan past event" />
                </div>
                <div className={Styles["devfesthero__container"]}>
                    <div className={Styles["devfesthero"]}>
                        <div className={Styles["logo__container"]} onMouseEnter={devfestHeroEnter} onMouseLeave={devfestLeave}>
                            <Image src={gdgIbadanLogo} alt="GDG Ibadan Logo" />
                        </div>
                        <div className={Styles["content"]} >
                            <h1 className={Styles["heading"]} onMouseEnter={devfestHeroEnter} onMouseLeave={devfestLeave}>The Biggest Tech</h1>
                            <h1 className={Styles["heading"]} onMouseEnter={devfestHeroEnter} onMouseLeave={devfestLeave}>Event is here again</h1>
                            <div className={Styles["colored-texts-container"]}>
                                <h1 className={Styles['colored']} onMouseEnter={devfestHeroEnter} onMouseLeave={devfestLeave}>
                                    <span className={Styles["primary"]}>D</span>
                                    <span className={Styles["danger"]}>E</span>
                                    <span className={Styles["warning"]}>V</span>
                                    <span className={Styles["success"]}>F</span>
                                    <span className={Styles["primary"]}>E</span>
                                    <span className={Styles["warning"]}>S</span>
                                    <span className={Styles["success"]}>T</span>
                                    <span className={Styles["primary"]}>2</span>
                                    <span className={Styles["danger"]}>0</span>
                                    <span className={Styles["warning"]}>2</span>
                                    <span className={Styles["success"]}>3</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles["devfest__ctas__wrapper"]}>
                <div className={Styles["devfest__ctas"]}>
                    <a className={`${Styles.devfest__cta} ${Styles.bas__warning}`} onMouseEnter={speaker} onMouseLeave={devfestLeave}>
                        <h3>become a speaker</h3>
                    </a>
                    <a className={`${Styles.devfest__cta} ${Styles.gt__primary}`} onMouseEnter={ticket} onMouseLeave={devfestLeave}>
                        <h3>get ticket</h3>
                    </a>
                    <a className={`${Styles.devfest__cta} ${Styles.bav__success}`} onMouseEnter={volunteer} onMouseLeave={devfestLeave}>
                        <h3>become a volunteer</h3>
                    </a>
                </div>
            </div>
        </>
    )
}

export default DevfestHero;