import './style.scss';
import Image from 'next/image';

import lacaseraLogo from '../../../assets/imgs/lacasera.png';
import shiipLogo from '../../../assets/imgs/shiip.png';
import cardifyLogo from '../../../assets/imgs/cardify.png';
import altschoolLogo from '../../../assets/imgs/altschool.png';
import heyfoodLogo from '../../../assets/imgs/heyfood.png';

const LogosCarousel = () => {
    return (
        <>
            <div className="devfest-carousel__wrapper">
                <div className="devfest-carousel logos">
                    <div className="logo-carousel">
                        <Image src={lacaseraLogo} alt='Lacasera logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={shiipLogo} alt='Shiip logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={cardifyLogo} alt='cardify logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={altschoolLogo} alt='AltSchool logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={heyfoodLogo} alt='Heyfood logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={lacaseraLogo} alt='Lacasera logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={shiipLogo} alt='Shiip logo' />
                    </div>
                    <div className="logo-carousel">
                        <Image src={cardifyLogo} alt='cardify logo' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogosCarousel;