import { TestBayPage } from './app.po';

describe('test-bay App', () => {
  let page: TestBayPage;

  beforeEach(() => {
    page = new TestBayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
