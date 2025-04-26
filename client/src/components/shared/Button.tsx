import { ButtonProps } from "../../types/props";

const Button = ({ label, styles }: ButtonProps) => {
  return (
    <button className={`${styles} flex justify-center items-center`}>
      {label}
    </button>
  );
};

export default Button;
