import { FeaturesModulePage } from './app.po';

describe('features-module App', () => {
  let page: FeaturesModulePage;

  beforeEach(() => {
    page = new FeaturesModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
