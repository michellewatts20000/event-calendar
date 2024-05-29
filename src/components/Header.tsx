import logo from "../assets/common/logo.svg";
import CustomLink from "./blocks/CustomLink";
import { BRAND_URL, BRAND_NAME } from "../js/global-variables.tsx";
const Header = () => {
  return (
    <header className="integration-message">
      <h3 className="integration-text">
        Advertising feature{" "}
        <span className="reader-only">{`sponsored by ${BRAND_NAME}`}</span>
      </h3>
      <CustomLink href={BRAND_URL} className="integration-logo">
        <img src={logo} alt={`${BRAND_NAME} logo`} />
      </CustomLink>
    </header>
  );
};

export default Header;
