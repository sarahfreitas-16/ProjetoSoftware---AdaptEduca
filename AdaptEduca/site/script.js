/* AdaptEduca - Vanilla JS para interatividade */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Menu Mobile =====
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // ===== Chips de filtro (Aluno - matérias) =====
  document.querySelectorAll('[data-chip-group]').forEach(group => {
    const chips = group.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });

  // ===== Profile type select (Cadastro) =====
  document.querySelectorAll('.profile-type').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.profile-type').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // ===== Option cards (Demo - Preferencias) =====
  document.querySelectorAll('[data-option-group]').forEach(group => {
    const mode = group.getAttribute('data-mode') || 'multi';
    const cards = group.querySelectorAll('.option-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (mode === 'single') {
          cards.forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
        } else {
          card.classList.toggle('selected');
        }
      });
    });
  });

  // ===== Tabs (Demo page) =====
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const btns = group.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

 // ===== Formulários (login, cadastro) - salva sessão no localStorage =====
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const type = form.getAttribute('data-form');
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Processando...';
        btn.disabled = true;

        // Descobre tipo de perfil selecionado (no cadastro)
        let perfil = 'aluno';
        const selectedProfile = form.querySelector('.profile-type.selected h4');
        if (selectedProfile) perfil = selectedProfile.textContent.trim().toLowerCase();

        // Pega email do form (ou nome)
        const emailInput = form.querySelector('input[type="email"]');
        const nameInput = form.querySelector('input[type="text"]');
        const email = emailInput ? emailInput.value : 'usuario@adapteduca.com';
        const nome = nameInput && nameInput.value ? nameInput.value : email.split('@')[0];

        // Salva sessão no navegador
        localStorage.setItem('adaptEduca_user', JSON.stringify({
          email, nome, perfil, logado: true
        }));

        setTimeout(() => {
          btn.innerHTML = type === 'login' ? 'Entrou! ✓' : 'Conta criada! ✓';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
            // Redireciona para a área do perfil
            const destino = {
              aluno: 'aluno.html',
              professor: 'professor.html',
              responsável: 'responsavel.html',
              responsavel: 'responsavel.html'
            }[perfil] || 'aluno.html';
            window.location.href = destino;
          }, 900);
        }, 700);
      }
    });
  });

  // ===== Botão de Logout =====
  document.querySelectorAll('[data-logout]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      localStorage.removeItem('adaptEduca_user');
      window.location.href = 'index.html';
    });
  });

  // ===== Animação progressbar ao carregar =====
  document.querySelectorAll('.progress-bar[data-progress]').forEach(bar => {
    const w = bar.getAttribute('data-progress');
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = w + '%'; }, 80);
  });

});
