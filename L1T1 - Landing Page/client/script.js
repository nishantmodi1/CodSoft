document.addEventListener("DOMContentLoaded", function () {
  const headerElements = document.querySelectorAll(".header_heading");

  headerElements.forEach((headerElement) => {
    const nameText = headerElement.innerHTML;
    headerElement.innerHTML = ""; // Clear the initial text

    let start = 0;

    const typewrite = () => {
      if (start < nameText.length) {
        headerElement.innerHTML += nameText.charAt(start);
        start++;
        setTimeout(typewrite, 100);
      }
    };

    typewrite();
  });
});
////////////////////////////////
