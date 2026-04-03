const words = ["Data Analyst", "Data Scientist", "Business Intelligence"];
let i = 0, j = 0, deleting = false;

function type() {
  let text = words[i];
  document.querySelector(".role").textContent = text.substring(0, j);

  if (!deleting) {
    j++;
    if (j > text.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();