import close from "../../assets/common/close.svg";

interface ButtonProps {
  closeModule: () => void;
}

const ButtonClose: React.FC<ButtonProps> = ({ closeModule }) => {
  return (
    <button
      className="absolute top-16 right-0 rift w-auto uppercase px-8 py-4 z-[100]"
      onClick={closeModule}
    >
      <img
        src={close}
        alt="close"
        className="inline mr-2 mt-[0.75px]"
        onClick={closeModule}
      />{" "}
      <span onClick={closeModule} className="mb-2 inline-block font-bold ">
        close
      </span>
    </button>
  );
};

export default ButtonClose;
