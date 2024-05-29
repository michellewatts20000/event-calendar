import arrowRight from "../../assets/common/arrow-right.svg";

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:bg-white rift-bold uppercase text-vivid-blue w-[118px] h-[38px]  bg-button-blue flex items-center pl-6 gap-2 group "
    >
      {text}
      <img
        src={arrowRight}
        alt="arrow right"
        className="group-hover:ml-2 transition-all ease-in-out duration-300"
      />
    </a>
  );
};

export default Button;
