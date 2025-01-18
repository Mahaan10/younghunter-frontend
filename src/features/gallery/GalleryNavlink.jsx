import { NavLink } from "react-router-dom";
import { useAccordion } from "../../context/useAccordionContext";
import useAlbums from "../../hooks/useAlbums";
import Loading from "../../ui/Loading";
import { HiChevronDown } from "react-icons/hi2";
import { useLanguage } from "../../context/useLanguageContext";

function GalleryNavlink() {
  const { albums, isLoading } = useAlbums();
  //const { setIsOpen, isOpen } = useGalleryContext();
  const { language } = useLanguage();
  const { openSubAlbumId, openAccordion, closeAccordion } = useAccordion();

const openAccordionHandler = (id) => {
 openAccordion(id === openSubAlbumId ? null : id)
}

  const navlinkClass =
    "flex items-center transition-all duration-300 bg-gray-300 py-2 rounded-md";

  if (isLoading) return <Loading />;

  return albums.map((album) => (
    <li className="" key={album._id}>
      <NavLink
        onClick={() => openAccordionHandler(album._id)}
        className={
          album._id === openSubAlbumId
            ? `${navlinkClass} !bg-gray-800 hover:!bg-gray-900 text-white`
            : `${navlinkClass} hover:bg-gray-400`
        }
      >
        <SubAlbum
          album={album}
          openSubAlbumId={openSubAlbumId}
          onClose={closeAccordion}
          language={language}
        />
      </NavLink>
    </li>
  ));
}

export default GalleryNavlink;

const SubAlbum = ({ album, openSubAlbumId, onClose, language }) => {
  const isOpen = album._id === openSubAlbumId;
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between px-4">
        <span>{`${language === "en" ? album.title.en : album.title.fa}`}</span>
        <button onClick={() => onClose()}>
          <HiChevronDown
            className={`text-lg`}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>
      <SubAlbumItem
        album={album}
        isOpen={isOpen}
        onClose={onClose}
        language={language}
      />
    </div>
  );
};

const SubAlbumItem = ({ album, isOpen, onClose, language }) => {
  return (
    <div
      className={`${
        isOpen
          ? "flex flex-col w-[95%] mx-auto mt-1 transition duration-300"
          : "hidden"
      }`}
    >
      {album.tags.en.map((tag) => (
        <div
          className={`w-full bg-gray-950 rounded-md px-4 mt-1 hover:bg-gray-600 text-white`}
          key={tag}
          onClick={() => onClose()}
        >
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};
