import reducer from '../../../components/cms/reducers';
import * as actions from '../../../components/cms/actions';

describe('record reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        model: null,
        models: [],
        records: [],
        schemas: {},
        record: {}
      }
    )
  });

  it('should handle Model', () => {
    expect(
      reducer([], {
        type: actions.setModel,
        payload: 'payload'
      })
    ).toEqual([])
    });
});
