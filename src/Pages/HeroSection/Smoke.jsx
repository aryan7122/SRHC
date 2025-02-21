import React, { useEffect, useRef } from "react";
import smokeImg from "../../assets/Hero/smoke.png";

const Smoke = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let smokeParticles = [];
        let animationFrameId;

        const createSmokeParticles = () => {
            const smokeCount = Math.floor(Math.random() * 2) + 10; // 10-12 नए particles आएंगे

            for (let i = 0; i < smokeCount; i++) {
                smokeParticles.push({
                    x: canvas.width - Math.random() * 1000 - 50, // Right side से random position
                    y: canvas.height - Math.random() * 10 - 150, // नीचे से उठेगा
                    opacity: Math.random() * 0.5 + 1, // हल्का transparent
                    speedY: Math.random() * 0.3 + 0.2, // ऊपर जाने की गति
                    speedX: Math.random() * 0.2 - 0.1, // हल्का दाएं-बाएं move
                    size: Math.random() * 180 + 270, // Smoke size अलग-अलग होगा
                });
            }
        };

        const drawSmoke = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas साफ करें

            let smokeImage = new Image();
            smokeImage.src = smokeImg; // Smoke Image

            smokeParticles.forEach((smoke, index) => {
                ctx.globalAlpha = smoke.opacity;
                ctx.drawImage(smokeImage, smoke.x, smoke.y, smoke.size, smoke.size);
                ctx.globalAlpha = 1;

                // Motion update
                smoke.y -= smoke.speedY; // धीरे-धीरे ऊपर जाएगा
                smoke.x += smoke.speedX; // हल्का-सा दाएं-बाएं हिलेगा
                smoke.opacity -= 0.001; // धीरे-धीरे fade होगा

                // अगर smoke पूरी तरह fade हो गया तो remove करो
                if (smoke.opacity <= 0) {
                    smokeParticles.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(drawSmoke); // Smooth Animation
        };

        const smokeInterval = setInterval(createSmokeParticles, 3000); // हर 3 सेकंड में नए particles add होंगे

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        createSmokeParticles();
        drawSmoke(); // Start Animation

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            clearInterval(smokeInterval);
        };
    }, []);

    return <canvas ref={canvasRef} className="smoke-effect"></canvas>;
};

export default Smoke;
