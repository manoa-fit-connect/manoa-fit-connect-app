import { Selector } from 'testcafe';

class AboutUsPage {

  constructor() {
    this.pageId = '#AboutUS-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoAboutUSPage(testController) {
    await testController.click('#AboutUS-Page');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const About = new AboutUsPage();
