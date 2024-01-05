export default class Component {
  $target;
  props; // 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위함
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup () {}
  mounted () {};
  template () { return ''; }
  render () {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent () {};
  setState (newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent (eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ];
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    })
  }
}
