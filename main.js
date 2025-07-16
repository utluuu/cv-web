document.addEventListener("DOMContentLoaded", function() {
  function openModal(img) {
      var modal = document.getElementById("modal");
      var modalImg = document.getElementById("modal-img");
      modal.style.display = "flex";
      modalImg.src = img.src;
  }

  function closeModal() {
      document.getElementById("modal").style.display = "none";
  }

  const translations = {
    tr: {
      "nav-home": "Anasayfa",
      "nav-about": "Hakkımda",
      "nav-hobbies": "Hobiler",
      "nav-projects": "Projeler",
      "nav-contact": "İletişim",
      "about-title": "Hakkımda",
      "about-text": "Merhaba! Ben Gülsüm Utlu. Şu sıralar Java’nın güçlü dünyasında gezinirken, bir yandan da back-end geliştirme alanında sağlam adımlar atıyorum. Hedefim net: Full Stack Developer olarak yazılım projelerine uçtan uca katkı sağlamak. Frontend ve backend’in birleştiği yerde, hem teknik bilgiye hem de kullanıcıyı anlayan bir bakış açısına ihtiyaç olduğuna inanıyorum. İşte ben tam da bu dengeyi kurmak için buradayım. Kod yazarken sadece çalışmasını değil, sürdürülebilir ve okunabilir olmasını da önemsiyorum. Takım içinde paylaşımcı, öğrenmeye açık ve çözüm odaklı bir yapım var.",
      "hobbies-title": "Hobiler",
      "hobbies-text": "Kod yazmadığım zamanlarda kendimi ruhen ve zihnen besleyen alanlara yöneliyorum. Doğayla iç içe olmayı sevdiğim için trekking vazgeçilmezlerimden biri. Uzun yürüyüşlerde hem bedenimi dinlendiriyor hem de zihnimi toparlıyorum. Boş zamanlarımda kitap okumak en keyif aldığım aktivitelerden biri. Favori romanım Gurur ve Önyargı, dönem kurgusuyla ve karakter derinliğiyle beni her okumada yeniden etkiliyor. Müzik ise hayatımın arka planında hep var. Farklı türlerde müzikler dinleyerek hem odaklanıyor hem de ilham alıyorum. Ayrıca düzenli olarak pilates yapıyorum; bu hem bedenimi güçlü tutuyor hem de disiplinli bir yaşam tarzını destekliyor. Yeni fikirler üretmeyi ve kendi projelerimi geliştirmeyi de çok seviyorum. Her yeni proje, kendimi ifade edebileceğim yeni bir alan gibi geliyor.",
      "projects-title": "Projelerim",
      "contact-title": "İletişim Formu",
      "label-name": "Adınız:",
      "label-email": "E-posta:",
      "label-message": "Mesajınız:",
      "contact-submit": "Gönder",
      "footer-text": "© Tüm hakları saklıdır.",
      "hero-title": "Web Sayfama Hoş Geldiniz",
      "project1-desc": "Bu projede, Çorum şehrini tanıtan kapsamlı bir web sitesi geliştirdim. Sitede Çorum'un tarihçesi, gezilecek yerleri ve yöresel yemekleri detaylı şekilde tanıtılmakta. Ayrıca ziyaretçilerin kolayca iletişime geçebilmesi için bir iletişim formu da ekledim. Projenin amacı, Çorum'u dijital ortamda etkili ve modern bir şekilde tanıtmaktır.",
      "project2-desc": "Sadece HTML ve CSS kullanarak modern ve kullanıcı dostu bir menü tasarımı oluşturdum. Bu menü, farklı cihazlarda sorunsuz çalışacak şekilde responsive olarak tasarlanmıştır ve sade arayüzüyle öne çıkmaktadır.",
      "project3-desc": "HTML ve CSS ile hazırladığım bu projede, kullanıcıların kolayca bilgi girebileceği ve etkileşimde bulunabileceği şık bir form arayüzü tasarladım. Formun amacı, kullanıcı deneyimini ön planda tutarak sade ve anlaşılır bir iletişim ortamı sunmaktır.",
      "project4-desc": "Farklı alanlara olan ilgim sayesinde Unity ve C# kullanarak bir FPS (First Person Shooter) tarzında oyun geliştirdim. Bu projede temel oyun mekaniği, karakter kontrolü ve düşmanların ana karakteri otomatik takip edebilmesi için yapay zeka entegre ettim. Oyun geliştirme süreci, yazılım ve tasarım becerilerimi farklı bir boyuta taşımamı sağladı.",
      "github-link": "(Tüm projelerime <a href=\"https://github.com/utluuu\" target=\"_blank\" style=\"color:#3498db; text-decoration:underline;\">GitHub</a> sayfamdan ulaşabilirsiniz.)",
      "project1-title": "WebProje (HTML, CSS, JS)",
      "project2-title": "Menü Görseli (HTML & CSS)",
      "project3-title": "Form Sitesi (HTML & CSS)",
      "project4-title": "FPS Oyun (Unity & C#)"
    },
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-hobbies": "Hobbies",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "about-title": "About Me",
      "about-text": "Hello! I'm Gülsüm Utlu. These days, I'm exploring the powerful world of Java while also making solid progress in back-end development. My goal is clear: to contribute end-to-end to software projects as a Full Stack Developer. I believe that where frontend and backend meet, both technical knowledge and an understanding of the user are needed. That's exactly why I'm here—to strike that balance. When I code, I care not only about making it work, but also about making it sustainable and readable. I'm collaborative, eager to learn, and solution-oriented in a team.",
      "hobbies-title": "Hobbies",
      "hobbies-text": "When I'm not coding, I turn to activities that nourish me mentally and spiritually. Since I love being in nature, trekking is one of my essentials. Long walks help me relax my body and clear my mind. Reading books is one of my favorite activities in my free time. My favorite novel is Pride and Prejudice, which impresses me every time with its period setting and character depth. Music is always in the background of my life. By listening to different genres, I both focus and get inspired. I also do pilates regularly; this keeps my body strong and supports a disciplined lifestyle. I love coming up with new ideas and developing my own projects. Every new project feels like a new space where I can express myself.",
      "projects-title": "My Projects",
      "contact-title": "Contact Form",
      "label-name": "Your Name:",
      "label-email": "E-mail:",
      "label-message": "Your Message:",
      "contact-submit": "Send",
      "footer-text": "© All rights reserved.",
      "hero-title": "Welcome to My Website",
      "project1-desc": "In this project, I developed a comprehensive website introducing the city of Çorum. The site details Çorum's history, places to visit, and local cuisine. I also added a contact form for visitors to easily get in touch. The aim of the project is to promote Çorum effectively and modernly in the digital environment.",
      "project2-desc": "I created a modern and user-friendly menu design using only HTML and CSS. This menu is designed to be responsive and works seamlessly on different devices, standing out with its simple interface.",
      "project3-desc": "In this project, which I prepared with HTML and CSS, I designed a stylish form interface where users can easily enter information and interact. The purpose of the form is to provide a simple and understandable communication environment with a focus on user experience.",
      "project4-desc": "Thanks to my interest in different fields, I developed an FPS (First Person Shooter) style game using Unity and C#. In this project, I integrated basic game mechanics, character control, and AI so that enemies can automatically follow the main character. The game development process took my software and design skills to a new level.",
      "github-link": "(You can access all my projects on my <a href=\"https://github.com/utluuu\" target=\"_blank\" style=\"color:#3498db; text-decoration:underline;\">GitHub</a> page.)",
      "project1-title": "Web Project (HTML, CSS, JS)",
      "project2-title": "Menu Design (HTML & CSS)",
      "project3-title": "Form Site (HTML & CSS)",
      "project4-title": "FPS Game (Unity & C#)"
    }
  };

  function setLanguage(lang) {
    for (const id in translations[lang]) {
      const el = document.getElementById(id);
      if (el) {
        if (id === "github-link") {
          el.innerHTML = translations[lang][id];
        } else {
          el.textContent = translations[lang][id];
        }
      }
    }
  }

  document.getElementById("tr-btn").addEventListener("click", () => setLanguage("tr"));
  document.getElementById("en-btn").addEventListener("click", () => setLanguage("en"));

  window.openModal = openModal;
  window.closeModal = closeModal;

  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");
  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(contactForm);
      fetch(contactForm.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = "none";
          formSuccess.textContent = "Teşekkürler! Mesajınız başarıyla gönderildi.";
        } else {
          formSuccess.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
        }
      }).catch(() => {
        formSuccess.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
      });
    });
  }
});
