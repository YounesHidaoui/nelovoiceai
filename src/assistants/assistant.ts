import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { events } from "../data/shows";
 


export const assistant: CreateAssistantDTO | any = {

  
  name: "Movie-Mate",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt: `You're Liala, an AI assistant who can help the user decide what to do in Marrakech. Users can ask you to suggest events and book tickets. You can get the list of available events in Marrakech and show them to the user, and then you can help the user decide which ones to choose and which venues they can visit. After this, confirm the details and book the tickets.. `,
    // Upcoming Shows are ${JSON.stringify(
    //   shows
    // )}
    // `,
    functions: [
      {
        name: "suggestEvents",
        async: true,
        description: "Suggests a list of events to the user in Marrakech.",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description:
                "The location in Marrakech for which the user wants to see the events.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to see the events.",
            },
          },
        },
      },
      {
        name: "confirmDetails",
        async: true, // remove async to wait for BE response.
        description: "Confirms the details provided by the user.",
        parameters: {
          type: "object",
          properties: {
            show: {
              type: "string",
              description: "The event for which the user wants to book tickets.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to book the tickets.",
            },
            location: {
              type: "string",
              description:
                "The location for which the user wants to book the tickets.",
            },
            numberOfTickets: {
              type: "number",
              description: "The number of tickets that the user wants to book.",
            },
          },
        },
      },
      {
        name: "bookTickets",
        async: true, // remove async to wait for BE response.
        description: "Books tickets for the user.",
        parameters: {
          type: "object",
          properties: {
            show: {
              type: "string",
              description: "The event for which the user wants to book tickets.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to book the tickets.",
            },
            location: {
              type: "string",
              description:
                "The location for which the user wants to book the tickets.",
            },
            numberOfTickets: {
              type: "number",
              description: "The number of tickets that the user wants to book.",
            },
          },
        },
      },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "pFZP5JQG7iQjIQuC4Bku",
  },
  firstMessage:
    "Hi. I'm Laila, Welcome to Marrakech Events! would you like to book tickets for an event?",
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
};
