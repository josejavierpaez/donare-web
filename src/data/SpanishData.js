import {
  homePageDataEs,
  navBarDataEs,
  introductionDataEs,
  footerEs,
  aboutPageEs,
} from './data';

export class SpanishData {
  constructor() {
    this.homePage = homePageDataEs;
    this.aboutPage = aboutPageEs;
    this.contactPage = {};
    this.navBar = navBarDataEs;
    this.footer = footerEs;
    this.introduction = introductionDataEs;
  }
}
