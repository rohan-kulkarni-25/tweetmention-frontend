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
      try {
        const response = await fetch(
          "https://tweet-api-mentions-production.up.railway.app/api/v1/tweets"
        );
        const newData = await response.json();
        let latestData = newData.data;
        latestData.length = 20;
        setData(latestData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
   
  return (
    <div className="bg-blue-950">
    <h1 className="text-white text-center pt-8 text-8xl font-bold">HACK THE LEAGUE 2.0</h1>
    <div className="p-12 mt-2 grid grid-cols-4 gap-4 justify-evenly ">

      {data.map((item) => {
        console.log(Math.floor(Math.random() * 6));
        return (


          <div className={`mt-${generateRandomInteger(1,4)} mb-${generateRandomInteger(1,4)}  overflow-scroll h-128 w-full place-self-center rotate-${generateRandomInteger(1,4)}`}>
            <TwitterTweetEmbed key={item.id} tweetId={item.id} />
 
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
