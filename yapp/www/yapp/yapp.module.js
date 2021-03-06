(function () {
    'use strict';

    angular.module('yapp', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         */
         'ionic',
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */


        /*
         * Feature areas
         */
        'yapp.layout',
        'yapp.authentication',
        'yapp.allowances',        
        'yapp.dashboard',
        'yapp.history',
        'yapp.notifications',
        'yapp.payments',
        'yapp.savings',
        'yapp.settings',
        'yapp.account'
    ]);
})();