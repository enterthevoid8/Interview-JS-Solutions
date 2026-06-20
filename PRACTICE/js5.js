throttling, debouncing, polyfills

let p = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("called after 3 seconds")
  }, 3000)
})

// p.then((res) => console.log(res))
async function callAsync() {
  const data = await p
  console.log(data)
}

callAsync()



async fetchData(){
	try {
		const res = await fetch("http://jsonplaceholder.typicode.com/users/1")
		const data = await res.json();
		console.log(data.name)
	} catch (err) {
		console.log("error: ", err)
	}
}

fetchData();