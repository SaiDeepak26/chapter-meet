let [button, modal] = document.body.children;

button.addEventListener("click", () => modal.showModal());

document.addEventListener(
  "click",
  ({ target }) => target === modal && modal.close()
);
