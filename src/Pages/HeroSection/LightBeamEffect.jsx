import React, { useEffect, useRef } from "react";
import "./LightBeamEffect.scss";

const LightBeamEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");



        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawBeams();
          
            drawParticles()
        };

        function drawParticles() {
            for (let i = 0; i < 137; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = Math.random() * 1;
                let opacity = Math.random() * 0.6 + 1;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 1);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        }
        const drawBeams = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let beamCount = 25; // 15 अलग-अलग किरणें
            let startX = canvas.width / 1.4;
            let startY = -220; // ऊपर से स्टार्ट

            for (let i = 0; i < beamCount; i++) {
                let angle = (i - beamCount / 2) * 3;
                let endX = startX - Math.tan((angle * Math.PI) / 180) * canvas.height;
                let endY = canvas.height;

                let gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, "rgba(255,255,255,0.5)");
                gradient.addColorStop(0.5, "rgba(255,255,200,0.2)");
                gradient.addColorStop(1, "rgba(255,255,100,0)");

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.lineWidth = Math.random() * 70 + 50;
                ctx.strokeStyle = gradient;
                ctx.stroke();
            }
        };

      
        function animate() {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // drawBeams();
            drawParticles();
            // setTimeout(() => requestAnimationFrame(animate), 12);
        }
        resizeCanvas();

        animate();

        window.addEventListener("resize", resizeCanvas);
    }, []);

    return <canvas ref={canvasRef} className="light-beam-effect"></canvas>;
};

export default LightBeamEffect;
// //