// INJECT BLOCKS FOR DESKTOP

function createDesktopWidget() {
  // CREATE PROFIL CONTAINER
  const mainBlock = document.querySelector("main");
  console.log(mainBlock);
  const profilWidget = document.createElement("div");
  profilWidget.classList.add("profil-widget");
  mainBlock.appendChild(profilWidget);
  // CREATE PROFIL IMG CONTAINER
  const profilWidgetImageContainer = document.createElement("div");
  profilWidgetImageContainer.classList.add("profil-widget-image-container");
  profilWidget.appendChild(profilWidgetImageContainer);
  // CREATE PROFIL IMG CONTAINER
  const profilWidgetImage = document.createElement("img");
  profilWidgetImage.classList.add("profil-widget-image");
  profilWidgetImageContainer.appendChild(profilWidgetImage);
  profilWidgetImage.src = "https://randomuser.me/api/portraits/med/men/7.jpg";
  // CREATE PROFIL TEXT
  const profilWidgetText = document.createElement("div");
  profilWidgetText.classList.add("profil-widget-text");
  profilWidget.appendChild(profilWidgetText);
  profilWidgetText.innerHTML = `
  <p class="widget-title">John Doe</p>
  <p class="widget-profil-info">Developer web</p>
  <p class="widget-profil-info">Fançais</p>
  <p class="widget-profil-info">30 ans</p>
  <p class="widget-profil-info">126 abonnés</p>
  `;
  // CREATE EVENT WIDGET
  const eventWidget = document.createElement("div");
  eventWidget.classList.add("event-widget");
  mainBlock.appendChild(eventWidget);

  // CREATE EVENT TEXT
  const eventWidgetText = document.createElement("div");
  eventWidgetText.classList.add("event-widget-text");
  eventWidget.appendChild(eventWidgetText);
  eventWidgetText.innerHTML = `
  <div class="widget-event-text">
    <p class="widget-title">Events</p>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">event_available</span>
      <p class="widget-info">
        Future of Tech Conference: Innovations, Trends, and Insights
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">event_available</span>
      <p class="widget-info">
        CodeJam Hackathon: Building the Next Generation of Apps
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">event_available</span>
      <p class="widget-info">
        Tech Talk: Disruptive Technologies Shaping the Future
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">event_available</span>
      <p class="widget-info">
        TechCon: Connecting Startups with Investors and Mentors
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">event_available</span>
      <p class="widget-info">
        Digital Transformation Summit: Strategies for Success in the Digital Age
      </p>
    </div>
    <p class="widget-title">Groups</p>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">group</span>
      <p class="widget-info">
      FutureTech Innovators
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">group</span>
      <p class="widget-info">
      AI & Machine Learning Experts
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">group</span>
      <p class="widget-info">
      Cybersecurity Pros Network
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">group</span>
      <p class="widget-info">
      Software Development Community
      </p>
    </div>
    <div class="widget-event-block">
    <span class="material-symbols-rounded">group</span>
      <p class="widget-info">
      Tech Industry Insights Group
      </p>
    </div>
  </div>
  `;
  // CREATE EVENT WIDGET
  const suggestWidget = document.createElement("div");
  suggestWidget.classList.add("suggest-widget");
  mainBlock.appendChild(suggestWidget);

  // CREATE EVENT TEXT
  const suggestWidgetText = document.createElement("div");
  suggestWidgetText.classList.add("suggest-widget-text");
  suggestWidget.appendChild(suggestWidgetText);

  suggestWidgetText.innerHTML += `
      <p class="widget-title">Suggestions</p>
      <div class="suggest-widget-text-container">
      <span class="material-symbols-rounded">person_add</span>
        <div>
        <p class="widget-suggest-name">Alma Hansen</p>
        <p class="widget-suggest-job">Front-End Developer</p>
        </div>
      </div>
      <div class="suggest-widget-text-container">
      <span class="material-symbols-rounded">person_add</span>
        <div>
        <p class="widget-suggest-name">Oscar Kelley</p>
        <p class="widget-suggest-job">Back-End Developer</p>
        </div>
      </div>
      <div class="suggest-widget-text-container">
      <span class="material-symbols-rounded">person_add</span>
        <div>
        <p class="widget-suggest-name">Karla Olsen</p>
        <p class="widget-suggest-job">Java Developer</p>
        </div>
      </div>
      <div class="suggest-widget-text-container">
      <span class="material-symbols-rounded">person_add</span>
        <div>
        <p class="widget-suggest-name">Joe Maldi</p>
        <p class="widget-suggest-job">UX Designer</p>
        </div>
      </div>

`;
}

createDesktopWidget();
