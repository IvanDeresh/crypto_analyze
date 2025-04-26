import TheHeader from "./header";
import TheFooter from "./footer";
import { LayoutProps } from "../../types/props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full">
      <TheHeader />
      {children}
      <TheFooter />
    </div>
  );
};

export default Layout;
