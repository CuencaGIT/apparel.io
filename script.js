let input = document.getElementById('area');
let txt = document.getElementById('text');
var btn = document.querySelector('a');
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.onclick = () => {
  if (!validRegex.test(input.value)) {
    txt.style.opacity = 1;
    input.style.border = '1px solid red';
  } else {
    txt.style.opacity = 0;
    input.style.border = '1px solid hsl(0, 36%, 70%)';
  }
};
