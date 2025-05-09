const country_link = "https://musical-space-barnacle-5gj576p6qgj3pgr5-6006.app.github.dev/country";

fetch(country_link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch data from given URL");
    return response.json();
}).then(data=>{
    document.getElementById('emp').innerHTML+=data[0].count;
}).catch(err=>{
    console.log(err.message);
})