const fs = require('fs');
const csv = require('csv-parser');
const { log } = require('console');
const OrientDBClient = require("orientjs").OrientDBClient;
 
OrientDBClient.connect({
  host: "localhost",
  port: 2424
}).then(
    client.session({ name: "demodb", username: "root", password: "Root1234" })
    .then(session => {
        const results = [];
        fs.createReadStream('./contacts.csv')
            .pipe(csv())
            .on('data', (data) => {
                const newObj = {
                    title: data.title,
                    name: data.name,
                    address: data.adress,
                    realAddress: data.realAdress,
                    department: data.departement,
                    country: data.country,
                    tel: data.tel,
                    email: data.email,
                };
        
                results.push(newObj);
            })
            .on('end', async () => {
                for (const key in results) {
                    if (Object.hasOwnProperty.call(results, key)) {
                        const element = results[key];
                        const fieldValues = Object.entries(element).flat();
                        const hashKey = fieldValues[1].toString() || fieldValues[3].toString();
                        try {
                            await client.HSET(key, fieldValues);
                            log(hashKey)
                            console.log('Données insérées avec succès depuis le fichier CSV.');
                        } catch (e) {
                            console.error('Une erreur est survenue lors de l\'insertion des données:', error);
                        }
                    }
                }
        return session.close();
    })})    
).then(()=> {
   console.log("Client closed");
});
