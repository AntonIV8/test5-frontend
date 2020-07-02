import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest5ghhhLForm from './forms/i-i-s-test5-ghhh-l';
import IISTest5ghhhEForm from './forms/i-i-s-test5-ghhh-e';
import IISTest5ghhhModel from './models/i-i-s-test5-ghhh';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test5-ghhh': IISTest5ghhhModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test5: {
          caption: 'test5',
          title: 'test5',
          'i-i-s-test5-ghhh-l': {
            caption: 'i-i-s-test5-ghhh-l',
            title: 'i-i-s-test5-ghhh-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test5-ghhh-l': IISTest5ghhhLForm,
    'i-i-s-test5-ghhh-e': IISTest5ghhhEForm
  },

});

export default translations;
