import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./features/header/Header";
import Gallery from "./pages/Gallery";
import { LanguageProvider } from "./context/useLanguageContext";
import SingleAlbum from "./features/album/SingleAlbum";
import Albums from "./features/gallery/Albums";
import ThemeModeProvider from "./context/ThemeModeContext";
import FooterMain from "./features/footer/Footer";
import SingleSubAlbum from "./features/album/SingleSubAlbum";
import AdminProvider from "./context/useAdminContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeModeProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Toaster />
          <AdminProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Gallery />}>
                <Route index element={<Albums />} />
                <Route path=":id/sub-albums" element={<SingleAlbum />} />
                <Route
                  path=":albumId/sub-albums/:subAlbumId"
                  element={<SingleSubAlbum />}
                />
              </Route>
            </Routes>
            <FooterMain />
          </AdminProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ThemeModeProvider>
  );
}

export default App;
