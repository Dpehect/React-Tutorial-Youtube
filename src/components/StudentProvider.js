import React, { createContext, useState } from 'react';  // React ve createContext, useState fonksiyonları import edildi.
import students from '../data';  // öğrenci verileri data.js dosyasından import edildi.

export const StudentContext = createContext();  // createContext() fonksiyonu kullanılarak bir context oluşturuldu.

const StudentProvider = ({ children }) => {  // StudentProvider adında bir fonksiyon tanımlandı, children prop'u alır.
  const [studentList, setStudentList] = useState(students);  // useState() fonksiyonu kullanılarak studentList ve setStudentList state'leri tanımlandı.

  return (
    //<StudentContext.Provider> ile context içerisinde paylaşılacak değerler belirlendi.
    // props olarak gelen children bileşeni burada render edilir.
    <StudentContext.Provider value={{ studentList, setStudentList }}>  
      {children}  
    </StudentContext.Provider>
  );
};

export default StudentProvider;  // StudentProvider bileşeni default export edildi.
