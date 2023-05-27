export default function activeShop(e) {
  const activeClass = "active-shop";
  const pressedBtn = e.target.closest("button");
  const btns = e.currentTarget.querySelectorAll("button");

  btns.forEach((btn) => {
    if (btn.classList.contains(activeClass)) {
      btn.classList.remove(activeClass);
      pressedBtn.classList.add(activeClass);
    }
    pressedBtn.classList.add(activeClass);
  });
}
