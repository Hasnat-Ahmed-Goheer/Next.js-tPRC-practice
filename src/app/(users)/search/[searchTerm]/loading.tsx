import React from 'react'

const Loading = () => {
  return (
    <div>Loading Search Results</div>
  )
}

export default Loading

// for the loading state there is also A Suspense component that can be used to wrap the component that is loading
// import { Suspense } from "react";
// import { PostFeed, Weather } from "./Components";

// export default function Posts() {
//   return (
//     <section>
//       <Suspense fallback={<p>Loading feed...</p>}>
//         <PostFeed />
//       </Suspense>
//       <Suspense fallback={<p>Loading weather...</p>}>
//         <Weather />
//       </Suspense>
//     </section>
//   );
// }

// the fallback prop is what is shown while the component is loading
// the fallback prop can be a component or a string
// what this does is that it essentially shows a loading state on the screen on that particular component while it is loading the data and after it is done loading the data it will show the component in it place it is used in the page.tsx not in the loading.tsx file confer docs for more info
