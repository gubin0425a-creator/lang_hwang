// State Management
const defaultState = {
  xp: 0,
  streak: 0,
  gems: 500,
  hearts: 5,
  unlockedLessons: 1
};

let appState = JSON.parse(localStorage.getItem('coringState')) || { ...defaultState };

// Syllabus Definition (5 Lessons)
const syllabus = [
  { chars: ["가", "나", "다", "라"], roman: ["Ga", "Na", "Da", "Ra"] },
  { chars: ["마", "바", "사", "아"], roman: ["Ma", "Ba", "Sa", "Ah"] },
  { chars: ["자", "차", "카", "타", "파", "하"], roman: ["Ja", "Cha", "Ka", "Ta", "Pa", "Ha"] },
  { chars: ["가", "나", "다", "라", "마", "바", "사", "아"], roman: ["Ga", "Na", "Da", "Ra", "Ma", "Ba", "Sa", "Ah"] }, // Review
  { chars: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"], roman: ["Ga", "Na", "Da", "Ra", "Ma", "Ba", "Sa", "Ah", "Ja", "Cha", "Ka", "Ta", "Pa", "Ha"] } // Final Review
];

let currentLessonData = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let isAnswerChecked = false;
let activeLessonIndex = 0; // Which node was clicked

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Render Initial Dashboard
  renderDashboard();

  // Event Listeners for Dashboard
  document.querySelectorAll('.node-container').forEach((node, index) => {
    node.addEventListener('click', () => {
      if (index < appState.unlockedLessons) {
        startLesson(index);
      }
    });
  });

  // Event Listeners for Lesson View
  document.getElementById('close-lesson').addEventListener('click', () => {
    if(confirm("레슨을 종료하시겠습니까? 진행 상황이 저장되지 않습니다.")) {
      closeLesson();
    }
  });

  document.getElementById('check-btn').addEventListener('click', handleCheckBtnClick);
});

let koreanVoice = null;

function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  // Prefer natural/premium Google or Microsoft voices if available
  koreanVoice = voices.find(v => v.lang.includes('ko') && (v.name.includes('Natural') || v.name.includes('Google'))) 
             || voices.find(v => v.lang.includes('ko'));
}

// Voices are loaded asynchronously in some browsers
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function playSound(text) {
  // TTS will read Korean perfectly if we provide the Hangul character.
  // If the text is Romanized, map it to the Korean character.
  const allChars = ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"];
  const allRoman = ["Ga", "Na", "Da", "Ra", "Ma", "Ba", "Sa", "Ah", "Ja", "Cha", "Ka", "Ta", "Pa", "Ha"];
  
  let ttsText = text;
  const rIndex = allRoman.indexOf(text);
  if (rIndex !== -1) {
    ttsText = allChars[rIndex];
  }

  // Check if speech synthesis is supported
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(ttsText);
    utterance.lang = 'ko-KR';
    
    // 늘어지는 소리("하아") 방지를 위해 원래 속도로 복구하고 마침표 제거
    utterance.rate = 0.9; 
    utterance.pitch = 1.0; 
    
    if (!koreanVoice) loadVoices();
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    window.speechSynthesis.speak(utterance);
  }
}

