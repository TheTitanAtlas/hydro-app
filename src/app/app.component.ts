import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Plants', url: '/folder/Plants', icon: 'flower' },
    { title: 'Notes', url: '/folder/Notes', icon: 'create' },
    { title: 'Chat', url: '/folder/Chat', icon: 'chatbubbles' },
    { title: 'Account', url: '/folder/Account', icon: 'person' },
  ];
  public labels = ['Seed',];
  constructor() {}
}
