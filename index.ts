//1) Create a function that accepts an array of strings, and prints out each one in a loop.

function stringArray(myArray: string[]){
    for (let i = 0; i<myArray.length; i++){
        console.log(myArray[i]);
    }
}

stringArray(['hello','frog','toad']);

//2) Create a function that takes 3 numbers, adds them together, and returns them as a number.
function addThreeNumbers(x: number, y:number, z:number): number {
    return x+y+z;
}

console.log(addThreeNumbers(5,7,2));

//3) Create a function that takes a string as an argument, and returns a promise to return "hello" plus that string, as a string..

function helloTyper(name: string): Promise<string> {
    return new Promise((resolve) => {
        const sayHi = "hello " + name;
        resolve(sayHi);
    })
}

console.log(helloTyper("joe"));

//4) Create a function that accepts a single array where the elements can be strings OR numbers OR booleans.
// Loop over the array, and if the element is a string, print the string plus the text "is a string". 
//If it's a number, print out the number plus "is a number". If it's a boolean, print out the boolean plus "is a boolean".

function stringBooleanSorter(myArray: (string | boolean | number)[]){
    for (let i = 0; i<myArray.length; i++){
        if (typeof myArray[i] === 'string'){
            console.log(myArray[i] + ' is a string');
        } else if (typeof myArray[i] === 'boolean') {
            console.log(myArray[i] + ' is a boolean');
        } else if (typeof myArray[i] === 'number') {
            console.log(myArray[i] + ' is a number');
        }
    }
}

stringBooleanSorter(['hello',false,'helllllo',false,'whatsup',4,5,2,1,true, true]);

//create a type that represents a discord user that has the following properties:
// name, which is a string
// isAdmin, which is a boolean
// isGMI, which is a boolean
// and roles, which is an array of strings.

// Then, create a type that represents a discord message that has the following properties:
// user, which is type DiscordUser
// text, which is a string
// keks, which is a number.

type discordUser = {
    name: string,
    isAdmin: boolean,
    isGMI: boolean,
    roles: string[]
}

type discordMessage = {
    user: discordUser,
    text: string,
    keks: number
}

//6) Create functions that use your types:
// - addKekToMessage which takes a discord message
// - canDeleteServer which takes a discord user and checks if they are admin or not before returning a boolean
// - editMessage which takes a discord message, a discorduser, and newText, 
// and IF the user name is the same as the user on the discordmessage itself, allows them to edit the message.

function addKekToMessage(message: discordMessage){
    message.keks = message.keks + 1;
}

function canDeleteServer(user: discordUser): boolean {
    if (user.isAdmin === true){
        return true;
    } else if (user.isAdmin === false){
        return false;
    } else {
        return false;
    }
}

function editMessage(message:discordMessage, user: discordUser, newText: string){
    if (message.user.name === user.name){
        message.text = newText;
    } else {
        console.log('You are not the original author of this messsage!!')
    }
}

const Tom: discordUser = {
    name: 'Tom',
    isAdmin: true,
    isGMI: true,
    roles: ['sure']
}

const tomMessage: discordMessage = {
    user: Tom,
    text: 'hey sup',
    keks: 5
}

addKekToMessage(tomMessage);
canDeleteServer(Tom);
editMessage(tomMessage,Tom,'new message edit woo!');

console.log(Tom);
console.log(tomMessage);

// 7) Create a type that represents an NFT, with properties like imageURL, name, currentOwnerAddress, openSeaFloorPrice, and description.

type NFT = {
    imageURL: string,
    name: string,
    currentOwnerAddress: string,
    openSeaFloorPrice: number,
    description: string
}

// 8) Create a function that accepts an array of NFTs and returns the one with the lowest floor price. Not the floor price itself, but it returns an NFT. getCheapestNft

function getCheapestNft(myArray: NFT[]): NFT{
    let floorNft = myArray[0];
    for (let i = 1; i<myArray.length;i++){
        if (myArray[i].openSeaFloorPrice < floorNft.openSeaFloorPrice) {
            floorNft = myArray[i];
        }
    }
    return floorNft;
}

const booger: NFT = {
    imageURL: 'hey',
    name: 'hey',
    currentOwnerAddress: 'hey',
    openSeaFloorPrice: 6,
    description: 'hey'
}

const sap: NFT = {
    imageURL: 'hey',
    name: 'hey',
    currentOwnerAddress: 'hey',
    openSeaFloorPrice: 9,
    description: 'hey'
}

const yoo: NFT = {
    imageURL: 'hey',
    name: 'hey',
    currentOwnerAddress: 'hey',
    openSeaFloorPrice: 3,
    description: 'hey'
}

console.log(getCheapestNft([booger, sap, yoo]));