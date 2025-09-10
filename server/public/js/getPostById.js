import { readPostsFromFile } from "./crudUtils.js";

export async function getPostById(id) {
    const posts = await readPostsFromFile();
    const post = posts.filter(post => post.id === id);
    return post ? post : '';
}