import { notFound } from "next/navigation";
// this is the same as server side rendering of next 12 so there is no need to create server side rendering function in 13
// meaning that if we are only SSGing 20 posts and write 21 in the url then it will show the SSR page instead of showing nothing which will take time to load and the following reserved statement is used for that if true then it will render SSR pages if false then it will show nothing
export const dynamicParams = true; // it is true by default

// since we are SSG these pages now we click on a post it shows that post but what if  we send a request like to 100000 page by typing it in the url then it will open that page but there will be no data there which should have caused an error but didn't therefore we put a check at the request so that if the data is not there then it will show a 404 page instead of showing nothing and next js provides the notFound function for that as shown above

type paramsType = {
  params: {
    postId: string;
  };
};
type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
// this is the same as server side rendering of next 12 so there is no need to create server side rendering function in 13
// {
// this will force server side rendering
//   cache: "no-cache";
//  this will force static site generation
// this is the default
//   cache: "force-cache";
const getPost = async (postId: string) => {
  //  since we are sending the request to ISR (incremental static regeneration) we will use the revalidate property to revalidate the data after some time so we can use this to create SSG pages as shown in this example
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    { next: { revalidate: 3600 } }
  );
  return response.json();
};

const PostId = async ({ params }: paramsType) => {
  const { postId } = params;
  const post = await getPost(postId);
  if (!post.id) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostId;

// ____________________________________________________________________________________________________________________________________
// this function will run at build time and will generate all the static pages for the posts SSG (static site generation) pages instead of only static which will make the pages load faster
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  // this return is basically telling next.js that we want to generate static pages for all the posts in the posts array meaning that if there are 100 posts then 100 pages will be generated
  const trimmedPosts = data.slice(0, 10);
  return trimmedPosts.map((post: postType) => ({
    // postId refers to the pathname of the page as said [postId] in the app directory and the since id is what determines the post we want to show we will pass it as a query parameter and we have to make sure that it is passed as a string that is why we are using toString() method on the id property. this can be used for any call to an api that returns an array of objects or to a database that returns an array of objects
    postId: post.id.toString(),
    // the pattern for it return need to be
    // [{<nameOfRoute in this case postId>:'1'},{postId:'2'},{ postId:'3'},...] so that the pages can be generated
  }));
}
// since we are using generateStaticParams() function to generate the static pages we have to make sure that the requests we make are limited if the api has a limit and it might overload the server
// const trimmedPosts = data.slice(0, 10);
// ____________________________________________________________________________________________________________________________________
