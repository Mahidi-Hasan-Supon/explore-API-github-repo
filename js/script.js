
function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((respons) => respons.json())
    .then((data) => console.log(data))


}

const loadpost = () => {
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((post) => {
        console.log(post)
        displaypost(post)
    })
}


const displaypost = (post) =>{
    post.forEach(post => {
        console.log(post)
    });

}





