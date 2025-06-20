// Create URL-friendly slug from product name

const api =
  "https://cookwareinterface-drgnfkhdevbvd6gw.westus-01.azurewebsites.net/";

export const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
};

export const login = async (passkey) => {
  try {
    const response = await fetch(`${api}Admin/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: passkey,
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Propagate the error for further handling
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${api}Admin/GetAllAdmins`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data; // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Propagate the error for further handling
  }
}
