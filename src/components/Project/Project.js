import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAnimation from "../../hooks/useAnimation";
import "./Project.css";

import image1 from "../../assets/images/이로운농장.png";
import image2 from "../../assets/images/김치2.png";
import image3 from "../../assets/images/영어.png";
import image4 from "../../assets/images/포테이톡스2.png";
import image5 from "../../assets/images/개인프로젝트.png";

const cardData = [
    {
        title: "버섯농장 상태관리 시스템 (23. 5 ~ 23. 6)",
        description: `
        ο 그래프활용, 데이터를 시각화하여 버섯 재배를 용이

        #React.js, #Recoil, #Node.js, #MongoDB`,
        link: "",
        image: image1,
    },
    {
        title: "김치공장 통합 시스템 (22. 12 ~ 23. 4)",
        description: `
        ο 실시간 모니터링 및 분석으로 김치 생산량 증대 및 불량률 감소
        
        #Angaulr2, #Rxjs, #Node.js, #MongoDB`,
        link: "",
        image: image2,
    },
    {
        title: "교육용 영상 플랫폼 (22. 10 ~ 22. 12)",
        description: `
        ο 학원 운영 효율성과 학부모 만족도 향상
        
        #React.js, #Recoil, #Node.js, #MongoDB`,
        link: "",
        image: image3,
    },
    {
        title: "협업용 플랫폼 (21. 5 ~ 22. 9)",
        description: `
        ο 직원 관리에 따른 관리자 작업 효율성과 직원 업무 효율성 향상
        
        #Angaulr2, #Rxjs, #Node.js, #MongoDB`,
        link: "https://potatocs.com",
        image: image4,
    },
    {
        title: "개인 프로젝트 (23. 11 ~ 24. 2)",
        description: `
        ο 기술적인 역량 향상을 위한 개인프로젝트

        #Next.js, #Recoil, #Node.js, #MongoDB`,
        link: "https://www.kimsangmin.com",
        image: image5,
    },
];

function Project() {
    const headingRef = useAnimation();

    const handleCardClick = (link) => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

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
                    // slidesPerView={3} // 보여질 개수
                    // spaceBetween={600} // 아이템 사이 간격
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
                        420: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
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
                            <div
                                className={`card ${
                                    card.link ? "clickable" : ""
                                }`}
                                onClick={() => handleCardClick(card.link)}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="card_img"
                                />
                                <div className="card_title">{card.title}</div>
                                <div
                                    className="card_description"
                                    style={{
                                        whiteSpace: "pre-line",
                                        display: "flex",
                                        textAlign: "justify",
                                    }}
                                >
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
