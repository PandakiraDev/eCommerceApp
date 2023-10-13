"use client";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";

export const NavbarSearchInput = () => {
  const router = useRouter();

  const debouncedSearch = debounce((query: string) => {
    router.replace(`/search/1?query=${query}`);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      className="w-24 border border-1 border-black"
    />
  );
};
