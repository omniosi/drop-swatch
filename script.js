function dragStart(e) {
  // console.log("dragStart");
  if (e.target instanceof HTMLLIElement) {
    e.dataTransfer.setData('text', e.target.dataset.swatch);
    e.dataTransfer.effectAllowed = 'copy';
    // console.log('data set = ', e.dataTransfer.getData('text'));
  } else {
    e.preventDefault();
  }
}

function dragEnter(e) {
  console.log('onDragEnter');
  // if ([...e.dataTransfer.types].includes('text')) {
  e.preventDefault();
  e.target.style.opacity = 0.5;
  // }
}

function dragOver(e) {
  // console.log('onDragOver');
  e.dataTransfer.dropEffect = 'copy';
  e.preventDefault();
}

function dragLeave(e) {
  console.log('onDragLeave');
  // e.preventDefault();
  e.target.style.opacity = 1;
}

function onDrop(e) {
  // console.log("onDrop");
  e.preventDefault();
  const dropTarget = e.target;
  dropTarget.style.fill = e.dataTransfer.getData('text');
  e.target.style.opacity = 1;
  // console.log('This fill is ', e.dataTransfer.getData('text'));
}