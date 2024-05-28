import { events } from "@/data/shows";
import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { vapi } from "@/lib/vapi.sdk";
import React, { useEffect } from "react";
import { ShowsComponent } from "./shows";
import { Ticket } from "./ticket";

function Display() {
  const [showList, setShowList] = React.useState<Array<(typeof events)[number]>>(
    []
  );

  const [status, setStatus] = React.useState<"event" | "confirm" | "ticket">(
    "event"
  );

  const [selectedShow, setSelectedShow] = React.useState<
    (typeof events)[number] | null
  >(null);

  const [confirmDetails, setConfirmDetails] = React.useState<{}>();

  useEffect(() => {
    const onMessageUpdate = (message: Message) => {
      if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "suggestEvents"
      ) {
        setStatus("event");
        vapi.send({
          type: MessageTypeEnum.ADD_MESSAGE,
          message: {
            role: "system",
            content: `Here is the list of suggested events: ${JSON.stringify(
              events.map((event) => event.title)
            )}`,
          },
        });
        setShowList(events);
      } else if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        (message.functionCall.name === "confirmDetails" ||
          message.functionCall.name === "bookTickets")
      ) {
        const params = message.functionCall.parameters;

        setConfirmDetails(params);
        console.log("parameters", params);

        const result = events.find(
          (show) => show.title.toLowerCase() == params.show.toLowerCase()
        );
        setSelectedShow(result ?? events[0]);

        setStatus(
          message.functionCall.name === "confirmDetails" ? "confirm" : "ticket"
        );
      }
    };

    const reset = () => {
      setStatus("event");
      setShowList([]);
      setSelectedShow(null);
    };

    vapi.on("message", onMessageUpdate);
    vapi.on("call-end", reset);
    return () => {
      vapi.off("message", onMessageUpdate);
      vapi.off("call-end", reset);
    };
  }, []);

  return (
    <>
      {showList.length > 0 && status == "event" ? (
        <ShowsComponent showList={showList} />
      ) : null}
      {status !== "event" ? (
        <Ticket
          type={status}
          show={selectedShow ?? events[0]}
          params={confirmDetails}
        />
      ) : null}
    </>
  );
}

export { Display };
