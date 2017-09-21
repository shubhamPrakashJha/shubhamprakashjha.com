/**
 * Created by Shubham Prakash on 1/26/2017.
 */


    var images = ['../assets/image.jpg','../assets/image1.jpg','../assets/image2.jpg'];

    var num = 0;

    function next() {
        var slider = document.getElementById('slide');
        num++;
        if(num>=images.length){
            num=0;
        }
        slider.src = images[num];
    }

    function prev() {
        var slider = $('slide');
        num--;
        if(num<0){
            num = images.length-1;
        }
        slider.src = images[num];
    }
