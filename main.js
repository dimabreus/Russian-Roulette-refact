console.log(`


█████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗ ███████╗                        
██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗██╔════╝██╗                     
███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝███████╗╚═╝                     
██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗╚════██║██╗                     
██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║███████║╚═╝                     
╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                        
                                                                                   
 ██████╗ ██████╗ ██╗███╗   ███╗ █████╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗   
██╔═══██╗██╔══██╗██║████╗ ████║██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║██╔════╝   
██║██╗██║██║  ██║██║██╔████╔██║███████║██████╔╝██████╔╝█████╗  ██║   ██║███████╗   
██║██║██║██║  ██║██║██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║   ██║╚════██║   
╚█║████╔╝██████╔╝██║██║ ╚═╝ ██║██║  ██║██████╔╝██║  ██║███████╗╚██████╔╝███████║▄█╗
 ╚╝╚═══╝ ╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚═╝
                                                                                   
 ██████╗    ██████╗ ██████╗ ██╗   ██╗██╗██████╗  █████╗ ███╗   ██╗                 
██╔═══██╗   ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗██╔══██╗████╗  ██║                 
██║██╗██║   ██████╔╝██║  ██║██║   ██║██║██║  ██║███████║██╔██╗ ██║                 
██║██║██║   ██╔══██╗██║  ██║██║   ██║██║██║  ██║██╔══██║██║╚██╗██║                 
╚█║████╔╝██╗██████╔╝██████╔╝╚██████╔╝██║██████╔╝██║  ██║██║ ╚████║██╗              
 ╚╝╚═══╝ ╚═╝╚═════╝ ╚═════╝  ╚═════╝ ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝              


 `);
 //Рандомное число на всю игру
 let Randomall = Math.ceil(Math.random() * 8);
 console.log(Randomall)
//Рандомное число на 1 раунд для игрока

let Randomin1;

const handleClick = () => {
    Randomin1 = Math.ceil(Math.random() * 8);
    console.log(Randomin1)
    //console.log(Math.ceil(Math.random() * 7 + 1))
    //проверка
    if (Randomall == Randomin1){
        console.log("опа, ты сдох");
    }
    else{
        console.log("ФУХ! ты еще жив");
    }
 }
