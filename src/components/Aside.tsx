interface Aside {
  handleCategoryClick: (category: string) => void;
  categories: string[] | undefined;
}

export default function Aside({ handleCategoryClick, categories }: Aside) {
  return (
    <aside>
      <form className="sticky top-16 w-[150px]">
        {categories?.map((category) => (
          <label
            id={category}
            key={category}
            className="flex gap-2 cursor-pointer"
          >
            {category}
            <input
              type="checkbox"
              value={category}
              className="order-[-1] accent-yellow-400 w-[18px] cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            />
          </label>
        ))}
      </form>
    </aside>
  );
}
