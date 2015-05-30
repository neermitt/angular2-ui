import {
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xdescribe,
  xit,
  IS_DARTIUM
  } from 'angular2/test_lib';

import {AlertComponent} from 'angular2-ui/alert/alert';

export function main() {
  describe('alert', function () {
    var alert;

    beforeEach(function () {
      alert = new AlertComponent();
    });

    it('should work', function () {
      expect(alert.name).toBe('Alice');
    });

  });
}
