# Welcome to ConsultDB

This is a system for handling consultants. It's built with:

* [SQL Server](https://www.microsoft.com/sv-se/sql-server/sql-server-2019) for data storage
* [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/) for code-first database provisioning
* [ASP.NET Core](https://get.asp.net/) and [C#](https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx) for cross-platform server-side code
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Typescript](https://www.typescriptlang.org/) for the client-side
* [Bootstrap](http://getbootstrap.com/) for layout and styling

This system allows the user to do the following:

* List consultants
* Search consultants
* Create consultants
* Remove consultants
* Update consultant information
* Show a detail view for a specific consultant

The solution is responsive as well.

# New developer

Getting started with this application is easy.

Just follow the steps below.

## Pre-requisites

* Visual Studio 2019
* SQL Server 2019
* Git

## Starting the app

Clone the solution using your favourite Git client (I highly recommend GitExtensions)

Open the solution in Visual Studio 2019.

Right-click the solution in the solution explorer and click Set Startup Projects...
Then check "Multiple startup projects" and set ConsultDB.Web and ConsultDB.Api to start.

Open the Package Manager Console, select ConsultDB.Core as default project. Run Update-Database in console.

You're all set! Click "Start" to run the app.
