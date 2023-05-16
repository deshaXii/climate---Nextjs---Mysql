import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Open_Sans } from "next/font/google";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Default = ({ children, siteInfo, pinnedCats }) => {
  return (
    <div className={font.className}>
      <Navbar siteInfo={siteInfo} pinnedCats={pinnedCats} />
      {children}
      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default Default;
