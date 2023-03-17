import { PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import './theory/module-a'
// import './theory/module-b'

// import('./theory/module-a').then( m => console.log(m))

import { version } from './theory/module-a'
console.warn( version );
console.warn('Before Angular Bootstrap');

platformBrowserDynamic(
  [
    {
      provide: PLATFORM_INITIALIZER,
      useValue: () => console.log('Platform (browser) is ready'),
      multi:true
    }
  ]
)
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
