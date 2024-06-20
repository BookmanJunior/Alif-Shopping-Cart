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
      <form>
        {categories?.map((category) => (
          <label htmlFor={category} key={category}>
            {category}
            <input
              type="checkbox"
              value={category}
              onClick={() => handleCategoryClick(category)}
            />
          </label>
        ))}
      </form>
    </aside>
  );
}
