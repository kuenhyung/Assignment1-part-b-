
📑 Technical Code Explanation (Backend & OOP Focus)
1. Architectural Pattern: MVC (Model-Controller-Router)
This system is strictly divided into three layers to ensure the Separation of Concerns (SoC) and modularity.

Model: Defines the data structure. It manages the Student entity and the logic for data manipulation.

Controller: Handles the Business Logic. It processes incoming HTTP requests, interacts with the Model, and determines the appropriate response.

Router: Maps incoming URL endpoints to specific Controller functions, maintaining a clean and organized API structure.

2. Core Concept: Class Inheritance (OOP)
The project demonstrates Object-Oriented Programming (OOP) principles through JavaScript classes.

Base Class (Person): A generalized class containing shared attributes like name and age.

Derived Class (Student): Inherits from Person using the extends keyword. It adds specialized properties such as studentID and major.

Rationale: This hierarchy reduces code redundancy and improves Maintainability. By using super(), the child class efficiently reuses the constructor logic of the parent.

3. API Logic & Data Management
The backend implements a RESTful interface for managing student records.

Data Structure: Utilizing a Volatile In-memory Array for data storage, ensuring O(1) or O(N) time complexity for basic operations.

Create (POST): Instantiates a Student object and pushes it to the collection.

Read (GET): Performs a lookup by ID. If the record is missing, it returns a 404 Not Found status to ensure API reliability.

Delete (DELETE): Removes the specific instance from the array, maintaining data integrity.

4. Middleware & Environment
Express.js Middleware: Used for parsing JSON payloads and handling routing logic.

Error Handling: Integrated logic to manage invalid requests, ensuring the server remains stable and responsive.
