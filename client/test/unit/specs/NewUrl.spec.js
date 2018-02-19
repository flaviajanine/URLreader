import { mount } from 'avoriaz';
import moxios from 'moxios';
import Vue from 'vue';
import NewUrl from '@/components/NewUrl';
window.Promise = require('promise')

describe('NewUrl.vue', () => {

    beforeEach(() => {
        moxios.install()
      })
    afterEach(() => {
        moxios.uninstall()
      })

      it('sends a new url to backend', () => {
        const Constructor = Vue.extend(List);
        const NewUrlComponent = new Constructor().$mount();

        NewUrlComponent.inputUrl = 'https://www.ibm.com/br-pt/';

        const button = NewUrlComponent.$el.querySelector('button');
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        NewUrlComponent._watcher.run();

        expect(NewUrlComponent.$route.name).to.equal("Urls");
      })
    
  })