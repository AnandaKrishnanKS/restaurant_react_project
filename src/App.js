import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestView from "./components/RestView";
import Restaurant from "./components/Restaurant";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
<Routes>
        <Route path="/" element={<Restaurant />}/>
        <Route path="/RestaurantDetails/:id" element={<RestView/>}/>      
</Routes>

      <Footer />
    </div>
  );
}

export default App;
