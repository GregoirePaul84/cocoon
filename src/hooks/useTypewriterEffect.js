import { useState, useEffect } from 'react';

const useTypewriterEffect = (words, speed, currentSlide, index) => {
    const [text, setText] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let timer;
        if (index === currentSlide) {
            if (text.length < words.join(' ').length) {
                timer = setTimeout(() => {
                    setText((prev) => prev + words.join(' ')[text.length]);
                }, speed);
            } else {
                setIsTypingDone(true);
            }
        } else {
            // Clear text and reset state when the slide is not active
            setText('');
            setIsTypingDone(false);
        }
        return () => clearTimeout(timer);
    }, [text, currentSlide, index, words, speed]);

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

