import Heading from "@components/Heading/Heading";
import React from "react";
// import logo from ".@/publi";
import { Preahvihear } from "next/font/google";

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
});

function Schedule() {
  return (
    <>
      <section id="schedule" className="mt-10">
        <Heading title="Our Schedule" />
        <div className="container max-w-5xl px-4 pt-3 pb-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 mr-3 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
                <h3 className="text-4xl font-semibold text-headerText">
                  <span className={preahvihear.className}>Kodikas-2K23</span>
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase ">
                  <span className={preahvihear.className}>
                    {/* Kodikas-2K23 */}
                    Innovate your code game
                  </span>
                </span>
                {/* <Image src={logo} alt="logo" /> */}
                <img
                  src="/assets/images/logo.png"
                  className="mt-10 mr-8"
                  id="logoTag"
                  alt="Kodikas Logo"
                />
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 ">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ">
                  <h3 className="text-3xl font-bold tracking-wide text-subHeaderText">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                      KodeTeaser
                    </span>
                  </h3>
                  <time className="text-xs tracking-wide uppercase ">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                    </span>
                  </time>
                  <p className="mt-3">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                      • Teams will compete in a thrilling coding knowledge
                      journey through an online quiz.
                      <br />• We've got treats to fuel the brains of our
                      victorious teams!
                    </span>
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ">
                  <h3 className="text-3xl font-bold tracking-wide text-subHeaderText">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                      KoderRank
                    </span>
                  </h3>
                  <time className="text-xs tracking-wide uppercase ">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                    </span>
                  </time>
                  <p className="mt-3">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                      • Teams will tackle coding challenges using their favorite
                      languages.
                      <br />• If your team makes the cut, you're heading to the
                      final round!
                    </span>
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ">
                  <h3 className="text-3xl font-semibold tracking-wide text-subHeaderText">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                      Kodikas Premier League ( KPL )
                    </span>
                  </h3>
                  <time className="text-xs tracking-wide uppercase ">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}
                    </span>
                  </time>
                  <p className="mt-3">
                    <span className={preahvihear.className}>
                      {/* Kodikas-2K23 */}• Teams will go head-to-head in 1 vs 1
                      battles, aiming to conquer Kodikas and claim their coding
                      crowns!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Schedule;
