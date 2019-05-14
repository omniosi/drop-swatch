function onDragStart(dragEvent) {
  console.log("dragStart");
  // Add the target element's svg fill to the data transfer object
  const dragged = dragEvent.target;
  const svg = dragged.getElementsByTagName('svg')[0];
  // dragEvent.dataTransfer.effectAllowed = 'copy';
  dragEvent.dataTransfer.setData("text/plain", svg.fill);
  console.log('data set = ', dragEvent.dataTransfer.getData("text/plain"));
}

function onDragEnter(e) {
  console.log('onDragEnter');
  if ([...e.dataTransfer.types].includes('text/plain')) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }
}

function onDragOver(e) {
  console.log('onDragOver');
  if ([...e.dataTransfer.types].includes('text/plain')) {
    e.preventDefault();
  }

}

function onDragLeave(e) {
  console.log('onDragLeave');
  e.preventDefault();
  e.target.style.opacity = 1;
}

function onDrop(e) {
  console.log("onDrop");
  if ([...e.dataTransfer.types].includes('text/plain')) {
    e.preventDefault();
    const dropTarget = e.currentTarget;
    dropTarget.fill = e.dataTransfer.getData('text/plain');
    e.target.style.opacity = 1;
    console.log('This fill is ', e.dataTransfer.getData('text/plain'));
  }
  return false;
}