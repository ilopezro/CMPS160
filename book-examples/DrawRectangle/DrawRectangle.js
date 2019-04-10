function main() {
    //retreive canvas by id
    var canvas = document.getElementById('example')
    if(!canvas){
        console.log('Failed to retreive canvas from main page')
        return;
    }

    console.log('Retreived canvas succesfully')

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(150,200,255,1.0)'
    ctx.fillRect(120,100,150,150);
}