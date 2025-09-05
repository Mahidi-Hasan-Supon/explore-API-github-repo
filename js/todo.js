const loadTodo =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        postTodo(data)
    })
}

/* completed: false
id: 1
title: "delectus aut autem"
userId: 1
*/


const postTodo =(posts)=>{
    // 1.get id
    const todoContainer = document.getElementById('todo-container')
    // console.log(todoContainer)

    posts.forEach((post)=>{
        console.log(post)
        // 2.create element
        const div = document.createElement('div')
        div.innerHTML =`
        <div id="todo-card">
        <p>${post.completed == true ? `'complete'` : 'non complete'}</p>
        <h1>${post.title}</h1>
        

        </div>
        `;
        // 3.append child
        todoContainer.append(div)


    })
}

loadTodo()
