// Interatividade: menu mobile, scroll suave, validação simples e toast

 // Elementos do DOM
 const header = document.querySelector('.header');
 const mobileMenu = document.getElementById('mobileMenu');
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const scrollToTopBtn = document.getElementById('scrollToTopBtn');
 const toast = document.getElementById('toast');
 const contactForm = document.getElementById('contactForm');
 const currentYearSpan = document.getElementById('currentYear');

 // Ano atual no rodapé
 if (currentYearSpan) {
   currentYearSpan.textContent = new Date().getFullYear();
 }

 // Toggle menu mobile
 function toggleMobileMenu() {
   if (!mobileMenu) return;
   mobileMenu.classList.toggle('active');
   const isOpen = mobileMenu.classList.contains('active');
   mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
   if (mobileMenuBtn) {
     mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
     mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
   }
 }

 // Scroll suave para seção
 function scrollToSection(id) {
   const element = document.getElementById(id);
   if (!element) return;
   const headerHeight = header ? header.offsetHeight : 0;
   const elementPosition = element.getBoundingClientRect().top;
   const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
   window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
   if (mobileMenu) {
     mobileMenu.classList.remove('active');
     mobileMenu.setAttribute('aria-hidden', 'true');
   }
   if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
 }

 // Botão de voltar ao topo
 if (scrollToTopBtn) {
   scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   });
 }

 // Eventos de scroll
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if (scrollToTopBtn) {
      if (window.pageYOffset > 300) scrollToTopBtn.classList.add('active');
      else scrollToTopBtn.classList.remove('active');
    }

    // Scroll spy: destacar link ativo
    updateActiveNavLink();
  });

 // Toast
 function closeToast() {
   if (toast) toast.classList.remove('active');
 }

 function showToast(type = 'success', title = 'Sucesso', message = 'Mensagem enviada!') {
   if (!toast) return;
   const icon = toast.querySelector('.toast-icon');
   const toastTitle = toast.querySelector('.toast-title');
   const toastMessage = toast.querySelector('.toast-message');
   if (icon) {
     icon.className = 'toast-icon';
     if (type === 'success') icon.classList.add('success');
   }
   if (toastTitle) toastTitle.textContent = title;
   if (toastMessage) toastMessage.textContent = message;
   toast.classList.add('active');
   setTimeout(closeToast, 4000);
 }

 // Validação simples de formulário
 function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }

 function showError(id, message) {
   const el = document.getElementById(id);
   if (el) { el.textContent = message; el.classList.add('active'); }
 }

 function clearErrors() {
   document.querySelectorAll('.error-message').forEach(el => {
     el.textContent = ''; el.classList.remove('active');
   });
 }

 if (contactForm) {
   contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     clearErrors();
     const name = document.getElementById('name');
     const email = document.getElementById('email');
     const message = document.getElementById('message');
     const subject = document.getElementById('subject');
     let ok = true;
     if (!name || name.value.trim().length < 2) { showError('nameError', 'Nome muito curto'); ok = false; }
     if (!email || !isValidEmail(email.value)) { showError('emailError', 'Email inválido'); ok = false; }
     if (!subject || subject.value.trim().length < 3) { showError('subjectError', 'Assunto muito curto'); ok = false; }
     if (!message || message.value.trim().length < 10) { showError('messageError', 'Mensagem muito curta'); ok = false; }
     if (ok) {
       showToast('success', 'Sucesso', 'Sua mensagem foi enviada com sucesso!');
       contactForm.reset();
     }
   });
 }

 // Vínculos para links externos abrirem em nova aba
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    // Otimiza carregamento de imagens
    document.querySelectorAll('img').forEach(img => {
      if (!img.closest('.hero-image')) {
        img.setAttribute('loading', 'lazy');
      }
      img.setAttribute('decoding', 'async');
    });

    // Inicializa estado ativo do menu
    updateActiveNavLink();
  });

 // Atualiza estado ativo do menu conforme seção visível
 function updateActiveNavLink() {
  const links = document.querySelectorAll('.nav-link[data-section], .mobile-nav-link[data-section]');
  const sections = ['resume','home','about','skills','projects','contact'];
   const headerHeight = header ? header.offsetHeight : 0;
   const scrollPos = window.pageYOffset + headerHeight + 10;
   let current = 'home';
   sections.forEach(id => {
     const el = document.getElementById(id);
     if (el) {
       const top = el.offsetTop;
       if (scrollPos >= top) current = id;
     }
   });
   links.forEach(link => {
     const isActive = link.dataset.section === current;
     if (isActive) {
       link.classList.add('is-active');
       link.setAttribute('aria-current', 'page');
     } else {
       link.classList.remove('is-active');
       link.removeAttribute('aria-current');
     }
   });
 }