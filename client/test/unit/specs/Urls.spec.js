import { mount } from 'avoriaz';
import moxios from 'moxios';
import Vue from 'vue';
import Urls from '@/components/Urls';
window.Promise = require('promise')

describe('Urls.vue', () => {

    beforeEach(() => {
        moxios.install()
      })
    afterEach(() => {
        moxios.uninstall()
      })

      it('should list all urls', done => {
        moxios.stubRequest('http://localhost:8081/urls', {
              status: 200,
            })
           const vm = mount(Urls);
        moxios.wait(function() {
            expect(vm.data().them.length) > 0;
            done()
          })    
          })
    
  })