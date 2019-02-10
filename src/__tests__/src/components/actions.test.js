import * as actions from '../../../components/cms/actions';


describe('actions', () => {

  it('should trigger a setModel action', () => {
    const payload = 'payload'
    const expectedAction = {
      type: "MODEL",
      payload
    }
    expect(actions.setModel(payload)).toEqual(expectedAction);
  });

  it('should trigger a clearRecord action', () => {
    const expectedAction = {
      type: "CLEAR",
    }
    expect(actions.clearRecord()).toEqual(expectedAction);
  });
});

