import { EvolutionPage } from './app.po';

describe('evolution App', () => {
  let page: EvolutionPage;

  beforeEach(() => {
    page = new EvolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Evolution');
  });
});
