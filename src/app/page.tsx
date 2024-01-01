import Posts from "@/components/posts/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Posts/> */}
      <Link href='/posts'><h2 className="border-2 p-2 bg-red-500 rounded-md">Get Posts</h2></Link>
      <Link href='/search'><h2 className="border-2 p-2 bg-red-500 rounded-md">Search</h2></Link>
      <Link href='/product'><h2 className="border-2 p-2 bg-red-500 rounded-md">Product</h2></Link>
    </main>
  )
}

// [] allows for dynamic routing
// [folder]	Dynamic route segment
// [...folder]	Catch-all route segment
// [[...folder]]	Optional catch-all route segment
// (folder)	Group routes without affecting routing
// () in the routing allow for the group routing meaning that the it itself is not a route but just a group of routes that are grouped together

// _folder	Opt folder and all child segments out of routing