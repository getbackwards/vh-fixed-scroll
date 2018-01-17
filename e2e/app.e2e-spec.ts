import { VhFixedScrollPage } from './app.po';

describe('vh-fixed-scroll App', () => {
  let page: VhFixedScrollPage;

  beforeEach(() => {
    page = new VhFixedScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
