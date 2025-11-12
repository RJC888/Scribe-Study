// frontend/modules/OMindmap.js
import { saveReflection } from "../formationEngine.js";
import { showReflectionModal } from "./ReflectionModal.js";

const nodes = [
  { id: "root", label: "I am the vine", relation: null },
  { id: "n1", label: "you are the branches", relation: "identity" },
  { id: "n2", label: "remain in Me", relation: "command" },
  { id: "n3", label: "you will bear much fruit", relation: "result" },
  { id: "n4", label: "apart from Me you can do nothing", relation: "contrast" },
];

const SIZE = 420;
const RADIUS = 150;
const CENTER = { x: SIZE / 2, y: SIZE / 2 };

export function renderMindmap({
  mountId = "mindmap",
  passage = "John 15:5",
  theme = "Union with Christ",
} = {}) {
  const container = document.getElementById(mountId);
  if (!container) {
    console.error(`OMindmap: #${mountId} not found`);
    return;
  }

  container.innerHTML = "";
  container.classList.add("mindmap-container");
  container.style.setProperty("--mm-size", `${SIZE}px`);

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", SIZE);
  svg.setAttribute("height", SIZE);
  svg.classList.add("mindmap-lines");
  container.appendChild(svg);

  const rootEl = document.createElement("div");
  rootEl.className = "mindmap-node root";
  rootEl.textContent = nodes[0].label;
  rootEl.style.left = `${CENTER.x}px`;
  rootEl.style.top = `${CENTER.y}px`;
  container.appendChild(rootEl);

  const branches = nodes.slice(1);
  branches.forEach((node, i) => {
    const angle = (i / branches.length) * Math.PI * 2;
    const x = CENTER.x + RADIUS * Math.cos(angle);
    const y = CENTER.y + RADIUS * Math.sin(angle);

    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", CENTER.x);
    line.setAttribute("y1", CENTER.y);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "var(--mm-stroke, #6d7c6e)");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);

    const el = document.createElement("div");
    el.className = "mindmap-node";
    el.textContent = node.label;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.title = `Relation: ${node.relation}`;

    // When a user clicks a node on the mindmap...
el.addEventListener("click", () => {
  // Step 1: Prepare the reflection question
  const promptText = `How does "${node.label}" connect to your life?`;

  // Step 2: Open the Reflection Modal (from ReflectionModal.js)
  showReflectionModal({
    promptText, // text shown in the modal
    onSave: async (response) => {
      // Step 3: Save the reflection (to Firestore or localStorage)
      await saveReflection({
        passage,
        module: "OMindmap",
        visualizationType: "ConceptualMap",
        prompt: promptText,
        response,
        theme,
        tags: ["mindmap", node.relation].filter(Boolean),
      });

      // Step 4: Let the user know it worked
      alert("Reflection saved!");
    },
  });
});

    container.appendChild(el);
  });

  console.log("✅ O-Mindmap rendered");
}
