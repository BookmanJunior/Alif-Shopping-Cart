interface SortByPrice {
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SortByPrice({ handleOnChange }: SortByPrice) {
  return (
    <form>
      <select defaultValue={""} onChange={(e) => handleOnChange(e)}>
        <option value="" disabled>
          Sort by price
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
}
