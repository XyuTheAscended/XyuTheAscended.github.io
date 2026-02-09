const geometryCard = document.getElementById("geometry");
const triangle = document.getElementById("triangle");

const datePicker = document.getElementById("datePicker");
const dateOutput = document.getElementById("dateOutput");

const image = document.getElementById("mainImage");

const toggleTriangle = () => {
  triangle.classList.toggle("hidden");
};

const showDate = () => {
  const pickedDate = datePicker.value;

  if (pickedDate !== "") {
    const parts = pickedDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const formattedDate = month + "/" + day + "/" + year;
    dateOutput.textContent = "You picked the date: " + formattedDate;
  }
};

const toggleFrame = () => {
  image.classList.toggle("active");
};

geometryCard.addEventListener("click", toggleTriangle);
datePicker.addEventListener("change", showDate);
image.addEventListener("click", toggleFrame);
