import { ArticleProps } from "../../../types/index";

const ArticleExcerpt: React.FC<ArticleProps> = ({
  id,
  column,
  title,
  excerpt,
  image,
  columnNumber,
  handleClick,
  imagePosition,
}) => {
  return (
    <div id={id} key={id}>
      {image && imagePosition === "top" && (
        <div className="w-full overflow-hidden lg:h-auto h-[150px]">
          <img
            src={image}
            alt={title}
            className="w-full object-center object-cover h-auto"
          />
        </div>
      )}
      <div className="md:px-8 py-4 px-4">
        <div
          className="article-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="pb-0">{excerpt}</p>
        <button
          id={`col-${column}-button`}
          className="read-more"
          onClick={(e) => {
            handleClick(e, columnNumber, id);
          }}
        >
          Read More
        </button>
      </div>
      {image && imagePosition === "bottom" && (
        <div className="w-full overflow-hidden lg:h-auto h-[150px]">
          <img
            src={image}
            alt={title}
            className=" w-full object-center object-cover h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleExcerpt;
