import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ReditsPage } from '../Redits/Redits';
import { SettingsPage } from '../Settings/Settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReditsPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
