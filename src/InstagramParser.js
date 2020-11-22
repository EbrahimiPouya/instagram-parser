export default function (postId='' , callback=(data)=>{
    console.log(data)
}){
    let url = `https://www.instagram.com/p/${postId}/?__a=1`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
};