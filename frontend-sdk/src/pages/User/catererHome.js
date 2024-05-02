import React from "react";
import Navbar from "../../components/Navbar";
import Usercount from "../../components/usercount";
import BidPopup from "../../components/bidpopup";
import Postbid from "../../components/postbid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CatererHome = () => {
  const { cid } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/post/all")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postset1 = posts.map((post, idx) => (
    <Postbid
      postheadline={post.post_headline}
      uname={post.username}
      description={post.post_description}
      num={idx}
      bids={post.bids}
      eventcount={posts.event_count}
      postid={post.post_id}
      caterer={cid}
    ></Postbid>
  ));

  const postcount = posts.length;

  return (
    <div className="w-screen h-screen overflow-auto">
      <Navbar />
      <div className="Headline h-1/3 w-full bg-teal-800 flex flex-col lg:flex-row items-center justify-between px-4 py-4 shadow-2xl">
        <div className="w-full lg:w-1/2 lg:ml-16 mb-4 lg:mb-0 text-center lg:text-left">
          <p className="text-white text-3xl lg:text-[90px] font-bold mb-3">
            Discover & Bid
          </p>
          <p className="text-blue-300 text-lg lg:text-2xl font-semibold">
            From a wide range of events posted by users!
          </p>
        </div>
        <div className="Count flex w-full lg:w-2/3 bg-white h-full items-center rounded-[6px] shadow-xl mt-4 lg:mt-0">
          <Usercount
            ncaterer="352"
            nuser="600"
            nbid="20156"
            nevent={postcount}
          />
        </div>
      </div>

      <div className="text-xl lg:text-2xl font-semibold my-8 mx-4 lg:ml-12 font-mono">
        Events happening near you:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 mt-4 mx-4 lg:ml-10 gap-y-8">
        {postset1}
      </div>

      <div className="text-xl lg:text-2xl font-semibold my-8 mx-4 lg:ml-12">
        Events based on your signature dish:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 mt-4 mx-4 lg:ml-10 gap-y-8">
        <Postbid
          postheadline="Italian Fest"
          uname="uname"
          date="date"
          description="Blah blah"
          num="1"
          bids={[
            { c_name: "Suvan", amount: "10000" },
            { c_name: "Suvan", amount: "10000" },
          ]}
        />
        <Postbid
          postheadline="Italian Fest"
          uname="uname"
          date="date"
          description="Blah blah"
          num="2"
          bids={[
            { c_name: "Suvan", amount: "10000" },
            { c_name: "Svan", amount: "10000" },
          ]}
        />
        <Postbid
          postheadline="Italian Fest"
          uname="uname"
          date="date"
          description="Blah blah"
          num="2"
          bids={[
            { c_name: "Suvan", amount: "10000" },
            { c_name: "Svan", amount: "10000" },
          ]}
        />
        <Postbid
          postheadline="Italian Fest"
          uname="uname"
          date="date"
          description="Blah blah"
          num="2"
          bids={[
            { c_name: "Suvan", amount: "10000" },
            { c_name: "Svan", amount: "10000" },
          ]}
        />
        <Postbid
          postheadline="Italian Fest"
          uname="uname"
          date="date"
          description="Blah blah"
          num="2"
          bids={[
            { c_name: "Suvan", amount: "10000" },
            { c_name: "Svan", amount: "10000" },
          ]}
        />
      </div>
    </div>
  );
};

export default CatererHome;
