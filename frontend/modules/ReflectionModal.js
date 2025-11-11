// frontend/modules/ReflectionModal.js
export function showReflectionModal({ promptText, onSave }) {
  // remove any previous modal
  const existing = document.getElementById("reflectionModal");
  if (existing) existing.remove();

  // overlay
  const overlay = document.createElement("div");
  overlay.id = "reflectionModal";
  overlay.className = "reflection-overlay";

  // dialog
  const modal = document.createElement("div");
  modal.className = "reflection-modal";
  modal.innerHTML = `
    <h2 class="reflection-title">Reflection</h2>
    <p class="reflection-prompt">${promptText}</p>
    <textarea id="reflectionInput" placeholder="Write your thoughts..."></textarea>
    <div class="reflection-buttons">
      <button id="saveReflection">Save</button>
      <button id="cancelReflection">Cancel</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // event wiring
  document.getElementById("cancelReflection").onclick = () => overlay.remove();
  document.getElementById("saveReflection").onclick = () => {
    const val = document.getElementById("reflectionInput").value.trim();
    if (val) onSave(val);
    overlay.remove();
  };
}
