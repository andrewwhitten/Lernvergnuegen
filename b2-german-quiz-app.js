var questions = [], current = 0, score = 0, results = [], answered = false;

function shuffle(a) {
  var arr = a.slice(), i, j, t;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}

function showScreen(id) {
  var all = document.querySelectorAll('.screen'), i;
  for (i = 0; i < all.length; i++) all[i].classList.remove('active');
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  questions = shuffle(QS);
  current = 0; score = 0; results = [];
  showScreen('s-quiz');
  renderQ();
}

function renderQ() {
  answered = false;
  var q = questions[current], total = questions.length, i;
  document.getElementById('pfill').style.width = Math.round((current / total) * 100) + '%';
  document.getElementById('qcnt').textContent = (current + 1) + ' / ' + total;
  var letters = ['A','B','C','D'];
  var optsHtml = '';
  for (i = 0; i < q.opts.length; i++) {
    optsHtml += '<button class="opt" data-idx="' + i + '"><span class="opt-l">' + letters[i] + '</span><span>' + q.opts[i] + '</span></button>';
  }
  var html = '<div class="fi"><div class="cbadge">' + q.cat + '</div>'
    + '<div class="qtext">' + q.q + '</div>'
    + (q.ctx ? '<div class="qctx">' + q.ctx + '</div>' : '')
    + '<div class="opts" id="opts">' + optsHtml + '</div>'
    + '<div class="expl" id="expl"><strong>Erklärung:</strong> ' + q.expl + '</div>'
    + '<button class="btn-n" id="bnext">' + (current < questions.length - 1 ? 'NEXT QUESTION' : 'SEE RESULTS') + '</button></div>';
  document.getElementById('qarea').innerHTML = html;
  var btns = document.getElementById('opts').querySelectorAll('.opt');
  for (i = 0; i < btns.length; i++) {
    (function(idx) {
      btns[idx].addEventListener('click', function() { selectAnswer(idx); });
    })(i);
  }
  document.getElementById('bnext').addEventListener('click', nextQ);
}

function selectAnswer(chosen) {
  if (answered) return;
  answered = true;
  var q = questions[current], correct = q.ans, isRight = (chosen === correct), i;
  if (isRight) score++;
  results.push({ cat: q.cat, qtext: q.q, correct: isRight });
  var btns = document.getElementById('opts').querySelectorAll('.opt');
  for (i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
    if (i === correct) btns[i].classList.add('correct');
    else if (i === chosen && !isRight) btns[i].classList.add('wrong');
  }
  document.getElementById('expl').classList.add('show');
  document.getElementById('bnext').classList.add('show');
}

function nextQ() {
  current++;
  if (current >= questions.length) showResults();
  else renderQ();
}

function showResults() {
  showScreen('s-results');
  var total = questions.length, pct = score / total, v, d, i, c;
  document.getElementById('scbig').textContent = score + '/' + total;
  if (pct >= 0.8) { v = 'Strong B2 level'; d = 'Excellent -- nearly exam-ready. Run timed mock tests and polish weak categories.'; }
  else if (pct >= 0.6) { v = 'Solid B1-B2 boundary'; d = 'Good base, but gaps remain. Revisit the categories where you dropped points.'; }
  else if (pct >= 0.4) { v = 'B1 level -- keep working'; d = 'Foundations are there. Focus on Grammatik precision and Wortschatz depth.'; }
  else { v = 'Below B2 -- significant gaps'; d = 'Follow the 6-month plan. Start with grammar foundations and daily listening.'; }
  document.getElementById('vtext').textContent = v;
  document.getElementById('vdesc').textContent = d;
  var cats = ['Grammatik','Wortschatz','Hören','Leseverstehen','Redemittel'], csHtml = '';
  for (i = 0; i < cats.length; i++) {
    c = cats[i];
    var cq = results.filter(function(r){ return r.cat === c; });
    var cs = cq.filter(function(r){ return r.correct; }).length;
    var cls = (cs === cq.length) ? 'p' : (cs === 0 ? 'f' : '');
    csHtml += '<div class="csi"><div class="csi-n">' + c + '</div><div class="csi-v ' + cls + '">' + cs + '/' + cq.length + '</div></div>';
  }
  document.getElementById('csg').innerHTML = csHtml;
  var bdHtml = '<div class="bdn-t">Question Breakdown</div>', r;
  for (i = 0; i < results.length; i++) {
    r = results[i];
    var qshort = r.qtext.split('\n')[0].substring(0, 52) + '...';
    bdHtml += '<div class="brow"><div class="bc">' + r.cat + '</div><div class="bq">' + qshort + '</div><div class="br ' + (r.correct ? 'ok' : 'no') + '">' + (r.correct ? 'OK' : 'X') + '</div></div>';
  }
  document.getElementById('bdn').innerHTML = bdHtml;
}

document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('retryBtn').addEventListener('click', function(){ location.reload(); });
