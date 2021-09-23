console.log('Hola desde la solución! 👋');

function getFetch(url) {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
}

function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(userId) {
  return getFetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(`El usuario ${user.name} tiene ${posts.length} posts`);
    });
  });
});
