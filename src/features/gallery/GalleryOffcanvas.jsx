import useAlbums from "../../hooks/useAlbums"
import Loading from "../../ui/Loading"
import { Drawer, Sidebar } from "flowbite-react";
import { HiMiniXMark } from "react-icons/hi2";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { useGalleryContext } from "../../context/useGalleryContext";


function GalleryOffcanvas() {
  const {albums, isLoading} = useAlbums()
  const {isOpen, setIsOpen, value, setValue} = useGalleryContext()
  



  return (
    <div className="flex flex-col">
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        className="transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo demo.jpg" alt="" className="w-10" />
          </div>
          <button
            className="rounded-md p-1 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <HiMiniXMark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="w-full relative justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="my-2 rounded-xl w-64 bg-gray-700 text-white hover:border-blue-500 focus:border-blue-500 focus:bg-gray-800 transition-all duration-300 ease-out shadow-sm shadow-slate-800 focus:shadow-slate-950 focus:shadow-md placeholder-white placeholder-opacity-70"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="absolute right-4 top-2 bg-gray-400 border border-gray-500 rounded-r-xl py-1.5">
            <PiMagnifyingGlassDuotone className="size-7" />
          </button>
        </div>
        {isLoading ? <Loading/> : <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {albums.map((album) => (
                      <li className="" key={album._id}>
                        {album.title.en}
                      </li>
                    ))}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>}
      </Drawer>
    </div>
  )
}

export default GalleryOffcanvas