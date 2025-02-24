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
            drawParticles();
        };

        function drawParticles() {
            for (let i = 0; i < 137; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = Math.random() * 1;
                let opacity = Math.random() * 0.6 + 1;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        }

        const drawBeams = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let beamCount = 25;
            let startX = canvas.width / 1.4;
            let startY = -220;

            let screenWidth = canvas.width;
            let baseWidth = 70; // Base width
            let maxBeamWidth = 120; // Max width for wide screens
            let minBeamWidth = 40; // Min width for small screens

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

                // Dynamic Beam Width Based on Screen Size
                let beamWidth =
                    screenWidth >= 1400
                        ? maxBeamWidth
                        : screenWidth >= 1000
                            ? baseWidth
                            : minBeamWidth;

                ctx.lineWidth = Math.random() * beamWidth + 20;
                ctx.strokeStyle = gradient;
                ctx.stroke();
            }
        };

        function animate() {
            drawParticles();
        }

        resizeCanvas();
        animate();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="light-beam-effect"></canvas>;
};

export default LightBeamEffect;
