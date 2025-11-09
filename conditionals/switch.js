let age = 13;

switch (true) {
    case (age >= 18):
        console.log("You are adult");
        break;

    case (age <= 3):
        console.log("You are not a toddler");
        break;

    case (age >= 13 && age <= 17):
        console.log("You are a teenager");
        break;

    default:
        console.log("You are NOT an Adult");
}


switch (age) {

    // Age 18 and above (adult)
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
        console.log("You are adult");
        break;

    // Toddlers (0–3)
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("You are not a toddler");
        break;

    // Teenagers (13–17)
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("You are a teenager");
        break;

    // Any other age
    default:
        console.log("You are NOT an Adult");
}