import express,{Request,Response} from "express" 
import path from "path"
import Arqueros, { Arquero } from "./Jugadores/Arquero";
import Defensores, { Defensor } from "./Jugadores/Defensor";
import MedioCampistas from "./Jugadores/MedioCampista";
import Delanteros, { Delantero } from "./Jugadores/Delantero";
import MedioCampista from "./Jugadores/MedioCampista";

const PORT = 5005;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set("views",path.join(__dirname,"..","views"));

app.set("view engine","ejs");

app.get('/', (req: Request, res: Response) =>{
    res.render('pages/home')
});

app.get('/arqueros', (req: Request, res: Response) =>{

    const a1 = new Arquero("Dibu", "Martinez",28,"WestHam" )
    const a2= new Arquero("Franco","Armani", 32, "River")
    const a3= new Arquero("Geronimo","Rulli", 30, "Villareal")
    const a4= new Arquero("Agustin","Rossi", 28, "Boke")

    a4.entrenar()

    const listaArqueros= [a1,a2,a3,a4]


    res.render('pages/jugadores/arqueros', {arqueros: listaArqueros})
});
app.post('/entrenar', (req: Request, res: Response) =>{
    // res.render('pages/jugadores/entrenar')
    res.redirect('/arqueros')
});
app.get('/entrenar', (req: Request, res: Response) =>{
    // res.render('pages/jugadores/entrenar')
    res.redirect('/arqueros')
});

app.get('/defensores',(req:Request, res:Response) => {
    
    const def1 = new Defensor("Gonzalo", "Montiel",25,"Sevilla" )
    const def2 = new Defensor("Nicolas", "Otamendi",32,"Benfica" )
    const def3 = new Defensor("Nicolas", "Tagliafico",29,"Ajax" )
    const def4 = new Defensor("Cristian", "Romero",24,"Tottenham" )
    const def5 = new Defensor("German", "Pezzella",31,"Betis" )
    const def6 = new Defensor("Cristian", "Romero",24,"Tottenham" )
    const def7 = new Defensor("Nahuel", "Molina",24,"Udinense" )
    const def8 = new Defensor("Lisandro", "Martinez",24,"Ajax" )
    const def9 = new Defensor("Marcos", "Senesi",25,"Feyenoord" )
    const def10 = new Defensor("Juan", "Foyth",24,"Villareal" )
    const def11 = new Defensor("Nehuen", "Perez",22,"Atletico Madrid" )
    const def12 = new Defensor("Marcos", "Acuña",30,"Sevilla" )

    const listaDefensores= [def1,def2,def3,def4,def5,def6,def7,def8,def9,def10,def12]
    res.render('pages/jugadores/defensores', {defensores:listaDefensores})
});

app.get('/medioCampistas', (req: Request, res: Response) =>{

    const m1= new MedioCampista("Alexis","Mac Allister", 23, "Brighton")
    const m2 = new MedioCampista("Rodrigo", "De Paul",28,"Atlético de Madrid" )
    const m3= new MedioCampista("Ángel","Di María", 34, "Agente libre")
    const m4= new MedioCampista("Exequiel","Palacios", 23, "Bayer Leverkusen")
    const m5= new MedioCampista("Nicolás","González", 24, "Fiorentina")
    const m6= new MedioCampista("Papu","Gómez", 34, "Sevilla")
    const m7= new MedioCampista("Guido","Rodríguez", 28, "Real Betis")
    const m8= new MedioCampista("Giovani","Lo Celso", 26, "Villarreal")
    const m9= new MedioCampista("Leandro","Paredes", 27, "PSG")

    m1.entrenar()

    const listaMedioCampistas= [m1,m2,m3,m4,m5,m6,m7,m8,m9]


    res.render('pages/jugadores/medioCampistas', {medioCampistas: listaMedioCampistas})
});

app.get('/delanteros',(req:Request, res:Response) => {
    
    const d1 = new Delantero("Julian","Alvarez",22,"River")
    const d2 = new Delantero("Lionel","Messi",35,"PSG")
    const d3 = new Delantero("Paulo","Dybala",28,"Inter de Milan")
    const d4 = new Delantero("Lautaro","Martnez",24,"Inter de Milan")
    const d5 = new Delantero("Joaquin","Correa",27,"Inter de Milan")
    const d6 = new Delantero("Angel","Correa",27,"Atletico de Madrid")
    
    d6.entrenar()

    const listaDelantero= [d1,d2,d3,d4,d5,d6]
    res.render('pages/jugadores/delanteros', {delanteros:listaDelantero})
});


app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto:  ${PORT}`)
  })