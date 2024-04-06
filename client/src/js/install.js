const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  // Wait for the user to respond to the prompt
  if (!promptEvent) {
    return;
  }

  // Show the install prompt
  promptEvent.prompt();
  // Wait for the user to respond to the prompt
  window.deferredPrompt = null;
  // Log the result
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
