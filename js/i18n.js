angular.module('app').config(function ($translateProvider) {
    $translateProvider.translations('de',
        {
            MENU_QA: 'Fragen & Antworten',
            MENU_i18n_en: 'Englisch',
            MENU_i18n_de: '> Deutsch',
            IMG_about: 'img_static/about.jpg',
            IMG_contact: 'img_static/contact.jpg'
        });
    $translateProvider.translations('en',
        {
            MENU_QA: 'Q & A',
            MENU_i18n_en: '> English',
            MENU_i18n_de: 'German',
            IMG_about: 'img_static/about_en.jpg',
            IMG_contact: 'img_static/contact_en.jpg'
        });

    // Nicht vergessen: die Standardsprache
    $translateProvider.fallbackLanguage('de');
    $translateProvider.determinePreferredLanguage();
    //if (['de', 'en'].indexOf($translateProvider.preferredLanguage()) == -1) {
    //    console.log("unknown default " + $translateProvider.preferredLanguage() + "language using en instead");
    //    $translateProvider.preferredLanguage('en');
    //}
});
