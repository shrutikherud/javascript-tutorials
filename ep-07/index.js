//GITHUB
// fetch/axios
const githubAPI = "https://api.github.com/users/shrutikherud";
const fetchData = async() =>{
    try {
        const res = await fetch(githubAPI);
        const jsonData = await res.json();
        console.log(jsonData.login);
    } catch (error) {
        console.log(error);
    } finally{
        console.log("Fetch data is done");
    }
}
fetchData();

//Named export
// export const name = "Developers"

//default export
//export default name;
