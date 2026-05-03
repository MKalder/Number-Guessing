# Guess the Number

A modern Guess the Number browser game built with HTML, CSS and Vanilla JavaScript.

The player has to guess a random number between 1 and 20 within a limited number (4) of attempts.
The project focuses on frontend fundamentals, UI state management, and interactive user feedback using custom toast notifications.

Built as a frontend learning project focused on:

- Vanilla JavaScript
- UI state management
- Interactive web design
- Modern frontend architecture

## Features

- 🎮 Random number game logic
- 🏆 Highscore system
- 🔁 Restart functionality
- ⚡ Dynamic toast notifications
- 🎨 Modern glassmorphism card UI
- 🚫 Input validation
- 🔒 Button state management
- 📱 Responsive centered layout
- 🧠 State-driven UI architecture

## Technologies Used

- HTML5: Structure and semantic layout
- CSS3: Styling, layout and animation
- JavaScript (ES6): Game Logic and DOM manipulation

## Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-00c853?style=for-the-badge)](https://numbergame.mariuskalder.de/)

## What I have learned through this project

### 1. DOM Manipulation

```js
const buttonPlay = document.getElementById("play-btn");
```

#### Concepts learned:

- Selecting DOM elements
- Updating text dynamically
- Changing UI states
- Event-driven programming

### 2. Event Listeners

```js
buttonPlay.addEventListener("click", play);
```

#### Concepts learned:

- Click events
- User interaction handling
- Function callbacks
- Interactive UI behavior

### 3. Functions & Code Organizsation

```txt
showToast()
checkGuess()
newGame()
setPlayButtonState()
```

#### Concepts learned:

- Reusable functions
- Clean architecture
- Separation of concerns
- Maintainable code structure

### 4. State Management

The game manages states like:

- attempts
- highscore
- game over
- button disabled
- toast types

#### Concepts learned:

- UI state management
- Dynamic rendering
- Synchronizing logic and visuals
- Game/application flow

### 5. CSS Class-Based UI Systems

Instead of styling directly in JavaScript, the project uses CSS classes.

#### Concepts learned:

- Dynamic styling
- State-driven UI
- CSS architecture
- Scalable frontend patterns

### 6. Toast Notification System

```js
showToast("You have nailed it! 🏆🎯", "success");
```

#### Concepts learned:

- Timed UI feedback
- Visual state switching
- CSS transitions
- User experience design

### 7. Input Validation

The game validates user input before processing.

```js
if (!guess || guess < 1 || guess > 20)
```

#### Concepts learned:

- Defensive programming
- User input validation
- Error handling
- Preventing invalid states

### 8. Random Number Generation

```js
Math.floor(Math.random() * 20 + 1);
```

#### Concepts learned:

- Randomization
- Number generation
- Game mechanics

### 9. UI/UX Design Principles

The project introduces modern frontend design concepts.

#### Concepts learned:

- Glassmorphism
- Component-based styling
- Responsive centering
- Visual feedback systems
- Interactive UI states

## Future Improvements

Possible next steps:

- ⏱ Countdown timer
- 📈 Difficulty levels
- 🎵 Sound effects
- 🌙 Dark/Light mode
- 💾 LocalStorage highscores
- 📜 Guess history
- 🎞 Animations
- ⚛ React version
- 📱 Mobile-first redesign

## How to Run

Simply open index.html in your browser or use the demo [link](https://numbergame.mariuskalder.de/)

## Why this project matters

Even though this is a small game, it teaches the same core concepts used in:

- React apps
- Mobile apps
- Dashboards
- Games
- SaaS platforms
- Interactive websites

This project is a good foundation before learning:

- React
- Vue
- Flutter
- State management libraries
- Component architecture
