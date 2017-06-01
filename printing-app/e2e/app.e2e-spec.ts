import { PrintingAppPage } from './app.po';

describe('printing-app App', () => {
  let page: PrintingAppPage;

  beforeEach(() => {
    page = new PrintingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
