const ex=require('express'),
      port=process.env.PORT||3030,
      cors=require('cors'),
      clientRoutes=require('./routes/clientRoutes/index'),
      adminRoutes=require('./routes/adminRoutes/index'),
      dotenv=require('dotenv');
      dotenv.config();
const app=ex();  
      app.use(ex.json());
      app.use(ex.urlencoded({extended:true}));
      app.use(cors());
      app.use('/api',clientRoutes);
      app.use('/api/admin',adminRoutes)
      app.get('/',(req,res)=>res.json({msg:"working"}))
      app.listen(port,()=>console.log(`server is running at ${port}`));

      