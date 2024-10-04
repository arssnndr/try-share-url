import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-share-url';

  constructor(meta: Meta){
    meta.addTags([
      { property: 'og:title', content: 'TryShareUrl' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://try-share-url.com' },
      { property: 'og:image', content: 'https://cms.disway.id/uploads/dabf071c490f9961ee4fb03cbc838f30.jpg' },
      { property: 'og:description', content: 'Try Share URL' },
    ])
  }
}
