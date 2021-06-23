export default class Collapse {
  constructor(elem) {
    if (typeof elem === 'string') this.container = document.querySelector(elem);
    this.container = elem;
    this.button = this.container.querySelector('.button');
    this.copy = this.container.querySelector('.copy');
    this.collapseBlock = this.container.querySelector('.collapse');

    this.collapseBlockHeight = this.collapseBlock.clientHeight;
    this.collapseBlock.style.display = 'none';

    this.registerEvents();
  }

  registerEvents() {
    this.button.addEventListener('click', (e) => this.onClickButton(e));
    this.copy.addEventListener('click', (e) => this.onClickCopy(e));
  }

  onClickButton(e) {
    const button = e.target;
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      this.collapseBlock.style.height = `${0}px`;
      this.collapseBlock.style.display = 'block';
      setTimeout(() => {
        this.collapseBlock.style.height = `${this.collapseBlockHeight}px`;
        this.collapseBlock.style.padding = `${20}px`;
      }, 0);
    }
    if (!button.classList.contains('active')) {
      this.collapseBlock.style.height = `${0}px`;
      setTimeout(() => {
        this.collapseBlock.style.display = 'none';
      }, 1000);
    }
  }

  onClickCopy(e) {
    if (this.button.classList.contains('active')) {
      const text = e.target.closest('.wrapper-copy').previousElementSibling.textContent.trim();
      navigator.clipboard.writeText(text);
    }
  }
}
