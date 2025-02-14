# delivery-mileage-tracker
track your miles per delivery!

## special thanks to...
[this](https://www.reddit.com/r/shortcuts/comments/aafe5e/update_a_google_sheet_with_your_expenses/) reddit post for making me realize i can do something like this with google apps scripts and iOS shortcuts

## features
- tracks:
  - order id
  - date (MM/DD/YY)*
  - start/end time (HH:MM:SS)*
  - mileage (unit insensitive)
  - base pay**
- google sheets integration

_* logged automatically <br />
** doesn't have to be the base pay_

## requirements
- [iOS shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios), google spreadsheets, and google app scripts
- an odometer (preferably in the car and one that can be reset)

## limitations
- only one order is "tracked" at a time
- mistakes have to be manually fixed

## usage
### Step 1
Create a Google Spreadsheet and create a table with this format
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/1create%20spreedsheet.png)
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/2set%20sheet%20template.png)

### Step 2
Create a **bound** App Scripts for this Spreadsheet and add the Google Sheets API from the Services tab
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/3create%20app%20scripts.png)
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/4add%20gsheets%20api.png)

### Step 3
Erase the existing code <code>function myFunction()...</code> and copy paste the code from [Main.js](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/Main.js)
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/5copypaste%20code%20from%20Main.js%20into%20here.png)

### Step 4
Deploy the file as a webapp
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/6deploy%20it.png)
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/6deploy%20as%20webapp.png)


### Step 5
Copy your deployment ID
![](https://github.com/kc-frost/delivery-mileage-tracker/blob/main/images/7copy%20deployment%20id.png)

## roadmap
- total mileage and base pay per month
- delete most recent log
- customize where data is saved and not be limited by tables