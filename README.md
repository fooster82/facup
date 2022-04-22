# facup

## To-do

### Tracker page


### Add teams
[x] Add the drop-down components for each round to the tracker page
[x] Change the flow of state data for TeamToAdd from parent (SelectTeams) to child (DropdownMenu(s))
[x] Match up a single drop-down with the logic currently on the home page that posts the data
[x] Match up all the drop-down menus with the logic
[x] Stats should be added by season not year
[x] Null entires don't work, should be possible for rounds that haven't been drawn yet
[x] Add an if-loop that checks if a user already has team data 
[x] Show a different UI depending on if a user has stats or not
[x] For the update UI, have the current teams already loaded in from the user's current stat entry
[x] Update teams function for if a user already has a stats entry    
[x] The user can't change the value of the already set dropdown menus
[x] The entry of a preset one doesnt change when selected but it does send the updated value
[x] The preselected ones arent being sent
[x] Sort the arrow out on the dropdown menu
[] Have the UI work by season as well so that a user can have a new entry for each season
[] Add a countdown to when the new season begins (maybe only show after the final game has been played)
[x] Confirmation banner appears after a stat has been added

### Small things
- Turn the confirmation banners for add teams and add stats to be a green banner not a window alert
- Hide the scrollbar if theres only a small amount of elements left
- Dropdown menu doesn't lose focus when the teams are hidden from clicking the input box
- Dropdown menu arrow doesn't sit on the RHS
- Show password button submits the form
- No checks to stop users having the same user name
- Registering should have confirmation and log the user in or take them to the log in page
- For the update teams UI to work it seems you need to log out and in again if you come back after closing the window
- Seems to take a couple of reloads for the teams to update
- Teams sometimes update as just their ID not their team name (error handling could fix, only allow a string)
- The update UI doesn't always show when you go to your profile, usually after changing pages or logging in


# Stretch goals

### Screen scraping
[] Add a leagues section to each team
[] Add teams to the DB
[] Figure out how to get results 

### Profile Page
[] Change details functionality
[] Delete account
[] See previous seasons entires for yourself

### Small things
- Add a dark mode
- Sort out secret key to be read from .env instead of just visible
- Email confirmation for creating account
- Add signup link to the login page and maybe get rid of signup from the navabr all together