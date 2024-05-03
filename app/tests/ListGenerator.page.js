import { Selector } from 'testcafe';

class ListGeneratorPage {

  constructor() {
    this.pageId = '#ListGenerator-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoEquipmentPage(testController) {
    await testController.click('#list-generator-nav');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const ListGenerator = new ListGeneratorPage();
