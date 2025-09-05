// const postcomment=()=>{
//     const url = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(url)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         postComment(data)
//     })

// }


// const postComment = (posts) =>{
//     // / 1.id get kora
//     const ulContainer = document.getElementById('ul-container')
//     ulContainer.innerHTML = ""
//     // console.log(ulContainer)

//     posts.forEach(post => {
//         // console.log(post.body)
//          // 2. create li
//         const li = document.createElement('li');
//         li.innerText = post.title
//         // console.log(li)
//         // 3.add kora
//         ulContainer.appendChild(li)

//     })
// }






const postcomment=()=>{0
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        postComment(data)
    })

}
// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }


const postComment =(posts)=>{
    // get container id
    const postContainer = document.getElementById('post-container')
    posts.forEach((post)=>{
        // console.log(post)
        // create element
        const div = document.createElement('div')
        div.innerHTML =`
            <div class="post-card">
            <h1>${post. title}</h1>
            <p>${post.body}</p>

        </div>
        `
        // 3. append koro cointer e
        postContainer.append(div)
    })


}

postcomment()


