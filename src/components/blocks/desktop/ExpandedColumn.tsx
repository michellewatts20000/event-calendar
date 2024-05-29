import Button from "../Button";
import ButtonClose from "../ButtonClose";
import freeFlag from "../../../assets/common/free-flag.png";
import soldOutFlag from "../../../assets/common/sold-out-flag.png";

interface ExpandedColumnProps {
  column: string;
  expand: boolean;
  classStart: string;
  closeModule: () => void;
  expandedText: {
    title: string;
    body: string;
    location: string;
    image: string;
    link: string;
    link2: string;
    imageExcerpt?: string;
    free: boolean;
    soldOut: boolean;
  };
}

const ExpandedColumn: React.FC<ExpandedColumnProps> = ({
  expand,
  closeModule,
  expandedText,
  column,
  classStart,
}) => {
  // let check = expand.some((item) => item === true);
  return (
    <div
      onClick={closeModule}
      className={`text-white z-[20] ${classStart} cursor-pointer 
          h-screen transition-all ease-in-out duration-300 absolute border-black bg-vivid-blue border-r-0.5  ${
            column === "1" && expand
              ? "w-[40vw] px-6 md:px-16 xl:px-20 xxxl:px-40"
              : column === "2" && expand
              ? "w-[40vw] px-6 md:px-16 xl:px-20 xxxl:px-40"
              : column === "3" && expand
              ? "w-[40vw] px-6 md:px-16 xl:px-20 xxxl:px-40"
              : column === "4" && expand
              ? "w-[40vw] px-6 md:px-16 xl:px-20 xxxl:px-40"
              : "w-0 z-[-1]"
          }`}
    >
      <div
        className={`flex-col justify-start gap-4 relative transition-all delay-150 duration-1000 ease-in-out  ${
          expand ? "opacity-1 w-auto flex h-screen" : "w-0  opacity-0"
        }`}
      >
        <div className={`${expand ? "visible" : "invisible"} `}>
          <ButtonClose closeModule={closeModule} />
          <div className={`w-full xxl:h-auto  mt-32 relative `}>
            <div className={`${window.innerHeight <= 700 ? "hidden" : ""}`}>
              {expandedText.free && (
                <img
                  src={freeFlag}
                  alt={freeFlag}
                  className="absolute bottom-0 right-0"
                />
              )}
              {expandedText.soldOut && (
                <img
                  src={soldOutFlag}
                  alt={soldOutFlag}
                  className="absolute top-0 right-0"
                />
              )}
              <img
                src={expandedText.image}
                alt={expandedText.image}
                className={`object-cover w-full object-bottom ${
                  window.innerHeight <= 800
                    ? " h-[200px]"
                    : "xxl:max-w-[40vw] xxl:h-[35vh] lg:h-[280px] h-[200px]"
                } `}
              />
            </div>
          </div>

          <h1
            className="location-title"
            dangerouslySetInnerHTML={{
              __html: expandedText.location.replace(/<\/?br>/g, ""),
            }}
          />

          <p
            className="expand-title pb-0"
            dangerouslySetInnerHTML={{
              __html: expandedText.title.replace(/<\/?br>/g, ""),
              // .replace(/:<\/?br>/, ":</br>")
              // .replace(/:/g, ":<br>"),
            }}
          />
          <div className="">
            {" "}
            <p
              className="pb-0"
              dangerouslySetInnerHTML={{ __html: expandedText.body }}
            />
          </div>

          <div className="flex gap-4 mt-4">
            {expandedText.link && (
              <Button href={expandedText.link} text="Learn more" />
            )}

            {expandedText.link2 && (
              <Button
                href={expandedText.link2}
                text={
                  expandedText.title ===
                  "Say My Name: The </br>Humanity of Names"
                    ? "Register"
                    : "Buy Tickets"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedColumn;
