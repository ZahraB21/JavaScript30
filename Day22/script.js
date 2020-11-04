const triggers = document.querySelectorAll("a");
      const highlight = document.createElement("span");

      highlight.classList.add("highlight");
      highlight.classList.add('displayOff');
      document.body.append(highlight);

      function highlightLink() {
        const linkCoords = this.getBoundingClientRect(); // gets the selected elements rectangle details
        console.log(linkCoords);
        const coords = {
          height: linkCoords.height,
          width: linkCoords.width,
          top: linkCoords.top + window.scrollY,
          left: linkCoords.left + window.scrollX,
        };
        highlight.classList.remove('displayOff');
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
      }

      triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));