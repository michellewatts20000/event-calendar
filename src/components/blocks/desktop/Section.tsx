import { useState, memo } from "react";
import ExpandedColumn from "./ExpandedColumn.tsx";
import Column from "./Column.tsx";
import { SectionPropsMod } from "../../../types/index.tsx";

const Section: React.FC<SectionPropsMod> = ({
  colour = "white",
  heading,
  pin,
  sectionData,
}) => {
  const [colButton, setColButton] = useState(0);
  const [expandedCols, setExpandedCols] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [grid, setGrid] = useState("");
  const [expandedText, setExpandedText] = useState({
    id: 0,
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
  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    columnNumber: any,
    articleNumber: any
  ) => {
    let articleObject = (sectionData as { [key: string]: any })[
      columnNumber
    ].find((article: any) => article.id === parseInt(articleNumber));

    setExpandedText(articleObject);
    setColButton(columnNumber);
    const id = e.currentTarget.id;

    if (columnNumber === "column1") {
      setExpandedCols([true, false, false, false]);
    } else if (columnNumber === "column2") {
      setExpandedCols([false, true, false, false]);
    } else if (columnNumber === "column3") {
      setExpandedCols([false, false, true, false]);
    } else if (columnNumber === "column4") {
      setExpandedCols([false, false, false, true]);
    } else {
      setExpandedCols([false, false, false, false]);
    }
    // if user clicks in the same column, don't close it, keep it open and show the other article from that column
  };

  return (
    <div className="content h-screen">
      <section
        data-pin={pin}
        className={`min-w-[80vw] section ${colour}`}
        id={
          heading.title
            ? heading.title.toLowerCase()
            : "section-" + sectionData.id
        }
      >
        <div className="panel">
          <div
            className={`grid transition-all duration-500 ease-in-out h-screen overflow-hidden grid-cols-[25%_25%_25%_25%]`}
          >
            <>
              {/* Column 1 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={1}
              />
              {/* Column 2 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={2}
              />
              {/* Column 3 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={3}
              />
              {/* Column 4 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={4}
              />

              <ExpandedColumn
                column="1"
                classStart="left-0 ml-[20vw]"
                expandedText={expandedText}
                expand={expandedCols[0]}
                closeModule={() => {
                  setExpandedCols([false, false, false, false]);
                }}
              />
              <ExpandedColumn
                column="2"
                classStart="left-0 ml-[40vw]"
                expandedText={expandedText}
                expand={expandedCols[1]}
                closeModule={() => {
                  setExpandedCols([false, false, false, false]);
                }}
              />
              <ExpandedColumn
                column="3"
                classStart="right-0 mr-[40vw]"
                expandedText={expandedText}
                expand={expandedCols[2]}
                closeModule={() => {
                  setExpandedCols([false, false, false, false]);
                }}
              />
              <ExpandedColumn
                column="4"
                classStart="right-0 mr-[20vw]"
                expandedText={expandedText}
                expand={expandedCols[3]}
                closeModule={() => {
                  setExpandedCols([false, false, false, false]);
                }}
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Section);
