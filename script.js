function onDragStart(dragEvent) {
  console.log("dragStart");
  // Add the target element's svg fill to the data transfer object
  const dragged = dragEvent.target;
  const svg = dragged.getElementsByTagName('svg')[0];
  dragEvent.dataTransfer.setData("text/plain", svg.fill);
}

function onDragEnter(e) {
  console.log('onDragEnter');
  e.preventDefault();
  e.target.style.opacity = 0.5;
}

function onDragLeave(e) {
  console.log('onDragLeave');
  e.preventDefault();
  e.target.style.opacity = 1;
}

function onDrop(dropEvent) {
  dropEvent.preventDefault();
  console.log("dropEvent");

  console.log('This fill is ', dropEvent.dataTransfer.getData('text/plain'));

}