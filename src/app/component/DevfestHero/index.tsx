import './style.scss';

import Image from 'next/image';
import bottomLeftPicture from '../../../assets/imgs/bottom-left.png';
import topCenterPicture from '../../../assets/imgs/top-center.png';
import bottomRightPicture from '../../../assets/imgs/bottom-right.png';
import topRightPicture from '../../../assets/imgs/top-right.png';
import gdgIbadanLogo from '../../../assets/svgs/gdg-ibadan-logo.svg';

const DevfestHero = ({devfestHeroEnter, devfestHeroLeave}: {devfestHeroEnter: any, devfestHeroLeave: any}) => {
    
    return (
        <>
            <div className="devfesthero__wrapper" onMouseEnter={devfestHeroEnter} onMouseLeave={devfestHeroLeave}>
                <div className="nigeria-map"></div>
                <div className="bubble-picture-frame bottom-left">
                    <Image src={bottomLeftPicture} alt="devfest Ibadan past event" />
                </div>
                <div className="bubble-picture-frame top-center">
                    <Image src={topCenterPicture} alt="devfest Ibadan past event" />
                </div>
                <div className="bubble-picture-frame bottom-right">
                    <Image src={bottomRightPicture} alt="devfest Ibadan past event" />
                </div>
                <div className="bubble-picture-frame top-right">
                    <Image src={topRightPicture} alt="devfest Ibadan past event" />
                </div>
                <div className="devfesthero__container">
                    <div className="devfesthero">
                        <div className="logo-container">
                            <Image src={gdgIbadanLogo} alt="GDG Ibadan Logo" />
                        </div>
                        <div className="content">
                            <h1 className='heading'>The BiggestTech</h1>
                            <h1 className='heading'>Event is here again</h1>
                            <div className="colored-texts-container">
                                <h1 className='colored'>
                                    <span className='primary'>D</span>
                                    <span className="danger">E</span>
                                    <span className="warning">V</span>
                                    <span className="success">F</span>
                                    <span className="primary">E</span>
                                    <span className="warning">S</span>
                                    <span className="success">T</span>
                                    <span className='primary'>2</span>
                                    <span className='danger'>0</span>
                                    <span className='warning'>2</span>
                                    <span className='success'>3</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devfest-ctas__wrapper">
                <div className="devfest-ctas">
                    <a className="devfest-cta bas-warning">
                        <h3>become a speaker</h3>
                    </a>
                    <a className="devfest-cta gt-primary">
                        <h3>get ticket</h3>
                    </a>
                    <a className="devfest-cta bav-success">
                        <h3>become a volunteer</h3>
                    </a>
                </div>
            </div>
        </>
    )
}

export default DevfestHero;