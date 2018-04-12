# doctor-hr-frontend

### ABOUT
This repository contains a frontend ReactJS program that allows a user to access patient heart rate information from a pre-existing database. The app contains a text field that allows the user to input the email of their patient and press a SEARCH button that makes a GET request to a server to obtain that particular patient's heart rate data stored in the database. The information that is retrieved from the database is returned to the app by the server and is displayed as a table showing all recorded patient heart rates listed next to their corresponding time stamps. The screenshot below shows the app being used to access a particular patient's heart rate information, and the tabular output of the GET request for that particular patient.

![image text](https://user-images.githubusercontent.com/24235476/38650535-69999f34-3dca-11e8-9461-4048e7d7707e.png)

### GETTING STARTED
To get full functionality out of this program, first you will need to setup the corresponding server as described [here](https://github.com/pcg15/heart_rate_databases_introduction). 

After the server is up and running, you will need to keep the server and database running in separate screens as you clone this repository onto your machine. Make sure you are within the `doctor` directory before continuing further. 
```
cd doctor
```
Make sure you have Node.JS installed on your machine. Use this [link](https://nodejs.org/en/) to install it if you haven't already. Run 
```
npm install
``` 
to install any dependencies, and then you can run 
```
npm start
``` 
to launch the app. The app can be used from within your browser to access patient heart rate information found within the database.
