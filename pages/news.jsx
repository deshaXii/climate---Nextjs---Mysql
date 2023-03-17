import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import NewsIstifyScroll from "@/components/newsIstifyScroll";
import Head from "next/head";
import Default from "@/layout/default";
import PageTitle from "@/components/pageTitle";

function NewsContainer(props) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10`
      );
      if (!response.data.data.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.data]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (+(scrollTop + clientHeight).toFixed() === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <>
      <Head>
        <title>News - climate</title>
      </Head>
      <Default>
        <PageTitle
          title="Read the latest news"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet repellat odit odio nam nisi excepturi fuga libero eligendi natus."
          image="/images/news-background-img.jpg"
          marked="Everything new"
        />
        <div style={{ padding: "30px" }}>
          <NewsIstifyScroll
            onScroll={onScroll}
            listInnerRef={listInnerRef}
            userList={userList}
          />
        </div>
      </Default>
    </>
  );
}

export default NewsContainer;
