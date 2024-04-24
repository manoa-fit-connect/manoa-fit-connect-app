import { Selector } from 'testcafe';

class FriendsPage {

  constructor() {
    this.pageId = '#Friends-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoFriendsPage(testController) {
    await testController.click('#Friends-Page');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Friends = new FriendsPage();
