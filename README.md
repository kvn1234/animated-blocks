# Animated Gutenberg Blocks
A [WordPress Plugin](https://wordpress.org/plugins/animated-blocks/) for adding scroll-based CSS3 animations to Gutenberg blocks. Watch the [video demonstration](https://youtu.be/HItcFIDQ0yE).

![Plugin screenshot](https://github.com/virgiliud/animated-blocks/blob/master/assets/screenshot-1.png)

# Features

 - Choose from 76 cross-browser CSS3 animations or add your own
 - Preview animations in the editor
 - Adjust the animation delay, scroll threshold, and visibility of blocks 
 - Based on Gutenberg's InnerBlocks component
 
 # How to Use
 
Select Animated Block from the Layout Elements group and add whatever content blocks you'd like to it. Animated Block acts as a wrapper/container, nesting as many blocks as you want. Animation settings will appear in the block inspector when selecting Animated Block. Select an animation from the dropdown list or add your own custom CSS class. The selected animation or custom CSS class will be added to the block when the end user scrolls to it.


## Settings 

 - Animation Delay: How many milliseconds to wait before animating the element.
 - Threshold: Add animation when x% of the element enters the screen. 
 - Set to 0 opacity: Hide the element when the page loads. The option works for elements transitioning to 100% opacity through CSS.
  
 # What is Gutenberg?
 
> "Gutenberg" is the name of the project to create a new editor experience for WordPress. The goal is to create a new post and page editing experience that makes it easy for anyone to create rich post layouts.

# Requirements
PHP 5.6+ recommended, WordPress 5.0+. Gutenberg must be enable.

# Note:

This plugin will be updated as Gutenberg changes occur. Please report any issues. 
