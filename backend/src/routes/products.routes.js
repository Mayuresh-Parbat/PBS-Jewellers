import { Router } from "express";
import { getRingDataWithAdmin, getRingData } from "../controllers/ProductsController/ringData.controller.js"
import { getEarringDataWithAdmin, getEarringData } from "../controllers/ProductsController/earringData.controller.js"
import { getPendantDataWithAdmin, getPendantData } from "../controllers/ProductsController/pendantData.controller.js"
import { getMangalsutraDataWithAdmin, getMangalsutraData } from "../controllers/ProductsController/mangalsutraData.controller.js"
import { getBangleDataWithAdmin, getBangleData } from "../controllers/ProductsController/bangleData.controller.js"
import { getChainDataWithAdmin, getChainData } from "../controllers/ProductsController/chainData.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
// Initialize routers
const ringDataRouter = Router();
const earringDataRouter = Router();
const pendantDataRouter = Router();
const mangalsutraDataRouter = Router();
const bangleDataRouter = Router();
const chainDataRouter = Router();

// Ring routes
ringDataRouter
  .route("/add-ring")
  .post(upload.array("ProductImages", 10), getRingDataWithAdmin);
ringDataRouter.route("/All-rings").get(getRingData);

