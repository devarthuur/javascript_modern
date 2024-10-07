const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...")

post.addComment("Arthur alb", "Muito bom!!")
post.addComment("ágata", "achei interessante.")

console.log(john)
console.loh(post)