import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAnimation from "../../hooks/useAnimation";
import "./Project.css";

const cardData = [
    {
        title: "Card 1",
        description: "This is the description for card 1.",
        image: "path/to/image1.jpg", // 이미지 경로를 수정하세요
    },
    {
        title: "Card 2",
        description: "This is the description for card 2.",
        image: "path/to/image2.jpg", // 이미지 경로를 수정하세요
    },
    {
        title: "Card 3",
        description: "This is the description for card 3.",
        image: "path/to/image3.jpg", // 이미지 경로를 수정하세요
    },
    {
        title: "Card 4",
        description: "This is the description for card 4.",
        image: "path/to/image4.jpg", // 이미지 경로를 수정하세요
    },
    {
        title: "Card 5",
        description: "This is the description for card 5.",
        image: "path/to/image5.jpg", // 이미지 경로를 수정하세요
    },
];

function Project() {
    const headingRef = useAnimation();

    return (
        <div className="projects_container">
            <div className="projects_title">
                <h1 className="heading" ref={headingRef}>
                    Projects
                    <span className="projects_highlight"></span>
                </h1>
            </div>
            <div className="projects_content">
                <Swiper
                    pagination={{
                        type: "progressbar",
                        className: "pagination",
                    }}
                    observer={true}
                    observeParents={true}
                    watchSlidesProgress={true}
                    slidesPerView={3} // 보여질 개수
                    spaceBetween={600} // 아이템 사이 간격
                    slidesPerGroup={1} // 한번에 슬라이딩될 개수
                    centeredSlides={true} // 센터모드
                    coverflowEffect={{
                        rotate: 10, // 회전각도
                        stretch: 0,
                        depth: 100, // 깊이감도
                        modifier: 2, //
                        slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
                    }}
                    // slidesOffsetBefore={150}
                    // slidesOffsetAfter={150}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[
                        Pagination,
                        Navigation,
                        EffectCoverflow,
                        Navigation,
                    ]}
                    className="mySwiper"
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <img src={card.image} alt={card.title} />
                                <div className="card_title">{card.title}</div>
                                <div className="card_description">
                                    {card.description}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Project;
