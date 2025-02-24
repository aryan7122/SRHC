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
            const smokeCount = Math.floor(Math.random() * 2) + 20; // 10-12 

            for (let i = 0; i < smokeCount; i++) {
                smokeParticles.push({
                    x: canvas.width - Math.random() * 1000 - 50, // Right side to random position
                    y: canvas.height - Math.random() * 10 - 150, // 
                    opacity: Math.random() * 0.8 + 1, // 
                    speedY: Math.random() * 0.3 + 0.2, //
                    speedX: Math.random() * 0.2 - 0.1, // move
                    size: Math.random() * 180 + 270, // Smoke size 
                });
            }
        };

        const drawSmoke = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas 

            let smokeImage = new Image();
            smokeImage.src = smokeImg; // Smoke Image

            smokeParticles.forEach((smoke, index) => {
                ctx.globalAlpha = smoke.opacity;
                ctx.drawImage(smokeImage, smoke.x, smoke.y, smoke.size, smoke.size);
                ctx.globalAlpha = 1;

                // Motion update
                smoke.y -= smoke.speedY; // 
                smoke.x += smoke.speedX; //
                smoke.opacity -= 0.001; // 

                if (smoke.opacity <= 0) {
                    smokeParticles.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(drawSmoke); // Smooth Animation
        };

        const smokeInterval = setInterval(createSmokeParticles, 3000); //

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
