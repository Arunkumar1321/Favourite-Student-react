import Favourite from "./Pages/Favourite";
import Stdlist from "./Pages/Studlist";
import Listprovider from "./Components/ListProvider";
import { Route,Routes,BrowserRouter } from "react-router-dom";

function App() {
  return (<div>
    <Listprovider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stdlist/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
      </Routes>
      </BrowserRouter>
      </Listprovider>
  </div>)
 
}

export default App;
