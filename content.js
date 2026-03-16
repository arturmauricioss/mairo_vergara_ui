function applyFix() {
  console.log("Mairo UI Upgrade ativo");

  // exemplo: remover botão de anúncio
  const btn = document.querySelector(
    "body > ui-view > div.content-wrapper.ng-scope.ng-isolate-scope > portal-header > header > div > div > div > button"
  );

  if (btn) {
    btn.style.display = "none";
  }
}

// roda quando carregar
applyFix();

// observa mudanças (Angular troca DOM sem reload)
const observer = new MutationObserver(() => {
  applyFix();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});