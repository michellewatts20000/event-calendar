interface FixedPanelProps {
  fixedImage: string;
  menuNav: (x: any) => void;
  navSelect: string;
  innerWidth: number;
  zIndex: boolean;
}

const FixedPanel = ({
  fixedImage,
  menuNav,
  navSelect,
  zIndex,
}: FixedPanelProps) => {
  return (
    <>
      <div
        className={`sm:fixed sm:block bottom-0  h-full transition-all  delay-300 duration-500 sd:w-[20%] sm:w-[30vw] ${
          zIndex ? "z-10 opacity-1 left-0" : "opacity-0 left-[-20%]"
        }  bg-vivid-black hidden`}
      >
        <div className="relative">
          <img
            src={fixedImage}
            alt="2023 lightscape installation"
            className="sm:absolute top-[-40px] left-0 z-[-10] object-cover w-full"
          />
        </div>
        <div
          className={` text-center sm:flex flex-col items-center  h-full xxxl:justify-center justify-end  text-white xxl:px-20 xl:px-10 px-6 pt-20  hidden`}
        >
          {/* desktop nav */}
          <ul className="hidden items-center justify-center gap-4 text-white text-22 font-bold uppercase mb-10 rift-bold sd:flex">
            <li>
              <button
                onClick={() => {
                  menuNav("ideas");
                }}
                className={`
                section-btn ${navSelect === "ideas" ? "active" : ""}`}
              >
                Ideas
              </button>
            </li>
            <li>
              <button
                onClick={() => menuNav("food")}
                className={`
                section-btn ${navSelect === "food" ? "active" : ""}`}
              >
                Food
              </button>
            </li>
            <li>
              <button
                onClick={() => menuNav("music")}
                className={`
                section-btn ${navSelect === "music" ? "active" : ""}`}
              >
                Music
              </button>
            </li>
          </ul>

          <div className="sub-heading text-bright-pink uppercase text-20">
            Your ultimate guide
          </div>
          <div className="text-clampHeading4 uppercase rift-bold mb-4 pb-0 leading-tight text-bright-pink text-center">
            Vivid Sydney 2024
          </div>

          <div className="text-center xl:max-h-auto sm:mb-20 ">
            <p>
              Since 2009, Vivid Sydney has been deLIGHTing visitors with its
              exciting, creative and thought-provoking light displays.
            </p>
            <p>
              But from its comparably modest early days, it has evolved to
              become a landmark cultural celebration that brings not just
              artists, but also some of the most boundary-pushing musicians,
              thinkers and culinary experts of our time, together for 23 magical
              nights.
            </p>

            <p>
              In 2024, its 14th year, Vivid Sydney will be exploring the theme
              Humanity and all the things that connect us as humans — love,
              kindness, compassion, creativity — needed more now than ever
              before.
            </p>
            <p>
              {" "}
              Vivid Sydney festival director Gill Minervini says, “humanity is
              the key to our future, to discovering the answers that determine
              our way forward. To reimagining a world without boundaries,
              discrimination or inequality. A world full of people who work
              together, with a shared tomorrow in mind.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedPanel;
