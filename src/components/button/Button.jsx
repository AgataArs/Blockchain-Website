import "./button.scss";
import cn from "classnames";

export const Button = ({ children, className }) => {
  return <button className={cn("Button", className)}>{children}</button>;
};
