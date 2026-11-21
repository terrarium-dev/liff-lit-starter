import { LitElement, html } from 'lit';

class AppRoot extends LitElement {
  static override properties = { name: { type: String } };
  declare name: string;

  constructor() {
    super();
    this.name = 'LIFF + Lit';
  }

  override render() {
    return html`<h1>${this.name}</h1>`;
  }
}

customElements.define('app-root', AppRoot);