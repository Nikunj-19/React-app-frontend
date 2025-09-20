export async function getMessage() {
  // Simulating API call (in real case, replace with fetch("http://localhost:5000/api"))
  return new Promise((resolve) => {
    setTimeout(() => resolve(" how are you"), 500);
  });
}
