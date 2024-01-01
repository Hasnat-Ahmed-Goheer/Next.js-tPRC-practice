import Link from "next/link";

// this is the same as server side rendering of next 12 so there is no need to create server side rendering function in 13
// {
  // this will force server side rendering
//   cache: "no-cache";
  //  this will force static site generation
  // this is the default
//   cache: "force-cache";

// if we want to revalidate the data after some time we can use ISR (incremental static regeneration)
// {next:{revalidate:60}}} this will revalidate the data after 60 seconds

// }
const getPosts = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-cache"});
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
const Posts = () => {
  return (
    <div>
      {getPosts().then((posts) => {
        return (
          <div>
            {posts.map((post: { id: number; title: string }) => (
              <div key={post.id} className=" text-lg">
                <br />
                <span>{post.id}: </span>
                <Link href={`posts/${post.id}`}>
                  <span>{post.title}</span>
                </Link>
                <br />
                <hr />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};



export default Posts;
