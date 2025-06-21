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

export const createAdmin = async (entry) => {
  console.log(entry)
  try {
    const response = await fetch(`${api}Admin/CreateAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      throw new Error("Creation failed");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during creation:", error);
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
};

export const updateLogin = async (username) => {
  try {
    const response = await fetch(`${api}Admin/UpdateLoginDate/${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to update login date");
    }

    const data = await response.json();
    return data; // Return the list of users
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Propagate the error for further handling
  }
};

export const deactivateUser = async (id) => {
  try {
    const response = await fetch(`${api}Admin/DeactivateAdmin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to deactivate user");
    }

    const data = await response.json();
    return data; // Return the list of users
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Propagate the error for further handling
  }
};
