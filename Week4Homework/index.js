document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Create header
  const header = document.createElement("header");
  header.innerHTML = "<h1>The Resilience Journey</h1>";
  app.appendChild(header);

  // Create main content
  const main = document.createElement("main");
  const sections = [
    {
      title: "Why Starting Over Matters",
      content:
        "Starting over can be a powerful opportunity to reinvent yourself and embrace new possibilities."
    },
    {
      title: "Steps to Rebuild Your Life",
      content:
        "1. Reflect on your experiences.<br>2. Set new goals.<br>3. Seek support from others.<br>4. Prioritize self-care."
    }
  ];

  sections.forEach(section => {
    const sectionElement = document.createElement("section");
    sectionElement.innerHTML = `<h2>${section.title}</h2><p>${section.content}</p>`;
    main.appendChild(sectionElement);
  });

  app.appendChild(main);

  // Create footer
  const footer = document.createElement("footer");
  footer.innerHTML = "&copy; 2024 The Resilience Journey";
  app.appendChild(footer);
});
