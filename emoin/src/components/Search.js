import { React, useState } from 'react';
import './search.css';

const emojiDictionary = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥝": "Kiwi Fruit",
    "🍅": "Tomato",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Ear of Corn",
    "🌶️": "Hot Pepper",
    "🥒": "Cucumber",
    "🥬": "Leafy Green",
    "🥦": "Broccoli",
    "🧄": "Garlic",
    "🧅": "Onion",
    "🍄": "Mushroom",
    "🥜": "Peanuts",
    "🌰": "Chestnut",
    "🍞": "Bread",
    "🥐": "Croissant",
    "🥖": "Baguette Bread",
    "🥨": "Pretzel",
    "🥯": "Bagel",
    "🥞": "Pancakes",
    "🧇": "Waffle",
    "🧀": "Cheese Wedge",
    "🍖": "Meat on Bone",
    "🍗": "Poultry Leg",
    "🥩": "Cut of Meat",
    "🥓": "Bacon",
    "🍔": "Hamburger",
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🥙": "Stuffed Flatbread",
    "🧆": "Falafel",
    "🥚": "Egg",
    "🍳": "Cooking",
    "🥘": "Shallow Pan of Food",
    "🍲": "Pot of Food",
    "🥣": "Bowl with Spoon"
}

   
//functions to search emojis
const Search = () => {
    //store all the emojis together
    const emojis = Object.keys(emojiDictionary);
    //maintaining the state
    const [emoji, setEmoji] = useState("");
    const [meaning, setMeaning] = useState("Answer will appear here");
        
    //search by typing
    function changeHandler(event) {
        const inputEmoji = event.target.value;
        setEmoji(inputEmoji);
    
        if (inputEmoji in emojiDictionary) {
            setMeaning(emojiDictionary[inputEmoji]);
        }
        else {
            setMeaning("Ooopsy, Forgot what this emoji was :(");
        }
    }
    //search By clicking
    function emojiClickHandler(inputEmoji) {
        setMeaning(emojiDictionary[inputEmoji])
    }
    return (

    <div className="center">
            <h1 style={{fontFamily:'monospace'}}>Food Emoji Hunter</h1>
            <input
                type="text"
                onChange={changeHandler}
                value={emoji}
                placeholder="Paste Your Emoji here!"
                style={{
                    padding: "1em",
                    minWidth: "80%",
                }}
            />
            
            <h3>{emoji}</h3>
            <h3 style={{ fontFamily: 'monospace' }}>{meaning}</h3>
            <div className="grid">
            {
                emojis.map((emoji) => (
                    <span
                        onClick={() => emojiClickHandler(emoji)}
                        style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}>
                        {" "}{emoji}{" "}
                    </span>
                )
                    )}</div>
    </div>
)}

export default Search
