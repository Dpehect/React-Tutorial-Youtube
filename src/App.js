import React from 'react';
import StudentList from './components/StudentList'; // Öğrenci listesi bileşenini içe aktar
import StudentProvider from './components/StudentProvider'; // Öğrenci verilerini sağlayan bileşeni içe aktar

function App() {
  return (
    <StudentProvider> // Öğrenci verileri sağlayıcısını uygulamanın üst bileşenine yerleştir
      <div className="App">
        <h1>Student List</h1> // Sayfa başlığı
        <StudentList /> // Öğrenci listesi bileşeni
      </div>
    </StudentProvider>
  );
}

export default App; // Uygulama bileşenini dışa aktar

// StudentProvider bileşeni, öğrenci verilerini sağlar ve tüm alt bileşenler tarafından kullanılabilir hale getirir
// StudentList bileşeni, öğrenci verilerini görselleştirir ve StudentProvider bileşeninden öğrenci verilerine erişir
