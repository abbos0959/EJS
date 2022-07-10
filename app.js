const express=require("express")
const app = express();



app.use(express.json())
app.use(express.static("public"))
app.use("/css",express.static(__dirname + `public/css`))
app.use("/img",express.static(__dirname + `public/img`))
app.use("/js",express.static(__dirname + `public/js`))



app.set("views","./src/views")
app.set("view engine","ejs")
const newsRouter=require("./src/routes/news")

app.use("/",newsRouter)


app.listen(6000, () => {
   console.log("server ishladi");
});

