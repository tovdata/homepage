// Add animation
const addAnimation = (elem, animation, isHidden=false, endings=[], speed=null) => new Promise((resolve, reject) => {
  if (isHidden) {
    elem.classList.remove('hidden');
    elem.classList.remove('opacity-0');
  }

  // Set animation duration
  if (speed !== null) {
    const animationDuration = `animate__${speed}`;
    elem.classList.add(animationDuration);
  }
  // Set animation name and get element
  const animationName = `animate__${animation}`;
  // Add animation
  elem.classList.add('animate__animated', animationName);

  // When the animation ends, we clean the classes and resolve the Promise
  if (endings.length > 0) {
    function handleAnimationEnd(event) {
      event.stopPropagation();
      elem.classList.remove(`animate__animated`, animationName);
      if (endings[0] !== '') {
        elem.classList.add(...endings);
      }
      resolve('Animation ended');
    }
    elem.addEventListener('animationend', handleAnimationEnd, {once: true});
  }
});