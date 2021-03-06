import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {HTTP_PROVIDERS} from 'angular2/http';

import {provide} from 'angular2/core';
import {LocationStrategy,HashLocationStrategy} from 'angular2/router';

import {Aplikasi} from './aplikasi';
import {InstansiService} from './instansi/instansi.service';
import {AuthService} from './auth/auth.service';

bootstrap(Aplikasi, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    InstansiService,
    AuthService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);