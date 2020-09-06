import { Map } from 'immutable';

// let book = { title: "Harry Potter" };

let book = Map({ title: "Harry Potter" });

function publish(book) {
    return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
