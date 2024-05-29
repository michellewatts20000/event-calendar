export interface ColumnData {
  id: number;
  heading: {title: string; column: number, position: string};
  colour: string;
  columnCodes: string[];
  pin?: string;
  column1: ArticleData[];
  column2: ArticleData[];
  column3: ArticleData[];
  column4: ArticleData[];
}


export interface HeadingProps {
  heading: {title: string; column: number, position: string};
}

export interface ColumnDataTablet {
  id: number;
  heading: {title: string; column: number, position: string};
  colour: string;
  columnCodes: string[];
  pin?: string;
  column1: ArticleData[];
  column2: ArticleData[];
  column3: ArticleData[];
}

export interface ArticleData {
  id: number;
  date: number;
  location: string;
  title: string;
  body: string;
  excerpt: string;
  link: string;
  link2: string;
  imageExcerpt?: string;
  image: string;
  imagePosition?: string;
  imageHeight?: string;
  free?:Boolean;
  soldOut?:Boolean;
}

// export interface MobileData {
//   id: number;
//   date: number;
//   location: string;
//   title: string;
//   body: string;
//   excerpt: string;
//   link: string;
//   link2:string;
//   imageExcerpt?: string;
//   image?: string;
//   imagePosition?: string;
// }


export interface MobileData {
  heading: string
  id: number;

  events: ArticleData[];
}



export interface SectionProps {
  id: number;
  colour: string;
  heading: {title: string; column: number, position: string};
  pin?: string;
  columnCodes: string[];
  sectionData: {
    id: number;
    heading: {title: string; column: number, position: string};
    colour: string;
    column1: ArticleData[];
    column2: ArticleData[];
    column3: ArticleData[];
    column4: ArticleData[];
  };
}

export interface SectionPropsMod {
  colour: string;
  heading: {title: string; column: number, position: string};
  pin?: string;
  sectionData: {
    id: number;
    heading: {title: string; column: number, position: string};
    colour: string;
    columnCodes: string[];
    column1: ArticleData[];
    column2: ArticleData[];
    column3: ArticleData[];
    column4: ArticleData[];
  };
}

export interface SectionTabletPropsMod {
  colour: string;
  heading: {title: string; column: number, position: string};
  pin?: string;
  sectionData: {
    id: number;
    heading: {title: string; column: number, position: string};
    colour: string;
    columnCodes: string[];
    column1: ArticleData[];
    column2: ArticleData[];
    column3: ArticleData[];
  };
}


export interface ColumnProps {
  heading: {title: string; column: number, position: string};
  handleClick: (
        e: React.MouseEvent<HTMLElement>,
        column: any,
        article: any
      ) => void;
  sectionData: {
    id: number;
    heading: {title: string; column: number, position: string};
    colour: string;
    columnCodes: string[];
    column1: ArticleData[];
    column2: ArticleData[];
    column3: ArticleData[];
    column4: ArticleData[];
  };
  column: number;
}

export interface ColumnPropsTablet {
  heading: {title: string; column: number, position: string};
  handleClick: (
        e: React.MouseEvent<HTMLElement>,
        column: any,
        article: any
      ) => void;
  sectionData: {
    id: number;
    heading: {title: string; column: number, position: string};
    colour: string;
    columnCodes: string[];
    column1: ArticleData[];
    column2: ArticleData[];
    column3: ArticleData[];
  };
  column: number;
}



export interface ArticleProps {
  handleClick: (
        e: React.MouseEvent<HTMLElement>,
        column: any,
        article: any
      ) => void;
    id: string;
    title: string;
    excerpt: string;
    link: string;
    image: string;
    imageSmaller?: string;
    imageExcerpt?: string;
    imagePosition?: string;
    imageHeight?: string;
    column: number;
    columnNumber: string;
    free?: Boolean;
    soldOut?:Boolean;
}

export interface MobileArticleExcerptProps {
      id: number;
      title: string;
      excerpt: string;
      link: string;
      image?: string | undefined;
      imageExcerpt?: string;
      free?: Boolean;
      soldOut?:Boolean;
      handleMobileClick: (e: React.MouseEvent<HTMLElement>,  article: any) => void;
}

