import { Selector } from 'testcafe';

class EventsPage {

  constructor() {
    this.pageId = '#Event-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoEventsPage(testController) {
    await testController.click('#Event-Page');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Events = new EventsPage();
