import HelpPose from "./components/HelpPose";
import { Routes, Route } from "react-router-dom";
import CreateQuestion from "./components/Questions/CreateQuestion";

function App() {
  return (
  <>
  
  <Routes>
        <Route path="/" index element={<HelpPose />} />
        <Route path="/create-question" element={<CreateQuestion />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  </>
  );
}

export default App;
