function onDragStart(dragEvent) {
  console.log("dragStart");
  // Add the target element's svg fill to the data transfer object
  const dragged = dragEvent.target;
  const svg = dragged.getElementsByTagName('svg')[0];
  dragEvent.dataTransfer.setData("text/plain", svg.fill);
}

function onDragEnter(e) {
  console.log('onDragEnter');
  if ([...e.dataTransfer.types].includes('text/plain')) {
    e.target.style.opacity = 0.5;
  }
}

function onDragLeave(e) {
  console.log('onDragLeave');
  e.target.style.opacity = 1;
}

function onDrop(dropEvent) {
  console.log("dropEvent");
  if ([...dropEvent.dataTransfer.types].includes('text/plain')) {
    dropEvent.preventDefault();
    console.log('This fill is ', dropEvent.dataTransfer.getData('text/plain'));
  }
}