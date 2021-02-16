const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE RETRIEVE PROJECTS TEST', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  it('Expects the projects container to not be null', () => {
    const container = document.getElementById('content');
    expect(container).toBeDefined();
  });
});