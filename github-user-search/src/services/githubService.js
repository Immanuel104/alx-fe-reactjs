import axios from 'axios';

export const fetchUserData = async (searchParams) => {
  const { username, location, minRepos } = searchParams;
  let query = username ? `user:${username}` : '';

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const apiUrl = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

