
import { useState, useEffect, useMemo } from 'react';

const useTypewriterEffect = (words, speed, currentSlide, index) => {
    const [text, setText] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    // Memoize fullText to avoid recomputation on every render
    const fullText = useMemo(() => words.join('\n'), [words]);

    useEffect(() => {
        let timer;
        if (index === currentSlide) {
            if (text.length < fullText.length) {
                timer = setTimeout(() => {
                    setText((prev) => prev + fullText.charAt(text.length));
                }, speed);
            } else {
                setIsTypingDone(true);
            }
        } else {
            // Reset text when the slide is not active
            setText('');
            setIsTypingDone(false);
        }
        return () => clearTimeout(timer);
    }, [text, currentSlide, index, fullText, speed]); // fullText is now stable unless words change

    useEffect(() => {
        let cursorTimer;
        if (index === currentSlide && !isTypingDone) {
            cursorTimer = setInterval(() => {
                setCursorVisible(v => !v);
            }, 500);
        } else {
            setCursorVisible(false);  // Turn off cursor visibility when not active or typing is done
        }
        return () => clearInterval(cursorTimer);
    }, [isTypingDone, currentSlide, index]);

    return [text, cursorVisible];
};


export default useTypewriterEffect;

