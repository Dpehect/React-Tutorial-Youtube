import { StudentContext } from './StudentProvider';
import React, { useContext } from 'react';

const StudentList = () => {
  // StudentContext'ten studentList'i çekmek için useContext kullanılır
  const { studentList } = useContext(StudentContext);

  return (
    <ul>
      {/* studentList'teki her bir öğrenci için bir <li> oluştur */}
      {studentList.map((student) => (
        <li key={student.id}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Major: {student.major}</p>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;

//Bu kodlar, `StudentProvider` tarafından sağlanan öğrenci listesini (`studentList`) alır ve her bir öğrenci için bir liste elemanı oluşturur. Bu öğrenci listesi, `StudentContext` kullanılarak sağlanır ve `useContext` React hook'u kullanılarak alınır. `map` fonksiyonu, `studentList` içindeki her bir öğrenci için bir `<li>` elemanı oluşturur ve her öğrencinin adı, yaşı ve bölümü bir başlık ve iki paragraf içinde görüntülenir. `key` özelliği, her öğrencinin benzersiz bir kimliği olduğundan her öğrenci için bir benzersiz anahtar sağlar.
