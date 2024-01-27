# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Lab-1---Timetabled

Overview
In this project, you will build a grid-style calendar with one-hour events that plan out a single week. You must create the calendar for someone else. This can be a friend, family member, historical figure, role model, or imaginary person. Timetables can be informative, humorous, or exploratory. For example:

General: Plan a vacation for a friend, family member, or pet
History: A week in the life of a historical figure, timeline of a coup
Psychology: How to adapt to a polyphasic sleep cycle
True crime: The week before a famous crime
View an exemplar of what you'll be creating in this lab here!

Required Features
A one-week calendar that includes one-hour time blocks
Events have different titles
Events have different colors based on their type
![image](https://github.com/MooreKyle/Lab-1---Timetabled/assets/49001825/466fc118-54bf-47f0-8621-5aa7fe8041d2)

Stretch Features
Event blocks have additional information, such as a description and location
![image](https://github.com/MooreKyle/Lab-1---Timetabled/assets/49001825/1f5750d6-a280-4f9c-82f9-b722cdb0d7a7)

Resources
Getting Started with Vite
ReactJS: Introducing JSX
ReactJS: Rendering Elements
ReactJS: Components and Props
Lab Instructions
Getting Started
GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. Leveraging the GPT-3 model, Copilot suggests whole lines or blocks of code as developers type, helping them write code faster and with fewer errors. It's trained on a vast amount of public code repositories, enabling it to provide suggestions in various languages and frameworks.

GitHub Copilot Chat is a chat interface that allows developers to ask and receive answers to coding-related questions within a supported IDE. The chat interface is contextually aware of the code a developer has typed and any error messages.

Note: Alternatively, you can use ChatGPT as an AI assistant instead of Copilot. This will require you to copy and paste code to and from your IDE and ChatGPT instead of using the Copilot extension in VS Code. A ChatGPT account is free of charge and gives you access to ChatGPT 3.5.
Getting GitHub Verified Student Access
Verified student access is required to obtain free access to GitHub Copilot, otherwise it is only available as a paid service ($10 per month after 30 day free trial). You will need to complete this step before requesting access for GitHub Copilot Chat.

Go to GitHub's Student Developer Pack page at education.github.com/pack.
Click on the green Sign up for Student Developer pack button.
Under Individuals, click on Get student benefits.
Under Select the academic status, select Student.
Select or add the email address you use for school, enter your school's name, and describe how you plan to use GitHub.
Click Continue, and you will then be prompted to upload proof of your academic status.
Click Take a picture to use your computer's camera to upload proof.
Place your school ID or other proof of current academic status in the frame, then click Take photo.
Under Proof Type, select the type of proof you are providing.
Verify your application details, then click Process my application.
Note: If you see a banner asking you to fix something in your application after clicking the Process my application button, fix it and then click Reprocess my application.
You'll receive a confirmation email letting you know if your application is approved. Sometimes this happens within a few minutes, but it can sometimes take a few days.

Verified student access also gives you access to the GitHub Student Developer Pack, which is a toolkit offered by GitHub to support your learning and development in the coding world. It grants you free access to the best developer tools in one place so you can learn by doing and be ready for the professional world.

Requesting Access for GitHub Copilot Chat
Do this step after you have received confirmation that you have verified student access on GitHub.

Navigate to Github Copilot Chat Signup
If you are not already logged into ChatGPT, click the green Sign in to join the waitlist button.
Note: If you see a message about needing to have a GitHub Copilot license, you do not yet have verified student access on GitHub. Try again after you have received confirmation that you have verified student access.
Select Visual Studio Code, then click the green Join the waitlist button.
You should receive access to GitHub Copilot Chat within a few days, although it can take up to a week. It is important to complete this step as soon as possible to ensure you have access before the first class.

Adding GitHub Copilot to VS Code
You will need to use the Insiders edition of VS Code to access GitHub Copilot Chat.

Download and install VS Code Insiders
In VS Code Insiders, click the Extensions icon.
In the search bar, type copilot.
Install the GitHub Copilot and GitHub Copilot Chat extensions.
We'll be using the Copilot Chat to leverage it as a programming assistant instead of using the inline code-generating feature. We recommend disabling the inline Copilot as it can be distracting and sometimes not directly related to the task we're trying to do.

To disable the inline Copilot, click the Copilot icon in the bottom right corner of the status bar. If prompted, choose Globally.
![image](https://github.com/MooreKyle/Lab-1---Timetabled/assets/49001825/bd871c54-06e8-47a4-a3e2-64744e50f103)

Required Features
Step 0: Create a New React Project Using Vite
In this step, we will create a new React project using Vite.

Download and install Node.js
Open the Terminal in VS Code using the menu (View -> Terminal) or the shortcut (ctrl + `)
Navigate to the folder on your computer where you keep GitHub files (it may be named github, or you may wish to create a new folder using the cd (change directory) command.
If you want more info about how moving within the Terminal works, check out this tutorial.

🤖 AI Pro Tip: Using AI to Explore New Concepts
Make sure you have added the folder to your VS Code workspace. If you don't see the folder in the Explorer, right-click in the pane, select Add Folder to Workspace..., and then add your folder.
In your Github repository, initialize a new React project using Vite:
In the Terminal, enter the command npm create vite@latest
Name the project timetabled
Select React as the framework (use the arrow keys and enter to navigate the menu)
Select JavaScript for the language variant
Now, let's install the required dependencies and run the app!

Move into the timetabled directory: cd timetabled
Install the dependencies by running the command npm install
Run the application in developer mode by running the command npm run dev
Open project in the browser. Vite will display a link, such as http://127.0.0.1:5173 to click on or copy/paste that will take you to the localhost port where the project is running.
💡 Tip: If you'd like to stop the server, you can use ctrl + c or cmd + c within the Terminal, or use the trash can icon in the top right of the Terminal within VS Code. To run the server again, simply use npm run dev again.
📍 Checkpoint 0: At this point in the lab, your app should look like this:

![image](https://github.com/MooreKyle/Lab-1---Timetabled/assets/49001825/82a24543-e837-438b-9c5f-1727b2b66981)
