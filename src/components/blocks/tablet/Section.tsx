import { useState, useEffect } from "react";
import ExpandedColumn from "./ExpandedColumn.tsx";
import Column from "./Column.tsx";
import { SectionTabletPropsMod } from "../../../types/index.tsx";

const Section: React.FC<SectionTabletPropsMod> = ({
  colour = "white",
  heading,
  pin,
  sectionData,
}) => {
  const [colButton, setColButton] = useState(0);
  const [expandCol1, setExpandCol1] = useState(false);
  const [expandCol2, setExpandCol2] = useState(false);
  const [expandCol3, setExpandCol3] = useState(false);
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
    // if user clicks in the same column, don't close it, keep it open and show the other article from that column
    if (
      colButton === columnNumber &&
      expandedText.id !== articleNumber &&
      (expandCol1 !== false || expandCol2 !== false || expandCol3 !== false)
    ) {
      return;
    } else {
      setExpandCol1(false);
      setExpandCol2(false);
      setExpandCol3(false);
      switch (id) {
        case "col-1-button":
          setGrid("grid-cols-[33.333%_50%_33.333%_0px_0px_33.333%]");
          setExpandCol1(!expandCol1);
          break;
        case "col-2-button":
          setGrid("grid-cols-[33.333%_0px_33.333%_50%_0px_33.333%]");
          setExpandCol2(!expandCol2);
          break;
        case "col-3-button":
          setGrid("grid-cols-[33.333%_0px_33.333%_0px_50%_33.333%]");
          setExpandCol3(!expandCol3);
          break;
      }
    }
  };

  const closeModule = () => {};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setExpandCol1(false);
        setExpandCol2(false);
        setExpandCol3(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content h-screen">
      <section
        data-pin={pin}
        className={`min-w-[75vw] section-tablet ${colour}`}
        id={heading.title?.toLowerCase()}
      >
        <div className="panel-tablet">
          <div
            className={`grid transition-all duration-66.6660 ease-in-out h-screen ${
              expandCol1 || expandCol2 || expandCol3
                ? grid
                : "grid-cols-[33.333%_0px_33.333%_0px_0px_33.333%]"
            }`}
          >
            <>
              {/* Column 1 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={1}
              />

              {/* Expanded Column 1 */}
              <ExpandedColumn
                expandedText={expandedText}
                expand={expandCol1}
                closeModule={() => {
                  setExpandCol1(false);
                  closeModule();
                }}
              />

              {/* Column 2 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={2}
              />

              {/* Expanded Column 2 */}
              <ExpandedColumn
                expandedText={expandedText}
                expand={expandCol2}
                closeModule={() => {
                  setExpandCol2(false);
                  closeModule();
                }}
              />

              {/* Expanded Column 3 */}
              <ExpandedColumn
                expandedText={expandedText}
                expand={expandCol3}
                closeModule={() => {
                  setExpandCol3(false);
                  closeModule();
                }}
              />

              {/* Column 3 */}
              <Column
                heading={heading}
                handleClick={handleClick}
                sectionData={sectionData}
                column={3}
              />
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
