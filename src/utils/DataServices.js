// Create URL-friendly slug from product name

const api =
  "https://cookwareinterface-drgnfkhdevbvd6gw.westus-01.azurewebsites.net/";
  const blobURL = "https://aaronsblob123.blob.core.windows.net/aaronsblob"


export const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
};

export const formatProductName = (slug) => {
  return slug
    .split('-') // Split the string by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join the words with spaces
}

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

export const addProduct = async (entry) => {
  console.log(entry)
  try {
    const response = await fetch(`${api}Product/AddProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      throw new Error("Product Creation failed");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during product creation:", error);
    throw error; // Propagate the error for further handling
  }
};

export const addProductDetails = async (entry) => {
  console.log(entry)
  try {
    const response = await fetch(`${api}Details/AddDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      throw new Error("Details Creation failed");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during detail creation:", error);
    throw error; // Propagate the error for further handling
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${api}Product/GetAllProducts`);

    if (!response.ok) {
      throw new Error("Failed to fetch all products");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during fetching all products:", error);
    throw error; // Propagate the error for further handling
  }
};

export const getProductByName = async (product) => {
  try {
    const response = await fetch(`${api}Product/GetProductByName/${product}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during fetching product:", error);
    throw error; // Propagate the error for further handling
  }
};

export const getDetailsbyId = async (productId) => {
  try {
    const response = await fetch(`${api}Details/GetDetailsByProductId/${productId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    const data = await response.json();
    return data; // Return the user data or token
  } catch (error) {
    console.error("Error during fetching product details:", error);
    throw error; // Propagate the error for further handling
  }
};

export const blobUpload = async (params)=> {
        const response = await fetch(`${api}Blob/Upload`, {
            method: 'POST',
            // The browser automatically sets the correct Content-Type header to multipart/form-data
            body: params, //becuase params is FormData we do NOT need to stringify it
        });

        if (response.ok) {
            // Extract the filename from FormData
            const fileName = params.get('fileName');
            
            // Construct the Blob Storage URL
            const uploadedFileUrl = `${blobURL}/${fileName}`;
            
            return uploadedFileUrl;
        } else {
            console.log('Failed to upload file.');
            return null;
        }
      }
