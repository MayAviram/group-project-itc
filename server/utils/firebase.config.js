const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: 'AIzaSyBfu5QUDVYMkauSo76GfEOA_RGV5UC_ITI',
  authDomain: 'lessons-app-574ec.firebaseapp.com',
  projectId: 'lessons-app-574ec',
  storageBucket: 'lessons-app-574ec.appspot.com',
  messagingSenderId: '507899758978',
  appId: '1:507899758978:web:7a4fc58bad3664fe4be79b',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = { storage };
