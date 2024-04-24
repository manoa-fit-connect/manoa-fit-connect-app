import { Selector } from 'testcafe';

class ProfilePage {

  constructor() {
    this.pageId = '#Profile-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoProfilePage(testController) {
    await testController.click('#Profile-Page');
  }

  async gotoEditProfilePage(testController) {
    await testController.click('#EditProfile-Page');
  }

  async hasCard(testController) {
    const itemCount = Selector('div.card').count;
    await testController.expect(itemCount).gte(1);
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Profiles = new ProfilePage();
