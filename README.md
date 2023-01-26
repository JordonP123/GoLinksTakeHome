# Task:
Create a user interface to navigate the repositories and commits in Netflix’s Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits. 

# Basic Requirements 
- Create a scrollable list of Netflix’s repositories: https://api.github.com/orgs/Netflix/repos ● Each item in the repository list should show: 
- Repo name 
- Language 
- Description 
- Star Count 
- Fork Count 
- Date Created 
- This list should be sorted by Star Count in descending order 
- When clicking on an item in the list, it should show another list of the recent commits 

# Each item in this commits list should show: 
- Commit Title 
- Committer username 
- Commit hash 
- Date Created 

# Extras
- Host the application on AWS, Heroku, Digital Ocean, or your own Web Host. Bonus Requirement 
- As a user, I want to be able to type into an input an organization name other than Netflix and see a list of that organization’s repositories and commits instead. 
- Any design additions, UI/UX improvements are always a plus. 
