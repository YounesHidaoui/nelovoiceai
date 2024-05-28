import React, { useEffect } from "react";
import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { events } from "@/data/shows";
import { vapi } from "@/lib/vapi.sdk";

interface ShowsComponentProps {
  showList: Array<(typeof events)[number]>;
}

function ShowsComponent({ showList = [] }: ShowsComponentProps) {
  return (
    <div className=" flex  flex-row  justify-center items-center  container  gap-8 py-4">
      {showList.map((show) => (
        <div key={show.title} className=" w-80 h-80">
          <img
            className="h-auto my-4 w-full rounded-lg object-cover transition-all hover:scale-105 aspect-[3/4]"
            src={show.img}
            alt={show.title}
          />
          <h2 className="text-xl font-bold">{show.title}</h2>
          <p className="text-gray-500 font-bold"> {show.theatre}</p>
          {/* <p className="text-gray-500">{show.date.toLocaleString()}</p> */}
          <p className="text-gray-500">$ {show.price}</p>
        </div>
      ))}
    </div>
  );
}

export { ShowsComponent };
