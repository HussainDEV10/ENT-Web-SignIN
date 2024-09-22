// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXXCR2jN8SOP_AamRaE0vkEliR_cnpLqY",
  authDomain: "backy-123.firebaseapp.com",
  projectId: "backy-123",
  storageBucket: "backy-123.appspot.com",
  messagingSenderId: "763792380953",
  appId: "1:763792380953:web:74e509e70ca36b94f80688",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// عرض نموذج التسجيل
function showSignUpForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

// عرض نموذج تسجيل الدخول
function showLoginForm() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// تسجيل الدخول
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('تم تسجيل الدخول بنجاح');
      window.location.href = 'https://hussaindev10.github.io/ENT-Web';
    })
    .catch((error) => {
      alert('خطأ في تسجيل الدخول: ' + error.message);
    });
}

// إنشاء حساب جديد
function signUp() {
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      db.collection('users').doc(user.uid).set({
        username: username,
        email: email,
        friends: [],
        friendRequests: [],
        profilePic: ''
      }).then(() => {
        alert('تم إنشاء الحساب بنجاح');
        window.location.href = 'https://hussaindev10.github.io/ENT-Web';
      });
    })
    .catch((error) => {
      alert('خطأ في إنشاء الحساب: ' + error.message);
    });
}
