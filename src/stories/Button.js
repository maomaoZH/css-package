import "../index.css";

export const createButton = ({
  primary = false,
  size,
  backgroundColor,
  label,
  disabled,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary ? "dt-btn--primary" : "dt-btn--secondary";
  const disabledClass = disabled ? "dt-btn--disabled" : "";
  const sizeClass = size ? `dt-btn--${size}` : "";
  btn.className = ["dt-btn", disabledClass, sizeClass, mode].join(" ");

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
