import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";

class CodingChallenge {
  private port = process.env.PORT;
  public app: express.Application;
  
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.controllers();
  }

  public start(): void {
    this.app.listen(this.port, () =>
      console.log(`SUR-PIES app listening on port ${this.port}!`)
    );
  }


  // Controller
  public routes(): void {
    this.app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/../public/views/index.html")));
    this.app.post("/", (req, res) => 
      var recController = require('../controllers');
      // recController.generate_random_pizza(req.body.toppingOne, req.body.toppingTwo)
            
    );
  }

  public controllers(): void {
    
  }

  public config() {
    this.app.set("port", this.port);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    // Creating shorthand paths for resources needed for the view
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use("/images",  express.static(__dirname + '/public/views'));
    this.app.use("/styles",  express.static(__dirname + '/public/css'));
    this.app.use("/scripts", express.static(__dirname + '/public/scripts'));
    this.app.use("/images",  express.static(__dirname + '/public/images'));
  }
}

const codingChallenge = new CodingChallenge();
codingChallenge.start();
