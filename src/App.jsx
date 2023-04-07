import React, { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

function App() {
  const [data, setData] = useState([
    {
      text: "@Chinmay0408 @HackTheLeague @techking_007 Thank you bro🫂",
      id: "1644390890419666945",
      edit_history_tweet_ids: ["1644390890419666945"],
      created_at: "2023-04-07T17:25:14.000Z",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Geting");
      try {
        const response = await fetch(
          "https://tweet-api-mentions-production.up.railway.app/api/v1/tweets"
        );
        const newData = await response.json();
        const value = newData.data.data;
        value.length = 20;
        setData(value);
      } catch (error) {
        console.error(error);
      }
    };
    const loadScript = async () => {
      const scriptModule = await import("scriptjs");
      const script = scriptModule.default;

      // ... specific script() call for given useEffect
    };

    loadScript();
    setInterval(fetchData, 10000);
    fetchData();
  }, []);

  return (
    <div className="bg-blue-950">
      <h1 className="text-white text-center pt-8 text-8xl font-bold">
        HACK THE LEAGUE 2.0
      </h1>
      <p className="text-center text-white text-2xl pt-8 font-mono">
        tweet your experience
      </p>

      {data.length > 0 ? (
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
      ) : (
        <span>LOADING</span>
      )}
    </div>
  );
}

export default App;