function generateLessonData(lessonIndex) {
  const data = syllabus[lessonIndex];
  const questions = [];
  const chars = data.chars;
  const roman = data.roman;
  
  // All possible options for padding
  const allChars = ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"];
  const allRoman = ["Ga", "Na", "Da", "Ra", "Ma", "Ba", "Sa", "Ah", "Ja", "Cha", "Ka", "Ta", "Pa", "Ha"];

  // Create a balanced and shuffled array of target indices
  let targetIndices = [];
  for (let i = 0; i < 15; i++) {
    targetIndices.push(i % chars.length);
  }
  targetIndices.sort(() => Math.random() - 0.5);

  // Generate 15 questions
  for (let i = 0; i < 15; i++) {
    const targetIdx = targetIndices[i];
    const char = chars[targetIdx];
    const rom = roman[targetIdx];

    let options = [];
    let answer = 0;
    
    const qType = i % 5;
    let questionText = "";

    if (qType === 0 || qType === 2 || qType === 4) {
      // Find Character based on Sound
      if (qType === 0) questionText = `뇌과학 기반 시각 연상: 발음 '${rom}'가 나는 글자는 무엇일까요?`;
      if (qType === 2) questionText = `간격 반복(Spaced Repetition): 조금 전 배웠던 '${rom}' 소리가 나는 글자는?`;
      if (qType === 4) questionText = `빠른 형태 식별: 소리 '${rom}'와 짝지어지는 글자를 고르세요.`;
      
      let optSet = new Set([char]);
      while(optSet.size < 4) {
        optSet.add(allChars[Math.floor(Math.random() * allChars.length)]);
      }
      options = Array.from(optSet).sort(() => Math.random() - 0.5);
      answer = options.indexOf(char);

    } else {
      // Find Sound based on Character
      if (qType === 1) questionText = `청각 및 패턴 인식: '${char}'라는 글자의 올바른 로마자 발음 표기는?`;
      if (qType === 3) questionText = `역방향 인출: 글자 '${char}'의 올바른 발음 기호는 무엇일까요?`;

      let optSet = new Set([rom]);
      while(optSet.size < 4) {
        optSet.add(allRoman[Math.floor(Math.random() * allRoman.length)]);
      }
      options = Array.from(optSet).sort(() => Math.random() - 0.5);
      answer = options.indexOf(rom);
    }

    questions.push({
      question: questionText,
      options: options,
      answer: answer,
      targetChar: char // Store the target Korean character for TTS
    });
  }
  return questions;
}

function renderDashboard() {
  // Update Stats Bar
  document.querySelector('.streak .value').textContent = appState.streak;
  document.querySelector('.gems .value').textContent = appState.gems;
  document.querySelector('.hearts .value').textContent = appState.hearts;

  // Update Daily Quests Progress
  const xpProgress = Math.min(100, (appState.xp / 50) * 100);
  const progressFills = document.querySelectorAll('.progress-fill');
  if(progressFills.length > 0) {
    progressFills[0].style.width = `${xpProgress}%`;
  }
  
  if (appState.unlockedLessons > 1 && progressFills.length > 1) {
    progressFills[1].style.width = '100%';
  }

  // Update Map Nodes
  const nodes = document.querySelectorAll('.node-container');
  nodes.forEach((node, index) => {
    if (index < appState.unlockedLessons - 1) {
      // Completed node
      node.className = 'node-container completed';
      node.innerHTML = `
        <button class="lesson-node">
          <i data-lucide="check" fill="currentColor"></i>
        </button>
      `;
    } else if (index === appState.unlockedLessons - 1) {
      // Active node
      node.className = 'node-container active';
      node.innerHTML = `
        <div class="tooltip">레슨 ${index + 1}</div>
        <button class="lesson-node crown-node">
          <i data-lucide="star" fill="currentColor"></i>
        </button>
      `;
    } else {
      // Locked node
      node.className = 'node-container locked';
      node.innerHTML = `
        <button class="lesson-node">
          <i data-lucide="lock"></i>
        </button>
      `;
    }
  });

  lucide.createIcons();
}

function saveState() {
  localStorage.setItem('coringState', JSON.stringify(appState));
}

function startLesson(index) {
  activeLessonIndex = index;
  currentLessonData = generateLessonData(index);
  currentQuestionIndex = 0;
  isAnswerChecked = false;
  selectedOptionIndex = null;
  
  document.getElementById('dashboard-view').style.display = 'none';
  document.getElementById('lesson-view').style.display = 'flex';
  
  renderQuestion();
}

function closeLesson() {
  document.getElementById('lesson-view').style.display = 'none';
  document.getElementById('dashboard-view').style.display = 'flex';
  renderDashboard();
}

