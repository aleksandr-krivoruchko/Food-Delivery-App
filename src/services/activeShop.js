export default function activeShop(e) {
  const btns = e.currentTarget.querySelectorAll("button");

  btns.forEach((btn) => {
    if (btn.classList.contains("active-shop")) {
      btn.classList.remove("active-shop");
      e.target.closest("button").classList.add("active-shop");
    } else {
      e.target.closest("button").classList.add("active-shop");
    }
  });
}
