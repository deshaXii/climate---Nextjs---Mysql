import Head from "next/head";
import axios from "@/components/axios";
import Default from "@/layout/default";
import AboutSimple from "@/components/aboutSimple";
import Intro from "@/components/intro";
import Video from "@/components/video";
import LatestNews from "@/components/latestNews";
import AboutSimple2 from "@/components/aboutSimple2";

export default function Home({ data, error, seoData, pinnedCats, siteImages }) {
  return (
    <>
      <Head>
        <title>Climate - {seoData?.home_title}</title>
        <meta name="description" content={seoData?.home_description} />
      </Head>
      <Default pinnedCats={pinnedCats} siteInfo={data?.info}>
        <Intro
          image={siteImages?.intro}
          title={seoData?.intro_title}
          subTitle={seoData?.intro_subtitle}
        />
        <AboutSimple image={siteImages?.about1} />
        {data?.video?.image.length ? (
          <Video
            image={siteImages?.video}
            data={data?.video}
            vide_url={data.info?.video_url || "Uszj_k0DGsg"}
          />
        ) : (
          "Add Video From DB"
        )}
        <AboutSimple2 image={siteImages?.about2} />
        <LatestNews
          data={data?.blogs?.slice(0, 6)}
          title={seoData?.latest_news_title}
          description={seoData?.latest_news_description}
          subtitle={seoData?.latest_news_subtitle}
        />
      </Default>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const blogRes = await axios.get("/api/blogs");
    const siteInfo = await axios.get("/api/site-information");
    const videoRes = await axios.get("/api/video");
    return {
      props: {
        data: {
          blogs: blogRes?.data,
          video: videoRes?.data[0],
          info: siteInfo?.data[0],
        },
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        error: err.message,
      },
    };
  }
}
