import { html, css, LitElement } from 'lit-element';

export class MyComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-component-text-color, #000);
      }
      button {
        background-color: red;
        color: white;
        width: 200px;
        height: 30px;
        border-radius: 5px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 6;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nro. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
