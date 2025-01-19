import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import Gallery from "./pages/Gallery";
import { LanguageProvider } from "./context/useLanguageContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="albums" element={<Gallery />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
