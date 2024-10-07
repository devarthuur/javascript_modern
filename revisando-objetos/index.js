const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
        name: "Christoper Paolini"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    }
}

console.log(book)

book.addOnStock(50)

book.save = function () {

}

console.log(book)