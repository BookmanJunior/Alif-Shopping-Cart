import { useGetCategoriesQuery } from "../features/apiSlice";
import Spinner from "./Spinner";

interface Aside {
  handleCategoryClick: (category: string) => void;
}

export default function Aside({ handleCategoryClick }: Aside) {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <Spinner />;

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
