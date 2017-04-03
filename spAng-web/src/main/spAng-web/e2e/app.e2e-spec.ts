import { NgAppBootPage } from './app.po';

describe('ng-app-boot App', () => {
  let page: NgAppBootPage;

  beforeEach(() => {
    page = new NgAppBootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
