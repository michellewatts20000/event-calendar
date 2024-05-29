import { MobileArticleExcerptProps } from "../../../types/index";

import freeFlag from "../../../assets/common/free-flag.png";
import soldOutFlag from "../../../assets/common/sold-out-flag.png";

const MobileArticleExcerpt: React.FC<MobileArticleExcerptProps> = ({
  id,
  title,
  excerpt,
  image,
  imageExcerpt,
  handleMobileClick,
  free,
  soldOut,
}) => {
  return (
    <div
      key={id}
      className="cursor-pointer"
      onClick={(e) => {
        handleMobileClick(e, id);
      }}
    >
      {image && (
        <div className="w-full overflow-hidden relative">
          {free && (
            <img
              src={freeFlag}
              alt={freeFlag}
              className="absolute bottom-0 right-0"
            />
          )}

          {soldOut && (
            <img
              src={soldOutFlag}
              alt={soldOutFlag}
              className="absolute top-0 right-0"
            />
          )}
          <img
            src={imageExcerpt !== undefined ? imageExcerpt : image}
            alt={title}
            className="object-cover w-full"
          />
        </div>
      )}
      <div className="p-10">
        {/* {free && (
          <p className="px-6 py-2 bg-bright-pink font-bold text-white mb-4 inline-block">
            FREE
          </p>
        )} */}
        <div
          className="article-title-mobile"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="pb-0">{excerpt}</p>
        <button
          id="toggle"
          className="read-more"
          onClick={(e) => {
            handleMobileClick(e, id);
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default MobileArticleExcerpt;
