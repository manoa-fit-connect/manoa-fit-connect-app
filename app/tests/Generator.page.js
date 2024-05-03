import { Selector } from 'testcafe';

class GeneratorPage {

  constructor() {
    this.pageId = '#Generator-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoGeneratorPage(testController) {
    await testController.click('#generator-nav');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Generator = new GeneratorPage();
