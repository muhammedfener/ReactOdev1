import axios from "axios";

export default async function getData(Number) {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + Number);

    return { user, post }
}