import { Selector } from 'testcafe';

class ProgressPage {

  constructor() {
    this.pageId = '#Progress-Page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoProgressPage(testController) {
    await testController.click('#Progress-Page');
  }

  async gotoAddWorkoutPage(testController) {
    await testController.click('#AddWorkout-Page');
  }

  async gotoEditWorkoutPage(testController) {
    await testController.click('#EditWorkout-Page');
  }

  async gotoAddPRPage(testController) {
    await testController.click('#AddPR-Page');
  }

  async gotoEditPRPage(testController) {
    await testController.click('#EditPR-Page');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasCard(testController) {
    const itemCount = Selector('div.card').count;
    await testController.expect(itemCount).gte(1);
  }
}

export const Progress = new ProgressPage();
