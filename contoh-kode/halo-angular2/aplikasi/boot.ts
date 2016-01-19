import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {provide} from 'angular2/core';
import {LocationStrategy,HashLocationStrategy} from 'angular2/router';

import {Aplikasi} from './aplikasi';
import {InstansiService} from './instansi/instansi.service';

bootstrap(Aplikasi, [
    ROUTER_PROVIDERS,
    InstansiService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);