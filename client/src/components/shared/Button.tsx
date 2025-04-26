import { ButtonProps } from "../../types/props";

const Button = ({ onClick, label, styles, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} flex cursor-pointer justify-center items-center`}
    >
      {label}
    </button>
  );
};

export default Button;
