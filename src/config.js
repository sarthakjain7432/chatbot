import { createChatBotMessage } from "react-chatbot-kit";
import Gotit from "./components/Gotit";
import Slot from "./components/Slot";
import ExitCounter from "./components/Exit";
import AskAge from "./components/AskAge";
const config = {
  initialMessages: [createChatBotMessage(` Hello, Welcome to student info system!`, {
    widget: 'gotit'
  })],
  widgets: [
    {
        widgetName: "gotit",
        widgetFunc: (props) => <Gotit {...props} />
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slot {...props} />
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <ExitCounter {...props} />
    },
    {
      widgetName: "askage",
      widgetFunc: (props) => <AskAge {...props} />
    }
  ]
}

export default config