import SearchComp from "@/components/search/SearchComp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <head>
      <title>Search Page</title>
    </head>
      <main className="flex space-x-4 divide-x-2 p-5">
        <h1>Search</h1>
        <div className="flex-1 pl-5">
          <SearchComp />

          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
