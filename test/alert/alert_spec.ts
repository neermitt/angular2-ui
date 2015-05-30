import {AlertComponent} from 'src/alert/alert';

describe('alert', function () {
  var alert;

  beforeEach(function () {
    alert = new AlertComponent();
  });

  it('should work', function () {
    expect(alert.name).toBe('Alice');
  });

});
