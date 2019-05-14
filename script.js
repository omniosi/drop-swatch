function dragStart(e) {
  console.log("dragStart");
  // Add the target element's svg fill to the data transfer object
  e.dataTransfer.setData('text', e.target.dataset.swatch);
  e.dataTransfer.effectAllowed = 'copy';
  console.log('data set = ', e.dataTransfer.getData('text'));
}

function dragEnter(e) {
  console.log('onDragEnter');
  if ([...e.dataTransfer.types].includes('text/plain')) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }
}

function dragOver(e) {
  console.log('onDragOver');
  if ([...e.dataTransfer.types].includes('text')) {
    e.preventDefault();
  }

}

function dragLeave(e) {
  console.log('onDragLeave');
  e.preventDefault();
  e.target.style.opacity = 1;
}

function onDrop(e) {
  console.log("onDrop");
  if ([...e.dataTransfer.types].includes('text')) {
    e.preventDefault();
    const dropTarget = e.currentTarget;
    dropTarget.fill = e.dataTransfer.getData('text');
    // e.target.style.opacity = 1;
    console.log('This fill is ', e.dataTransfer.getData('text'));
  }
  // return false;
}