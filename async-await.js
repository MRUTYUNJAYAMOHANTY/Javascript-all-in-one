// ES5 -> Callback
// ES6 -> Promise
// ES7 -> async & await

const showPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
   }
   
   showPosts();