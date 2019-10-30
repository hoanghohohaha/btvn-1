//1
let cr7 ={
    'Name': ['Cristiano Ronaldo dos Santos Aveiro Ronaldo'],
    'Age': 1984,
    "Nationality": ['Bo Dao Nha']
}
for(;;){
    let xoa= prompt('Xoa thong tin');
    if(xoa=='Y'){
        let xoa2= prompt('Name;Age;Nationality');
        let xoa3 =prompt("are u sure");
        if (xoa3=='Y'){
        delete cr7[xoa2];
        console.log(cr7);
        }else if(xoa3=='N'){
            console.log("Goodbye");
           
        }
    }else if(xoa=='N'){
        console.log("Goodbye");

    }
}
//2

let inventory = {
    "gold":500,
    "pounch":['flint','gemstone','twine'],
    'backpack':['bedroll','dagger','xylophone','bedroll','bread loaf']
}
inventory.pocket = ['strangeberry','lint','seashell']; 
delete inventory.backpack[1];
inventory.gold += 50;
delete inventory.pounch;
console.log(inventory);

//3
var Stu=[];
// inventory={
//         "id":500,
//         "pounch":['flint','gemstone','twine'],
//         'backpack':['bedroll','dagger','xylophone','bedroll','bread loaf']
//     };
//     Stu.push(inventory);

function Student(id,name,lop,age,gender){
    this.id= id;
    this.name =name;
    this.lop=lop;
    this.age= age;
    this.gender=gender;
}

function Create(){
    var id = prompt('Id');
    var name= prompt('Name')
    var lop = prompt('Classs')
    var gender = prompt('gender');
    var age = prompt('Tuoi');
    let i= new Student(id,name,lop,age,gender);
    Stu.push(i);
}

function View(){
    let u=prompt('Id?')
    let k=Stu.find(x => x.id == u);
    console.log(k);

}

function Edit(){
    let o=prompt('id');
    let k=Stu.find(x => x.id == o);
    console.log(k);
    let lenh = prompt('Xoa hay sua(X;S)');
    if (lenh=='X'){
        let thongtin= prompt('Muon xoa j(id;name;class;gender;age');
        if(thongtin == 'id'){
            delete k.id;
            console.log(k);
        }else if (thongtin == 'name'){
            delete k.name; 
            console.log(k);   
        }else if (thongtin == 'gender'){
            delete k.gender; 
            console.log(k); 
        }else if (thongtin == 'class'){
            delete k.lop; 
            console.log(k);
        }else if (thongtin == 'age'){
            delete k.age;  
            console.log(k);
        }
    }else if (lenh=='S'){
        if(thongtin = 'id'){
            let newid= prompt("dien thong tin moi");
            k.id = newid;
            console.log(k);
        }else if(thongtin = 'name'){
            let newname= prompt("dien thong tin moi");
            k.name = newname;
            console.log(k);
        }else if(thongtin = 'gender'){
            let newgender= prompt("dien thong tin moi");
            k.gender = newgender;
            console.log(k);
        }else if(thongtin = 'age'){
            let newage= prompt("dien thong tin moi");
            k.age = newage;
            console.log(k);
        }else if(thongtin = 'class'){
            let newclass= prompt("dien thong tin moi");
            k.lop = newclass;
            console.log(k);
        }
    }
}

function Delete(){
    let o = prompt("id");
    Stu.splice(Stu.find(x => x.id == o),1);
    console.log(Stu);
}

function Exit(){
 break;
}

for(;;){
var lenh = prompt('What do you want?(Create;Edit;View;Delete;Exit)');
if(lenh=='Create'){
    Create();
    console.log(Stu);
}else if(lenh=='View'){
    View();
}else if(lenh== 'Edit'){
    Edit();
}else if(lenh == 'Delete'){
    Delete();
}else if(lenh ==' Exit'){
Exit();
}
}
