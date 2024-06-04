import React, { useEffect } from "react";
import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { events } from "@/data/shows";
import { vapi } from "@/lib/vapi.sdk";

interface ShowsComponentProps {
  showList: Array<(typeof events)[number]>;
}

function ShowsComponent({ showList = [] }: ShowsComponentProps) {
  return (
    <div className=" flex   justify-center items-center sm:flex-col  flex-col lg:flex-row 
      container  gap-8 py-4">
      {showList.map((show) => (
        <div key={show.title} className=" w-80  h-72 lg:w-96 lg:h-96  py-5 m-14 gap-8 mb-10 p-5">
          <img
            className="h-auto my-4 w-full p-10 rounded-lg object-cover transition-all hover:scale-105 aspect-[3/4]"
            src={show.img}
            alt={show.title}
          />
          <h2 className="text-xl font-bold text-center">{show.title}</h2>
          {/* <p className="text-gray-500 font-bold"> {show.theatre}</p> */}
          {/* <p className="text-gray-500">{show.date.toLocaleString()}</p> */}
          {/* <p className="text-gray-500">$ {show.price}</p> */}
        </div>
      ))}
    </div>
  );
}

export { ShowsComponent };
