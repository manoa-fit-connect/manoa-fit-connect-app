import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { Progress } from './Progress.page';
import { Friends } from './Friends.page';
import { Equipment } from './Equipement.page';
import { Profiles } from './Profile.page';
import { Generator } from './Generator.page';
import { Events } from './Events.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
test('Test the Friends page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Friends.gotoFriendsPage(testController);
  await Friends.isDisplayed(testController);
});
test('Test the Equipment page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Equipment.gotoEquipmentPage(testController);
  await Equipment.isDisplayed(testController);
});
test('Test the Profile page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Profiles.gotoProfilePage(testController);
  await Profiles.isDisplayed(testController);
  await Profiles.gotoEditProfilePage(testController);
  await Profiles.hasCard(testController);
});
test('Test the Progress Tracker page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Progress.gotoProgressPage(testController);
  await Progress.isDisplayed(testController);
  await Progress.gotoAddPRPage(testController);
  await Progress.hasCard(testController);
  await navBar.gotoHomePage(testController);
  await Progress.gotoProgressPage(testController);
  await Progress.gotoEditPRPage(testController);
  await Progress.hasCard(testController);
  await navBar.gotoHomePage(testController);
  await Progress.gotoProgressPage(testController);
  await Progress.gotoAddWorkoutPage(testController);
  await Progress.hasCard(testController);
  await navBar.gotoHomePage(testController);
  await Progress.gotoProgressPage(testController);
  await Progress.gotoEditWorkoutPage(testController);
  await Progress.hasCard(testController);
});
test('Test the Generator page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Generator.gotoGeneratorPage(testController);
  await Generator.isDisplayed(testController);
});
test('Test the Event page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await Events.gotoEventsPage(testController);
  await Events.isDisplayed(testController);
});
