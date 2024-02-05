const input = document.querySelector("input");
let input_text = "";
let output_text = "";

function criptografar() {
  input_text = input.value;
  input.value = "";
  document.querySelector('.output_text').style.display = 'flex';
  document.querySelector('.no_text').style.display = 'none';

  for (let i in input_text) {
    console.log(input_text[i]);
    if (input_text[i] === "a") {
      output_text += "ai";
    } else if (input_text[i] === "e") {
      output_text += "enter";
    } else if (input_text[i] === "i") {
      output_text += "imes";
    } else if (input_text[i] === "o") {
      output_text += "ober";
    } else if (input_text[i] === "u") {
      output_text += "ufat";
    } else {
      output_text += input_text[i];
    }
  }
  document.querySelector('.result').value = output_text;
  console.log(output_text);
  input_text = "";
  output_text = "";
}

function descriptografar() {
  input_text = input.value;
  input.value = "";
  document.querySelector('.output_text').style.display = 'flex';
  document.querySelector('.no_text').style.display = 'none';
  let i = 0;
  console.log(input_text.length);
  while (i < input_text.length) {
    //Letra A
    if (input_text[i] === "a") {
      if (input_text[i + 1] === "i") {
        output_text += "a";
        i += 2;
      }
    }
    //Letra E
    else if (input_text[i] === "e") {
      if (input_text[i + 1] === "n") {
        i += 1;
        if (input_text[i + 1] === "t") {
          i += 1;
          if (input_text[i + 1] === "e") {
            i += 1;
            if (input_text[i + 1] === "r") {
              i += 2;
              output_text += "e";
            }
          }
        }
      }
    }
    //Letra I
    else if (input_text[i] === "i") {
      if (input_text[i + 1] === "m") {
        i += 1;
        if (input_text[i + 1] === "e") {
          i += 1;
          if (input_text[i + 1] === "s") {
            i += 2;
            output_text += "i";
          }
        }
      }
    }
    //Letra O
    else if (input_text[i] === "o") {
      if (input_text[i + 1] === "b") {
        i += 1;
        if (input_text[i + 1] === "e") {
          i += 1;
          if (input_text[i + 1] === "r") {
            i += 2;
            output_text += "o";
          }
        }
      }
    }
    //Letra U
    else if (input_text[i] === "u") {
      if (input_text[i + 1] === "f") {
        i += 1;
        if (input_text[i + 1] === "a") {
          i += 1;
          if (input_text[i + 1] === "t") {
            i += 2;
            output_text += "u";
          }
        }
      }
    } else {
      output_text += input_text[i];
      i += 1;
    }
  }
  document.querySelector('.result').value = output_text;
  console.log(output_text);
  input_text = "";
  output_text = "";
}

async function copy(){
  let copy_text = document.querySelector('.result').value;
  await navigator.clipboard.writeText(copy_text);
}
