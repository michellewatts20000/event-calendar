import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollSmoother from "gsap/ScrollSmoother";
import MemoisedComponent from "./components/blocks/desktop/Section.tsx";
import SectionTablet from "./components/blocks/tablet/Section.tsx";
import MobileArticleExcerpt from "./components/blocks/mobile/MobileArticleExcerpt.tsx";
import Button from "./components/blocks/Button.tsx";
import data from "./js/data/data-desktop.ts";
import tabletData from "./js/data/data-tablet.ts";
import mobileData from "./js/data/data-mobile.ts";
import arrowPoint from "./assets/common/arrow-point.svg";
import fixedImage from "./assets/images/desktop/menu.jpg";
import hero from "./assets/images/desktop/new-hero.jpg";
import vividLogo from "./assets/common/logo.png";
import FixedPanel from "./components/blocks/FixedPanel.tsx";

import downArrow from "./assets/common/down-arrow.svg";
import close from "./assets/common/close.svg";

import heroMobile from "./assets/images/desktop/new-hero.jpg";
import Hero from "./components/Hero.tsx";

import freeFlag from "./assets/common/free-flag.png";
import soldOutFlag from "./assets/common/sold-out-flag.png";

interface SmootherStore {
  kill: () => void;
}

const App = () => {
  const [modal, setModal] = useState(false);
  const [smootherStore, setSmootherStore] = useState<SmootherStore>();
  const [scrollAmount, setScrollAmount] = useState(0);
  const [zIndex, setzIndex] = useState(false);
  const [mobileExpand, setMobileExpand] = useState({
    location: "",
    title: "",
    body: "",
    excerpt: "",
    image: "",
    link: "",
    link2: "",
    free: false,
    soldOut: false,
  });
  const [navSelect, setNavSelect] = useState("ideas");
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [nextIndex, setNextIndex] = useState(2);
  const [prevIndex, setPrevIndex] = useState(0);
  let nextArrowArray = ["", "ideas", "food", "music", "section-4", "section-5"];

  const bodyRef = useRef(null);
  const component = useRef(null);

  const sections = data;
  // const sectionsTablet = tabletData;
  const mobileSections = mobileData;

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setzIndex(true);
      }

      if (window.scrollY < window.innerHeight) {
        setzIndex(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const findEventById = (eventsArray: any[], eventId: number) =>
    eventsArray
      .flatMap((category) => category.events)
      .find((event) => event.id === eventId);

  const handleMobileClick = (e: any, id: number) => {
    const foundEvent = findEventById(mobileData, id);

    if (smootherStore) {
      smootherStore.kill();
    }
    if (foundEvent) {
      setMobileExpand((prevState) => ({
        ...prevState,
        location: foundEvent.location,
        title: foundEvent.title,
        body: foundEvent.body,
        excerpt: foundEvent.excerpt,
        image: foundEvent.image || "",
        link: foundEvent.link,
        link2: foundEvent.link2,
        free: foundEvent.free,
        soldOut: foundEvent.soldOut,
      }));
    }

    setModal(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);

      if (window.innerWidth < 1024) {
        smootherStore?.kill();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuNav = (x: any) => {
    setNavSelect(x);

    if (x === "ideas") {
      setPrevIndex(0);
      setNextIndex(2);
    }

    if (x === "food") {
      setPrevIndex(1);
      setNextIndex(3);
    }

    if (x === "music") {
      setPrevIndex(2);
      setNextIndex(4);
    }
  };

  const nextLabel = (x: string) => {
    if (x === "next") {
      setNextIndex((prevState) =>
        prevState < nextArrowArray.length ? prevState + 1 : prevState
      );
      setPrevIndex((prevState) => (prevState >= 0 ? prevState + 1 : prevState));
      if (nextIndex <= 3) {
        setNavSelect(nextArrowArray[nextIndex]);
      }
    }

    if (x === "prev") {
      setPrevIndex((prevState) => (prevState >= 0 ? prevState - 1 : prevState));
      setNextIndex((prevState) => (prevState >= 0 ? prevState - 1 : prevState));
      if (prevIndex <= 3) {
        setNavSelect(nextArrowArray[prevIndex]);
      }
    }
  };

  const scrollStart = () => {
    gsap.to(document.documentElement, {
      scrollTo: { y: window.innerHeight + 10 },
      duration: 0.5,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      scrollStart();
    }, 2000);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      // preventDefault: true,
    });

    setSmootherStore(smoother);

    if (window.innerWidth >= 1280) {
      let ctx = gsap.context(() => {
        const sections = gsap.utils.toArray(".section");
        const tl: HTMLElement | any = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: ".container",
            start: "top top",

            end: () => "+=" + window.innerWidth * sections.length,
            // end: () => `+=${document.querySelector(".section").offsetHeight}`,
            pin: true,
            scrub: true,
            onEnter: () => {},
          },
        });

        sections.forEach((section: HTMLElement | any, i: number) => {
          const panels = gsap.utils.toArray(".panel", section);
          const sectionId = section.getAttribute("id");

          tl.to(
            section,
            {
              y: section.clientHeight - section.scrollHeight,
              zIndex: 100,
              duration: panels.length * 0.15,
              // duration: 0,
            },
            sectionId
          );
          if (sections[i + 1]) {
            tl.to(".content", {
              xPercent: -100 * (i + 1),
            });
          }
        });

        const buttons = Array.from(document.querySelectorAll(".section-btn"));
        buttons?.forEach((btn: HTMLElement | any, i) => {
          btn.addEventListener("click", () => {
            gsap.to(smoother, {
              duration: 1,
              scrollTop: tl.scrollTrigger.labelToScroll(
                btn.innerText.toLowerCase()
              ),
              onUpdate: ScrollTrigger.update,
              ease: "power1.inOut",
            });
          });
        });

        const next = Array.from(document.querySelectorAll(".next"));
        next.forEach((btn: HTMLElement | any, i) => {
          btn.addEventListener("click", () => {
            gsap.to(smoother, {
              duration: 1,
              scrollTop: tl.scrollTrigger.labelToScroll(
                btn.innerText.toLowerCase()
              ),
              onUpdate: ScrollTrigger.update,
              ease: "power1.inOut",
            });
          });
        });

        const prev = Array.from(document.querySelectorAll(".prev"));
        prev.forEach((btn: HTMLElement | any, i) => {
          btn.addEventListener("click", () => {
            gsap.to(smoother, {
              duration: 1,
              scrollTop: tl.scrollTrigger.labelToScroll(
                btn.innerText.toLowerCase()
              ),
              onUpdate: ScrollTrigger.update,
              ease: "power1.inOut",
            });
          });
        });

        const scroll = Array.from(document.querySelectorAll(".scroll"));
        scroll.forEach((btn: HTMLElement | any, i) => {
          const sectionData = btn.getAttribute("data-section");
          btn.addEventListener("click", () => {
            gsap.to(smoother, {
              duration: 1.5,
              scrollTop: tl.scrollTrigger.labelToScroll(sectionData) + 10,
              onUpdate: ScrollTrigger.update,
              ease: "power1.inOut",
            });
            setNextIndex(2);
            setPrevIndex(0);
          });
        });
      }, component);

      setScrollAmount((innerWidth * sections.length) / (sections.length - 1));

      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <div ref={bodyRef}>
        <FixedPanel
          zIndex={zIndex}
          fixedImage={fixedImage}
          menuNav={menuNav}
          navSelect={navSelect}
          innerWidth={innerWidth}
        />
        {/* the line */}
        <div className="fixed w-[10px] h-screen bg-smh-blue right-0 z-10 hidden sd:block"></div>
        {/* the next button */}
        <div
          className={`fixed top-[50%] right-[-10px] z-[11] hidden sd:block `}
        >
          <div
            className={`curson-pointer h-[50px] w-[50px] bg-smh-blue rounded-full flex items-center justify-center group ${
              nextIndex < 6 ? "" : "hidden"
            } ${zIndex ? "z-10" : "hidden"} `}
          >
            <button className="next" onClick={() => nextLabel("next")}>
              <img
                src={arrowPoint}
                alt="arrow point"
                id="nextBtn"
                className="mr-2 group transition-all ease-in hover:scale-125 next"
              />
              <span className="reader-only">{nextArrowArray[nextIndex]}</span>
            </button>
          </div>
        </div>
        <div
          className={`fixed top-[50%] left-[18.25vw] z-[11] hidden sd:block ${
            zIndex ? "z-10" : "relative z-[-1]"
          }`}
        >
          <div
            className={`curson-pointer h-[50px] w-[50px] bg-black rounded-full flex items-center relative justify-center group ${
              prevIndex >= 1 ? "" : "hidden"
            }  `}
          >
            <button className="prev" onClick={() => nextLabel("prev")}>
              <img
                src={arrowPoint}
                alt="arrow point"
                id="prevBtn"
                className="mr-2 group transition-all ease-in hover:scale-125 prev rotate-180"
              />
              <span className="reader-only">{nextArrowArray[prevIndex]}</span>
            </button>
          </div>
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div ref={component}>
            <Hero
              vividLogo={vividLogo}
              hero={hero}
              heroMobile={heroMobile}
              downArrow={downArrow}
              scrollStart={scrollStart}
            />
            {/* mobile intro */}
            <div className="z-[100] bg-vivid-black relative sm:hidden">
              <div className="text-center  text-white p-6">
                <div className="sub-heading text-bright-pink uppercase text-20">
                  Your ultimate guide
                </div>
                <div className="text-clampHeading4 uppercase rift-bold mb-4 pb-0 leading-tight text-bright-pink text-center">
                  Vivid Sydney 2024
                </div>

                <div className="text-center mb-10">
                  <p>
                    Since 2009, Vivid Sydney has been deLIGHTing visitors with
                    its exciting, creative and thought-provoking light displays.
                  </p>
                  <p>
                    But from its comparably modest early days, it has evolved to
                    become a landmark cultural celebration that brings not just
                    artists, but also some of the most boundary-pushing
                    musicians, thinkers and culinary experts of our time,
                    together for 23 magical nights.
                  </p>

                  <p>
                    In 2024, its 14th year, Vivid Sydney will be exploring the
                    theme Humanity and all the things that connect us as humans
                    — love, kindness, compassion, creativity — needed more now
                    than ever before.
                  </p>
                  <p>
                    {" "}
                    Vivid Sydney festival director Gill Minervini says,
                    “humanity is the key to our future, to discovering the
                    answers that determine our way forward. To reimagining a
                    world without boundaries, discrimination or inequality. A
                    world full of people who work together, with a shared
                    tomorrow in mind.”
                  </p>
                </div>
              </div>
            </div>
            <main id="desktop" className="sd:flex container hidden">
              {sections.map((section, index) => (
                <MemoisedComponent
                  pin={section.pin}
                  key={index}
                  colour={section.colour}
                  heading={section.heading}
                  sectionData={section}
                />
              ))}
            </main>

            <article className="sd:hidden sm:ml-[30vw]">
              {mobileSections.map(({ id, heading, events }) => (
                <div className="" key={id}>
                  <h1
                    className={`text-200   uppercase rift-bold pl-0 heading-chunk leading-none text-vivid-blue relative z-[-1] ${
                      heading === "ideas" ? "mb-[-180px] mt-20" : "mb-10 mt-0"
                    }`}
                    id={heading}
                  >
                    {heading}
                  </h1>
                  {events.map(
                    ({
                      id,
                      title,
                      excerpt,
                      link,
                      image,
                      imageExcerpt,
                      free,
                      soldOut,
                    }) => (
                      <MobileArticleExcerpt
                        handleMobileClick={handleMobileClick}
                        key={id}
                        id={id}
                        title={title}
                        excerpt={excerpt}
                        link={link}
                        image={image}
                        imageExcerpt={imageExcerpt}
                        free={free}
                        soldOut={soldOut}
                      />
                    )
                  )}
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>

      <div className="relative" onClick={() => setModal(false)}>
        {modal && (
          <div
            className={`bg-vivid-blue fixed h-full top-0 right-0 px-10 pt-10 pb-20 z-[200] ${
              modal ? "fade-up" : "fade-down"
            }`}
          >
            <button
              className="absolute top-20 right-4 rift w-auto uppercase px-8 py-4 text-white"
              onClick={() => setModal(false)}
            >
              <img
                src={close}
                alt="close"
                className="inline mr-2 mt-[1.75px]"
              />{" "}
              <span className="mb-2 inline-block font-bold ">close</span>
            </button>

            <div className="flex flex-col h-full overflow-scroll mt-28">
              <div className="w-full h-auto relative">
                {mobileExpand.free && (
                  <img
                    src={freeFlag}
                    alt={freeFlag}
                    className="absolute bottom-0 right-0"
                  />
                )}
                {mobileExpand.soldOut && (
                  <img
                    src={soldOutFlag}
                    alt={soldOutFlag}
                    className="absolute top-0 right-0"
                  />
                )}
                <img
                  src={mobileExpand.image}
                  alt={mobileExpand.image}
                  className="object-cover object-right-bottom w-full h-full"
                />
              </div>
              <h2
                className="location-title text-white mt-4"
                dangerouslySetInnerHTML={{
                  __html: mobileExpand.location,
                }}
              />
              <h2 className="expand-title text-left my-4">
                {mobileExpand.title}
              </h2>
              <p
                className="text-white"
                dangerouslySetInnerHTML={{ __html: mobileExpand.body }}
              />

              <div className="flex gap-4 z-[100] pb-20">
                {mobileExpand.link && (
                  <Button href={mobileExpand.link} text="Learn more" />
                )}

                {mobileExpand.link2 && (
                  <Button
                    href={mobileExpand.link2}
                    text={
                      mobileExpand.title ===
                      "Say My Name: The </br>Humanity of Names"
                        ? "Register"
                        : "Buy Tickets"
                    }
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
