const input = document.querySelector("input");
let input_text = "";
let output_text = "";

function criptografar() {
  input_text = input.value;
  input.value = "";
  document.querySelector(".output_text").style.display = "flex";
  document.querySelector(".no_text").style.display = "none";

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
  document.querySelector(".result").value = output_text;
  console.log(output_text);
  input_text = "";
  output_text = "";
}

function descriptografar() {
  input_text = input.value;
  input.value = "";
  document.querySelector(".output_text").style.display = "flex";
  document.querySelector(".no_text").style.display = "none";
  let i = 0;
  while (i < input_text.length) {
    //Letra A
    if (input_text[i] === "a") {
      if (input_text[i + 1] === "i") {
        output_text += "a";
        i += 2;
      } else {
        output_text += "a";
        i += 1;
      }
    }
    //Letra E
    else if (input_text[i] === "e") {
      if (input_text[i + 1] === "n") {
        if (input_text[i + 2] === "t") {
          if (input_text[i + 3] === "e") {
            if (input_text[i + 4] === "r") {
              i += 5;
              output_text += "e";
            }
          }
        }
      } else {
        output_text += "e";
        i += 1;
      }
    }
    //Letra I
    else if (input_text[i] === "i") {
      if (input_text[i + 1] === "m") {
        if (input_text[i + 2] === "e") {
          if (input_text[i + 3] === "s") {
            i += 4;
            output_text += "i";
          }
        }
      } else {
        output_text += "i";
        i += 1;
      }
    }
    //Letra O
    else if (input_text[i] === "o") {
      if (input_text[i + 1] === "b") {
        if (input_text[i + 2] === "e") {
          if (input_text[i + 3] === "r") {
            i += 4;
            output_text += "o";
          }
        }
      } else {
        output_text += "o";
        i += 1;
      }
    }
    //Letra U
    else if (input_text[i] === "u") {
      if (input_text[i + 1] === "f") {
        if (input_text[i + 2] === "a") {
          if (input_text[i + 3] === "t") {
            i += 4;
            output_text += "u";
          }
        }
      } else {
        output_text += "e";
        i += 1;
      }
    } else {
      output_text += input_text[i];
      i += 1;
    }
  }
  if (input_text === output_text) {
    alert("Sua mensagem não está criptografada!");
    document.querySelector(".output_text").style.display = "none";
    document.querySelector(".no_text").style.display = "flex";
  } else {
    document.querySelector(".result").value = output_text;
  }
  console.log(output_text);
  input_text = "";
  output_text = "";
}

async function copy() {
  let copy_text = document.querySelector(".result").value;
  await navigator.clipboard.writeText(copy_text);
  document.querySelector(".output_text").style.display = "none";
  document.querySelector(".no_text").style.display = "flex";
}
