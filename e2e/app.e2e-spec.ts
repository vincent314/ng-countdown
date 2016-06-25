import { NgCountdownPage } from './app.po';

describe('ng-countdown App', function() {
  let page: NgCountdownPage;

  beforeEach(() => {
    page = new NgCountdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
