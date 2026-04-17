const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
 main
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach((link) => {
 main
    const name = formData.get('name');
    const company = formData.get('company');
    const contact = formData.get('contact');
    const demand = formData.get('demand');

    const subject = encodeURIComponent(`出海咨询申请 - ${company}`);
    const body = encodeURIComponent(
      `姓名：${name}\n公司名称：${company}\n联系方式：${contact}\n\n咨询需求：\n${demand}\n\n（来自 Youxi Media 官网静态表单）`
    );

    window.location.href = `mailto:biz@youximedia.com?subject=${subject}&body=${body}`;
 main