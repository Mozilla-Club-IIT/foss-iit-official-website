import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MeetDevs from "./pages/MeetDevs";

import Navigation from "./components/Navigation";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import AllEvents from "./pages/AllEvents";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // ================================ Console note ================================================================

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/devs" element={<MeetDevs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/all-events" element={<AllEvents />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
