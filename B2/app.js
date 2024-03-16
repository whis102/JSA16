// Mảng nguyên bản
const arr = ["Ky", "Cong", "Nguyen", "Ngoc", "Kien"]
console.log("READ: " + arr);

// Create
arr.push("MindX")
console.log("CREATE: " + arr);

// Read

// Update
arr[0] = "Nguyen"
console.log("UPDATE: " + arr[0]);

// Delete
arr.splice(0, 2)
console.log("DELETE: " + arr);
