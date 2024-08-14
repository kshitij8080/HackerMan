let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function progressBar(percentage) {
    const totalBars = 20;
    const filledBars = Math.round((percentage / 100) * totalBars);
    const emptyBars = totalBars - filledBars;
    const progress = "▓".repeat(filledBars);
    const empty = "░".repeat(emptyBars);

    const color = percentage === 100 ? '#00FF00' : '#ff9900';
    return `<span style="color: ${color}; font-weight: bold;">[${progress}${empty}] ${percentage}%</span>`;
}

async function typeText(text, element, speed = 30) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text[i];
        playSound();
        await sleep(speed);
    }
}

function playSound() {
    const typingSound = document.getElementById('typingSound');
    if (typingSound) {
        typingSound.currentTime = 0;
        typingSound.play().catch(error => {
            console.error('Failed to play sound:', error);
        });
    } else {
        console.error('Typing sound element not found');
    }
}

function stopSound() {
    const typingSound = document.getElementById('typingSound');
    if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
    } else {
        console.error('Typing sound element not found');
    }
}

function printLine(text) {
    const line = document.createElement('div');
    line.className = 'line';
    line.innerHTML = text;
    const consoleElement = document.getElementById('console');
    consoleElement.appendChild(line);
    consoleElement.scrollTop = consoleElement.scrollHeight;
}

async function hack(username) {
    try {
        console.log('Hack function started');
        // Hide overlay and show console directly
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.console').style.display = 'block';

        playSound();
        await sleep(1000);
        printLine("Initializing System...");
        await sleep(1500);
        printLine("Connecting to server...");
        await sleep(2000);

        printLine(progressBar(0));
        await sleep(500);
        printLine(`Hacking ${username}'s username...`);
        await sleep(3000);

        for (let i = 10; i <= 40; i += 10) {
            await sleep(1000);
            printLine(progressBar(i));
        }

        printLine(`Username found: ${username}`);
        await sleep(2000);

        for (let i = 50; i <= 70; i += 10) {
            await sleep(1000);
            printLine(progressBar(i));
        }

        printLine("Connecting to Instagram...");
        await sleep(3000);

        for (let i = 80; i <= 100; i += 10) {
            await sleep(1000);
            printLine(progressBar(i));
        }

        printLine("Account Hack successful... Done!");
        await sleep(1000);
        printLine("System Breached. Exiting...");
        await sleep(5000);
        printLine("Just kidding! This is a prank. 😜");

        stopSound();
    } catch (error) {
        console.error('Error in hack function:', error);
    } finally {
        console.log('Hack function finished');
    }
}

window.onload = () => {
    console.log('Window loaded');
    const typingSound = document.getElementById('typingSound');
    if (typingSound) {
        typingSound.addEventListener('canplaythrough', () => {
            console.log('Audio ready to play');
        });
        typingSound.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
        });
    } else {
        console.error('Audio element not found');
    }

    document.getElementById('startHack').addEventListener('click', () => {
        const usernameInput = document.getElementById('usernameInput');
        const username = usernameInput.value.trim();

        if (username) {
            hack(username);
        } else {
            alert('Please enter a username to continue.');
        }
    });
};
