import { AllPage } from './app.po';

describe('all App', () => {
  let page: AllPage;

  beforeEach(() => {
    page = new AllPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
