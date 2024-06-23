import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../features/apiSlice";
import ProductPreview from "../components/Product/ProductPreview";
import Aside from "../components/Aside";
import Spinner from "../components/Spinner";
import { useState } from "react";
import SortByPrice from "../components/SortByPriceForm";

export default function Home() {
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [sortByPrice, setSortByPrice] = useState<"" | "asc" | "desc">("");

  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  if (isLoading) return <Spinner />;

  if (isError) return <div>{error.toString()}</div>;

  let filteredProducts =
    categoriesFilter.length > 0
      ? products?.filter((product) =>
          categoriesFilter.includes(product.category),
        )
      : products;

  if (sortByPrice && filteredProducts) {
    filteredProducts = filteredProducts.slice().sort((a, b) => {
      return sortByPrice === "asc" ? a.price - b.price : b.price - a.price;
    });
  }

  return (
    <div className="flex flex-wrap px-2">
      <Aside handleCategoryClick={handleSetCategory} categories={categories} />
      <section className="mx-auto">
        <SortByPrice handleOnChange={handleSortByPrice} />
        <div className="grid grid-cols-3 gap-4 my-2">
          {filteredProducts?.map((product) => (
            <ProductPreview key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );

  function handleSetCategory(category: string) {
    if (categoriesFilter.includes(category)) {
      const updatedCategories = categoriesFilter.filter((c) => c !== category);
      setCategoriesFilter(updatedCategories);
      return;
    }

    setCategoriesFilter([...categoriesFilter, category]);
  }

  function handleSortByPrice(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "asc" || e.target.value === "desc") {
      setSortByPrice(e.target.value);
    }
  }
}
