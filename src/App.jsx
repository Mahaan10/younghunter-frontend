import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./features/header/Header";
import Gallery from "./pages/Gallery";
import { LanguageProvider } from "./context/useLanguageContext";
import SingleAlbum from "./features/album/SingleAlbum";
import Albums from "./features/gallery/Albums";
import ThemeModeProvider from "./context/useThemeModeContext";
import FooterMain from "./features/footer/Footer";
import SingleSubAlbum from "./features/album/SingleSubAlbum";
import AdminProvider from "./context/useAdminContext";
import Empty from "./ui/Empty";
import AdminPageLayout from "./features/admin/layout/AdminPageLayout";
import Admin from "./pages/Admin";
import AdminImagesPageLayout from "./features/admin/images/AdminImagesPageLayout";
import AdminAlbumsPageLayout from "./features/admin/album/AdminAlbumsPageLayout";
import HomePageLayout from "./features/carousel/HomePageLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeModeProvider>
      <AdminProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <Toaster />
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<HomePageLayout />}>
                <Route index element={<Home />} />
                <Route path="albums" element={<Gallery />}>
                  <Route index element={<Albums />} />
                  <Route path=":id/sub-albums" element={<SingleAlbum />} />
                  <Route
                    path=":albumId/sub-albums/:subAlbumId"
                    element={<SingleSubAlbum />}
                  />
                </Route>
              </Route>
              {/* <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Gallery />}>
                <Route index element={<Albums />} />
                <Route path=":id/sub-albums" element={<SingleAlbum />} />
                <Route
                  path=":albumId/sub-albums/:subAlbumId"
                  element={<SingleSubAlbum />}
                />
              </Route> */}
              <Route path="/admin" element={<AdminPageLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Admin />} />
                <Route path="images" element={<AdminImagesPageLayout />} />
                <Route path="albums" element={<AdminAlbumsPageLayout />} />
              </Route>
              <Route path="*" element={<Empty />} />
            </Routes>
            {/* <FooterMain /> */}
          </LanguageProvider>
        </QueryClientProvider>
      </AdminProvider>
    </ThemeModeProvider>
  );
}

export default App;
