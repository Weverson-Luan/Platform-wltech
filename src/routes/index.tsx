import { Route, Routes} from "react-router-dom";
import Event from "../pages/Event/Event";
import Subscription from "../pages/Subscription/Subscription";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={ <Subscription/> }/>
      <Route path="/event" element={ <Event /> }/>
      <Route path="/event/lesson/:slug" element={ <Event /> }/>
    </Routes>
  );
};