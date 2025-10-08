const employee = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDescription": "Create the homepage layout using Figma.",
        "taskDate": "2025-07-17",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve the navbar collapsing issue on mobile view.",
        "taskDate": "2025-07-15",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Implement unit tests for the user login feature.",
        "taskDate": "2025-07-10",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Develop API Endpoints",
        "taskDescription": "Create RESTful APIs for the product module.",
        "taskDate": "2025-07-12",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Perform the weekly database backup and ensure integrity.",
        "taskDate": "2025-07-11",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Optimize Images",
        "taskDescription": "Reduce image sizes for faster page load.",
        "taskDate": "2025-07-14",
        "category": "Optimization",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise the API documentation for recent changes.",
        "taskDate": "2025-07-09",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Kiran",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Create Test Cases",
        "taskDescription": "Write test cases for the new payment gateway.",
        "taskDate": "2025-07-13",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy to Staging",
        "taskDescription": "Deploy the latest build to the staging environment.",
        "taskDate": "2025-07-15",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the merge request for the login module.",
        "taskDate": "2025-07-16",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Rahul",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Create Wireframes",
        "taskDescription": "Design wireframes for the new admin dashboard.",
        "taskDate": "2025-07-14",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Setup CI/CD",
        "taskDescription": "Implement CI/CD pipeline using GitHub Actions.",
        "taskDate": "2025-07-12",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Handle Client Feedback",
        "taskDescription": "Address feedback received from the client meeting.",
        "taskDate": "2025-07-13",
        "category": "Client Interaction",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct a security audit of the application.",
        "taskDate": "2025-07-17",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Sneha",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Performance Testing",
        "taskDescription": "Test the system under load to ensure stability.",
        "taskDate": "2025-07-11",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Integrate Payment Gateway",
        "taskDescription": "Integrate Razorpay payment gateway into the application.",
        "taskDate": "2025-07-13",
        "category": "Integration",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Optimize website for better search engine ranking.",
        "taskDate": "2025-07-14",
        "category": "Optimization",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employee , admin}
    

}