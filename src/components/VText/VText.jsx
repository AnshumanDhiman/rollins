import "./VText.css";

const GridComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-16 pb-64">
        <div className="col-span-1 md:col-span-1 py-8 md:py-28 px-8 md:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold  ml-[12px] text-transparent bg-clip-text bg-gradient-to-r from-theme_1  to-theme_2">
            LIGHTS, CAMERA
          </h1>
          <div className="video-section">
            <video
              src="../../public/assets/video/video.mp4"
              loop
              autoPlay
              muted
            />
            <div className="video-copy">
              <h1 className="font-this text-[120px] md:text-[200px] sm:text-[100px] font-bold">
                ROLLIN
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 py-8"></div>
      </div>
    </>
  );
};

export default GridComponent;
