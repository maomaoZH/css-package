import "../index.css";

export const createCard = ({}) => {
  // Create a card container
  const card = document.createElement("div");
  card.style.width = "300px";
  card.className = ["dt-card", "dt-card--interactive"].join(" ");

  // Create a card title
  const title = document.createElement("h2");
  title.textContent = "Card Title";
  card.appendChild(title);

  // Create card content
  const content = document.createElement("p");
  content.textContent = "This is a simple card";
  card.appendChild(content);
  return card;
};
