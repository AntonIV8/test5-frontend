import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test5-ghhh-l');
  this.route('i-i-s-test5-ghhh-e',
  { path: 'i-i-s-test5-ghhh-e/:id' });
  this.route('i-i-s-test5-ghhh-e.new',
  { path: 'i-i-s-test5-ghhh-e/new' });
});

export default Router;
