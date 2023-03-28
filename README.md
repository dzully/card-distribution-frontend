# Card Distrubution

The task is to distribute a deck of 52 playing cards randomly to a given number of people, and output the result in a specific format. The program must be written in PHP, JavaScript, jQuery, or ReactJS and accept a numerical value for the number of people to distribute the cards to. If the input value is invalid, the program must display an error message and terminate. The output format must follow specific rules, including using abbreviations for the suits, using letters to represent face cards, and separating the cards distributed to each person with commas.

## Live Demo

<https://card-distribution-frontend.vercel.app/>

## Solution

To solve this problem, we need to create a program that can shuffle and distribute a deck of 52 playing cards randomly to a given number of people. We can start by creating an array of cards representing the standard deck of 52 playing cards, and then shuffle it using a random number generator. Once the deck is shuffled, we can distribute the cards to each player in a round-robin fashion. Finally, we can output the result in the specific format required, using abbreviations for the suits and letters to represent face cards.

In terms of implementation, i use ReactJS to create the program. We can validate the input value to ensure that it is a valid positive integer, and display an error message if it is not. We can also use comments to document the code and make it easier to understand and maintain.

## Idea behind the solution

This task is designed to test the candidate's ability to write a program that can shuffle and distribute a deck of cards randomly to a given number of people. It tests the candidate's knowledge of programming concepts such as arrays, loops, and random number generation, as well as their ability to follow specific requirements and output the result in a specific format. It also tests their ability to validate input and handle errors. Overall, the task is meant to simulate a real-world programming problem and test the candidate's skills and experience.

## Getting Started

To get started, clone the repository and run the following commands:

## Setup Environment

```
npm install
npm start
```

or

```
yarn install
yarn start
```

Prerequisites
You will need to have the following installed on your machine:

- Node.js
- npm

## Running the Tests

To run the tests, simply run the following command:

```
npm test
```

Built With

- React
- Material-UI

## Docker

To run this application with Docker, you can use the provided Dockerfile to build an image of the application.

First, you will need to have Docker installed on your machine. Once you have Docker set up, navigate to the root of your project in the terminal.

To build the image, run the following command:

```
docker build -t <image-name> .
```

This will create an image of the application with the tag <image-name>.

To run the image, use the command:

```
docker run -p 3000:3000 <image-name>
```

This will start a container with the application running on port 3000, which you can access on your host machine at <http://localhost:3000>.

You can also run the application in detached mode using -d flag

```
docker run -p 3000:3000 -d <image-name>
```

You can check the container logs using docker logs <container_id>

You can stop the container using docker stop <container_id>

You can remove the container using docker rm <container_id>

You can remove the image using docker rmi <image_id>

You can find all running container using docker ps

You can find all container using docker ps -a

You can find all images using docker images

## Author

Mohamad Dzul Syakimin

## License

This project is licensed under the MIT License.

## Acknowledgements

- Material-UI documentation
- React documentation

## Time working

This project took me about 3 hours to complete. 1 hour to work with the card logic and 2 hours to complete the project.
