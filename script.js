// Load webcam
const webcam = document.getElementById("webcam");
const objectName = document.getElementById("object-name");

async function setupWebcam() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    webcam.srcObject = stream;
}
setupWebcam();

// Placeholder for object detection
async function detectObjects() {
    // Later: load TensorFlow model and detect objects
    console.log("Object detection will go here...");
}

// Placeholder for text-to-speech
function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9; // Slow speech for dyslexia
    speechSynthesis.speak(utterance);
}

// Example: show a word and pronounce it
function showWord(word) {
    objectName.innerText = word.split('').join(' ');
    speakWord(word);
}

showWord("APPLE");
