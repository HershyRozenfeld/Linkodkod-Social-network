import { log } from "node:console";
import { readFile, writeFile } from "node:fs/promises";

const filePath = "./public/db/posts.json";

export async function readPostsFromFile() {
    try {
        const data = await readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading the file:", err);
        return {};
    }
}

export async function setPost(newPost) {
  try {
    const postsData = await readPostsFromFile();
    const allIds = Object.values(postsData)
      .flat()
      .map((p) => p.id);
    const newId = Math.max(...allIds, 0) + 1;
    const postObj = {
      id: newId,
      writer: newPost.writer,
      description: newPost.description,
      imgUrl: newPost.imgUrl,
      likesCount: newPost.likesCount,
      createDate: newPost.createDate,
    };
    postsData.push(postObj);
    console.log(postsData)
    await writePostsToFile(postsData);
    return 
  } catch (err) {
    console.error("Error adding post:", err);
  }
}


async function writePostsToFile(postsData) {
  try {
    await writeFile(filePath, JSON.stringify(postsData, null, 4));
    console.log("File updated successfully!");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}