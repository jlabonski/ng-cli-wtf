import { IssuePage } from './app.po';

describe('issue App', function() {
  let page: IssuePage;

  beforeEach(() => {
    page = new IssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
