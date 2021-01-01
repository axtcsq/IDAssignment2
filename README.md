# Assignment 2
The user audience for this website is catered to users who wants convenience while using the internet to search for information. Since searching for different information on different websites takes time and effort, the purpose of this website is to give users convenience and be a time-saver by allowing users to check the weather forecast, PSI values, MRT Map and explore Google Maps all in one website.

The most appreciated value would likely be the time-saving factor, since the website has conveniently consolidated all the information, it allows the user to spend the extra free time to do other things. For users who have a preference for colour schemes, the website also caters to users by offering both light and dark mode.
## Design Process
As mentioned previously, this website is catered to users who would like to save time and have convenience when searching for information on the internet. 

The best way to achieve this is to develop and all in one website that would be designed to be simple, modern and aesthetically pleasing while containing essential pages. 

With that said, since one consolidated website cannot possibly contain every information, I had to think of what are the important pages and commonly searched informations I should include for my website. By thinking through the perspective of what a daily user would like to see, I came up with Home, Google Maps, MRT Map, Weather and a Contact page. 
### User stories
Personally as a user, I would like to have the information I need consolidated in one website with little clicks as much as possible. I would prefer this than manually searching for different information on different websites, since it would mean lesser time and effort spent on searching information on the internet.
### Colour Schemes
Fitting with current trends and standard, this website offers two colour schemes for users to choose from. Light mode mostly contains light-coloured elements which are ideal for use in bright environment. While dark mode mostly contains dark-coloured element which are ideal and recommended for use in dark environment.
### Uniformity and Simplicity
As you navigate through the different pages, you would notice that there is strong uniformity in its design language and layout. Thinking from the perspective of an average user, it would be easier and more comfortable to navigate since all pages shares most of the same layout. Doing so also helps to cut down on development time, as I could simply reuse the shell and modify accordingly to the page's requirements.
### Pictures
Multiple pictures have also been used to help the website look more lively and aesthetically pleasing. A website with good aesthetics would convey a message to users that the developer has put in the effort to care for minor details during the development phase.
### Wireframes (Adobe XD)
Attached here are my low-fidelity wireframes of my final design. The first link is to access the file, the second link is for desktop view, while the third link is for mobile view.

Files (Link):
https://connectnpedu-my.sharepoint.com/:f:/g/personal/s10194188_connect_np_edu_sg/EoPM_nyHpVBBuejccYE0zh8Bci5yJmzZnnhhk1SWHC2Baw?e=NFcFhc

Desktop Wireframe (Link):
https://xd.adobe.com/view/b778caf1-e360-4708-84a4-6d91350ca7e9-e22b/?fullscreen&hints=off

Mobile Wireframe (Link):
https://xd.adobe.com/view/5ef3555b-977a-40e5-b780-9e5a8c4cd491-0ba0/?fullscreen&hints=off

### Screenshots of the finished project
Link:
https://connectnpedu-my.sharepoint.com/:f:/g/personal/s10194188_connect_np_edu_sg/ElYduZMAfSVFp_5Sl-VHKzIBPzV5QIX_kHEISV7ODn0QdA?e=rpMlDf
## Features
### Existing Features
* Light & Dark colour schemes - Allows users to choose to their preference
* MRT Map - Allows users to view MRT Map, with an option to direct them to LTA's website
* Form - Allows users to contact me with regards to the website
* APIs
  * Google Maps API - Allows users to interact with the map
  * Weather forecast API - Allows users to check the weather forecast
  * PSI API - Allows users to check the PSI values
### Features Left to Implement
* Search bar to Google Maps - Allows users to search for their desired locations
* Merge dark and light HTML files by using JavaScript - Reduces development time and cleans up codes
* More APIs - Makes the website more functional and inclusive
* Animated visuals and elements - Helps to bring life to the website
## Technologies Used
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * The project requires and uses HTML to display content.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  * The project uses CSS to improve the aesthetics of the website, and is also used to make it into a responsive website.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * This project requires and uses JavaScript in order for APIs to work.
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
  * This project uses Bootstrap to improve the aesthetics of the website, make the website responsive and to cut down on development time.
## Testing
* All pages (Common elements)
  * Try to test if navigation bar resizes accordingly to different screen sizes
  * Try to test if all images loads, if it fails verify that alt text appears as a failsafe method
  * Try to test if all text are properly displayed, then verify that it does
  * Try to test if all links are linked correctly and working, then verify that it is successful
  * Try to test if all external CSS referenced have all loaded correct, then verify that it succeeds
  * Verify that all favicons for different pages are displayed
  * Verify that there is an "active" visual display to indicate the current page the user is browsing at
  * Bootstrap
    * Alert function
      * Verify that it shows up
      * Verify that it is dismissible or closable
    * Verify that all button functions works
* Index / Colour Scheme page
  * Go to the "index" or "Colour Scheme" page
  * Verify that user should only be able to click on light and dark mode links, all other links should be disabled
  * Carousel slides
    * Try to test if it rotates on its own
    * Try to test if it's next and previous button works
* Home page
  * Go to the "Home" page
  * Try to test if flexbox's width, layout changes and resizes accordingly to different screen resolution and verify that it succeeds
  * Try to test if pressing the yellow button, a hidden message would appear
  * Try to test if pressing the red "click me" button in alert, a modal box would appear
  * Verify that user would be able to close the modal box once it is opened
* Google Maps page
  * Go to the "Google Maps" page
  * Verify that Google Maps API loads and displays correctly
  * Try to test if it is interactive
  * Try to test if streetview, satellite, terrain, zoom, movement, fullscreen function works
  * Verify that back button works after viewing in streetview
* MRT Map page
  * Go to the "MRT Map" page
  * Try to test if title description appears when a user hover mouse on image
  * Try to test if clicking on the image brings the user to LTA's website
  * Verify that image responds to different screen sizes
* Weather page
  * Go to the "Weather" page
  * Verify that table loads and is responsive to different screen sizes
  * Verify that coloured text are readable for all colour schemes
  * Verify that weather forecast and PSI APIs loads and displays correctly
* Contact page
  * Go to the "Contact" page
  * Try to test if flexbox's width, layout changes and resizes accordingly to different screen resolution and verify that it succeeds
  * Try to test if different title description appears when a user hover mouse on different images in the flexbox, then verify that it succeeds.
  * Try to test if clicking on phone or email would engage call or email function respectively
  * Try to test if user is able to input text in textbox, select radio buttons, , then verify that it succeeds.
  * Try to test if form validations are working, then verify that it succeeds.
### Different Browsers and Screen Sizes
### Bugs and Problems
## Credits
### Content
(External source code)
### Media
### Acknowledgements