function addingEventListener() {
    const button = document.getElementById('button');
    if (button) {
      button.addEventListener('click', function() {
        console.log('Button clicked!');
      });
    } else {
      console.error('Could not find button element with ID "button"');
    }
  }

  
  