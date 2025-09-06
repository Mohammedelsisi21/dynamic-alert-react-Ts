import { BellRing, CheckCheck, CircleX, NotebookPen, TriangleAlertIcon } from "lucide-react";
import Alert from "./components/Alerts/Alert";

export default function App() {

  return (<>
      <Alert type="alert-default" icon={<BellRing size={20}/>} title="Upgrade your plan" description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
      <Alert type="alert-info" icon={<NotebookPen size={20}/>} title="note" description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
      <Alert type="alert-error" icon={<CircleX size={20}/>} title="Something went wrong" description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
      <Alert type="alert-warning" icon={<TriangleAlertIcon size={20}/>} title="Tips & tricks" description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
      <Alert type="alert-success" icon={<CheckCheck size={20}/>} title="your order has been procossed" description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

  </>)
}
