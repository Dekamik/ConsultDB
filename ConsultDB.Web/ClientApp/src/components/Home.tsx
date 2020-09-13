import * as React from 'react';

export const Home: React.FunctionComponent = () => {
    return (
        <>
            <h1>Välkommen till ConsultDB</h1>
            <p>Detta är ett system för att hantera konsulter. Det är byggt med hjälp av:</p>
            <ul>
                <li><a href='https://www.microsoft.com/sv-se/sql-server/sql-server-2019'>SQL Server</a> för datalagring</li>
                <li><a href='https://docs.microsoft.com/en-us/ef/core/'>Entity Framework Core</a> för code-first databasprovisionering</li>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> och <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> för serverkod på flera plattformar</li>
                <li><a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> och <a href='https://www.typescriptlang.org/'>Typescript</a> för klientsidan</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> för layout och styling</li>
            </ul>
            <p>Detta system tillåter användaren att göra följande:</p>
            <ul>
                <li>Visa lista på konsulter</li>
                <li>Söka konsulter</li>
                <li>Skapa konsulter</li>
                <li>Ta bort konsulter</li>
                <li>Uppdatera konsulters information</li>
                <li>Visa detalj-vy för en specifik konsult</li>
            </ul>
            <p>Lösningen är även responsiv.</p>
            <h2>Kom igång!</h2>
            <p>Välj "Konsulter" i navigeringsmenyn för att börja hantera konsulter.</p>
        </>
    );
}
