fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

fetch(url).then(function(response){
return response.json();
}).then(function(data){
console.log(data.posts)
}).catch(function(error){
console.log("some error occured",error)
});

//async await modern fetch
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.warn('Something went wrong.', err);
  }
}
getPosts();