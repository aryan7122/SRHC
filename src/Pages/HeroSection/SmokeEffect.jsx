import React, { useEffect, useRef } from "react";
import "./SmokeEffect.scss";

const SmokeEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        class Particle {
            constructor(x, y, size, speedX, speedY, opacity) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.opacity = opacity;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= 0.002;
                if (this.opacity <= 0) {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height;
                    this.opacity = Math.random() * 0.5 + 0.2;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 100; i++) {
                let size = Math.random() * 5 + 2;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let speedX = (Math.random() - 0.5) * 0.5;
                let speedY = Math.random() * -0.8 - 0.5;
                let opacity = Math.random() * 0.5 + 0.2;
                particles.push(new Particle(x, y, size, speedX, speedY, opacity));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        initParticles();
        animate();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
    }, []);

    return <canvas ref={canvasRef} className="smoke-effect"></canvas>;
};

export default SmokeEffect;
