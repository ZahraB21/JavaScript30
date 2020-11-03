window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new SpeechRecognition();

      let p = document.createElement("p");
      const words = document.querySelector(".words");

      words.appendChild(p);

      recognition.addEventListener("result", (e) => {
        const transcript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        p.textContent = transcript;

        console.log(e.results[0].isFinal);
        if (e.results[0].isFinal) {
          p = document.createElement("p");
          words.appendChild(p);
        }
      });

      recognition.addEventListener("end", recognition.start);
      recognition.start();