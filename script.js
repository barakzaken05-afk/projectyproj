function includeComponents() {
    // מוצא את כל האלמנטים שיש להם את המאפיין data-include
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(el => {
        const file = el.getAttribute('data-include'); // מקבל את נתיב הקובץ
        
        fetch(file)
            .then(res => {
                if (res.ok) return res.text();
                throw new Error('שגיאה בטעינת הקובץ');
            })
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute('data-include'); // מנקה את המאפיין לאחר הטעינה
            })
            .catch(err => console.error(err));
    });
}

  function zoomIn(img) {
            img.style.transform = "scale(1.5)";
        }

        function zoomOut(img) {
            img.style.transform = "scale(1)";
        }


// הפעלה ברגע שהדף נטען
window.onload = includeComponents;
    function checkForm() {
            // שימוש במשתנים (Variables)
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const phone = document.getElementById('userPhone').value;
            const message = document.getElementById('userMessage').value;
            const errorDiv = document.getElementById('error');

            // בדיקת קלט - שם חייב להכיל לפחות 2 אותיות
            if (name.length < 2) {
                errorDiv.innerText = "נא להזין שם מלא תקין";
                return;
            }

            // בדיקת אימות אימייל (שימוש באופרטורים)
            if (!email.includes('@') || !email.includes('.')) {
                errorDiv.innerText = "כתובת האימייל אינה תקינה";
                return;
            }
 // בדיקת קלט - שם חייב להכיל לפחות 2 אותיות
            if (phone.length < 7) {
                errorDiv.innerText = "נא להזין שם מלא תקין";
                return;
            }
             if (message.length < 0) {
               
                return;
            }
            // הצגת הודעת אישור (Alert)
           
          //  errorDiv.innerText = ""; // איפוס הודעת השגיאה
          //  document.getElementById('contactForm').reset(); // איפוס הטופס
            // alert("תודה " + name + "! ההודעה התקבלה ונחזור אליך בהקדם.");
        }

 function sendData() {
     
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone = document.getElementById("userPhone").value;
    let massage = document.getElementById("userMessage").value;
    alert("תודה " +name+email+phone+massage);


    fetch("https://script.google.com/macros/s/AKfycbw8NnD_zgvT7i5CI3GaONXbzErGbvQRKhxz2aog3EOu8Z9Xu9r5esBRG-GDn46aW0yT/exec", {
        method: "POST",
        body: JSON.stringify({ name: name ,email: email,phone: phone,massage: massage})
    })
    .then(res => res.text())
    .then(data => alert("נשמר בהצלחה"));
}