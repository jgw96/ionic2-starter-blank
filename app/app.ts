import {App, Platform} from 'ionic-framework/ionic';
import {HomePage} from './pages/home/home';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
