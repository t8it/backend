const  express= require ('express'); 
const  path= require ('path'); 
const exphbs = require ('express-handlebars');
const methodOverride= require ('method-override')
const session = require ('express-session')

//inicializaciones 
const app = express();

//settings toda las configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine ('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');   
    
    
    
//middlewares todas las funciones antes de pasarlas a las rutas
app.use(express.urlencoded({extend: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUnitialized: true
}));
// global variables
//routtes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// archivos estaticos
//inicializacion de servidor
app.listen(app.get('port' ), () => {
    console.log('Server o port ', app.get('port'));    
});
