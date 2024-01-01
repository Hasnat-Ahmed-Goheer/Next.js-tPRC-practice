import { publicProcedure, router } from "./trpc";
export const appRouter = router({
  // ...
  getTodoList: publicProcedure.query(async () =>{
    return [
      { id: 1, text: "Buy milk", done: false },
      { id: 2, text: "Buy eggs", done: false },
      { id: 3, text: "Buy bread", done: false },
    ];
  }),
  // when we are using the BrowserOnly API we have to make sure that the component where we need to use this function is client side rendered
  
  getPosts:publicProcedure.query(async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
  })

});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
