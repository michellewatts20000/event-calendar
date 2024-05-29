import { HeadingProps } from "../../types";
import ideas from "../../assets/images/desktop/ideas.png";
import food from "../../assets/images/desktop/food.png";
import music from "../../assets/images/desktop/music.png";

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  let imageSrc =
    heading.title === "Ideas" ? ideas : heading.title === "Food" ? food : music;

  return (
    <>
      <img
        src={imageSrc}
        alt={imageSrc}
        className={`absolute left-0 z-[-1]  ${
          heading.position === "top" ? "top-20" : "bottom-10"
        } ${window.innerHeight <= 900 ? "h-[30vh]" : "h-[32vh]"}`}
      />
    </>
    // <h1
    //   className={`heading-chunk absolute text-vivid-blue leading-normal z-[-1] ${
    //     window.innerHeight <= 900
    //       ? "text-125"
    //       : window.innerHeight <= 995
    //       ? "text-150"
    //       : "text-180  xxl:text-140"
    //   }   ${heading.title === "Music" ? `xxl:left-[100px] left-[-30px]` : ``} ${
    //     heading.position === "top"
    //       ? "top-20 custombp:left-[-30px] xxl:left-[100px]"
    //       : "bottom-10 custombp:left-[-30px] xxl:left-[100px]"
    //   } `}
    // >
    //   {heading.title}
    // </h1>
  );
};

export default Heading;
