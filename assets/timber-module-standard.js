const moduleVideos = {
  'module-01.html': [
    { section: 'theory-3', id: 'SNaSW5b9aWE', title: 'Face edge and face side', channel: 'Mike Worth', watchFor: 'how a reliable face side and face edge support consistent marking from one datum' }
  ],
  'module-02.html': [
    { section: 'theory-1', id: 'oZkYLVrTYe4', title: 'The Way Wood Works', channel: 'Workshop Companion', watchFor: 'how grain direction changes across the face and edge of a board' },
    { section: 'theory-2', id: 'TEhZnFquAV8', title: 'Biscuit Joinery Tips and Tricks', channel: 'FineWoodworking', watchFor: 'reference faces, matching marks and correctly paired components' }
  ],
  'module-03.html': [
    { section: 'theory-2', id: 'MNCHVzBZH3Y', title: 'Pro tips for panel glue-ups', channel: 'Stumpy Nubs — James Hamilton', watchFor: 'the sequence of preparation, adhesive application, alignment and clamping checks' },
    { section: 'theory-3', id: '-KGOSwbHIuc', title: 'Rebates / Rabbets with a Router', channel: 'Mitch Peacock', watchFor: 'support, direction of travel and the checks made before routing begins' }
  ],
  'module-04.html': [
    { section: 'theory-2', id: 'rLLn19Y3ULc', title: 'Safety Tips for Working with Wood Finishing Products', channel: 'Rockler', watchFor: 'label directions, ventilation, PPE and safe handling of finishing materials' }
  ]
};

function buildVideo(video) {
  const aside = document.createElement('aside');
  aside.className = 'section-video screen-only';
  aside.innerHTML = `<div><p class="section-kicker">Watch, then check</p><h3></h3><p><strong>Watch for:</strong> <span class="watch-for"></span></p><p class="video-source"></p></div><div class="video-shell"><img class="video-thumbnail" loading="lazy" decoding="async"><div class="video-overlay"><button class="video-play" type="button"><span aria-hidden="true">▶</span> Play video</button><a target="_blank" rel="noopener">Open on YouTube</a></div></div>`;
  aside.querySelector('h3').textContent = video.title;
  aside.querySelector('.watch-for').textContent = video.watchFor;
  aside.querySelector('.video-source').textContent = `YouTube · ${video.channel}`;
  const shell = aside.querySelector('.video-shell');
  shell.dataset.videoId = video.id;
  shell.dataset.videoTitle = video.title;
  const thumbnail = aside.querySelector('.video-thumbnail');
  thumbnail.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  thumbnail.alt = `${video.title} video thumbnail`;
  const link = aside.querySelector('.video-overlay a');
  link.href = `https://www.youtube.com/watch?v=${video.id}`;
  return aside;
}

const moduleName = location.pathname.split('/').pop();
const moduleHeadings = {
  'module-02.html': 'Grain layout and controlled shaping',
  'module-03.html': 'Dry fit, glue-up and routed profiles',
  'module-04.html': 'Consistent sanding and responsible finishing',
  'module-05.html': 'Evaluate, document and hand over'
};
(function normaliseModuleLabels() {
  const heroTitle = document.querySelector('.aligned-module-hero h1');
  if (heroTitle && moduleHeadings[moduleName]) heroTitle.textContent = moduleHeadings[moduleName];
  const presentation = document.querySelector('.module-presentation-card');
  const presentationTitle = presentation && presentation.querySelector('h2');
  if (presentation && presentationTitle) {
    presentationTitle.id = 'module-presentation-title';
    presentation.setAttribute('aria-labelledby', presentationTitle.id);
  }
  const studentPanel = document.querySelector('.aligned-student-evidence');
  if (studentPanel) {
    const kicker = studentPanel.querySelector('.section-kicker');
    const title = studentPanel.querySelector('h2');
    if (kicker) kicker.textContent = 'Student evidence';
    if (title) title.textContent = 'Your details';
  }
})();

(moduleVideos[moduleName] || []).forEach((video) => {
  const section = document.getElementById(video.section);
  if (section) section.append(buildVideo(video));
});

document.querySelectorAll('.theory-media img').forEach((image) => {
  const figure = image.closest('figure');
  if (!figure || figure.querySelector('.open-larger-link')) return;
  const link = document.createElement('a');
  link.className = 'open-larger-link screen-only';
  link.href = image.currentSrc || image.src;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Open larger';
  figure.append(link);
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('.video-play');
  if (!button) return;

  const shell = button.closest('.video-shell');
  const videoId = shell && shell.dataset.videoId;
  if (!shell || !videoId) return;

  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  frame.title = shell.dataset.videoTitle || 'Course video';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  shell.replaceChildren(frame);
});
