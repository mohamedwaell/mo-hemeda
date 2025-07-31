// Typewriter.js
import { useEffect, useState } from 'react';

const texts = [
  "ازيك  يا باشا عامل ايه 😊",
  "مش كفايه لعب ويلا  نذاكر 🤓",
  "انا محمد ومعايا الرياضه ليها طعم تاني 😎",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);     // current sentence index
  const [subIndex, setSubIndex] = useState(0); // current character index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= texts.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );

      if (!deleting && subIndex === texts[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  // Blinking cursor
  useEffect(() => {
    const cursor = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <h1 className="text-3xl font-bold text-blue-500">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </h1>
  );
};

export default Typewriter;
