import { Selector } from 'testcafe';

class EquipmentPage {

  constructor() {
    this.pageId = '#Equipment-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoEquipmentPage(testController) {
    await testController.click('#Equipment-Page');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Equipment = new EquipmentPage();
