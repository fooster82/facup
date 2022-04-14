# facup

## To-do

### Screen scraping
[] Add a leagues section to each team
[] Add teams to the DB
[] Figure out how to get results 

### Add teams
[x] Add the drop-down components for each round to the tracker page
[x] Change the flow of state data for TeamToAdd from parent (SelectTeams) to child (DropdownMenu(s))
[x] Match up a single drop-down with the logic currently on the home page that posts the data
[x] Match up all the drop-down menus with the logic
[] Stats should be added by season not year
[x] Null entires don't work, should be possible for rounds that haven't been drawn yet
[] Add an if-loop that checks if a user already has team data --> patch if they do, post if they don't
[] Confirmation banner appears after a stat has been added

### Small things
- Sort out secret key to be read from .env instead of just visible
- Make the dropdown menu items have a scroll bar instead of just loading them all in
- Dropdown menu doesn't lose focus when the teams are hidden from clicking the input box
- Dropdown menu arrow doesn't persist after the first option is made
- Show password button submits the form
- No checks to stop users having the same user name
- Registering should have confirmation and log the user in or take them to the log in page
- Add a dark mode