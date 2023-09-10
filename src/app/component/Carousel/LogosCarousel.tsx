import Styles from './styles.module.scss';
import Image from 'next/image';
import Ticker from "framer-motion-ticker";

import lacaseraLogo from '../../../assets/imgs/lacasera.png';
import shiipLogo from '../../../assets/imgs/shiip.png';
import cardifyLogo from '../../../assets/imgs/cardify.png';
import altschoolLogo from '../../../assets/imgs/altschool.png';
import heyfoodLogo from '../../../assets/imgs/heyfood.png';

const LogosCarousel = () => {
    return (
        <>
            <div className={Styles["devfest__carousel__wrapper"]}>
                <div className={Styles["devfest__carousel"]}>
                    <Ticker duration={30}>
                        <div className={Styles["logo__carousel"]}>
                            <Image src={lacaseraLogo} alt='Lacasera logo' />
                        </div>
                        <div className={Styles["logo__carousel"]}>
                            <Image src={shiipLogo} alt='Shiip logo' />
                        </div>
                        <div className={Styles["logo__carousel"]}>
                            <Image src={cardifyLogo} alt='cardify logo' />
                        </div>
                        <div className={Styles["logo__carousel"]}>
                            <Image src={altschoolLogo} alt='AltSchool logo' />
                        </div>
                        <div className={Styles["logo__carousel"]}>
                            <Image src={heyfoodLogo} alt='Heyfood logo' />
                        </div>
                    </Ticker>
                </div>
            </div>
        </>
    )
}

export default LogosCarousel;