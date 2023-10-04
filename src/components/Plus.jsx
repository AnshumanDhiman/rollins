/* eslint-disable react/no-unescaped-entities */

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import pimg from "../assets/images/22.jpg";

export default function Plus() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section className="text-center lg:text-left lg:pt-20 ">
        <div className=" lg:text-center text-justify xl:px-32 ">
          <div className="grid items-center lg:grid-cols-2 ">
            <div className="lg:mb-12">
              <div className="relative z-[1] block lg:rounded-lg bg-[hsla(0,0%,100%,0.55)] px-4 pb-4 pt-8 lg:px-6 lg:py-12 dark:bg-theme_2 dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px] shadow-lg">
                <h2 className="mb-6 text-4xl text-theme_4 font-bold">
                  What do we Do ?
                </h2>
                <p className="mb-12 text-neutral-500 dark:text-theme_4">
                  We are a production powerhouse, armed with over 8 years of
                  industry expertise. With experiences that includes engaging in
                  creating content for various OTT projects across different
                  platforms and working with India's biggest YouTube content
                  creators, we certainly aim to deliver top-tier quality content
                  across all formats. And with specialization in advertisements,
                  fictional content and music videos, we are up and rollin to
                  deliver full contentment to you.
                </p>

                <div className="grid gap-x-6 md:grid-cols-3 text-center">
                  <div className="mb-12 md:mb-0">
                    <div
                      ref={ref1}
                      className="text-theme_4 mb-4 text-3xl font-bold"
                    >
                      {inView1 && <CountUp end={500} duration={2} />}+
                    </div>
                    <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                      Happy Clients
                    </h5>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div
                      ref={ref2}
                      className="text-theme_4 mb-4 text-3xl font-bold"
                    >
                      {inView2 && <CountUp end={200} duration={2} />}+
                    </div>
                    <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                      Achievements
                    </h5>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div
                      ref={ref3}
                      className="text-theme_4 mb-4 text-3xl font-bold"
                    >
                      {inView3 && <CountUp end={1000} duration={2} />}
                      MN+
                    </div>
                    <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                      Views
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={pimg}
                className="hidden lg:block w-[30rem] shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
