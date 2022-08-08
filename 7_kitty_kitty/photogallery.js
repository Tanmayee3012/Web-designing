var images = {};
fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    images = res;
    console.log(images);
    const imgArr = document.getElementsByClassName("cat-name");
    console.log(imgArr);

    for (let index = 0; index < imgArr.length; index++) {
      imgArr[index].src = images[index].url;
    }
  });
