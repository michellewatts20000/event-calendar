import Button from "../Button";
import ButtonClose from "../ButtonClose";

interface ExpandedColumnProps {
  expand: boolean;
  closeModule: () => void;
  expandedText: {
    title: string;
    body: string;
    location: string;
    image: string;
    link: string;
    link2: string;
  };
}

const ExpandedColumn: React.FC<ExpandedColumnProps> = ({
  expand,
  closeModule,
  expandedText,
}) => {
  return (
    <div
      className={`text-white relative transition-all duration-300 xl:p-10 p-6 ease-in-out border-black bg-vivid-blue border-r  ${
        expand ? "opacity-1" : "opacity-0"
      }`}
    >
      <ButtonClose closeModule={closeModule} />

      <div
        className={`flex-col justify-start h-screen gap-4 mt-28 ${
          expand ? "flex" : "hidden"
        }`}
      >
        <h1
          className="location-title"
          dangerouslySetInnerHTML={{ __html: expandedText.location }}
        />
        <p
          className="expand-title pb-0"
          dangerouslySetInnerHTML={{ __html: expandedText.title }}
        />
        <div className="customMin:max-h-[35vh]">
          <p
            className="pb-0"
            dangerouslySetInnerHTML={{ __html: expandedText.body }}
          />
        </div>
        <div className="flex gap-4 mt-6">
          <Button href={expandedText.link} text="Learn more" />
          <Button href={expandedText.link2} text="Buy Tickets" />
        </div>
      </div>
    </div>
  );
};

export default ExpandedColumn;
