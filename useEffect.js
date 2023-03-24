import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Bileşen oluşturulduğunda çalışacak kod
    console.log("Bileşen oluşturuldu.");
  }, []);

  useEffect(() => {
    // count durumu güncellendiğinde çalışacak kod
    console.log("count güncellendi.");
  }, [count]);

  useEffect(() => {
    // message durumu güncellendiğinde çalışacak kod
    console.log("message güncellendi.");
  }, [message]);

  const incrementCount = () => {
    setCount(count + 1);
    setMessage("Count arttırıldı.");
  };

  const decrementCount = () => {
    setCount(count - 1);
    setMessage("Count azaltıldı.");
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={incrementCount}>Arttır</button>
      <button onClick={decrementCount}>Azalt</button>
    </div>
  );
}

export default Counter;
