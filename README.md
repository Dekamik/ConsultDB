# ConsultDB

# Pre-requisites

* Visual Studio 2019
* SQL Server 2019
* Git

# Starting the app

Clone the solution using your favourite Git client (I highly recommend GitExtensions)

Open the solution in Visual Studio 2019.

Right-click the solution in the solution explorer and click Set Startup Projects...
Then check "Multiple startup projects" and set ConsultDB.Web and ConsultDB.Api to start.

Open the Package Manager Console, select ConsultDB.Core as default project. Run Update-Database in console.

You're all set! Click "Start" to run the app.
