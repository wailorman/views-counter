export const template = ({ counter, version }) => `
    <style>
      .container {
        text-align: center;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        position: absolute;
        font: 18pt sans-serif;
      }

      .counter {
        font-weigth: bold;
        font-size: 3em;
        font-family: monospace;
      }

      .version {
        padding-top: 50px;
        font-family: monospace;
        font-size: 0.5em;
      }

      .number-mark {
        font-size: 0.5em;
      }
    </style>
    <div class="container">
      You are the visitor
      <div class="counter">
        <span class="counter-number">
          <span class="number-mark">#</span>${counter}
        </span>
      </div>
      for the last minute.
      <div class="version">
        version: ${version}
      </div>
    </div>
  `;

export default template;
