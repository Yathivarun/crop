document.getElementById('cropForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const location = document.getElementById('location').value;
  const climate = document.getElementById('climate').value;
  const soilType = document.getElementById('soilType').value;

  // Example crop recommendation logic
  let crops = [];

  if (climate === 'tropical' && soilType === 'loamy') {
    crops = ['Bananas', 'Mangoes', 'Papayas'];
  } else if (climate === 'temperate' && soilType === 'loamy') {
    crops = ['Wheat', 'Corn', 'Apples'];
  } else if (climate === 'arid' && soilType === 'sandy') {
    crops = ['Cactus', 'Olives', 'Dates'];
  } else if (climate === 'temperate' && soilType === 'clay') {
    crops = ['Potatoes', 'Carrots', 'Onions'];
  }

  displayRecommendations(crops);
});

function displayRecommendations(crops) {
  const recommendationsDiv = document.getElementById('recommendations');
  const cropList = document.getElementById('cropList');

  cropList.innerHTML = '';
  recommendationsDiv.style.display = 'block';

  if (crops.length > 0) {
    crops.forEach(crop => {
      const li = document.createElement('li');
      li.textContent = crop;
      cropList.appendChild(li);
    });
  } else {
    cropList.innerHTML = '<li>No suitable crops found for your input.</li>';
  }
}