const dinosaur = document.querySelector("#dinosaur");
const game = document.querySelector("#gameBody");


const middle = window.innerHeight / 2;
let velocity = .005;   //outta my ass no jutsu
let gravityConstant = .01807;
let dinoHeight = middle;
let falling;
let jumpingForce;
let jumping;

dinosaur.style.setProperty("top", `${middle}px`);


const reset = () => {
    dinosaur.style.setProperty("top", `${middle}px`);
    dinoHeight = 0;
}

const gravity = () => {
    const dinoDimensions = dinosaur.getBoundingClientRect();


    // Falling
    dinoHeight += velocity;
    dinosaur.style.setProperty("top", `${dinoHeight}px`);
    //progression and termnial velocity
    if (velocity <= 10) {
        velocity += gravityConstant;
    }

    if (dinoDimensions.bottom >= window.innerHeight) {
        clearInterval(falling);
    }
}

const jump = () => {

    if (dinoHeight >= window.innerHeight || dinoHeight <= 0) {
        reset();
    }

    if (jumpingForce >= 0) {
        dinoHeight -= jumpingForce;
        dinosaur.style.setProperty("top", `${dinoHeight}px`);
        velocity = .005;
        jumpingForce -= gravityConstant;
    }
    else {
        jumpingForce = 0;
        clearInterval(jumping);
        falling = setInterval(gravity, 1);
    }



}

falling = setInterval(gravity, 1);


game.addEventListener("pointerdown", () => {

    if (jumping) {
        clearInterval(jumping);
    }

    jumpingForce = 1.5;
    clearInterval(falling);
    jumping = setInterval(jump, 1);

});



