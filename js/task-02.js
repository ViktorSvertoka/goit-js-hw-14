const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");

  li.classList.add("item");
  li.textContent = ingredient;

  ul.append(li);
});
