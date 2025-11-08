// Create a nested array (e.g., categories with products) and use nested .map() to show them in groups.
function CategoryList() {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Mango", "Banana"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Potato", "Tomato"],
    },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default CategoryList;
