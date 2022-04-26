# facup

## To-do

### Tracker page
[x] Pin component with lat and long as props
[x] Show all of a users teams
[x] Get one pin to load in the right place
[] Get a user's team to load in the right place - just trying to sort the maths then this should work 
[] Get all of a user's teams to show in the right place on the map
[] Connect the pins up somehow
[] Find the distance between each pin
[] Show the total distance travelled

### Styling
[] Home page
[] Nav bar
[] Footer
[] Buttons (remember to replace all buttons with the ready made component)
[] Admin Page
[] Tracker page
[] Profile page
[] Sign in page
[] Sign up page
[] Logo and favicon
[] Font across the whole site

### Small things
- Have the timer only show for a certain period maybe with disabled forms at the same time? Probably best from after the final until the month the cup starts again
- Combine the useEffects used for axios back into one per component
- Need a UI to add previous season data
- See previous seasons entries for yourself
- Turn the confirmation banners for add teams and add stats to be a green banner not a window alert
- Hide the scrollbar if theres only a small amount of elements left
- Replace buttons with the component 
- Dropdown menu doesn't lose focus when the teams are hidden from clicking the input box
- 'Show password' button submits the form
- Add checks to stop users having the same user name
- Registering should have confirmation and log the user in or take them to the log in page
- For the update teams UI to work it seems you need to log out and in again if you come back after closing the window
- Teams sometimes update as just their ID not their team name (error handling could fix, only allow a string)
- The update UI doesn't always show when you go to your profile, usually after changing pages or logging in (think this is to do with the user being undefined sometimes so just need to fix the order things render in)

# Stretch goals

### Screen scraping
[] Add a leagues section to each team
[] Add teams to the DB
[] Figure out how to get results 

### Profile Page
[] Change details functionality
[] Delete account functionality

### Small things
- Add a dark mode
- Sort out secret key to be read from .env instead of just visible
- Email confirmation for creating account
- Add signup link to the login page and maybe get rid of signup from the navabr all together