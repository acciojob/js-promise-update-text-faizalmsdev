//your JS code here. If required.
function updateTextWithPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const message = 'Hello, world!';
          resolve(message);
        }, 1000);
      });
    }

    updateTextWithPromise().then((message) => {
        const outputElement = document.getElementById('output');
        outputElement.innerText = message;
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });