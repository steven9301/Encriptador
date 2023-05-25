// Función para encriptar el texto
function encryptText() {
    const textInput = document.getElementById('text');
    const resultInput = document.getElementById('result');
    const text = textInput.value.trim().toLowerCase();
    let encryptedText = '';
  
    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case 'e':
          encryptedText += 'enter';
          break;
        case 'i':
          encryptedText += 'imes';
          break;
        case 'a':
          encryptedText += 'ai';
          break;
        case 'o':
          encryptedText += 'ober';
          break;
        case 'u':
          encryptedText += 'ufat';
          break;
        default:
          encryptedText += text[i];
      }
    }
  
    resultInput.value = encryptedText;
  }
  
  // Función para desencriptar el texto
  function decryptText() {
    const textInput = document.getElementById('text');
    const resultInput = document.getElementById('result');
    const text = textInput.value.trim().toLowerCase();
    let decryptedText = '';
  
    let i = 0;
    while (i < text.length) {
      if (text[i] === 'e' && text[i + 1] === 'n' && text[i + 2] === 't' && text[i + 3] === 'e' && text[i + 4] === 'r') {
        decryptedText += 'e';
        i += 5;
      } else if (text[i] === 'i' && text[i + 1] === 'm' && text[i + 2] === 'e' && text[i + 3] === 's') {
        decryptedText += 'i';
        i += 4;
      } else if (text[i] === 'a' && text[i + 1] === 'i') {
        decryptedText += 'a';
        i += 2;
      } else if (text[i] === 'o' && text[i + 1] === 'b' && text[i + 2] === 'e' && text[i + 3] === 'r') {
        decryptedText += 'o';
        i += 4;
      } else if (text[i] === 'u' && text[i + 1] === 'f' && text[i + 2] === 'a' && text[i + 3] === 't') {
        decryptedText += 'u';
        i += 4;
      } else {
        decryptedText += text[i];
        i++;
      }
    }
  
    resultInput.value = decryptedText;
  }
  
  // Función para copiar el resultado al portapapeles
  function copyResult() {
    const resultInput = document.getElementById('result');
    resultInput.select();
    resultInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('El resultado se ha copiado al portapapeles.');
  }
  