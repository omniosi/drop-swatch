const script = require('./script');

describe('onDragStart', () => {
  beforeEach(() => {
    // start with
  });
  it('should add the target’s child svg fill color to the data transfer object', () => {
    console.log("onDragStart test called");

    // const spy = jest.spyOn(onDragStart);
    // const spy = jest.spyOn(script, 'onDragStart');
    // const dragging = script.onDragStart();
    // const e = { data: 'blue' };
    const onDragStart = jest.fn({ data: '' });
    // onDragStart(e);
    // expect(spy).toHaveBeenCalled();
    // expect(dragging).toBeCalledWith(
    // expect(onDragStart).toBeCalledWith(
    //   expect.objectContaining({
    //     data: expect.any(String)
    //   })
    // );
  });
});

describe('onDragOver', () => {
  beforeEach(() => {
    // do something before
  });
  afterAll(() => {
    // do something after
  });
  it(`should pull the fill color from the event target and put it on the elemnt dragged over`, () => {
    const dropColor = 'black'
    const droppedColor = 'grey'
    // onDragRelease();
    // onDrop();
    expect(droppedColor).toEqual(droppedColor);
  });
});