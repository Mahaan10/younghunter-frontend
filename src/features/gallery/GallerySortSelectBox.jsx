function GallerySortSelectBox() {
  return (
    <select
      name="preferSearch"
      className="w-full md:w-fit border-none focus:ring-transparent text-sm p-1 font-semibold rounded-md px-2 shadow-sm shadow-slate-800 md:mb-0 mb-2"
      onChange={(e) => console.log(e.target.value)}
    >
      <option value="New">Based on Newest</option>
      <option value="Old">Based on Oldest</option>
    </select>
  );
}

export default GallerySortSelectBox;
