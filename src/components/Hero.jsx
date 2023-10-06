import vid from "../assets/video/video1.mp4";
const HeroSection = () => {
  return (
    <>
      <div className="relative ">
        <div className="relative lg:h-[30rem] md:h-[25rem] sm:h-[10rem] ">
          <video
            className="lg:w-full md:w-full sm:w-1/2 lg:h-full md:h-full sm:h-1/2 object-cover"
            src={vid}
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl text-center">
              {/* <h1 style={{fontFamily:'Bebas Neue',letterSpacing:'3px'}} className="text-white lg:text-4xl sm:text-xl font-semibold lg:mt-[25rem] sm:mt-[0rem]  opacity-50">
          Delivering Dreams on Screen
          </h1> */}
              {/* <p className="text-white text-xl mb-12">
            Watch your favorite movies and TV shows anytime, anywhere.</p>
           <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
            Explore
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
