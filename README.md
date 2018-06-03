# Animated Gutenberg Blocks
A WordPress plugin for adding scroll-based CSS3 animations to Gutenberg blocks. [Download from WordPress](https://wordpress.org/plugins/animated-blocks/)

![Plugin screenshot](https://github.com/virgiliud/animated-blocks/blob/master/assets/screenshot-1.jpg)

# Features

 - Choose from 76 cross-browser CSS3 animations or add your own
 - Preview animations in the editor
 - Adjust the animation delay, scroll threshold, and visbility of blocks 
 - Based on Gutenberg's block extensibility API
 
 # How to Use
 
A new panel named "Animation Settings" will appear in the block inspector when clicking on a block. Select an animation from the dropdown list or add your own custom CSS class. The selected animation/custom CSS class will be added to the block element when the end user scrolls to it. 

## Settings 

 - Animation Delay: How many milliseconds to wait before animating the element.
 - Threshold: Add animation when x% of the element enters the screen. 
 - Start at 0 opacity: Hide the element when the page loads. The option works only for elements fading in from 0 to 100% opacity.
  
 # What is Gutenberg?
 
> "Gutenberg" is the name of the project to create a new editor experience for WordPress. The goal is to create a new post and page editing experience that makes it easy for anyone to create rich post layouts.

# Requirements
PHP 5.6+ recommended, WordPress 4.9+. The [Gutenberg Plugin](https://wordpress.org/plugins/gutenberg/) must be installed.

# Note:

Gutenberg is in beta mode. This plugin will be updated as changes occur. Please report any issues. 
