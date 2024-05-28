'use client'
import { useCopilotAction } from "@copilotkit/react-core";
import { useCopilotChatSuggestions } from "@copilotkit/react-ui";

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}


export function CopilotConfig() {
  useCopilotChatSuggestions({
    instructions: "Your instructions for suggestions.",
    minSuggestions: 3
  });

  useCopilotAction(
    {
      name: "weather",
      description: "查询城市天气",
      parameters: [
        {
          required: true,
          name: "cityName",
          type: "string",
          description: "城市名称",
        },
      ],
      handler: async ({ cityName }) => {
        await delay(500)
        console.log(`Hello, ${cityName}!`);
        return `天气结果：The weather in ${cityName} is sunny.`;
      },
      render: ({ status, args, result }) => {
        return (status === "complete" ? "☑️ Done!" : "Processing...")
      }

    }
  );
  return <></>
}