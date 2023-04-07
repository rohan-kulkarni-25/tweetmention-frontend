import React, { useState, useEffect, useRef } from "react";
import LazyLoad from "react-lazy-load";

import "./App.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      console.log("Geting");
      try {
        const response = await fetch(
          "https://tweet-api-mentions-production.up.railway.app/api/v1/tweets"
        );
        const newData = await response.json();
        let latestData = newData.data;
        latestData.length = 20;
        // if (latestData[0].id !== data[0].id) {
        // console.log('in');
        setData(latestData);
        // } else {
        // return;
        // }
      } catch (error) {
        console.error(error);
      }
      setInterval(fetchData, 30000);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-blue-950">
      <h1 className="text-white text-center pt-8 text-8xl font-bold">
        HACK THE LEAGUE 2.0
      </h1>
      <p className="text-center text-white text-2xl pt-8 font-mono">tweet your experience</p>
      <div className="p-12 mt-2 grid grid-cols-4 gap-4 justify-evenly ">
        {data.map((item) => {
          return (
            <div
              className={`mt-4 mb-4 overflow-clip h-128 w-full place-self-center  `}
            >
              <TwitterTweetEmbed key={item.created_at} tweetId={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
