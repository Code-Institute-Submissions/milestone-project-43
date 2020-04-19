<h1>Milestone Project 2: La Brière Holiday Cottage</h1>

The aim of this second Milestone project is to reuse the technologies covered in the interactive frontend development part of the Code Insitute's Full Stack Web developer course, such as HTML, CSS, Bootstrap and JavaScript.
For my project I chose to create a website for a holiday cottage project in France, that would display the various features of the place and allow the user to check prices, perform some map searches and send a message to the owner.

<h2>UX</h2>

This website is designed to complement a standard holiday cottage booking experience (such as Airbnb), by providing the user with a more personalized presentation than what is the norm on standard booking applications. The site is designed to give the user a good feel for the place, the colour scheme chosen reflects the contrast between the green fields and the orange tiled roofs that are typical of this area of France.

* As a site user, I want to be able to see pictures of the interior and exterior features of my potential holiday place, to check that they match my expectations.
* As a site user, I want to find out about nearby places of interest to plan visits and activities.
* As a site user, I want to be able to see the range of prices so that I can budget for my holidays.
* As a site user, I want to be able to contact the owner to ask further questions.
* As the site owner, I want to display the assets of my rental property in a personalized way.
* As the site owner, I want to be able to receive communication from potential customers and answer their questions. 

Please note that I have not been able to use the Balsamiq desktop app (for which you offered free subscription) to create presentable wireframes that would really add value as I cannot run it on my computer (OS too old for it), the rough sketches that I made are really not presentable :innocent:



<h2>Features</h2>

*The Landing page (index.html)*

In the header, the user is presented with a personalized logo and the cottage's name, together with a Bootstrap navbar for easy navigation. 
The jumbotron gives the user a quick, visible access to the cottage's main features page.
The text section briefly introduces the cottage and possible activities in the local area.
The carousel displays 3 pictures of the cottage and its surroundings.
The map shows where the cottage is located and invites the user to perform searches for which the map returns local results.
The footer provides the address and links to social media and booking site (empty links for now).

*The gîte page (holiday_cottage.html)*

Header and footer remain the same.
The text sections describe in detail the different features of the cottage.
The pictures are clickable thumbnail images that expand underneath the text area when clicked. 


*The prix page (prices.html)*

Header and footer remain the same.
The first section presents the prices in a responsive Bootstrap table.
The second section presents those prices in a more visual/interactive way using a Google calendar chart. 


*The contact page (contact.html)*

Header and footer remain the same.
The user is invited to fill in a 3 part form (name, email and message) to communicate with the owner.



<h2>Technologies and support used</h2>

* GitHub
* GitPod (IDE)

* HTML5 (structure)
* CSS3 (style)
* Bootstrap (navbar, grid structure, form, table)
* JavaScript (image gallery, price chart, contact form, map)


* Google Maps JavaScript API (map)
* Google Places API (map search)
* EmailJS (contact form)


* Google Fonts (Spectral, Roboto)
* Font Awesome (icons)
* CSS color code (colour picking)
* W3schools (support for bits of code)
* freelogodesign.org (site logo)

* W3schools (general support)
* Slack and Stackoverflow (general technical support)
* Youtube (Javascript tutorials)

* Freeformatter (code formatting)
* W3 validator (code validation)



<h2>Testing and bugs</h2>

I have tested the site on a variety of devices (Android and Apple phones, Ipad, Laptops) as well as various browsers (Safari, Chrome, Firefox, Internet Explorer), I have asked various users to test the site, using the github link.

Displaying pictures: pictures are presented in the form of a carousel and a gallery, both of which work on all devices and screensizes tested.

Providing textual information: pieces of text are displayed in a font colour that consistently contrasts well with its background and whose size adapts to different viewports and always remains readable.

Searching the map for local places of interest: the map adapts to a device screen size and the searches return relevant results in the local area.

Showing prices: the prices table is responsive and remains clear and readable on all devices. The calendar chart however works well on devices with a medium to large viewport, but it has proved difficult to make it responsive and therefore does not display fully on mobile devices. I have have tried a wide range of solutions, including those suggested by tutor support, but none of them worked. I chose to include he chart nonetheless as it adds value to the desktop page and the Bootstrap table provides sufficient information for mobile users.

Communication between user and owner: warning messages appear if the user tries to send a blank form or if the fields are not filled in correctly (incorrect email address), the user is redirected to a "message sent succesfully" page after clicking the send button and can return to the home page from there. An email is correctly received in the specified mail service box.

<h2>Deployment</h2>

I used GitPod and GitHub for the deployment of this project, making the most of the "one-click" Chrome add on to got from GitHub to GitPod.
For the remote deployment in  GitHub, I:

* Selected the milestone-project-2 from my GitHub dashboard.
* Selected 'Settings' from the menu bar.
* Chose 'master branch' from the dropdown menu.
* Link to website was created

https://raphaelmar.github.io/Milestone-project-2/

* For deploying the site locally:
* Go to main page of repository (Milestone-project-2)
* Click clone or download
* Copy the displayed url
* Open terminal
* Type git clone
* Paste url then press enter

<h2>Credits</h2>

All texts and images used on this site are my property.

<h2>Copied and adapted code</h2>

Some sections of code were copied or adapted from:

Bootstrap documentation

Google charts documentation

W3schools

Email.JS documentation

Google Maps API tutorial by Bryce StPierre (https://www.youtube.com/watch?v=oVr6unKZbg4)


Acknowledgements
* To my mentor Reuben Ferrante for his time and help
* To the Code Institute support team for their flexibility and regular phone calls, particularly in htese difficult times.
