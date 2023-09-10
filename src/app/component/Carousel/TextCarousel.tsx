import Styles from './styles.module.scss';
import Ticker from "framer-motion-ticker";

const TextCarousel = () => {
    return (
        <>
            <div className={Styles["devfest__carousel__wrapper"]}>
                <div className={Styles["devfest__carousel"]}>
                    <Ticker duration={60}>
                        <div className={Styles["text__carousel"]}>
                            <p>Devfest Ibadan 2023// Dec Sat 2nd</p>
                            <span className="__icon">
                                <i className="diagonal__arrow"></i>
                            </span>
                        </div>
                        <div className={Styles["text__carousel"]}>
                            <p>Devfest Ibadan 2023// Dec Sat 2nd</p>
                            <span className="__icon">
                                <i className="diagonal__arrow"></i>
                            </span>
                        </div>
                        <div className={Styles["text__carousel"]}>
                            <p>Devfest Ibadan 2023// Dec Sat 2nd</p>
                            <span className="__icon">
                                <i className="diagonal__arrow"></i>
                            </span>
                        </div>
                        <div className={Styles["text__carousel"]}>
                            <p>Devfest Ibadan 2023// Dec Sat 2nd</p>
                            <span className="__icon">
                                <i className="diagonal__arrow"></i>
                            </span>
                        </div>
                    </Ticker>
                </div>
            </div>
        </>
    )
}

export default TextCarousel;