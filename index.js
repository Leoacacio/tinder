const express = require('express');
const app=express()

const connection = require('./knexfile')['development'];
const database = require('knex')(connection);
app.use(express.json())

const port = process.env.PORT || 3000;

app.get ('/', (req, res)=>{
    res.json({
     message: 'GET Home Route working fine!'   
    });
});
app.listen(port,()=>{
console.log(`server running `);
});

//usuarios//

app.post('/habilidades',(req,res)=> {
const toCreate = req.body 
database('habilidades').insert(toCreate)
.then((habilidades)=> {
res.json(habilidades)

})
} )

//habilidades//

app.get ('/habilidades', (req, res)=>{
    database ('habilidades').then((habilidades)=>{
    res.json(habilidades)
    })  
});

app.delete('/habilidades/:id', (req,res)=>{
const {id} = req.params
database('habilidades')
    .where ({id_habilidad: id})
    .del()
    .then((nombre_habilidad)=>{
      res.json(nombre_habilidad)
    })
})

app.get('/habilidades/:id',(req,res)=>{
    const{id} = req.params
    database('habilidades')
    .where ({id_habilidad: id})
    .then((nombre_habilidad)=>{
res.json(nombre_habilidad)
    })
})

app.get('/habilidades', (req,res)=>{
    database('habilidades').then((nombre_habilidad)=>{
        res.json(nombre_habilidad)
    }) 
})

app.put('/habilidades/:id',(req,res)=>{
const {id} = req.params
const toEdit = req.body
database('habilidades')
.where ({id_habilidad: id})
.update (toEdit)
.then ((nombre_habilidad)=>{
    res.json(nombre_habilidad)
})
})
//empresas//

app.get ('/empresas', (req, res)=>{
    database ('empresas').then((empresa)=>{
    res.json(empresas)
    })  
});

app.delete('/empresas/:id', (req,res)=>{
const {id} = req.params
database('empresas')
    .where ({id_empresa: id})
    .del()
    .then((nombre_empresa)=>{
      res.json(nombre_empresa)
    })
})

app.get('/empresas/:id',(req,res)=>{
    const{id} = req.params
    database('empresas')
    .where ({id_empresa: id})
    .then((nombre_empresa)=>{
res.json(nombre_empresa)
    })
})

app.get('/empresas', (req,res)=>{
    database('empresas').then((nombre_empresa)=>{
        res.json(nombre_empresa)
    }) 
})

app.put('/empresas/:id',(req,res)=>{
const {id} = req.params
const toEdit = req.body
database('empresas')
.where ({id_empresa: id})
.update (toEdit)
.then ((nombre_empresa)=>{
    res.json(nombre_empresa)
    
})
} )

//usario//

app.get ('/usuarios', (req, res)=>{
    database ('usuarios').then((usuarios)=>{
    res.json(usuarios)
    })  
});

app.delete('/usuarios/:id', (req,res)=>{
const {id} = req.params
database('usuarios')
    .where ({id_usuario: id})
    .del()
    .then((nombre_usuario)=>{
      res.json(nombre_usuario)
    })
})




app.get('/usuarios/:id',(req,res)=>{
    const{id} = req.params
    database('usuarios')
    .where ({id_usuario: id})
    .then((nombre_usuarioa)=>{
res.json(nombre_usuario)
    })
})

app.get('/usuarios', (req,res)=>{
    database('usuarios').then((nombre_usuario)=>{
        res.json(nombre_usuario)
    }) 
})

app.put('/usuarios/:id',(req,res)=>{
const {id} = req.params
const toEdit = req.body
database('usuarios')
.where ({id_usuario: id})
.update (toEdit)
.then ((nombre_usuario)=>{
    res.json(nombre_usuario)
    
})
} )

// match //

