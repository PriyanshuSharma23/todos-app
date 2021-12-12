const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function SideBar({ categories, setCategories }) {
  const date = new Date();

  function handleSideBarItemClick(selectedCat) {
    let newCategories = [...categories];
    newCategories = newCategories.map((category) => {
      if (category.selected) {
        return { ...category, selected: false };
      } else {
        return category;
      }
    });

    newCategories = newCategories.map((category) => {
      if (selectedCat.id === category.id) {
        return { ...category, selected: true };
      } else {
        return category;
      }
    });

    setCategories(newCategories);
  }
  return (
    <div className="w-full md:w-1/2 lg:w-1/5 transition-all bg-gray-800 h-screen relative">
      <div className="text-4xl font-bold text-center p-3 bg-blue-500 text-white">
        Todus🔥
      </div>
      <div className="px-2 py-10">
        {categories.map((category) => (
          <div
            className={` hover:text-gray-50  transition-all text-xl flex gap-5 items-center border-b-gray-500 p-2 cursor-pointer ${
              category.selected ? "text-gray-50" : "text-gray-400"
            }`}
            onClick={() => {
              handleSideBarItemClick(category);
            }}
            key={category.id}
          >
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 text-gray-100 text-3xl text-left w-full px-3 pb-5">
        {`${days[date.getDay()]}`} <br />
        {`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}
      </div>
    </div>
  );
}

export default SideBar;
