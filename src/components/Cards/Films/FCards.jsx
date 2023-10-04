import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel";
  
  /* Install pure-react-carousel using -> npm i pure-react-carousel */
  
  import fi1 from "../../../assets/thumbnails/film/12.jpg";
  import fi2 from "../../../assets/thumbnails/film/1.jpg";
  import fi3 from "../../../assets/thumbnails/film/16.jpg";
  import fi4 from "../../../assets/thumbnails/film/13.jpg";
  import fi5 from "../../../assets/thumbnails/film/5.jpg";
  import fi6 from "../../../assets/thumbnails/film/6.jpg";
  import fi7 from "../../../assets/thumbnails/film/7.jpg";
  import fi8 from "../../../assets/thumbnails/film/8.jpg";
  import fi9 from "../../../assets/thumbnails/film/9.jpg";
  import fi10 from "../../../assets/thumbnails/film/10.jpg";
  import fi11 from "../../../assets/thumbnails/film/11.jpg";
  import fi12 from "../../../assets/thumbnails/film/2.jpg";
  import fi13 from "../../../assets/thumbnails/film/4.jpg";
  import fi14 from "../../../assets/thumbnails/film/14.jpg";
  import fi15 from "../../../assets/thumbnails/film/15.jpg";
  import fi16 from "../../../assets/thumbnails/film/3.jpg";
  import fi17 from "../../../assets/thumbnails/film/17.jpg";
  import fi18 from "../../../assets/thumbnails/film/18.jpg";
  import fi20 from "../../../assets/thumbnails/film/21.jpg";
  import fi21 from "../../../assets/thumbnails/film/20.jpg";

  export default function Index() {
    return (
      <div className="mx-auto">
        <div className="flex lg:items-center justify-center w-full h-full py-8 px-8 lg:py-8 lg:px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={20}
            visibleSlides={4}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                  <Slide index={0}>
                      <a
                        href="https://www.hotstar.com/in/clip/the-last-night/1260079622/watch?filters=content_type%3Dclip"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi20}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/NlwVW-_LPBs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi1}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={2}>
                    <a
                        href="https://youtu.be/YTRC7Ym7z1w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi17}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>


                    </Slide>
                    <Slide index={3}>
                    <a
                        href="https://youtu.be/1-SGJrjqP4s"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi4}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                     
                    </Slide>
                    <Slide index={4}>
                    <a
                        href="https://youtu.be/ZO4NckgDoBM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi18}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                   
                    </Slide>
                    <Slide index={5}>
                    <a
                        href="https://youtu.be/a-3vS7oZ-lI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi13}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    
                    </Slide>
                    <Slide index={6}>
                      <a
                        href="https://youtu.be/goKa95b5ufo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi6}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={7}>
                      <a
                        href="https://youtu.be/Gu-O6Tjdjbs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi7}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={8}>
                      <a
                        href="https://youtu.be/jAXijgNm0vs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi8}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={9}>
                      <a
                        href="https://youtu.be/kcKnSdHGC2w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi9}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={10}>
                      <a
                        href="https://youtu.be/MKtx2P0T6XQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi10}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={11}>
                      <a
                        href="https://youtu.be/mp83Hr6KaOA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi11}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={12}>
                      <a
                        href="https://youtu.be/9NUKYXsAXEo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi12}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={13}>
                    <a
                        href="https://youtu.be/Ey-BeuV4Xk8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi5}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={14}>
                      <a
                        href="https://youtu.be/Tg54DU7IIek"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi14}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={15}>
                      <a
                        href="https://youtu.be/YFhp587hcI0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi15}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={16}>
                      <a
                        href="https://youtu.be/57hs2JiAtis"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi16}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={17}>
                    <a
                        href="https://youtu.be/2rRdl3vMqPI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi2}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg"
                          />
                        </div>
                      </a>
                      
                    </Slide>
                    <Slide index={18}>
                    <a
                        href="https://youtu.be/yOR45vNyQB8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi3}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={19}>
                    <a
                        href="https://www.youtube.com/watch?v=_km09CetQoQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={fi21}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={20}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                  <Slide index={0}>
                      <a
                        href="https://www.hotstar.com/in/clip/the-last-night/1260079622/watch?filters=content_type%3Dclip"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi20}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/NlwVW-_LPBs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi1}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={2}>
                    <a
                        href="https://youtu.be/YTRC7Ym7z1w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi17}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                      
                    </Slide>
                    <Slide index={3}>
                    <a
                        href="https://youtu.be/1-SGJrjqP4s"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi4}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={4}>
                    <a
                        href="https://youtu.be/ZO4NckgDoBM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi18}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    
                    </Slide>
                    <Slide index={5}>
                    <a
                        href="https://youtu.be/a-3vS7oZ-lI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi13}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={6}>
                      <a
                        href="https://youtu.be/goKa95b5ufo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi6}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={7}>
                      <a
                        href="https://youtu.be/Gu-O6Tjdjbs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi7}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={8}>
                      <a
                        href="https://youtu.be/jAXijgNm0vs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi8}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={9}>
                      <a
                        href="https://youtu.be/kcKnSdHGC2w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi9}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={10}>
                      <a
                        href="https://youtu.be/MKtx2P0T6XQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi10}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={11}>
                      <a
                        href="https://youtu.be/mp83Hr6KaOA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi11}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={12}>
                      <a
                        href="https://youtu.be/9NUKYXsAXEo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi12}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={13}>
                    <a
                        href="https://youtu.be/Ey-BeuV4Xk8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi5}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    
                    </Slide>
                    <Slide index={14}>
                      <a
                        href="https://youtu.be/Tg54DU7IIek"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi14}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={15}>
                      <a
                        href="https://youtu.be/YFhp587hcI0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi15}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={16}>
                      <a
                        href="https://youtu.be/57hs2JiAtis"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi16}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={17}>
                    <a
                        href="https://youtu.be/2rRdl3vMqPI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi2}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={18}>
                    <a
                        href="https://youtu.be/yOR45vNyQB8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi3}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                     
                    </Slide>
                    <Slide index={19}>
                    <a
                        href="https://www.youtube.com/watch?v=_km09CetQoQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi21}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                     
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
  
          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={20}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                  >
                 <Slide index={0}>
                      <a
                        href="https://www.hotstar.com/in/clip/the-last-night/1260079622/watch?filters=content_type%3Dclip"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi20}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/NlwVW-_LPBs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi1}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={2}>
                    <a
                        href="https://youtu.be/YTRC7Ym7z1w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi17}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    
                    </Slide>
                    <Slide index={3}>
                    <a
                        href="https://youtu.be/1-SGJrjqP4s"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi4}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={4}>
                    <a
                        href="https://youtu.be/ZO4NckgDoBM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi18}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                   
                     
                    </Slide>
                    <Slide index={5}>
                    <a
                        href="https://youtu.be/a-3vS7oZ-lI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi13}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={6}>
                      <a
                        href="https://youtu.be/goKa95b5ufo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi6}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={7}>
                      <a
                        href="https://youtu.be/Gu-O6Tjdjbs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi7}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={8}>
                      <a
                        href="https://youtu.be/jAXijgNm0vs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi8}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={9}>
                      <a
                        href="https://youtu.be/kcKnSdHGC2w"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi9}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={10}>
                      <a
                        href="https://youtu.be/MKtx2P0T6XQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi10}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={11}>
                      <a
                        href="https://youtu.be/mp83Hr6KaOA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi11}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={12}>
                      <a
                        href="https://youtu.be/9NUKYXsAXEo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi12}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={13}>
                    <a
                        href="https://youtu.be/Ey-BeuV4Xk8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi5}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    
                    </Slide>
                    <Slide index={14}>
                      <a
                        href="https://youtu.be/YFhp587hcI0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi14}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={15}>
                      <a
                        href="https://youtu.be/YFhp587hcI0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi15}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={16}>
                      <a
                        href="https://youtu.be/57hs2JiAtis"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi16}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={17}>
                    <a
                        href="https://youtu.be/2rRdl3vMqPI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi2}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>


                    </Slide>
                    <Slide index={18}>
                    <a
                        href="https://youtu.be/yOR45vNyQB8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi3}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                    <Slide index={19}>
                    <a
                        href="https://www.youtube.com/watch?v=_km09CetQoQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={fi21}
                            alt="sitting area"
                            className="object-cover object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    );
  }
  