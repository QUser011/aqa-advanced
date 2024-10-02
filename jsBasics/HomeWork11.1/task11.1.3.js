const fetchA = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Error fetching todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch issue:", error);
  }
};

fetchA().then((todo) => {
  console.log(todo);
});

const fetchUser = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Error fetching user data");
    }
    return await response.json();
  } catch (error) {
    console.log("Fetch problem:", error);
    return null;
  }
};

const userPromises = [fetchUser(1), fetchUser(2), fetchUser(3)];

let allUsers, firstUser;

const fetchAllUsers = async () => {
  try {
    allUsers = await Promise.all(userPromises);
    allUsers = allUsers.filter((user) => user !== null);
    console.log("All users fetched:", allUsers);
  } catch (error) {
    console.log("Error in Promise.all:", error);
  }
};

const fetchFirstUser = async () => {
  try {
    firstUser = await Promise.race(userPromises);
    if (firstUser) {
      console.log("First user fetched:", firstUser);
    }
  } catch (error) {
    console.log("Error in Promise.race:", error);
  }
};

fetchAllUsers();
fetchFirstUser();
