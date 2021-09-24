## **How to run this project?**

 1. If NodeJS not installed in your system, install it from <a href="https://nodejs.org/en/download/" target="_blank">Here</a>
 2. Put the .env file in the project root folder. (given in the email)
 3. Run command `npm i` in root folder to install server dependencies.
 4. Run command `npm i`  inside client folder to install client dependencies.
 5. In project root folder run `npm run dev` command to start the servers.
 6. Go to the `http://localhost:3000`.
 7. That's all. 

## Routes
Client development server `http://localhost:3000`
 - `/`. Khoj the search page.
 - `/login`. The login page.
 - `/register`. The register page.

## API endpoints 
Server development server `http://localhost:3001`

**Users routes**
|Method | Route | Description | Access |
| --|--|--|--|
| GET |/api/users | Get all users | Public |
| POST |/api/users | Create users | Public |
| POST |/api/users/login | Login users | Public |

**Record routes**
|Method | Route | Description | Access |
| --|--|--|--|
| POST |/api/records | Insert user's  input values to the database in descending order in payload field | Public |
| GET |/api/records | Get input values by 3 given parameters (More details in below) | Public |


## Get input values by 3 given parameters

Here user have to give **3** query parameters listed below

 - `start_datetime`. Input date format `YEAR-MONTH-DAY`.  You can also add datetime like this format `YEAR-MONTH-DAY:HOUR:MINUTE:SECOND`
 - `end_datetime`. Same as `start_datetime`
 - `user_id`. This Id must be valid user objectId.
 
***User must have to give 3 parameters to get 200 response***

**So the query String will be** 

    http://localhost:3001/api/records?start_datetime=2021-9-23&end_datetime=2021-9-25:1:23:45&user_id=6149e64d0a0986e0e43510ca

**The response**

    {
    	"status": "success",
    	"id": "6149e64d0a0986e0e43510ca",
    	"payload": [
    		{
    			"timestamp": "2021-09-23T18:11:20.456Z",
    			"input_values": "20, 14, 9, 8",
    			"_id": "614cc3a2a60ab4be7b3cc9d6"
    		},
    		{
    			"timestamp": "2021-09-23T18:11:20.456Z",
    			"input_values": "10, 8, 6, 2, 1",
    			"_id": "614cc3f4a60ab4be7b3cc9de"
    		}
    	]
    }


**If the qurey is** 

    http://localhost:3001/api/records?start_datetime=2021-9-25&end_datetime=2021-9-25:1:23:45&user_id=6149e64d0a0986e0e43510ca

**Then the respone**

    {
    	"status": "success",
    	"id": "6149e64d0a0986e0e43510ca",
    	"payload": []
    }
