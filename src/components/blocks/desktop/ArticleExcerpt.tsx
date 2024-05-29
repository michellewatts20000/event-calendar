import { ArticleProps } from "../../../types/index";
import freeFlag from "../../../assets/common/free-flag.png";
import freeFlag2 from "../../../assets/common/free-flag-2.png";
import soldOutFlag from "../../../assets/common/sold-out-flag-2.png";

const ArticleExcerpt: React.FC<ArticleProps> = ({
  id,
  column,
  title,
  excerpt,
  image,
  imageSmaller,
  columnNumber,
  handleClick,
  imagePosition,
  imageHeight,
  free,
  soldOut,
}) => {
  return (
    <div
      id={id}
      className="cursor-pointer group"
      key={id}
      onClick={(e) => {
        handleClick(e, columnNumber, id);
      }}
    >
      {image && imagePosition === "top" && (
        <div className="w-full overflow-hidden relative">
          {free && (
            <img
              src={freeFlag}
              alt={freeFlag}
              className="absolute bottom-0 right-0 z-[10]"
            />
          )}
          {soldOut && (
            <img
              src={soldOutFlag}
              alt={soldOutFlag}
              className="absolute top-0 right-0 z-[10]"
            />
          )}
          <img
            src={window.innerHeight <= 700 ? imageSmaller : image}
            alt={title}
            className={`w-full object-center object-cover group-hover:scale-110 ${
              imageHeight ? imageHeight : "h-auto"
            } transition-all ease-in-out duration-300`}
          />
        </div>
      )}
      <div
        className={`md:px-8 xxl:px-20 custombp:py-6 py-4 px-4 bg-white ${
          !image ? "" : ""
        }`}
      >
        {/* {free && (
          <p className="px-6 py-2 bg-bright-pink font-bold text-white mb-4 inline-block">
            FREE
          </p>
        )} */}
        <div
          className={`article-title  ${
            window.innerHeight <= 750
              ? "text-20"
              : window.innerHeight <= 995
              ? "text-30"
              : "text-clampHeading2"
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={`pb-0 `}>
          {window.innerHeight <= 750
            ? excerpt.substring(0, 70) + "..."
            : window.innerHeight <= 900
            ? excerpt.substring(0, 110) + "..."
            : excerpt.split("").slice(0, 127).join("") + "..."}
        </p>
        <button
          id={`col-${column}-button`}
          className="read-more group-hover:underline"
          onClick={(e) => {
            handleClick(e, columnNumber, id);
          }}
        >
          Read More
        </button>
      </div>
      {image && imagePosition === "bottom" && (
        <div className="w-full overflow-hidden relative">
          {soldOut && (
            <img
              src={soldOutFlag}
              alt={soldOutFlag}
              className="absolute top-0 right-0 transition-all ease-in-out duration-300 z-[10]"
            />
          )}
          {free && title !== "Budjerah + Jem Cassar-Daley" && (
            <img
              src={freeFlag}
              alt={freeFlag}
              className="absolute bottom-0 right-0 z-[10]"
            />
          )}
          {free && title === "Budjerah + Jem Cassar-Daley" && (
            <img
              src={freeFlag2}
              alt={freeFlag2}
              className="absolute bottom-0 right-0 z-[10]"
            />
          )}
          <img
            src={window.innerHeight <= 700 ? imageSmaller : image}
            alt={title}
            className={`w-full object-center object-cover group-hover:scale-110 ${
              imageHeight ? imageHeight : "h-auto"
            } transition-all ease-in-out duration-300`}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleExcerpt;
