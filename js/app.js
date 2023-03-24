// search bar 

document.getElementById('search').addEventListener('click' , function(){
    document.getElementById('search_box').classList.add('show')
})

document.getElementById('search_close').addEventListener('click', function(){
    document.getElementById('search_box').classList.remove('show')
})


// // side bar

document.getElementById('sidebar_toggler').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('show')
})

// // odd and even number 

 for( let i=0; i<=100; i++ ){
        if ( i % 2 == 0 ){
            document.write( i + ' is a even number')
        }
        else{
            document.write( i + ' is an odd number')
        }
    }


    // colorflipper

    document.getElementById('colorflipper').addEventListener('click', function(){
        let hexacode = '#';

        hexacode += (Math.random()*100).toString(16).substring(3, 9);
        document.body.style.background= hexacode;
    })

    setInterval(function () {
            let hexacode = "#";
        
            hexacode += (Math.random()*100).toString(16).substring(3, 9);
        
            document.body.style.background = hexacode;
        },300)


    // result sheet

    let num = 85;

    switch (true){
        case num <= 100 && num >=80:
            document.write('A+')
            break
        case num < 80 && num >=70:
            document.write('A')
            break
        case num < 70 && num >=60:
            document.write('A-')
            break
        case num < 60 && num >=50:
            document.write('B')
            break
        case num < 50 && num >=40:
            document.write('C')
            break
        case num < 40 && num >=33:
            document.write('D')
            break
        case num < 33 && num >=0:
            document.write('Tumi Fail')
            break
        default:
            document.write('valo kore jog koren')
    }
    

