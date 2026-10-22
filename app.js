// Main Application Logic for IC Design Scripting Quiz & Theory
(function() {
  // --- APPLICATION STATE ---
  let state = {
    theme: localStorage.getItem('theme') || 'light',
    activeTab: 'theory', // 'theory' | 'quiz'
    quizMode: 'study', // 'study' (ôn tập - instant check) | 'exam' (thi thử - timed)
    chapterFilterTheory: 'all', // 'all' | 1..6
    chapterFilterQuiz: 'all', // 'all' | 1..6
    searchQueryTheory: '',
    
    // Quiz State
    questions: [...QUIZ_DATA], // list of questions
    currentIndex: 0,
    userAnswers: {}, // { [questionId]: [0, 1] } array of selected indices
    flagged: new Set(), // Set of questionIds
    checked: new Set(), // Set of questionIds validated in study mode
    isSubmitted: false,
    examTimer: null,
    timeRemaining: 45 * 60, // 45 minutes in seconds
    timerRunning: false
  };

  // Restore saved answers from localStorage if available
  try {
    const savedAnswers = localStorage.getItem('quiz_userAnswers');
    if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);
    const savedFlags = localStorage.getItem('quiz_flagged');
    if (savedFlags) state.flagged = new Set(JSON.parse(savedFlags));
  } catch (e) {
    console.error('Error loading saved state:', e);
  }

  // --- DOM ELEMENTS ---
  const el = {
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Theory DOM
    theoryContainer: document.getElementById('theoryContainer'),
    theorySearchInput: document.getElementById('theorySearchInput'),
    theoryPills: document.getElementById('theoryPills'),
    
    // Quiz DOM
    quizChapterSelect: document.getElementById('quizChapterSelect'),
    modeStudyBtn: document.getElementById('modeStudyBtn'),
    modeExamBtn: document.getElementById('modeExamBtn'),
    timerBox: document.getElementById('timerBox'),
    timerDisplay: document.getElementById('timerDisplay'),
    btnShuffle: document.getElementById('btnShuffle'),
    btnReset: document.getElementById('btnReset'),
    btnSubmitExam: document.getElementById('btnSubmitExam'),
    
    // Progress
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    
    // Question Card
    qCard: document.getElementById('questionCard'),
    qChapterTag: document.getElementById('qChapterTag'),
    qBadge: document.getElementById('qBadge'),
    btnFlag: document.getElementById('btnFlag'),
    qTitle: document.getElementById('qTitle'),
    optionsList: document.getElementById('optionsList'),
    explanationBox: document.getElementById('explanationBox'),
    btnPrev: document.getElementById('btnPrev'),
    btnNext: document.getElementById('btnNext'),
    btnCheckAnswer: document.getElementById('btnCheckAnswer'),
    
    // Navigator
    questionsGrid: document.getElementById('questionsGrid'),
    
    // Result Modal
    resultModal: document.getElementById('resultModal'),
    scoreNum: document.getElementById('scoreNum'),
    resultTitle: document.getElementById('resultTitle'),
    resultDesc: document.getElementById('resultDesc'),
    resultBreakdown: document.getElementById('resultBreakdown'),
    btnReviewWrong: document.getElementById('btnReviewWrong'),
    btnRestartExam: document.getElementById('btnRestartExam'),
    btnCloseModal: document.getElementById('btnCloseModal')
  };

  // --- INITIALIZATION ---
  function init() {
    applyTheme(state.theme);
    setupEventListeners();
    renderTheoryPills();
    renderTheory();
    renderQuizSidebar();
    loadQuestion(state.currentIndex);
    updateProgressBar();
  }

  // --- THEME HANDLING ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (el.themeIcon) {
      el.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  // --- TAB SWITCHING ---
  function switchTab(tabName) {
    state.activeTab = tabName;
    el.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    el.tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `${tabName}Tab`);
    });

    if (tabName === 'quiz' && state.quizMode === 'exam' && !state.timerRunning && !state.isSubmitted) {
      startTimer();
    }
  }

  // --- THEORY MODULE ---
  function renderTheoryPills() {
    const chapters = [
      { id: 'all', title: 'Tất cả 6 chương' },
      { id: 1, title: 'Chương 1: Tổng quan' },
      { id: 2, title: 'Chương 2: Shell Bash' },
      { id: 3, title: 'Chương 3: Tcl cơ bản' },
      { id: 4, title: 'Chương 4: Điều khiển & Thủ tục' },
      { id: 5, title: 'Chương 5: Chuỗi & File I/O' },
      { id: 6, title: 'Chương 6: Tích hợp EDA Tools' }
    ];

    el.theoryPills.innerHTML = chapters.map(c => `
      <button class="pill-btn ${state.chapterFilterTheory == c.id ? 'active' : ''}" data-chapter="${c.id}">
        ${c.title}
      </button>
    `).join('');

    el.theoryPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.chapterFilterTheory = btn.dataset.chapter;
        renderTheoryPills();
        renderTheory();
      });
    });
  }

  function renderTheory() {
    const query = state.searchQueryTheory.toLowerCase().trim();
    let filtered = THEORY_DATA;

    if (state.chapterFilterTheory !== 'all') {
      filtered = filtered.filter(ch => ch.id === parseInt(state.chapterFilterTheory));
    }

    if (query) {
      filtered = filtered.filter(ch => {
        const inTitle = ch.title.toLowerCase().includes(query);
        const inSummary = ch.summary.toLowerCase().includes(query);
        const inSections = ch.sections.some(sec => 
          sec.heading.toLowerCase().includes(query) ||
          (sec.content && sec.content.toLowerCase().includes(query)) ||
          (sec.bullets && sec.bullets.some(b => b.toLowerCase().includes(query)))
        );
        return inTitle || inSummary || inSections;
      });
    }

    if (filtered.length === 0) {
      el.theoryContainer.innerHTML = `
        <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>Không tìm thấy nội dung lý thuyết phù hợp</h3>
          <p style="font-size: 0.9rem; margin-top: 0.4rem;">Hãy thử tìm từ khóa khác như "expr", "catch", "chmod", "slack", "switch", "regexp"...</p>
        </div>
      `;
      return;
    }

    el.theoryContainer.innerHTML = filtered.map(ch => `
      <article class="chapter-card" id="theory-chapter-${ch.id}">
        <div class="chapter-card-header">
          <div class="chapter-title-group">
            <span class="chapter-num-badge">Chương ${ch.id}</span>
            <h3>${ch.title}</h3>
          </div>
          <button class="chapter-action-btn" data-jump-quiz="${ch.id}" title="Luyện tập các câu hỏi trắc nghiệm của chương này">
            <span>🎯 Luyện đề Chương ${ch.id}</span>
            <span>→</span>
          </button>
        </div>
        
        <div class="chapter-card-body">
          <div class="chapter-summary-box">
            <strong>Mục tiêu cốt lõi:</strong> ${ch.summary}
          </div>

          <div class="theory-subsections">
            ${ch.sections.map(sec => `
              <div class="subsection-box">
                <h4>${sec.heading}</h4>
                ${sec.content ? `<p>${sec.content}</p>` : ''}

                ${sec.bullets ? `
                  <ul>
                    ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
                  </ul>
                ` : ''}

                ${sec.table ? `
                  <div class="styled-table-wrap">
                    <table class="styled-table">
                      <thead>
                        <tr>${sec.table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                      </thead>
                      <tbody>
                        ${sec.table.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}

                ${sec.codeExample ? `
                  <div class="code-block-wrap">
                    <div class="code-block-header">
                      <span>CÚ PHÁP & VÍ DỤ MINH HỌA</span>
                      <button class="copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrap').querySelector('pre').innerText); this.innerText='Đã chép!'; setTimeout(()=>this.innerText='Sao chép', 1500)">
                        📋 Sao chép
                      </button>
                    </div>
                    <pre><code>${escapeHtml(sec.codeExample)}</code></pre>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');

    // Attach jump to quiz events
    el.theoryContainer.querySelectorAll('[data-jump-quiz]').forEach(btn => {
      btn.addEventListener('click', () => {
        const chapterId = btn.dataset.jumpQuiz;
        jumpToChapterQuiz(chapterId);
      });
    });
  }

  function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  function jumpToChapterQuiz(chapterId) {
    state.chapterFilterQuiz = chapterId.toString();
    el.quizChapterSelect.value = state.chapterFilterQuiz;
    filterQuizQuestions();
    switchTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- QUIZ MODULE ---
  function filterQuizQuestions() {
    if (state.chapterFilterQuiz === 'all') {
      state.questions = [...QUIZ_DATA];
    } else {
      const chNum = parseInt(state.chapterFilterQuiz);
      state.questions = QUIZ_DATA.filter(q => q.chapter === chNum);
    }
    state.currentIndex = 0;
    renderQuizSidebar();
    loadQuestion(0);
    updateProgressBar();
  }

  function loadQuestion(index) {
    if (index < 0 || index >= state.questions.length) return;
    state.currentIndex = index;
    const q = state.questions[index];

    // Meta
    el.qChapterTag.textContent = q.chapterTitle;
    el.qBadge.textContent = q.badge || "Chọn nhiều đáp án";
    el.qTitle.innerHTML = `<strong>Câu ${index + 1}:</strong> ${q.question}`;

    // Flag state
    const isFlagged = state.flagged.has(q.id);
    el.btnFlag.classList.toggle('active', isFlagged);
    el.btnFlag.querySelector('span:last-child').textContent = isFlagged ? 'Đã đánh dấu' : 'Đánh dấu câu hỏi';

    // Current selections
    const selectedIndices = state.userAnswers[q.id] || [];

    // Render Options
    const isCheckedInStudy = state.quizMode === 'study' && state.checked.has(q.id);
    const showAnswers = state.isSubmitted || isCheckedInStudy;

    el.optionsList.innerHTML = q.options.map((optText, optIdx) => {
      const isSelected = selectedIndices.includes(optIdx);
      const isCorrectAnswer = q.correct.includes(optIdx);

      let itemClass = 'option-item';
      if (isSelected) itemClass += ' selected';

      if (showAnswers) {
        if (isCorrectAnswer) {
          itemClass += ' correct-answer';
        } else if (isSelected && !isCorrectAnswer) {
          itemClass += ' wrong-selected';
        }
      }

      return `
        <div class="${itemClass}" data-option-index="${optIdx}">
          <div class="option-checkbox"></div>
          <div class="option-label">${optText}</div>
        </div>
      `;
    }).join('');

    // Attach click event for options (if not yet submitted in exam mode)
    if (!state.isSubmitted) {
      el.optionsList.querySelectorAll('.option-item').forEach(optEl => {
        optEl.addEventListener('click', () => {
          const optIdx = parseInt(optEl.dataset.optionIndex);
          toggleOptionSelection(q.id, optIdx);
        });
      });
    }

    // Explanation Box
    if (showAnswers) {
      el.explanationBox.style.display = 'block';
      el.explanationBox.innerHTML = `
        <div class="explanation-header">
          <span>💡 Giải thích chi tiết từ Giáo trình:</span>
        </div>
        <div class="explanation-content">${escapeHtml(q.explanation)}</div>
        <div class="explanation-ref">
          <span>📚 ${q.theoryRef}</span>
          <button class="btn-theory-jump" data-theory-ch="${q.chapter}">📖 Xem lại lý thuyết</button>
        </div>
      `;

      el.explanationBox.querySelector('.btn-theory-jump').addEventListener('click', () => {
        state.chapterFilterTheory = q.chapter.toString();
        renderTheoryPills();
        renderTheory();
        switchTab('theory');
        setTimeout(() => {
          const card = document.getElementById(`theory-chapter-${q.chapter}`);
          if (card) card.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      el.explanationBox.style.display = 'none';
    }

    // Nav Buttons
    el.btnPrev.disabled = index === 0;
    el.btnNext.disabled = index === state.questions.length - 1;

    // Check Answer button (Only in Study mode)
    if (state.quizMode === 'study' && !state.isSubmitted) {
      el.btnCheckAnswer.style.display = 'flex';
      el.btnCheckAnswer.textContent = state.checked.has(q.id) ? 'Đã kiểm tra' : 'Kiểm tra đáp án';
      el.btnCheckAnswer.disabled = state.checked.has(q.id);
    } else {
      el.btnCheckAnswer.style.display = 'none';
    }

    updateSidebarGridActive();
  }

  function toggleOptionSelection(questionId, optionIndex) {
    let current = state.userAnswers[questionId] || [];
    if (current.includes(optionIndex)) {
      current = current.filter(idx => idx !== optionIndex);
    } else {
      current = [...current, optionIndex].sort((a, b) => a - b);
    }

    if (current.length === 0) {
      delete state.userAnswers[questionId];
    } else {
      state.userAnswers[questionId] = current;
    }

    // Save to localStorage
    try {
      localStorage.setItem('quiz_userAnswers', JSON.stringify(state.userAnswers));
    } catch (e) {}

    // Re-render this question view
    loadQuestion(state.currentIndex);
    renderQuizSidebar();
    updateProgressBar();
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }

    try {
      localStorage.setItem('quiz_flagged', JSON.stringify([...state.flagged]));
    } catch (e) {}

    loadQuestion(state.currentIndex);
    renderQuizSidebar();
  }

  function checkCurrentAnswerStudyMode() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    state.checked.add(q.id);
    loadQuestion(state.currentIndex);
    renderQuizSidebar();
  }

  // --- PROGRESS & SIDEBAR ---
  function updateProgressBar() {
    const total = state.questions.length;
    let answeredCount = 0;

    state.questions.forEach(q => {
      if (state.userAnswers[q.id] && state.userAnswers[q.id].length > 0) {
        answeredCount++;
      }
    });

    const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    el.progressText.textContent = `Đã làm: ${answeredCount}/${total} câu (${percent}%)`;
    el.progressFill.style.width = `${percent}%`;
  }

  function renderQuizSidebar() {
    el.questionsGrid.innerHTML = state.questions.map((q, idx) => {
      const isAnswered = state.userAnswers[q.id] && state.userAnswers[q.id].length > 0;
      const isFlagged = state.flagged.has(q.id);
      const isActive = idx === state.currentIndex;

      let classes = 'q-grid-btn';
      if (isActive) classes += ' active';
      if (isAnswered) classes += ' answered';
      if (isFlagged) classes += ' flagged';

      // If submitted or checked in study mode, indicate correct/incorrect
      const showResult = state.isSubmitted || (state.quizMode === 'study' && state.checked.has(q.id));
      if (showResult && isAnswered) {
        const userAns = state.userAnswers[q.id] || [];
        const isExactMatch = userAns.length === q.correct.length && 
                             userAns.every(v => q.correct.includes(v));
        classes += isExactMatch ? ' correct' : ' incorrect';
      }

      return `<button class="${classes}" data-index="${idx}">${idx + 1}</button>`;
    }).join('');

    el.questionsGrid.querySelectorAll('.q-grid-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        loadQuestion(idx);
      });
    });
  }

  function updateSidebarGridActive() {
    el.questionsGrid.querySelectorAll('.q-grid-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === state.currentIndex);
    });
  }

  // --- TIMER MANAGEMENT ---
  function startTimer() {
    if (state.timerRunning) return;
    state.timerRunning = true;
    updateTimerDisplay();

    state.examTimer = setInterval(() => {
      if (state.timeRemaining > 0) {
        state.timeRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.examTimer);
        state.timerRunning = false;
        alert('⏰ Đã hết thời gian làm bài thi (45 phút)! Hệ thống sẽ tự động nộp bài.');
        submitExam();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.examTimer) {
      clearInterval(state.examTimer);
      state.examTimer = null;
    }
    state.timerRunning = false;
  }

  function resetTimer() {
    stopTimer();
    state.timeRemaining = 45 * 60;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    el.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    // Warning when less than 5 minutes
    if (state.timeRemaining <= 5 * 60) {
      el.timerBox.classList.add('warning');
    } else {
      el.timerBox.classList.remove('warning');
    }
  }

  // --- SUBMIT EXAM & GRADING ---
  function submitExam() {
    const total = state.questions.length;
    let answeredCount = 0;
    state.questions.forEach(q => {
      if (state.userAnswers[q.id] && state.userAnswers[q.id].length > 0) answeredCount++;
    });

    if (!state.isSubmitted && answeredCount < total) {
      const confirmSubmit = confirm(`Bạn mới trả lời ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài thi ngay không?`);
      if (!confirmSubmit) return;
    }

    stopTimer();
    state.isSubmitted = true;

    // Calculate score
    let score = 0;
    const chapterStats = {};

    for (let c = 1; c <= 6; c++) {
      chapterStats[c] = { total: 0, correct: 0 };
    }

    state.questions.forEach(q => {
      chapterStats[q.chapter].total++;
      const userAns = state.userAnswers[q.id] || [];
      const isExactMatch = userAns.length === q.correct.length && 
                           userAns.every(v => q.correct.includes(v));
      if (isExactMatch) {
        score++;
        chapterStats[q.chapter].correct++;
      }
    });

    const percent = Math.round((score / total) * 100);

    // Show Result Modal
    el.scoreNum.textContent = `${score}/${total}`;
    
    if (percent >= 90) {
      el.resultTitle.textContent = "Xuất sắc! 🎉";
      el.resultDesc.textContent = `Bạn đã nắm rất vững kiến thức cả 6 chương về kịch bản vi mạch (${percent}%). Sẵn sàng áp dụng vào đồ án và công việc!`;
    } else if (percent >= 75) {
      el.resultTitle.textContent = "Rất tốt! 👏";
      el.resultDesc.textContent = `Điểm số đạt ${percent}%. Bạn đã nắm vững hầu hết các nguyên tắc Tcl, Bash và flow EDA.`;
    } else if (percent >= 50) {
      el.resultTitle.textContent = "Đạt yêu cầu 👍";
      el.resultDesc.textContent = `Điểm số đạt ${percent}%. Nên đọc lại kỹ các phần Tcl Quoting, Regex và PrimeTime để củng cố.`;
    } else {
      el.resultTitle.textContent = "Cần ôn tập thêm 📖";
      el.resultDesc.textContent = `Điểm số đạt ${percent}%. Hãy dành thời gian xem lại các mục lý thuyết trọng tâm trước khi làm lại.`;
    }

    // Render Breakdown
    const chapterNames = [
      "",
      "Chương 1: Tổng quan tự động hóa",
      "Chương 2: Shell Bash trong Linux",
      "Chương 3: Tcl cơ bản & Cấu trúc",
      "Chương 4: Điều khiển & Thủ tục Tcl",
      "Chương 5: Chuỗi & File I/O Tcl",
      "Chương 6: Tích hợp EDA Tools"
    ];

    el.resultBreakdown.innerHTML = Object.keys(chapterStats).map(cNum => {
      const stat = chapterStats[cNum];
      if (stat.total === 0) return '';
      const cPercent = Math.round((stat.correct / stat.total) * 100);
      return `
        <div class="breakdown-row">
          <span class="breakdown-title">${chapterNames[cNum]}</span>
          <span class="breakdown-stat">${stat.correct}/${stat.total} câu (${cPercent}%)</span>
        </div>
      `;
    }).join('');

    el.resultModal.classList.add('active');

    // Update Question Card & Navigator
    loadQuestion(state.currentIndex);
    renderQuizSidebar();
  }

  // --- ACTIONS: RESET & SHUFFLE ---
  function resetQuiz() {
    if (confirm('Bạn có chắc muốn làm lại bài từ đầu không? Toàn bộ các lựa chọn đã đánh dấu sẽ được xóa.')) {
      state.userAnswers = {};
      state.flagged.clear();
      state.checked.clear();
      state.isSubmitted = false;
      try {
        localStorage.removeItem('quiz_userAnswers');
        localStorage.removeItem('quiz_flagged');
      } catch (e) {}

      if (state.quizMode === 'exam') {
        resetTimer();
        startTimer();
      }

      state.currentIndex = 0;
      loadQuestion(0);
      renderQuizSidebar();
      updateProgressBar();
    }
  }

  function shuffleQuestions() {
    if (confirm('Xáo trộn ngẫu nhiên thứ tự câu hỏi?')) {
      for (let i = state.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.questions[i], state.questions[j]] = [state.questions[j], state.questions[i]];
      }
      state.currentIndex = 0;
      loadQuestion(0);
      renderQuizSidebar();
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Theme
    el.themeToggle.addEventListener('click', toggleTheme);

    // Tab buttons
    el.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Theory Search
    el.theorySearchInput.addEventListener('input', (e) => {
      state.searchQueryTheory = e.target.value;
      renderTheory();
    });

    // Quiz Mode switch
    el.modeStudyBtn.addEventListener('click', () => {
      if (state.quizMode === 'study') return;
      state.quizMode = 'study';
      el.modeStudyBtn.classList.add('active');
      el.modeExamBtn.classList.remove('active');
      el.timerBox.style.display = 'none';
      stopTimer();
      loadQuestion(state.currentIndex);
      renderQuizSidebar();
    });

    el.modeExamBtn.addEventListener('click', () => {
      if (state.quizMode === 'exam') return;
      state.quizMode = 'exam';
      el.modeExamBtn.classList.add('active');
      el.modeStudyBtn.classList.remove('active');
      el.timerBox.style.display = 'flex';
      if (!state.isSubmitted) {
        startTimer();
      }
      loadQuestion(state.currentIndex);
      renderQuizSidebar();
    });

    // Quiz Chapter Filter
    el.quizChapterSelect.addEventListener('change', (e) => {
      state.chapterFilterQuiz = e.target.value;
      filterQuizQuestions();
    });

    // Quiz actions
    el.btnPrev.addEventListener('click', () => {
      if (state.currentIndex > 0) loadQuestion(state.currentIndex - 1);
    });

    el.btnNext.addEventListener('click', () => {
      if (state.currentIndex < state.questions.length - 1) loadQuestion(state.currentIndex + 1);
    });

    el.btnFlag.addEventListener('click', toggleFlagCurrentQuestion);

    el.btnCheckAnswer.addEventListener('click', checkCurrentAnswerStudyMode);

    el.btnReset.addEventListener('click', resetQuiz);
    el.btnShuffle.addEventListener('click', shuffleQuestions);
    el.btnSubmitExam.addEventListener('click', submitExam);

    // Modal
    el.btnCloseModal.addEventListener('click', () => {
      el.resultModal.classList.remove('active');
    });

    el.btnReviewWrong.addEventListener('click', () => {
      el.resultModal.classList.remove('active');
      // Jump to first wrong question
      for (let i = 0; i < state.questions.length; i++) {
        const q = state.questions[i];
        const userAns = state.userAnswers[q.id] || [];
        const isExactMatch = userAns.length === q.correct.length && 
                             userAns.every(v => q.correct.includes(v));
        if (!isExactMatch) {
          loadQuestion(i);
          break;
        }
      }
    });

    el.btnRestartExam.addEventListener('click', () => {
      el.resultModal.classList.remove('active');
      resetQuiz();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (state.activeTab !== 'quiz') return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        if (state.currentIndex > 0) loadQuestion(state.currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (state.currentIndex < state.questions.length - 1) loadQuestion(state.currentIndex + 1);
      }
    });
  }

  // Run app on load
  document.addEventListener('DOMContentLoaded', init);
})();
