import { CaseFloPage } from './app.po';

describe('case-flo App', () => {
  let page: CaseFloPage;

  beforeEach(() => {
    page = new CaseFloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
