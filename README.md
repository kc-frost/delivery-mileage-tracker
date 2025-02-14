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

## roadmap
- total mileage and base pay per month
- delete most recent log
- customize where data is saved and not be limited by tables