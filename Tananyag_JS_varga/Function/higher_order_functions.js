//////////////////////forEach()//////////////////////////

import { posts } from "./post.js";

posts.forEach((post) => {
  console.log(post);
});

//////////////////////FILTERES DATA//////////////////////
const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});

console.log(filteredPosts);

//////////////////////MAP///////////////////////////////

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

//////////////////////REDUCE///////////////////////////////

//reduce-al matematikai műveletek hajthatóak végre mindenegyes elemen
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
