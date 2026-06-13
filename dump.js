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

    if (currentQ.isReview) {
      appState.incorrectNotes = appState.incorrectNotes.filter(n => n.question !== currentQ.question);
      saveState();
    }

    footer.classList.add('correct-state');
    
    currentLessonStreak++;
    if (currentLessonStreak >= 10) {
      lessonConsecutive10Achieved = true;
    }
    let streakRecovered = false;
    if (currentLessonStreak > 0 && currentLessonStreak % 5 === 0) {
      if (appState.hearts < 5) {
        appState.hearts = Math.min(5, appState.hearts + 1);
        streakRecovered = true;
        renderStats();
        saveState();
      }
    }

    if (streakRecovered) {
      feedbackMsg.innerHTML = `<i data-lucide="heart" size="32" fill="currentColor" style="color: var(--color-cardinal);"></i> 정답! ${currentLessonStreak}연속 정답으로 하트 1개 회복! 💖`;
      playSound("하트가 회복되었습니다");
    } else {
      feedbackMsg.innerHTML = `<i data-lucide="check-circle" size="32"></i> 정답입니다! (${currentLessonStreak}연속 정답 🔥)`;
      playSound("정답");
    }
    feedbackMsg.className = 'feedback-message correct-text';
  } else {
    options[selectedOptionIndex].classList.add('wrong');
    options[selectedOptionIndex].classList.remove('selected');

    // Highlight correct answer
    options[currentQ.answer].classList.add('correct');

    footer.classList.add('wrong-state');
    
        // Save to incorrect notes
    if (currentQ.concept) {
      appState.incorrectNotes.push({
        question: currentQ.question,
        options: currentQ.options,
        answer: currentQ.answer,
        unit: appState.selectedUnit,
        conceptDesc: currentQ.concept.desc,
        conceptMnemonic: currentQ.concept.mnemonic,
        timestamp: Date.now()
      });
    }

    // Fail Logic: Push to end or force skip
    currentQ.failCount = (currentQ.failCount || 0) + 1;
    if (currentQ.failCount < 10) {
      currentLessonData.push(Object.assign({}, currentQ, { failCount: currentQ.failCount }));
    }

    // Show mnemonic feedback
    let feedbackHTML = `<div style="display:flex; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; font-size:24px; font-weight:800;">
        <i data-lucide="x-circle" size="32"></i> 오답입니다.
      </div>`;
    if (currentQ.concept) {
      feedbackHTML += `
      <div style="background:rgba(255,255,255,0.2); padding:12px; border-radius:12px; font-size:16px; line-height:1.4;">
        <strong>💡 핵심 요약:</strong> ${currentQ.concept.desc}<br/>
        <strong>🧠 연상 암기:</strong> ${currentQ.concept.mnemonic}
      </div>`;
    }
    feedbackHTML += `</div>`;

    feedbackMsg.innerHTML = feedbackHTML;
    feedbackMsg.className = 'feedback-message wrong-text';
    checkBtn.classList.add('wrong-btn');

    currentLessonStreak = 0;
    appState.hearts = Math.max(0, appState.hearts - 1);
    renderStats();
    saveState();
    
    playSound("오답");
  }

  checkBtn.textContent = '계속하기';
  lucide.createIcons();
}