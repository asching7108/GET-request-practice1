function generateImages(numImgs) {
  $('.output').html("");
  const content = [];
  const promises = [];
  for (let i = 0; i < numImgs; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  }
}

function handleInput() {
  $('form').submit(function(event) {
    event.preventDefault();
    let numImgs = $('input').val();
    if (numImgs < 1 || numImgs > 50) {
      alert("The number you entered is out-of-range.");
    }
    else {
      generateImages($('input').val());
    }
  });
}

$(handleInput());