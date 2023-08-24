import { createCard } from "./Card";

export default {
  title: "Example/Card",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCard({ label, ...args });
  },
};

export const card = {};
