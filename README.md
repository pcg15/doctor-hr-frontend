# doctor-hr-frontend

### ABOUT
This repo contains a frontend REACT program. The program contains a text field that allows the user to input the email of their patient and press a SEARCH button that makes a GET request to a server to obtain that particular patient's heart rate data stored in a user database. The information that is retrieved from the database is returned to the app by the server and is displayed as a table showing all recorded patient heart rates listed next to their corresponding time stamps. 

![image text](https://user-images.githubusercontent.com/24235476/38650535-69999f34-3dca-11e8-9461-4048e7d7707e.png)

### GETTING STARTED
To get full functionality out of this program, first you will need to setup the corresponding server as described [here](https://github.com/pcg15/heart_rate_databases_introduction). 

After the server is up and running, you will need to keep the server and database running in separate screens as you clone this repository onto your machine. Make sure you are within the `doctor` directory before continuing further. 
```
cd doctor
```
Run 
```
npm install
``` 
to install any dependencies, and then you can run 
```
npm start
``` 
to launch the app. The app can be used from within your browser to access patient heart rate information found within the database.
