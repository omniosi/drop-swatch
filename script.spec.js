describe('onDragOver', () => {
  beforeEach(() => {
    // do something
  });
  afterAll(() => {
    // do something
  });
  it(`should pull the fill color from the event target and put it on the elemnt dragged over`, () => {
    const dropColor = 'black'
    const droppedColor = 'grey'
    onDragRelease();
    expect(droppedColor).toEqual(droppedColor);
  });
});