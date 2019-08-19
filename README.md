# Bicom Systems Hackathon 2019 Demo App - MotiCon
## Description
MotiCon is a simple web based, machine learning - personal assistant app. It completes certain actions on custom motion commands. This demo has the ability to execute Email (Thunderbird), Google Chrome and Windows Media Player.

## Getting started
*Disclaimer This demo is built for Windows*

First, in order to start the app, you need to have Node.js installed on your computer. After installation, navigate to the */server* folder of the repository with your terminal, then run the Node.js server by typing the following command in the terminal
```
npm run server 
```
Then, when the Node.js server is up - navigate to the app's main folder, and run index.html. 

Congratulations! You've successfully opened the application.

## Using the application
### Setting Up, Calibrating, Saving the Model
After opening the application, the User Interface will be shown. At the top, if the app is currently loading, the message will say 'Loading..'. When the app is loaded, the message will be 'App Loaded!'.

The app now waits for your calibration of the commands. There are 4 calibration buttons neutral position, Music command, Email command and Chrome command. First, you need to calibrate your neutral position (as the text above says). Then, for each command - you make your desired gesturestance and click calibrate. Those will be the motion commands you will use within your app. 

>For example - If you want to open Google Chrome when you show your open left hand
>- Position your open left hand as you wish, and preview the command on the screen.
>- Click Calibrate Chrome Command
>- Wait for the message Calibration Successful!


*Every time the calibration is completed successfully, the app will message you saying Calibration Successful!*

If you wish to save your command data-set, you can do it by clicking on the button 'Save Model'. This will download a *model.json* file which you need to put in the app directory. The app then loads that model automatically every time you open the app.
 
***Although you can load a saved model, for better experience, you always need to calibrate the neutral position when you open the app. The other commands will be loaded from the saved model. ***

### Starting, pausing the app

After calibrating the desired commands - click the Start App button. The app is now running and listening for your commands and will behave accordingly. 

You can pause the app by clicking the Pause App button. The app then stops listening for your commands. You can then, if you wish, re-calibrate some or all of the commands.

 




