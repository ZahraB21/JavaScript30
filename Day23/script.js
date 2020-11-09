const msg = new SpeechSynthesisUtterance();
      const voicesDropdown = document.querySelector('[name="voice"]');
      const stopButton = document.querySelector("#stop");
      const speakButton = document.querySelector("#speak");
      const options = document.querySelectorAll("[type=range],[name=text]");
      let voices = [];

      msg.text = document.querySelector("[name=text]").value;

      function populateVoices() {
        voices = this.getVoices();
        voicesDropdown.innerHTML = voices
          .filter((voice) => voice.lang.includes("en"))
          .map(
            (voice) =>
              `<option value='${voice.name}'>${voice.name} ${voice.lang}</option>`
          )
          .join("");
      }

      function setVoice() {
        console.log(this.value);
        msg.voice = voices.find((voice) => voice.name === this.value);
        toggle();
      }

      function toggle(startSpeaking = true) {
        speechSynthesis.cancel();
        if (startSpeaking) {
          speechSynthesis.speak(msg);
        }
      }

      function setOption() {
        msg[this.name] = this.value;
        toggle();
      }

      speechSynthesis.addEventListener("voiceschanged", populateVoices);
      voicesDropdown.addEventListener("change", setVoice);
      options.forEach((option) => option.addEventListener("change", setOption));
      speakButton.addEventListener("click", toggle);
      stopButton.addEventListener("click", () => toggle(false));