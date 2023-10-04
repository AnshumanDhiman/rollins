import { FaAward, FaUsers, FaLightbulb } from "react-icons/fa";

const WhyRollin = () => {
  const cards = [
    {
      title: "Quality",
      description:
        "We deliver high-quality content with the objective of meeting the expectations of our clients",
      icon: <FaAward size={48} className="text-white" />,
      iconBackground: "#ffcc66",
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced and determined professionals is dedicated to providing exceptional and top notch services.",
      icon: <FaUsers size={48} className="text-white" />,
      iconBackground: "#66ccff",
    },
    {
      title: "Innovation",
      description:
        "We constantly strive for innovation and creation to dig out the ultimate best and achieve success and desired result.",
      icon: <FaLightbulb size={48} className="text-white" />,
      iconBackground: "#ff6699",
    },
  ];

  return (
    <div className=" pb-0 lg:pb-36">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-0 md:py-0 sm:px-6 lg:px-8 ">
        <h2
          style={{ fontFamily: "Bebas Neue", letterSpacing: "3px" }}
          className=" text-2xl lg:text-4xl font-semibold text-center bg-gradient-to-r text-theme_4"
        >
          <br />
          About Us
        </h2>
        <p className="text-center text-theme_4 mb-8 mt-4 text-md md:text-2xl lg:text-2xl font-light">
          At Rollin, we celebrate individuality while embracing a collective
          passion for storytelling and a shared vision to construct a powerful
          platform that fuels creativity and future innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-theme_2 rounded-lg p-4 lg:p-8 md:p-8 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: card.iconBackground }}
              >
                {card.icon}
              </div>
              <h3 className="text-xl text-theme_4 font-semibold text-center mb-4">
                {card.title}
              </h3>
              <p className="text-theme_4 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyRollin;
