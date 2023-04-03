import Head from "next/head";
import axios from "@/components/axios";
import Default from "@/helpers/layout/default";
import AboutSimple from "@/components/aboutSimple";
import Intro from "@/components/intro";
import Team from "@/components/team";
import Video from "@/components/video";
import LatestNews from "@/components/latestNews";

export default function Home({ data, error }) {
  return (
    <>
      <Head>
        <title>Climate - Bold actions for a net zero future</title>
        <meta
          name="description"
          content="CLIMATE is an international privately owned engineering and sustainability firm providing legendary client service and smart solutions in sustainability, climate, environmental, social, and governance (ESG) and energy transition —from the A to Z. CLIMATE was founded with a commitment to maintain the enduring pursuit of excellence, putting our responsibility to our clients second only to our responsibility to the public. By being true to our promise for almost a decade, we’ve forged massive, long-standing relationships, believing responsiveness is the core of serving our clients. We invest in our people, technology and tools to find better solutions and foster careers. Whether you’re a client, employee, partner or stakeholder – trust that we’re the partners you want to be working with. We are collaborating with our clients to lead a wave of sustainable innovation and economic growth that safeguards the planet and advances sustainability practices. We are CLIMATE. "
        />
      </Head>
      <Default siteInfo={data?.info}>
        <Intro />
        <AboutSimple />
        {data?.video?.image.length ? (
          <Video data={data?.video} />
        ) : (
          "Add Video From DB"
        )}
        <Team data={data?.teams?.slice(0, 4)} />
        <LatestNews data={data?.blogs?.slice(0, 6)} />
      </Default>
    </>
  );
}

export async function getServerSideProps() {
  console.log("first");
  try {
    console.log("s", axios.defaults.baseURL);
    const blogRes = await axios.get("/api/blogs");
    const teamRes = await axios.get("/api/teams");
    const siteInfo = await axios.get("/api/site-information");
    const videoRes = await axios.get("/api/video");
    return {
      props: {
        data: {
          blogs: blogRes?.data,
          teams: teamRes?.data,
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
