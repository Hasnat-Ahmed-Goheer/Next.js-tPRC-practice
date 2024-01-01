import React from "react";

type paramsType = {
  params: {
    searchTerm: string;
  };
};
type resultType = {
  organic_results: {
    map(arg0: (item: any) => React.JSX.Element): React.ReactNode;
    position: number;
    title: string;
    link: string;
    snippet: string;
    thumbnail: string;
  };
};

// ----------------------------------------------
const getSearchResults = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  // throw new Error("Error in fetching the data");
  const data: resultType = await res.json();
  return data;
};
// ----------------------------------------------
const SearchResults = async ({ params }: paramsType) => {
  const { searchTerm } = params;
  const result = await getSearchResults(searchTerm);
  return (
    <div>
      <p className="p-4 text-lg">You Searched for : {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {result.organic_results?.map((item) => {
          return (
            <li key={item.position} className="border-b-2 pb-4 list-decimal">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-sm">{item.snippet}</p>
              <p className="text-sm">{item.link}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SearchResults;
