import React, { useState } from "react";
import ArticleExcerpt from "./ArticleExcerpt.tsx";
import { ColumnPropsTablet } from "../../../types/index";
import Heading from "../Heading.tsx";

const Column: React.FC<ColumnPropsTablet> = ({
  handleClick,
  sectionData,
  heading,
  column,
}) => {
  const [columnNumber, setColumnData] = useState(`${"column" + column}`);

  let columnClass;
  const columnCode = sectionData.columnCodes[column - 1];
  switch (columnCode) {
    case "A":
    case "B":
    case "C":
    case "D":
    case "E":
    case "F":
    case "G":
      columnClass = `column${columnCode}`;
      break;
    default:
      columnClass = "";
  }

  return (
    <>
      <div className="border-r border-black " id={`col-${columnNumber}`}>
        <div className={`${columnClass}`}>
          {column === heading.column && heading.title && (
            <Heading heading={heading} />
          )}
          {sectionData &&
            (sectionData as { [key: string]: any })[columnNumber].map(
              ({
                id,
                title,
                excerpt,
                link,
                imageExcerpt,
                imagePosition,
              }: {
                id: string;
                title: string;
                excerpt: string;
                link: string;
                imageExcerpt: string;
                imagePosition: string;
              }) => (
                <ArticleExcerpt
                  key={id}
                  id={id}
                  title={title}
                  excerpt={excerpt}
                  link={link}
                  image={imageExcerpt}
                  imagePosition={imagePosition}
                  columnNumber={columnNumber}
                  column={column}
                  handleClick={handleClick}
                />
              )
            )}
        </div>
      </div>
    </>
  );
};

export default Column;
