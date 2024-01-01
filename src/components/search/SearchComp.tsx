"use client";
import { useRouter } from "next/navigation";
// form event is used as a type for the event object
import { useState, FormEvent } from "react";

const SearchComp = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search Term"
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 p-2 m-2 rounded-md
        focus:outline-none focus:ring-2 focus:ring-red-500
        text-black "
      />
      <button type="submit" className="border-2 p-2 bg-red-500 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchComp;
