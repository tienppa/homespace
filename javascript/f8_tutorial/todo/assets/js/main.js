const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const todo = (() => {
  const list = ["Do homework", "Go to school"];
  const todoElement = $(".todo__list");
  const inputElement = $("#input");
  const submitElement = $("#submit");
  const countElement = $(".count__num");

  return {
    add(item) {
      list.push(item);
    },
    remove(index) {
      list.splice(index, 1);
    },
    render() {
      const html = list
        .map((item, index) => {
          return `
          <li class="todo__item">
            ${item}
            <span class="remove" data-index="${index}">&times</span>
          </li>
          `;
        })
        .join("");

      countElement.innerText = list.length;

      todoElement.innerHTML = html;
    },
    handleRemove(e) {
      const removeBtn = e.target.closest(".remove");
      if (removeBtn) {
        const index = removeBtn.dataset.index;
        this.remove(index);
        this.render();
      }
    },
    scrollTo() {
      const lastIndex = list.length - 1;
      const lastElement = $(`[data-index="${lastIndex}"]`);
      lastElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },
    init() {
      submitElement.onclick = () => {
        const item = inputElement.value;
        if (item) {
          this.add(item);
          this.render();

          input.value = null;
          input.focus();
          this.scrollTo();
        }
      };

      todoElement.onclick = this.handleRemove.bind(this);

      this.render();
    },
  };
})();

todo.init();
