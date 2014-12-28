angular.module('app').config(function ($translateProvider) {
    $translateProvider.translations('de',
        {
            MENU_QA: 'Fragen & Antworten'
        });
    $translateProvider.translations('en',
        {
            MENU_QA: 'Q & A'
        });

    // Nicht vergessen: die Standardsprache
    $translateProvider.fallbackLanguage('de');
    $translateProvider.determinePreferredLanguage();
    //if (['de', 'en'].indexOf($translateProvider.preferredLanguage()) == -1) {
    //    console.log("unknown default " + $translateProvider.preferredLanguage() + "language using en instead");
    //    $translateProvider.preferredLanguage('en');
    //}
});
