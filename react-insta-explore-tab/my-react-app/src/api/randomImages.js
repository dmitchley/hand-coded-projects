export async function fetchPosts() {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let endpoint = await fetch(`https://picsum.photos/seed/${randomNumber}/600/600`);

  return {
    image: endpoint,
    likes: randomNumber,
  };
}
