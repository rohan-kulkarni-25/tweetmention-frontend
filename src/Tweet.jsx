import React from 'react';


function Tweet({ username, handle, date, text, avatar }) {
  return (
    <div className="flex border-b border-gray-200 hover:bg-gray-50">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4"
        src={avatar}
        alt={`${username}'s avatar`}
      />
      <div className="w-full">
        <div className="flex justify-between">
          <span className="font-bold">{username}</span>
          <span className="text-gray-500">@{handle}</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}


export default Tweet;
