const fetchA = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("fetch issue", error);
    });
};
fetchA().then((todo) => {
  console.log(todo);
});

const fetchUser = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .catch((error) => {
      console.log("Fetch problem", error);
      return null;
    });
};

const userPromises = [fetchUser(1), fetchUser(2), fetchUser(3)];

let allUsers, firstUser;

Promise.all(userPromises)
  .then((users) => {
    allUsers = users.filter((user) => user !== null);
    console.log("All users fetched:", allUsers);
  })
  .catch((error) => {
    console.log("Error in Promise.all:", error);
  });

Promise.race(userPromises)
  .then((user) => {
    firstUser = user; // Присваиваем результат в переменную
    console.log("First user fetched:", firstUser);
  })
  .catch((error) => {
    console.log("Error in Promise.race:", error);
  });