function renderQuestion() {
  const currentQ = currentLessonData[currentQuestionIndex];
  
  // Update progress bar
  const progress = (currentQuestionIndex / currentLessonData.length) * 100;
  document.getElementById('lesson-progress-fill').style.width = `${progress}%`;

  // Update Question Text
  document.getElementById('question-text').textContent = currentQ.question;

  // Setup Sound Button and Play Sound
  const soundBtn = document.getElementById('play-question-sound');
  soundBtn.style.display = 'flex';
  soundBtn.onclick = () => playSound(currentQ.targetChar);
  
  // Auto-play sound when question renders
  playSound(currentQ.targetChar);

  // Render Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  currentQ.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(btn);
  });

  // Reset Footer
  resetFooter();
}

function selectOption(index) {
  if (isAnswerChecked) return;

  selectedOptionIndex = index;
  
  // Play the sound of the selected option
  const currentQ = currentLessonData[currentQuestionIndex];
  playSound(currentQ.options[index]);
  
  // Update UI
  const options = document.querySelectorAll('.option-btn');
  options.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  // Enable Check Button
  const checkBtn = document.getElementById('check-btn');
  checkBtn.disabled = false;
}

function handleCheckBtnClick() {
  if (!isAnswerChecked) {
    checkAnswer();
  } else {
    nextQuestion();
  }
}

function checkAnswer() {
  if (selectedOptionIndex === null) return;

  isAnswerChecked = true;
  const currentQ = currentLessonData[currentQuestionIndex];
  const isCorrect = selectedOptionIndex === currentQ.answer;

  const options = document.querySelectorAll('.option-btn');
  const footer = document.getElementById('lesson-footer');
  const checkBtn = document.getElementById('check-btn');
  const feedbackMsg = document.getElementById('feedback-message');

  if (isCorrect) {
    options[selectedOptionIndex].classList.add('correct');
    options[selectedOptionIndex].classList.remove('selected');
    
    footer.classList.add('correct-state');
    feedbackMsg.innerHTML = '<i data-lucide="check-circle" size="32"></i> 정답입니다!';
    feedbackMsg.className = 'feedback-message correct-text';
  } else {
    options[selectedOptionIndex].classList.add('wrong');
    options[selectedOptionIndex].classList.remove('selected');
    
    // Highlight correct answer
    options[currentQ.answer].classList.add('correct');

    footer.classList.add('wrong-state');
    feedbackMsg.innerHTML = '<i data-lucide="x-circle" size="32"></i> 오답입니다. 정답: ' + currentQ.options[currentQ.answer];
    feedbackMsg.className = 'feedback-message wrong-text';
    checkBtn.classList.add('wrong-btn');
    
    appState.hearts = Math.max(0, appState.hearts - 1);
  }

  checkBtn.textContent = '계속하기';
  lucide.createIcons();
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= currentLessonData.length) {
    finishLesson();
  } else {
    isAnswerChecked = false;
    selectedOptionIndex = null;
    renderQuestion();
  }
}

function resetFooter() {
  const footer = document.getElementById('lesson-footer');
  const checkBtn = document.getElementById('check-btn');
  const feedbackMsg = document.getElementById('feedback-message');

  footer.className = 'lesson-footer';
  feedbackMsg.innerHTML = '';
  feedbackMsg.className = 'feedback-message';
  
  checkBtn.textContent = '확인';
  checkBtn.className = 'check-btn';
  checkBtn.disabled = true;
}

function finishLesson() {
  // Update state
  appState.xp += 10;
  
  // Only unlock next if we completed the currently active max lesson
  if (activeLessonIndex === appState.unlockedLessons - 1) {
    // Max 5 lessons
    if (appState.unlockedLessons < 5) {
      appState.unlockedLessons++;
    }
  }
  
  appState.streak = Math.max(1, appState.streak);
  
  saveState();
  
  alert("레슨 완료! +10 XP");
  closeLesson();
}
