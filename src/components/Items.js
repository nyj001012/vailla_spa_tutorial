import Components from "../core/Components.js";

export default class Items extends Components {
  setup() {
    this.state = {items: ['item1', 'item2']};
  }

  template() {
    const {items} = this.state;
    return `
        <ul>
            ${items.map((item, index) => `
            <li>
                ${item}
                <button class="deleteBtn" data-index="${index}">삭제</button>
            </li>
            `).join('')}
        </ul>
        <button class="addBtn">추가</button>
    `
  }

  setEvent() {
    this.addEvent('click', '.addBtn', ({target}) => {
      const {items} = this.state;
      this.setState({items: [...items, `item${items.length + 1}`]});
    });
    this.addEvent('click', '.deleteBtn', ({target}) => {
      const items = [...this.state.items];
      items.splice(target.dataset.index, 1);
      this.setState({items});
    })
  }
}
