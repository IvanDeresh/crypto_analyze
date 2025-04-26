import { ButtonProps } from "../../types/props";

const Button = ({ label, styles, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles} flex cursor-pointer justify-center items-center`}
    >
      {label}
    </button>
  );
};

export default Button;
