function generateSampleJSON(type) {
  switch (type) {
    case "Countries":
      return [
        { name: "United States", code: "US", currency: "USD" },
        { name: "Nigeria", code: "NGN", currency: "NGN" },
        { name: "United Kingdom", code: "GB", currency: "GBP" },
      ];
    case "Users":
      return [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
      ];
    case "Products":
      return [
        { id: 101, name: "Laptop", price: 1200 },
        { id: 102, name: "Smartphone", price: 700 },
      ];
    case "Random Data":
      return { message: "Hello, this is random JSON!" };
    default:
      return { error: "Invalid selection" };
  }
}

module.exports = { generateSampleJSON };
