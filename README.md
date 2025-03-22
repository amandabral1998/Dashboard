# React Dashboard - API Fetching with Rate Limiting  

## Overview  
This project implements a **React dashboard** that fetches data from an API while ensuring efficient performance using **rate limiting** and **local caching**.  

---

## Features  

### API Fetching & State Management  
- Uses `axios.get(url)` to fetch data from the API.  
- Maintains three state variables:  
  - `apiResponse`: Stores the fetched API data.  
  - `error`: Stores error messages if the API request fails.  
  - `loading`: Indicates whether data is being fetched.  

###  Rate Limiting (20 Requests per 120 Seconds)  
- Ensures API requests do **not exceed 20 hits in 120 seconds**.  
- Stores request count and first API call timestamp in `localStorage`.  
- If the limit is reached, an error message `"API rate limit exceeded. Try again later."` is displayed.  

###  Data Caching for Performance Optimization  
- Stores API response in `localStorage` to avoid unnecessary API calls.  
- If cached data is **less than 6 seconds old**, it is reused instead of making a new request.  

###  Error Handling  
- If API request fails, an error message is stored and displayed:  
  `"Error fetching data. Please try again later."`  
- Errors are also logged to the console for debugging.  

### Responsive UI Components
 ## Dashboard Component 
 Dashboard component is created for showing all the required details in Card View. Custom Hook is used inside component to fetch the 
  data and map the data in **Card View** as **(key : values)** pair.
   - Card View Component is responsibel for mapping the Card on the UI , before mapping the data filtered out data that does not have key **withdrawData & value 
     !=object**.
   - Filtered State is created using a useState Hook to store the filtered data and pass it to **Card Component** as props.

 ## Charts Container (Chart.js) 
 Charts Container is responsible for showing  UserDistribution , Deposit Bonus and User Distribution Charts on the UI.
  - Custom Hook **(FetchData)** is called inside the Chart Container and the response is passed as props to all the Charts Component mention above.
  -  Inside all the charts component useEffect is used to filter out the require data as per the requirements and values are mapped to the chart.
  -  **Types of Charts Implemented** -  Pie Chart: "New Users Distribution" and "Active Users Distribution" and Line Chart:"Deposits and Bonuses Comparison".

     
  ## Toggle Dashboard and Analytics 
  A toggle button is Implemented to handle the toggling of Analytics and Dashboard as per user's preference.
  
  ## Dark & Light Mode 
  Toggling Dark and Light Mode is Implemented.

  
  
                               




