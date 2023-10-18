# ProjectRepo - Great Plates To-Eat (GPT)

## Group Members: Nathan Moes, Nicholas Scalzone, Alexander Novitchkov-Burbank, Jawaher Alsaiari

## Project Idea

### create a PWA that is built on react with a backend of python (or other if more viable).

### Our application will help the user decide on a dish to cook, then generate a recipe and provide an optimized shopping list based on price and availability at local stores.

## Our Minimum Viable Product: 
#### An application that will allow users to create an account, then interact with chat GPT through the application in a text based manner. The user will be guided to enter a prompt of what they would like to cook, filtering by keywords and dietary restrictions, in such a manner that the resulting response is a recommendation of 3 dishes they can choose from. Once a dish is chosen, the application automatically creates a recipe with a shopping list of ingredients. The user will then have the option to save the recipe to their account if they would like.

### User Stories:

#### Nathan: 
As a user, I want to be able to get an itemized list of recipe ingredients from a recipe of my choice, so that I can see the recipe items easily for checking off a list.

As a user, I want to be able to check off items as purchased for the recipe items (ingredients) as I purchase them, so that I can make sure I have all the ingredients I need for a given recipe.

#### Nick: 
As a user, I would like at least 3 options of different dishes that meet the criteria that I entered before proceeding to a recipe.

As a user, I want to app to guide me through entering my request so that I don’t have to learn how to format my input.

#### Alex: 
As a user of this system, I would like to be able to have a text-like experience with it so that it does not feel like I need to learn a new system.

As a user of this system. I would like to be able to have a document sent in an email to me so that I would not have to remember to save my responses somewhere myself.

#### Jawaher: 
As a user, I want to create an account , customize my profile with a picture, specify dietary preferences, and save favorite recipes.

As a user, I want to search for recipes by entering keywords, ingredients, cuisine, and dietary restrictions to quickly find recipes that match my interests.

As a user, I want to browse recipes organized into categories such as appetizers, main courses, and desserts for easy navigation.



### Feature List(s): 


#### Jawaher:

User Registration and Profiles: Users can create accounts, customize their profiles with a profile picture and dietary preferences, and save favorite recipes.

Recipe Search and Filters: Robust search functionality allows users to search for recipes by keywords, ingredients, cuisine, and dietary restrictions.

Recipe Categories: Recipes are organized into categories such as appetizers, main courses, desserts.

Recipe Ratings and Reviews: Users can rate recipes and leave detailed reviews, helping others make informed choices.

Nutritional Information: Nutritional facts are provided for each recipe, including calories, protein, carbs, and more.

#### Alex:

Implementing a chat/text like UI, where the words “ChatGPT” is put in as the responder.

Save ingredients into a file and send it to the user. (auto save recipes instead of user having to manually save them)

#### Nathan:

Each recipe is a given card on the user side, with description as well as some optional image

When user clicks on the given recipe card it will then create itemized display of ingredients with the same information, with some data on price and or location

Potentially have a couple recipes of the day on the home page for display, also to help users get familiar with interface
Each ingredient has a sort of check box feature to track if the item is obtained or purchased. Aka checklist for ingredients such as a shopping list.

#### Nick:

Recipe recommendation based on user prompt to gpt.

The user interface should direct the user to input information in such a way that prompts with predictable results can be constructed. i.e. instead of “what would you like to eat?”, we say “please enter the main ingredient”, “please enter any dietary restrictions”, and “enter 1 descriptive word of your desired dish”, so you end up with a list of traits like “tofu”, “vegetarian”, and “spicy”.

The user should receive options, I’m thinking an arbitrary number like 3, hard coded into the prompt we send to the chat gpt API.

Once a recipe is selected, a list of the ingredients in shopping list format is generated.

