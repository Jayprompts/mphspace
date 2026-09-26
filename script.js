document.getElementById('year').textContent = new Date().getFullYear();

// Mouse-tracking spotlight (matches the aesthetic used across MPH Space properties)
const fx1 = document.getElementById('bgFx1');
const fx2 = document.getElementById('bgFx2');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  fx1.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(99,102,241,0.15), transparent 40%)`;
  fx2.style.background = `radial-gradient(300px at ${x}px ${y}px, rgba(139,92,246,0.1), transparent 50%)`;
});

// Tool catalogue — add a new object here whenever a new MPH Space tool ships
const tools = [
  {
    name: 'MPH Form Relay',
    description: 'Self-hosted contact-form relay. Paste one snippet into any static site, get every submission straight to your inbox — no vendor lock-in.',
    url: 'https://formrelay.mypromptspace.cloud',
    status: 'live',
  },
  {
    name: 'Grove Chat',
    description: 'Real-time chat with communities and blogs built in — connect, discuss, and share in one place.',
    url: 'https://chat.mypromptspace.cloud',
    status: 'live',
  },
  {
    name: 'More tools coming soon',
    description: 'This space grows as new tools ship under MPH Space.',
    url: null,
    status: 'soon',
  },
];

const grid = document.getElementById('catalogueGrid');

tools.forEach((tool) => {
  const isLive = tool.status === 'live';
  const card = document.createElement(isLive ? 'a' : 'div');

  card.className = `tool-card${isLive ? '' : ' tool-card-soon'}`;
  if (isLive) {
    card.href = tool.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
  }

  card.innerHTML = `
    <div class="tool-card-top">
      <h3 class="tool-name">${tool.name}</h3>
      <span class="tool-status ${isLive ? 'status-live' : 'status-soon'}">${isLive ? 'Live' : 'Soon'}</span>
    </div>
    <p class="tool-desc">${tool.description}</p>
    ${isLive ? '<span class="tool-visit">Visit &rarr;</span>' : ''}
  `;

  grid.appendChild(card);
});
