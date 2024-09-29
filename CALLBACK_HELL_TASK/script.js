// Countdown using callback hell
function countdown(cb) {
    document.getElementById("display").textContent = "10";
    setTimeout(function() {
        document.getElementById("display").textContent = "9";
        setTimeout(function() {
            document.getElementById("display").textContent = "8";
            setTimeout(function() {
                document.getElementById("display").textContent = "7";
                setTimeout(function() {
                    document.getElementById("display").textContent = "6";
                    setTimeout(function() {
                        document.getElementById("display").textContent = "5";
                        setTimeout(function() {
                            document.getElementById("display").textContent = "4";
                            setTimeout(function() {
                                document.getElementById("display").textContent = "3";
                                setTimeout(function() {
                                    document.getElementById("display").textContent = "2";
                                    setTimeout(function() {
                                        document.getElementById("display").textContent = "1";
                                        setTimeout(function() {
                                            cb();
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Final callback to show "Happy Independence Day"
function displayMessage() {
    const display = document.getElementById("display");
    display.textContent = "Happy Independence Day!";
    display.classList.add('happy-message');
    startFireworks();
}

// Fireworks logic
function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    // Firework object
    function Firework(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];

        for (let i = 0; i < 100; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }

    Firework.prototype.update = function() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
        }
    };

    Firework.prototype.draw = function() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw();
        }
    };

    // Particle object for each firework
    function Particle(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.gravity = 0.1;
    }

    Particle.prototype.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.size *= 0.95;  // Shrinking effect
    };

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (fireworks.length < 5) {
            const firework = new Firework(Math.random() * canvas.width, Math.random() * canvas.height / 2, `hsl(${Math.random() * 360}, 100%, 50%)`);
            fireworks.push(firework);
        }

        for (let i = 0; i < fireworks.length; i++) {
            fireworks[i].update();
            fireworks[i].draw();
            if (fireworks[i].particles[0].size <= 0.1) {
                fireworks.splice(i, 1);  // Remove fireworks after completion
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
countdown(displayMessage);
