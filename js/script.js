document.addEventListener('DOMContentLoaded', function () {

    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playButton = container.querySelector('.play-button');

        playButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent triggering the container's click event

            container.click();
        });
    });
    const floatingContainer = document.getElementById('floatingElements');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating', 'heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        floatingContainer.appendChild(heart);
    }

    const birthdayAudio = new Audio();
    birthdayAudio.src = 'audio/birthday-message.mp3';

    const birthdayButton = document.getElementById('birthdayButton');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');

    birthdayButton.addEventListener('click', function () {
        birthdayAudio.play();

        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';

        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, 300 * index);
        });
    });

    const photoContainers = document.querySelectorAll('.photo-container');
    const memoryPopup = document.getElementById('memoryPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupImage = document.getElementById('popupImage');
    const popupDescription = document.getElementById('popupDescription');
    const closePopup = document.getElementById('closePopup');

    const memoryDescriptions = {
        'Graduation Day': 'The day you officialy became an engineer, making your family and I really proud of what you\'ve accomplished. My sweet lil engineer.',
        'Artistic Wifey': 'Honestly the one of the bestest gift you\'ve given me, truly shows your artistic skills too !',
        'Mad Scientist': 'My lil mad scientist, never know what she\'s cooking up with that naughty and crazy look on her face. Literally the cutest ever !!!',
        'Adorable Baby': 'Well aren\'t you just adorable my love, look at that cute lil baby.',
        'Partner in Crime': 'My partner in crime !!!! Lets go on many many many more shopping hauls. The best partner I could\'ve ever asked for !',
        'Carroms tryhard': 'Yeh, you don\'t have to try so hard when we play carroms, I get it you\'re the best, but go easy on me and stop winning all the timeee.',
        'Best Duo Ever': 'hehehe, one of our most iconic moments and one of our best photos. Shows how adorable and silly we can get, and plus points because your mom loves this photo.',
        'Our First': 'One of our many firsts, OUR FIRST PHOTO TOGETHER !!! look at your adorable cute lil smile, arent you just the best my wifeyyyyy',
        'First Valentine': 'Our first valentines day together, and the first ever rose I\'ve ever given to anyone !!, and yeh I totally also dislocated my knee for you to show how much I love you hehehe.',
        'Hugs': 'I love our hugs, the most warmest and comfiest hugs ever !!! ',
        'Sleeping Baby': 'Remember this moment hehe, when you came back from work being all tired and you pat yourself to sleep. Bohot funny tha hehe and CUTEEE.',
        'My Sadu Sadu Baby': 'Mera baby sadu sadu mat hoooo, hehehe I will try and annoy you less, no promises tho...',
        'Flower Crazy': 'When I plucked a flower for you and my babys crazy side came out hehe, look at your adorable lil expression.',
        'Interesting Pose': 'Yeh sometimes I wonder if you are truly human, WHAT ARE YOU DOING WITH YOUR LEGS ??? You never cease to surprise me you know.',
        'Caring Elder Sister': 'Look at these 2 lil girls bonding, thank you for being a truly amazing sister to Paru, and she loves you a wholeee lotttttt.',
        'Gaming maniac': 'The inner child in me must be proud of me knowing YOU are my life partner, someone who is just as obsessed with gaming as I am. So dedicated wowie. ',
        'Beautiful Engineer': 'Yet another one of your graduation pictures where you look absolutely fantastic my love !!!',
        'Aren\'t We Just Adorable ??': 'I cant wait to spend the rest of our lives together being all clumsy, silly and deep in love with each other !! I love you my baby.',
        'Entertaining Wifey': 'Just shows how entertaining and cute you can get hehheheh. Youre the cutest meri raani, also extremely funny !!!.',
        'Our First Navaratri Together': 'Look at you, so beautiful and fabulous in traditional dress, our first Navaratri together !!!, cant wait for all the future ones, dont worry I\'ll learn how to do garba hehe.',
        'Lil Cutie Pie': 'Cutest !!!!! literally the cutest.',
        'Those Eyes..': 'Just looking at those eyes can make anyone fall in love with you, literally the most gorgeous, caring, loving, innocent god blessed eyes !!!',
        'Sisters on a Date': '2 sassy sisters out on a date to cheesecake factory !!!',
        'Stargazing': 'The night we went stargazing looking for shooting starts and actually witnessing it. Wasnt it crazy ??? I cant wait to have many many more memorable moments like this with you !!!',
        'Doggo Babies': 'The time we met 2 lil adorable puppies amongst others, but wow Those 2 puppies were the best werent they, cant wait to adopt and raise puppies with you my love !',
        'Tune Mujhe Vaapis Seen Pe Choda ???': 'Hehehehe, one of the bestest and cutest videos I have of you, I will make sure I always keep this with me and use it if I have to hehe, and yes I wont leave you on seen :))'
    };

    photoContainers.forEach(container => {
        container.addEventListener('click', function () {
            const caption = this.querySelector('.photo-caption').textContent;

            if (this.classList.contains('video-container')) {
                const video = this.querySelector('video');


                if (!popupImage.parentNode.querySelector('video')) {
                    const popupVideo = document.createElement('video');
                    popupVideo.setAttribute('controls', '');
                    popupVideo.setAttribute('autoplay', '');
                    popupVideo.id = 'popupVideo';
                    popupVideo.style.width = 'auto';
                    popupVideo.style.height = 'auto';
                    popupVideo.style.maxWidth = '100%';
                    popupImage.parentNode.insertBefore(popupVideo, popupImage.nextSibling);
                }

                const popupVideo = popupImage.parentNode.querySelector('video');
                popupVideo.src = video.src;
                popupTitle.textContent = caption;
                popupImage.style.display = 'none';
                popupVideo.style.display = 'block';
                popupDescription.textContent = memoryDescriptions[caption] || 'This special moment reminds me of how lucky I am to have you in my life.';
            } else {
                const img = this.querySelector('img');
                if (popupImage.parentNode.querySelector('video')) {
                    popupImage.parentNode.querySelector('video').style.display = 'none';
                }

                popupTitle.textContent = caption;

                const tempImg = new Image();
                tempImg.onload = function () {
                    const naturalWidth = this.naturalWidth;
                    const naturalHeight = this.naturalHeight;

                    const availableHeight = window.innerHeight * 0.7;
                    const availableWidth = Math.min(window.innerWidth * 0.9, 840);

                    if (naturalHeight > availableHeight || naturalWidth > availableWidth) {
                        const heightRatio = availableHeight / naturalHeight;
                        const widthRatio = availableWidth / naturalWidth;

                        if (heightRatio < widthRatio) {
                            popupImage.style.height = availableHeight + 'px';
                            popupImage.style.width = 'auto';
                        } else {
                            popupImage.style.width = availableWidth + 'px';
                            popupImage.style.height = 'auto';
                        }
                    } else {
                        popupImage.style.width = naturalWidth + 'px';
                        popupImage.style.height = naturalHeight + 'px';
                    }
                };
                tempImg.src = img.src;

                popupImage.src = img.src;
                popupImage.style.display = 'block';
                popupDescription.textContent = memoryDescriptions[caption] || 'This special moment reminds me of how lucky I am to have you in my life.';
            }

            memoryPopup.classList.add('active');
        });
    });

    closePopup.addEventListener('click', function () {
        memoryPopup.classList.remove('active');

        const popupVideo = popupImage.parentNode.querySelector('video');
        if (popupVideo) {
            popupVideo.pause();
        }
    });

    memoryPopup.addEventListener('click', function (event) {
        if (event.target === memoryPopup) {
            memoryPopup.classList.remove('active');

            const popupVideo = popupImage.parentNode.querySelector('video');
            if (popupVideo) {
                popupVideo.pause();
            }
        }
    });

    const heartGame = document.getElementById('heartGame');
    const heartScoreDisplay = document.getElementById('heartScore');
    const startHeartGameBtn = document.getElementById('startHeartGame');
    let heartScore = 0;
    let gameActive = false;
    let heartInterval;

    startHeartGameBtn.addEventListener('click', function () {
        if (gameActive) return;

        gameActive = true;
        heartScore = 0;
        heartScoreDisplay.textContent = `Score: ${heartScore}`;
        this.textContent = 'Game in progress...';

        heartInterval = setInterval(createHeart, 1000);

        setTimeout(() => {
            clearInterval(heartInterval);
            gameActive = false;
            startHeartGameBtn.textContent = 'Play Again';
            alert(`Game over! You caught ${heartScore} hearts! ❤`);
        }, 30000);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 90 + 5}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

        heart.addEventListener('click', function () {
            heartScore++;
            heartScoreDisplay.textContent = `Score: ${heartScore}`;
            this.remove();
        });

        heartGame.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode === heartGame) {
                heart.remove();
            }
        }, 5000);
    }

    const envelope = document.getElementById('envelope');

    envelope.addEventListener('click', function () {
        this.classList.toggle('open');
    });
});