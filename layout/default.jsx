import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Roboto } from "next/font/google";
const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const Default = ({ children, siteInfo, pinnedCats}) => {
  return (
    <div className={font.className}>
      <Navbar siteInfo={siteInfo} pinnedCats={pinnedCats} />
      {children}
      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default Default;
