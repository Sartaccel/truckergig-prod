import React, { useState, useEffect } from "react";
import { HomeCards } from "./../../components/cards/HomeCards";
import Slider from "react-slick";
import styles from '../NewArrivals/NewArrivals.module.scss';
import { Next, Previous } from '../../components/cards/SlickCustomArrows';
import axios from "axios";
import urls from "../../utilities/AppSettings";

const RecentlyViewed: React.FC = (props) => {
    const initialState = {
        service: "",
    };

    const [state, setstate] = useState(initialState)

    const [cards, setcards] = useState([])
    const [fast, setfast] = useState([])
    const [slider, setslider] = useState(false)
    const [slidesToShow, setslidesToShow] = useState(4)


    useEffect(() => {

        const params = { "serviceName": "", "serviceCategoryId": 0, "serviceFilterId": 1 };

        axios.post(`${urls.baseUrl}services`, params)

            .then(function (response) {
                const datas = response.data.data;
                if (response.status === 200 && Array.isArray(datas) && datas.length) {

                    setcards(datas)
                    setfast(datas[0])
                    setslider( datas.length > 3 ? true : false)
                    if (datas.length < 3) {
                        setslidesToShow(3)

                    } else if (datas.length >= 3) {
                        setslidesToShow(datas.length >= 3 ? 3 : datas.length)
                    }
                }
            })
    }, [])


    const settings = {
        dots: false,
        infinite: slider,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Next />,
        prevArrow: <Previous />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="col-sm-12">
                <h3 className={`${styles["home-heading"]}`}>Recently Viewed</h3>
            </div>
            <Slider {...settings}>
                {cards.map((y, j) => {
                    return <HomeCards
                        key={j}
                        items={y}
                        setfast={setfast}
                    />
                })}
            </Slider>

        </div>
    );
}
export default RecentlyViewed;
