const postTemplate = document.getElementById("single-post");
const listElement = document.querySelector(".posts");
const btnFetch = document.querySelector("#available-posts button");
const form = document.querySelector("#new-post form");
const list = document.querySelector("ul.posts");

const sendRequest = (method, url, data) => {
  // const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest()
  //     xhr.setRequestHeader('Content-Type', 'application/json')
  //     xhr.open(method, url)
  //     xhr.responseType = 'json'
  //     xhr.onload = function () {
  //         if(xhr.status >= 200 && xhr.status < 300){
  //             resolve(xhr.response)
  //         }else{
  //             reject(new Error('Failed'))
  //         }
  //     }
  //     xhr.send(JSON.stringify(data))

  // })
  console.log(method);
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const fetchData = () => {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/post")
    .then((res) => {
      console.log(res.status);
      for (const post of res) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").innerText = post.title.toUpperCase();
        postEl.querySelector("p").innerText = post.body.toUpperCase();
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const addPost = async (body, title) => {
  const params = {
    body,
    title,
    userId: Math.random(),
  };
  await sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    params
  ).then((res) => {
    console.log(res);
  });
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = e.currentTarget.querySelector("#title").value;
  const body = e.currentTarget.querySelector("#content").value;
  await addPost(body, title);
  alert("data berhasil ditambahkan");
  form.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const idPost = e.target.closest("li").id;
    sendRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
  }
});

btnFetch.addEventListener("click", () => {
  fetchData();
});
